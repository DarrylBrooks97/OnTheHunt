# On the Hunt 📰

Building this because I'm too lazy to keep up with the latests products that are promoted on [Product Hunt](https://www.producthunt.com/)

## In my ideal morning

-   Wake up
-   Visit [OnTheHunt](https://oth-prod.vercel.app) while half sleep
-   Shown ~5-10 top products that were promoted the day before
    -   Topic
    -   Displays Logo or App image
    -   Has link to product and is shareable
    -   Shows the amount of upvotes/likes it has
    -   Badge if its free or not
-   Close the app and continue with my day

## Landing page Mock

![iPhone 13 Pro Max - 1](https://user-images.githubusercontent.com/24500251/155411325-d01d8bc8-5653-4347-8072-fb92fe813d59.png)

## Home page Mock

![iPhone 13 Pro Max - 2](https://user-images.githubusercontent.com/24500251/155440230-213bee77-1b9d-4aa3-8acc-49381f9822ee.png)

## Fetching new ProductHunt products within Postgres

```plpgsql
create or replace function get_posts(
	returncount text,
	postedbefore timestamp,
	postedafter timestamp
) returns json AS $$

declare
  access_token text;
  queryBody text;
  tokenBody text;
  requestbody json;
  response json;

begin

  tokenBody := json_build_object(
    'client_id', <CLIENT_ID>,
    'client_secret', <CLIENT_SECRET>,
    'grant_type', 'client_credentials'
  );

  select content::json->>'access_token'
  into access_token
  from http_post('https://api.producthunt.com/v2/oauth/token',tokenBody, 'application/json');

 queryBody := 'query{ posts(featured: true,first: 10, postedBefore: "' || postedbefore || '", postedAfter: "' || postedafter || '"){edges{node{id,name,url,tagline,reviewsCount,productLinks{url},thumbnail{url},topics{edges{node{name}}}}}}}';

  requestBody := json_build_object('query',queryBody);

  select content::json->>'data'
  into response
  from http((
    'POST',
    'https://api.producthunt.com/v2/api/graphql',
    ARRAY[http_header('Authorization', concat('Bearer ',access_token))],
    'application/json',
    requestBody
  )::http_request);

  return response;
end;
$$ language plpgsql;
```

## Inserting Fetched products into Postgres DB

```plpgsql
create or replace function insert_products()
  returns void
  language plpgsql
  as
  $$
    declare
      j json;
      -- Products from previous day
      edges json := public.get_products('today'::timestamp, 'yesterday'::timestamp);
    begin
      -- At midnight drop existing table and create new one
      drop table if exists public.products;
      create table public.products(id int8, name varchar,url varchar, upvotes int8, image_url varchar, tagline varchar,topics json);

      -- Loop through fetched products
      for j in select * from json_array_elements(edges) loop
          insert into public.products(id, name, url, upvotes, image_url, tagline, topics)
          values(
              cast(j->'node'->>'id' as int),
              j->'node'->>'name',
              j->'node'->>'url',
              cast(j->'node'->>'votesCount' as int),
              j->'node'->'thumbnail'->>'url',
              j->'node'->>'tagline',
              cast(j->'node'->'topics'->>'edges' as json)
            );
      end loop;
    end;
  $$
```

## Setting up cron job to run everynight at 12am CST (@supabase is in UTC 🙃)

```plpgsql
select
  cron.schedule(
    'Fetch Product Hunt products',
    '0 6 * * *',
    $$
    select insert_products()
    $$
  );
```

## Contribution

Haven't thought about it but if you wanna help just fork and create a PR 🙂
