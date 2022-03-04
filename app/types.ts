export interface Product {
	id: string;
	name: string;
	url: string;
	image_url: string;
	topics: { node: { name: string } }[];
	tagline: string;
	upvotes: number;
}
