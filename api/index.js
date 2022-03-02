var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// empty-module:./context.client
var require_context = __commonJS({
  "empty-module:./context.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_react2 = require("@remix-run/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
var import_react3 = require("@emotion/react");

// app/createEmotionCache.ts
init_react();
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/context.server.ts
init_react();
var import_react = require("react");
var ServerStyleContext = (0, import_react.createContext)(null);
var context_server_default = ServerStyleContext;

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(context_server_default.Provider, {
    value: null
  }, /* @__PURE__ */ React.createElement(import_react3.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react2.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  const chunks = extractCriticalToChunks(html);
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(context_server_default.Provider, {
    value: chunks.styles
  }, /* @__PURE__ */ React.createElement(import_react3.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react2.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App
});
init_react();

// app/components/Layout.tsx
init_react();
var import_react6 = require("@chakra-ui/react");

// app/components/Header.tsx
init_react();
var import_react4 = require("@remix-run/react");
var import_react5 = require("@chakra-ui/react");
function Header() {
  return /* @__PURE__ */ React.createElement(import_react5.HStack, {
    as: "nav",
    w: "full",
    top: "0",
    position: "sticky",
    alignItems: "center",
    justifyContent: "space-between",
    bgColor: "rgba(255,255,255,0.20)",
    backdropFilter: `blur(10px)`,
    zIndex: 1,
    p: 4
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(import_react5.Heading, {
    fontSize: "24px",
    fontWeight: "bold"
  }, "On The Hunt")), /* @__PURE__ */ React.createElement(import_react5.Box, null, /* @__PURE__ */ React.createElement(import_react5.Image, {
    src: "/menu.svg",
    alt: "Menu",
    w: "full",
    h: "full"
  })));
}

// app/components/Layout.tsx
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(import_react6.Stack, {
    spacing: 0,
    bg: "background.main",
    w: "100vw",
    h: "100vh",
    overflowX: "hidden"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_react6.Flex, {
    flexGrow: 1
  }, children));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/root.tsx
var import_context3 = __toESM(require_context());

// app/theme.ts
init_react();
var import_react7 = require("@chakra-ui/react");
var theme = (0, import_react7.extendTheme)({
  fonts: {
    heading: "Oswald, sans-serif",
    body: "Alegreya SC, serif"
  }
});

// route:/Users/darrylbrooks/Github/OnTheHunt/app/root.tsx
var import_react8 = require("@emotion/react");
var import_react9 = require("react");
var import_react10 = require("@chakra-ui/react");
var import_react11 = require("@remix-run/react");
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react11.Outlet, null)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey there's an error in the root file"))));
}
function CatchBoundary() {
  let caught = (0, import_react11.useCatch)();
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react10.Center, {
    h: "full",
    w: "full"
  }, /* @__PURE__ */ React.createElement(import_react10.Text, {
    bgGradient: "linear(to-r, brand.primary, brand.accent)",
    bgClip: "text",
    fontSize: "6xl",
    fontWeight: "Bold"
  }, "Page Not Found"))));
}
var Document = (0, import_react8.withEmotionCache)(({ children, title }, emotionCache) => {
  const serverSyleData = (0, import_react9.useContext)(context_server_default);
  const clientStyleData = (0, import_react9.useContext)(import_context3.default);
  (0, import_react9.useEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_react11.Meta, null), /* @__PURE__ */ React.createElement(import_react11.Links, null), serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ React.createElement("style", {
    key,
    "data-emotion": `${key} ${ids.join(" ")}`,
    dangerouslySetInnerHTML: { __html: css }
  }))), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react10.ChakraProvider, {
    theme
  }, children), /* @__PURE__ */ React.createElement(import_react11.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react11.Scripts, null), /* @__PURE__ */ React.createElement(import_react11.LiveReload, null)));
});

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/products.tsx
var products_exports = {};
__export(products_exports, {
  default: () => Products,
  loader: () => loader
});
init_react();

// app/components/ProductCard.tsx
init_react();
var import_react_icons = require("@radix-ui/react-icons");
var import_react12 = require("@chakra-ui/react");
function ProductCard({
  product
}) {
  const { name, url, image_url, tagline, topic, upvotes } = product;
  return /* @__PURE__ */ React.createElement(import_react12.Stack, {
    p: "4",
    h: "auto",
    w: "315px",
    pos: "relative",
    borderRadius: "20px",
    border: "2px solid black",
    bgColor: "rgba(255,255,255,0.55)"
  }, /* @__PURE__ */ React.createElement(import_react12.Stack, {
    h: "auto",
    spacing: 0,
    pos: "absolute",
    alignSelf: "start",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react_icons.VercelLogoIcon, null), /* @__PURE__ */ React.createElement(import_react12.Text, {
    fontWeight: "semibold"
  }, upvotes)), /* @__PURE__ */ React.createElement(import_react12.HStack, {
    w: "full",
    justify: "center"
  }, /* @__PURE__ */ React.createElement(import_react12.Stack, {
    alignSelf: "start",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react12.Image, {
    src: `${image_url}`,
    boxSize: "60px",
    borderRadius: "50%",
    objectFit: "fill",
    boxShadow: `0px 4px 15px 0px rgba(0,0,0,0.25)`
  }), /* @__PURE__ */ React.createElement(import_react12.Text, null, name)), /* @__PURE__ */ React.createElement(import_react12.Center, {
    p: "0.5",
    top: "5",
    right: "5",
    bg: "#F4A261",
    w: "54px",
    h: "18px",
    pos: "absolute",
    alignSelf: "start",
    borderRadius: 4
  }, /* @__PURE__ */ React.createElement(import_react12.Text, {
    color: "white",
    isTruncated: true,
    fontSize: "sm"
  }, topic.charAt(0).toUpperCase() + topic.slice(1)))), /* @__PURE__ */ React.createElement(import_react12.Text, {
    noOfLines: 2
  }, tagline), /* @__PURE__ */ React.createElement(import_react12.HStack, {
    justify: "center"
  }, /* @__PURE__ */ React.createElement(import_react12.Button, {
    w: "auto",
    h: "36px",
    bgColor: "black",
    borderRadius: "5",
    rightIcon: /* @__PURE__ */ React.createElement(import_react_icons.VercelLogoIcon, null)
  }, /* @__PURE__ */ React.createElement(import_react12.Text, {
    color: "white"
  }, "Upvote")), /* @__PURE__ */ React.createElement(import_react12.Button, {
    w: "auto",
    h: "36px",
    bgColor: "black",
    borderRadius: "5",
    rightIcon: /* @__PURE__ */ React.createElement(import_react_icons.ArrowTopRightIcon, null)
  }, /* @__PURE__ */ React.createElement(import_react12.Link, {
    as: "a",
    href: url,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(import_react12.Text, {
    color: "white"
  }, "Check out"))), /* @__PURE__ */ React.createElement(import_react_icons.Share2Icon, {
    onClick: () => navigator.share(url)
  })));
}

// app/server/supabase.server.ts
init_react();
var import_supabase_js = require("@supabase/supabase-js");
if (!process.env.SUPABASE_URL)
  throw Error("Supabase URL not found in environment");
if (!process.env.SUPABASE_KEY)
  throw Error("Supabase KEY not found in environment");
var supabase = (0, import_supabase_js.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/products.tsx
var import_react13 = require("@chakra-ui/react");
var import_remix = __toESM(require_remix());
var loader = async () => {
  const { data: products, error } = await supabase.from("products").select("*");
  if (error || !products) {
    throw (0, import_remix.redirect)("/500");
  }
  return products.map((product) => {
    if (product.image_url.includes(".gif")) {
      product.image_url = "data:image/png;base64,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";
    }
    return product;
  });
};
function Products() {
  const products = (0, import_remix.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_react13.Box, {
    pos: "relative",
    w: "full",
    h: "full"
  }, /* @__PURE__ */ React.createElement(import_react13.Image, {
    position: "absolute",
    top: "10%",
    left: "-5%",
    zIndex: -1,
    src: "/red-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react13.Image, {
    position: "absolute",
    top: "35%",
    right: "0%",
    zIndex: -1,
    src: "/blue-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react13.Image, {
    position: "absolute",
    top: "40%",
    left: "0%",
    zIndex: -1,
    src: "/yellow-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react13.Stack, {
    w: "full",
    h: "full",
    justify: "center",
    alignItems: "center",
    mt: 9,
    spacing: 3
  }, products.map((product) => /* @__PURE__ */ React.createElement(ProductCard, {
    key: product.id,
    product
  }))));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
var import_react_icons2 = require("@radix-ui/react-icons");
var import_react14 = require("@chakra-ui/react");
var meta = () => {
  return {
    title: "On The Hunt",
    description: "Product Hunt's daily newspaper"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react14.Stack, {
    pos: "relative",
    padding: "6",
    w: "full",
    alignContent: "center",
    justify: "center",
    spacing: 10
  }, /* @__PURE__ */ React.createElement(import_react14.Center, null, /* @__PURE__ */ React.createElement(import_react14.Center, {
    bgColor: "rgba(255,255,255,0.55)",
    backdropFilter: `blur(10px)`,
    flexDirection: "column",
    w: 330,
    h: 298,
    borderRadius: 20
  }, /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "230px"
  }, /* @__PURE__ */ React.createElement(import_react14.Stack, {
    spacing: -5,
    w: "full",
    shouldWrapChildren: true
  }, /* @__PURE__ */ React.createElement(import_react14.Text, {
    fontSize: "48px",
    fontWeight: "bold"
  }, "On"), /* @__PURE__ */ React.createElement(import_react14.Text, {
    fontSize: "3rem",
    ml: "25%",
    fontWeight: "bold"
  }, "The"), /* @__PURE__ */ React.createElement(import_react14.Text, {
    fontSize: "3rem",
    ml: "50%",
    fontWeight: "bold"
  }, "Hunt")), /* @__PURE__ */ React.createElement(import_react14.Text, {
    fontSize: "20px",
    color: "#636363"
  }, "View the latest best products"))), /* @__PURE__ */ React.createElement(import_react14.Image, {
    position: "absolute",
    top: "10%",
    left: "-5%",
    zIndex: -1,
    src: "/red-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react14.Image, {
    position: "absolute",
    top: "35%",
    right: "0%",
    zIndex: -1,
    src: "/blue-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react14.Image, {
    position: "absolute",
    top: "40%",
    left: "0%",
    zIndex: -1,
    src: "/yellow-circle.png"
  })), /* @__PURE__ */ React.createElement(import_react14.Center, null, /* @__PURE__ */ React.createElement(import_react14.Button, {
    bgColor: "black",
    color: "white",
    width: "153px",
    height: "60px",
    borderRadius: "15px",
    rightIcon: /* @__PURE__ */ React.createElement(import_react_icons2.ArrowRightIcon, null)
  }, /* @__PURE__ */ React.createElement(import_react14.Text, {
    fontSize: "22px",
    fontFamily: "Roboto"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/products"
  }, "View"))))));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
init_react();
var import_react15 = require("@chakra-ui/react");
function Home() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react15.Center, {
    w: "full",
    bgColor: "red.300",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react15.Text, {
    fontSize: "4xl"
  }, "Home Page")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "5d6a6ae4", "entry": { "module": "/build/entry.client-N7BG7JDP.js", "imports": ["/build/_shared/chunk-KU2VLGY7.js", "/build/_shared/chunk-YAEYMSFJ.js", "/build/_shared/chunk-BYTEFRGT.js", "/build/_shared/chunk-MAWIAC5Q.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-VZLYFNFT.js", "imports": ["/build/_shared/chunk-WDYJ6G6G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-TOISCREY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-S3SJDTAI.js", "imports": ["/build/_shared/chunk-XQ7JJS33.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products": { "id": "routes/products", "parentId": "root", "path": "products", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/products-SDL2J34P.js", "imports": ["/build/_shared/chunk-XQ7JJS33.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5D6A6AE4.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgImVtcHR5LW1vZHVsZTouL2NvbnRleHQuY2xpZW50IiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vYXBwL2NvbnRleHQuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwgIi4uL2FwcC90aGVtZS50cyIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4IiwgIi4uL2FwcC9zZXJ2ZXIvc3VwYWJhc2Uuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9ob21lLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL3Byb2R1Y3RzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvaG9tZS50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3Byb2R1Y3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9kdWN0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9kdWN0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaG9tZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaG9tZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJob21lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L2VudHJ5JztcblxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSAnQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZSc7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuL2NyZWF0ZUVtb3Rpb25DYWNoZSc7XG5pbXBvcnQgU2VydmVyU3R5bGVDb250ZXh0IGZyb20gJy4vY29udGV4dC5zZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcblx0cmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuXHRyZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG5cdGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG5cdGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG5cdGNvbnN0IGh0bWwgPSByZW5kZXJUb1N0cmluZyhcblx0XHQ8U2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtudWxsfT5cblx0XHRcdDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG5cdFx0XHRcdDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG5cdFx0XHQ8L0NhY2hlUHJvdmlkZXI+XG5cdFx0PC9TZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG5cblx0Y29uc3QgY2h1bmtzID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaHRtbCk7XG5cblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFNlcnZlclN0eWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y2h1bmtzLnN0eWxlc30+XG5cdFx0XHQ8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuXHRcdFx0XHQ8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuXHRcdFx0PC9DYWNoZVByb3ZpZGVyPlxuXHRcdDwvU2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKGA8IURPQ1RZUEUgaHRtbD4ke21hcmt1cH1gLCB7XG5cdFx0c3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG5cdFx0aGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuXHR9KTtcbn1cbiIsICJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycgfSk7XG59IiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJTdHlsZUNvbnRleHREYXRhIHtcbiAga2V5OiBzdHJpbmc7XG4gIGlkczogQXJyYXk8c3RyaW5nPjtcbiAgY3NzOiBzdHJpbmc7XG59XG5cbmNvbnN0IFNlcnZlclN0eWxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IFNlcnZlclN0eWxlQ29udGV4dERhdGFbXT4obnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclN0eWxlQ29udGV4dCIsICJpbXBvcnQgJ0Bmb250c291cmNlL29zd2FsZC9pbmRleC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9hbGVncmV5YS1zYy9pbmRleC5jc3MnO1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBTZXJ2ZXJTdHlsZUNvbnRleHQgZnJvbSAnfi9jb250ZXh0LnNlcnZlcic7XG5pbXBvcnQgQ2xpZW50U3R5bGVDb250ZXh0IGZyb20gJy4vY29udGV4dC5jbGllbnQnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICd+L3RoZW1lJztcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENlbnRlciwgVGV4dCwgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRPdXRsZXQsXG5cdE1ldGEsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxuXHR1c2VDYXRjaCxcbn0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQ+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8L0RvY3VtZW50PlxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG5cdFx0XHRcdFx0PHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuXHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdDxwPkhleSB0aGVyZSdzIGFuIGVycm9yIGluIHRoZSByb290IGZpbGU8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG5cdGxldCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PENlbnRlciBoPVwiZnVsbFwiIHc9XCJmdWxsXCI+XG5cdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdGJnR3JhZGllbnQ9XCJsaW5lYXIodG8tciwgYnJhbmQucHJpbWFyeSwgYnJhbmQuYWNjZW50KVwiXG5cdFx0XHRcdFx0XHRiZ0NsaXA9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGZvbnRTaXplPVwiNnhsXCJcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9XCJCb2xkXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRQYWdlIE5vdCBGb3VuZFxuXHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8L0RvY3VtZW50PlxuXHQpO1xufVxuXG5pbnRlcmZhY2UgRG9jdW1lbnRQcm9wcyB7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG5cdHRpdGxlPzogc3RyaW5nO1xufVxuXG5jb25zdCBEb2N1bWVudCA9IHdpdGhFbW90aW9uQ2FjaGUoXG5cdCh7IGNoaWxkcmVuLCB0aXRsZSB9OiBEb2N1bWVudFByb3BzLCBlbW90aW9uQ2FjaGUpID0+IHtcblx0XHRjb25zdCBzZXJ2ZXJTeWxlRGF0YSA9IHVzZUNvbnRleHQoU2VydmVyU3R5bGVDb250ZXh0KTtcblx0XHRjb25zdCBjbGllbnRTdHlsZURhdGEgPSB1c2VDb250ZXh0KENsaWVudFN0eWxlQ29udGV4dCk7XG5cdFx0Ly8gT25seSBleGVjdXRlZCBvbiBjbGllbnRcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdFx0Ly8gcmUtbGluayBzaGVldCBjb250YWluZXJcblx0XHRcdGVtb3Rpb25DYWNoZS5zaGVldC5jb250YWluZXIgPSBkb2N1bWVudC5oZWFkO1xuXHRcdFx0Ly8gcmUtaW5qZWN0IHRhZ3Ncblx0XHRcdGNvbnN0IHRhZ3MgPSBlbW90aW9uQ2FjaGUuc2hlZXQudGFncztcblx0XHRcdGVtb3Rpb25DYWNoZS5zaGVldC5mbHVzaCgpO1xuXHRcdFx0dGFncy5mb3JFYWNoKCh0YWcpID0+IHtcblx0XHRcdFx0KGVtb3Rpb25DYWNoZS5zaGVldCBhcyBhbnkpLl9pbnNlcnRUYWcodGFnKTtcblx0XHRcdH0pO1xuXHRcdFx0Ly8gcmVzZXQgY2FjaGUgdG8gcmVhcHBseSBnbG9iYWwgc3R5bGVzXG5cdFx0XHRjbGllbnRTdHlsZURhdGEucmVzZXQoKTtcblx0XHR9LCBbXSk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0XHQ8aGVhZD5cblx0XHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdFx0Y29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG5cdFx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0XHQ8TGlua3MgLz5cblx0XHRcdFx0XHR7c2VydmVyU3lsZURhdGE/Lm1hcCgoeyBrZXksIGlkcywgY3NzIH0pID0+IChcblx0XHRcdFx0XHRcdDxzdHlsZVxuXHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0ZGF0YS1lbW90aW9uPXtgJHtrZXl9ICR7aWRzLmpvaW4oJyAnKX1gfVxuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG5cdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY3NzIH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2hlYWQ+XG5cdFx0XHRcdDxib2R5PlxuXHRcdFx0XHRcdDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PntjaGlsZHJlbn08L0NoYWtyYVByb3ZpZGVyPlxuXHRcdFx0XHRcdDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuXHRcdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdFx0e3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0XHQ8L2JvZHk+XG5cdFx0XHQ8L2h0bWw+XG5cdFx0KTtcblx0fVxuKTtcbiIsICJpbXBvcnQgeyBTdGFjaywgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG5cdHJldHVybiAoXG5cdFx0PFN0YWNrXG5cdFx0XHRzcGFjaW5nPXswfVxuXHRcdFx0Ymc9XCJiYWNrZ3JvdW5kLm1haW5cIlxuXHRcdFx0dz1cIjEwMHZ3XCJcblx0XHRcdGg9XCIxMDB2aFwiXG5cdFx0XHRvdmVyZmxvd1g9XCJoaWRkZW5cIlxuXHRcdD5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxGbGV4IGZsZXhHcm93PXsxfT57Y2hpbGRyZW59PC9GbGV4PlxuXHRcdDwvU3RhY2s+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgQm94LCBIU3RhY2ssIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0cmV0dXJuIChcblx0XHQ8SFN0YWNrXG5cdFx0XHRhcz1cIm5hdlwiXG5cdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHR0b3A9XCIwXCJcblx0XHRcdHBvc2l0aW9uPVwic3RpY2t5XCJcblx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0anVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcblx0XHRcdGJnQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuMjApXCJcblx0XHRcdGJhY2tkcm9wRmlsdGVyPXtgYmx1cigxMHB4KWB9XG5cdFx0XHR6SW5kZXg9ezF9XG5cdFx0XHRwPXs0fVxuXHRcdD5cblx0XHRcdDxMaW5rIHRvPVwiL1wiPlxuXHRcdFx0XHQ8SGVhZGluZyBmb250U2l6ZT1cIjI0cHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuXHRcdFx0XHRcdE9uIFRoZSBIdW50XG5cdFx0XHRcdDwvSGVhZGluZz5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxCb3g+XG5cdFx0XHRcdDxJbWFnZSBzcmM9XCIvbWVudS5zdmdcIiBhbHQ9XCJNZW51XCIgdz1cImZ1bGxcIiBoPVwiZnVsbFwiIC8+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L0hTdGFjaz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG5cdGZvbnRzOiB7XG5cdFx0aGVhZGluZzogJ09zd2FsZCwgc2Fucy1zZXJpZicsXG5cdFx0Ym9keTogJ0FsZWdyZXlhIFNDLCBzZXJpZicsXG5cdH0sXG59KTtcbiIsICJpbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnfi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkJztcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vc2VydmVyL3N1cGFiYXNlLnNlcnZlcic7XG5pbXBvcnQgdHlwZSB7IFByb2R1Y3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBCb3gsIEltYWdlLCBTdGFjayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPFByb2R1Y3RbXT4gPT4ge1xuXHRjb25zdCB7IGRhdGE6IHByb2R1Y3RzLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Vcblx0XHQuZnJvbSgncHJvZHVjdHMnKVxuXHRcdC5zZWxlY3QoJyonKTtcblxuXHRpZiAoZXJyb3IgfHwgIXByb2R1Y3RzKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoJy81MDAnKTtcblx0fVxuXG5cdHJldHVybiBwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcblx0XHRpZiAocHJvZHVjdC5pbWFnZV91cmwuaW5jbHVkZXMoJy5naWYnKSkge1xuXHRcdFx0cHJvZHVjdC5pbWFnZV91cmwgPVxuXHRcdFx0XHQnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQWlsQk1WRVhlVkNYLy8vL2RUQlA4N09mY1JRRDQ0dDNjU0Fqeng3dmRUeHpkU2c3Ly9mejMyOVRlVVJydnRxcmVVaUxjUndEMXpzUDIxY3o5OVBIeHZySDg3K3YrK1BibGdHUGhZenJjUUFEcm40dmZXeTdwazN2d3RhWGxmRjN0clp2a2RGSGhaMEh0cDVUaWJFam1obXZuaTNQcGxIenVzYVBqYzFUZ1h6UHp5YjNxbW9Ya2VGZm5qWGI0NE5pUWlncDRBQUFMU2tsRVFWUjRuT1dkMllLaU9oQ0dRNHd4MkhSUVVGUmMyMVo3T2ZMK3IzZEFXeHVVc0tRcWd0UC8xZHlNd3pmWktwVmFpR1ZhZlM4YStJZlpNVmh2Sm1GSUNBbkR5V1lkSEdjSGZ4QjVmZVAvUGpINDIxNzM2MjIzbFZQR2JTcUVqRVhPU3Y0b0JMVTVtOHJ0YnVaM1J3YS93aFJoNU04L1FwY25aS1JJQ1NsblpEMzNJME5mWW9Jd2VnMkl6WjBTdGl5bncyMnlYSmlneENiMGVrZUgyVFhnMHBnMmsvT2VoL3hGcUlRZFA2QmNpKzZYa3RQQTcyQitGQjdoMkY4Nk1MenJVRHIvK1dPMDc4SWlIQjQ1QnQ0VjB0ME5rYjRNaGRCYmJKaEFvcnRJc00wS1pVa2lFRWJmMHNZYXZiU2tUYjRSTmxjd1lSVFkxQVRmaVpIUzVVdkRoTVAxRkh0NlppWFlHcmdnUVlUREpmcnl5MlA4RDhRSUlJem5wM20rRXlNUEFPdFJtM0EwZHgvRGQySmtlKzE5VlpPd2Y2RDBZWHlKS0Yxb1hyVDBDSWNiYm1yL1ZFbnlqZDV5MUNIczd4KzBBTE1TZks1ankya1FEaDQ4UVg5RjdhOEhFSG83OXVnSitpdkpkclYzbkxxRXc4K21CdkFzR2c3TUVzN2M1Z2J3TE9uT0RCSjJObmJEZkluc1RhMGJjaDNDZ1d4aUM3MlhjT3JNMUJxRXE4Wm42RVhTWFJrZ0hBZThhYkNVZUZENWFLeEtPSm8wdTRmZWlrNnFlcEVyRWtaaE81YmdyMFJZOFc1Y2pYRGd0QTJ3K241VGlmQjEycFk5SmkwNWZjVWlQTENtWVJSaUN4ekNON2RwRXFWNGhWT2puSERXWHNCNEZNdE51RkxDV1Z1bjZGbmxpR1dFTFo2aVo3R3lpVnBDdUdvN1lMd1dTN2FiWXNMWGRrL1JzNWl2VHppWU52MzFsVFF0UFBxTENDT25qUWY5dmFSVDVEQXVJQnkxemhaVlNZUUZacmlhY0R4NUZzQVljYUsrVEtrSmczWmRsNHBGZy9xRXF6WmRlTXVsdHQ5VWhJUG5BaVRFVlcyb0NzS09mSTV0OUZkU0tEeHdDc0xOOCt3eUY0bHRIY0paRy95aWRjWHpqZkJjd21IN3JkRTg1Uy9GUEVMdjg5a1c0Vm55TSsvWkpvOXc5MHduWVZwMFY0M3c2eGt1RlBsaU9lK0w5NFI5WXdGQTVpWDV2ZlYyVHpoLzFqbWFpQjdMQ1lmUFpzeGt4ZS9DR1c0SiswOTQxcWNsTnJkQktiZUUrZ1kzWjVwS0l2bnhsdjZkQ1g1RE9OS09veFREcnBaZWhsK0wyWEZyTTRvemVTVDFDZ24xdHhrS3lwbm9qNGVyN1JRbFRJZk9pd2dqL2FPUXdzUFB4LzZhSWh4VmJ0WnJreVVNOVA4VEVRaGpSWHNIZkZpSjdIMC9Rd2c1S1hBSTQ1MWd4cUZ6Tlh0aVpBaVhnTi9HSW94djMrL0FxQ3V4VkJFT0lRWXBIaUU4OElxbEJ6Rk51SVpNRDB4Q2F6d0gzVkRGT3A4d0F2bndVUWt0eXdmTjFHbHFPMDBSQWpaU2ZFS3JDd25BRXU5NWhCSE1ONE5OYUkwZ0ZqTHQ1aEIrdzFZM09xSGxiUUduOC9jOW9RZjBrT0lUV21QOXB5RkpydGJwbGZBQWRDQWFJTFE4ZlVUNytqSjhKZHdBRFVJVGhJQVhUTG01SlFTZDlzWUlMVi83WEdTWHNMY0w0UTVxREpvaHRQYTZpMGRjUERZL2hHT3dsOXNRb2FYdG5YYkhHVUlmL0ZCaGlsRDdoWUg3R1VMSXJjSXNvYmJiNFhMRE9CTjI0RkVYeGdoSFJPL2JMZytLWjBJZjdpUTFSbWk5YVE3aXp6UTlFOEtNN2lKQzc2VkVVYWNzNjI2czZidjU4V2FjQ0QwRS80K0NzRGUxaTBWRnVGd1UrK2xtZW9Nb0hlOUsyRVB3NUtzSXkzOWFDbnY2WGhUVk5OSzBSdHplbFhDTzRLZlVKMHdrMkhkQkFvWG1JbkxtVjBLTStEVVlZV3dxVDlSYjFaZmVtU2psaFJEZ0IvNFZsSkFJUjVsQTRXa2VHS3o3UTdqQWlMd0FFeGFGR0w3clRkUFRGU29oaEJzMEJJT1FpRS9WV3RRMEtrL25SVUtvT1FleVFpRE1qelJJRkdtZUYrUk1DSFJCWGI0T2dURHJ5azJwSCtvTmdoMmRDQkZNTm9KRW1QWEhwNlRwckU0TXQ1aHc3bWo5N1J1aEVCSzdtL3NydW81QXNUOFJmcUE4dnVJUTByZDh3bGZOcmVZaklSeHB6dkhiYjBNaHpMdzRwS1FaN2lwREx5YnM0b1RwNFJBU08vL0FlTkUxVGJzeElZYlpUZEFJV2Y1QzdHb1M4bDVNcUh2QnZCRVNvU0tZdWFOSkdLOXJBdmNqL3Z3V0RpSFByKzJoZTRFU3U1Z1E4UDZSVmp2SE1ONjVTQjhwWmgxckhlWmZNSFFKSmVrVER5bWFGR3NNODZ1ejZPNmxoSGtFNVhKSXNBamxYZURkV1FQZEk0MUZCQ3QxQk1tbTJlZitpcjd0ekFjRTdzLy8rVFlVUWxkeHVkQSswbXlmSEpCQ2duSHVGbHVGODFUN2trNFBaSVlVTVl0Q3lGVUpyeFBkRFovT3lMRkZoS3JFSHF1amZjRVRSeElnaGVjaUVFcFg1VkRVdDUxRlFOYXRJWlM4cHdBRXVLemxta0FqRkM2Q0U2cnJlSXkxbHlHUlc2TC9sN09DRW9xcGNnUWhZUlJ5UWtMdHY1d1ZqRkR5cmNKRGsyZ1AyQTNETmhCS3dTWkZ0VHQxSHhCUHd1TFRmeiswT2FQdnZjTEtYWnB1S0d3cENMdUgxMkw1dmRJS3VqaXVNckRNdmVORFBkYUcxeUZjZmRodWIzeW5nV3NGVzRXaDZmTVFyQTRzaWlJK0R3M2JOR0FCSHpkam04YXdYUXJWQXVoa2llMVN3M2NMb0NKbzE0WDRibUg0ZmdpVDl3bjl1dmgrYVBpT0QxTC9QM2pJNU15MG53YWtkN2k1UmcrbWZXMFFIUkVjbmJadjJsK3FyLzRPNDh2NHdMVFBXMXZqSmNya1loSHhrS3JPSVJOMmtPb1dUejNUYjArYThwRXFheWR2VDRiZkQ3VTBlc2NxcjVLOEh4cCtBOWJSZ3FBVkh6bTlBWnQ5eDYrdnJ3bGlmNnpUTzc3WldJeWFHdmMycU8welRyRVladU5wYXFrNyswUnVEM0tLcHpFYkUxVjk5SWF6TFViTmlJek9NVkZtNDlxc2ZxbTg3c0RmYnpoSEttNlMxam11RGVSUi9wWEtYOHFjWXRrczZUV0xXS0FtclovWVJNUHhwYkpZR1ArMlVqL3hwUzJLRWNZV2pWb1c1NDJ0UzV4M2EyTDEwWFdOMVc5SnZnVytydmtXN2NpWk1TQVdXUzNLZXpLZzM3eW5GdVN1R1ZFcWQ2M1ovRU5qU3VVZm1zd2hiWTR3blVOcU1BKzRRY0owSHJEQlhPNEdDVE81M09ieThac2p6T2JqbTZ1cDBCeGh0cVlDd2pSdEhlRk5YUXhqdFUyYUk3eXBiV0tzUGsxamhMZjFhWXpWR0dxTThLN0drS2s2VVUwUjN0ZUpBbCtoV2thWVUrdExONnYvb25ZUjV0VnJNMVJ6cnlIQ3ZKcDdWdGRJM2NTbUNQUHFKcHFwZmRrTVlicVVjSXJ3eFVUOTBtWUlGZlZMamRTZ2JZUlFWWVBXU0IzaFJnaVZkWVJOMUlKdWdsQmRDOXBFUGU4bUNBdnFlUnVveWQ0QVlWRk5kZ04xOVJzZ1pFVjE5YTA5ZG0rRXI0Y1Rwc3laUE1LeHRzTkcwZDlpOGVpdU5kSVpGeEphQytRZUpROXZ5K1BlWnNEOWMzMW03aktKNzNzRnRTUEpTRmZsdllJZ20wMExsSlBQLzQvMTdLTDNTWDQ1ZmRjR1Q5eDNMYWN5eXAvc25mY0graDgrYlEvTDNLSWFpajZrejloZXJrNGYwai9RUy9ZWit3RTc5Zm9CLy9zOW5mOUFYKzQvMEZ2ZEdrK2VaN2NSRTNWSkJqV2hOZEx2OHZKZ2liQ2dxSHNCSWFETHkyTlZVRVM2aE5BYUlHVjlHZFpVdFkyV0UxcitNMXd6bUtwOFZoVkNnTnZtWWVMSzBrU1ZDSzFWMjBlUktRL0Npb1RXVzdzUldiNjVYWWV3M1lodUtXQUZRbXZWM3R1aTJsYXJSUWl1VFdGTTZ2cG5OUWt0ZjlyR28xOU9pNCtKT29UV3dHbWZBU2Vjd29PK0pxRVZ0YzVHRldGcEJhMWFoTllJS1Q4ZVMzUlN0ZE41VlVKckhMVEp2T0ZCV1IrcytvVEpxZEdXL1VaV09TVTBDSzBCcEVVdm9vU290c2ZVSjdRNjJ6Yk1WTDZ0bFZSZGl6QTI0UnFmcWJMY0VnVVJndHVlUTBVLzY4eFFIVUxMMnlFWEJhZ2p5WGI1VmVreENSTURwNmxocERTL053UTJvZFhmMjAxc3FvTHZLeCtDUU1KNE5XNzVvNmVxZERlS2l2UkdDSzMrZ1Q1MnFsSmFWSWZYQUdHODQrelo0NmFxWVB2Q09yeEdDT1A3UnZDZzVTaDRVRkFvMmlCaHZCeURCNHlqWUV1OUJZaEJHRE91cDJZWkJWdUQrTUNFbHRWOVI2K2JjNVdrZEtsczNma3d3cVQyRVVHc1haWGlzOGszWVAwaEVzYjc2bUxMVUZvTXBpVFlabFhiUXNzVENtR3Nsem5uYUlXQ3BPRHVFVHc5ZjRSRm1CUWlDd1FHcEJTMldQcmF4OStkOEFoamRmekFjVUhQcXRMaFR2Q0tXb0lSbFRDVzl6V1hUSyt3VlR4NFRNNTdLSXN2Sld6Q1JOM1hkMkp6VVFOVENzRXBXUzRxdWtCcnlRUmhvc2pmZjRRdXAyV2NNUnZsTHZuWSt5Ym9FcGtpVE9SMXY5NTJhOElZdDJtQ2VvMGtpLzhVZzFHYk0wYld1NW5mcmVyZDFaRkp3clA2WGpUd0Q3TmpzTjVNd3FSUFFSaE9OdXZnT0R2NGc4alR2QkxWMFAvTkViNXpibXFtZWdBQUFBQkpSVTVFcmtKZ2dnPT0nO1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvZHVjdDtcblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpOiBKU1guRWxlbWVudCB7XG5cdGNvbnN0IHByb2R1Y3RzOiBQcm9kdWN0W10gPSB1c2VMb2FkZXJEYXRhKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8Qm94IHBvcz1cInJlbGF0aXZlXCIgdz1cImZ1bGxcIiBoPVwiZnVsbFwiPlxuXHRcdFx0PEltYWdlXG5cdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHR0b3A9XCIxMCVcIlxuXHRcdFx0XHRsZWZ0PVwiLTUlXCJcblx0XHRcdFx0ekluZGV4PXstMX1cblx0XHRcdFx0c3JjPVwiL3JlZC1jaXJjbGUucG5nXCJcblx0XHRcdC8+XG5cdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdHRvcD1cIjM1JVwiXG5cdFx0XHRcdHJpZ2h0PVwiMCVcIlxuXHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRzcmM9XCIvYmx1ZS1jaXJjbGUucG5nXCJcblx0XHRcdC8+XG5cdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdHRvcD1cIjQwJVwiXG5cdFx0XHRcdGxlZnQ9XCIwJVwiXG5cdFx0XHRcdHpJbmRleD17LTF9XG5cdFx0XHRcdHNyYz1cIi95ZWxsb3ctY2lyY2xlLnBuZ1wiXG5cdFx0XHQvPlxuXHRcdFx0PFN0YWNrXG5cdFx0XHRcdHc9XCJmdWxsXCJcblx0XHRcdFx0aD1cImZ1bGxcIlxuXHRcdFx0XHRqdXN0aWZ5PVwiY2VudGVyXCJcblx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdG10PXs5fVxuXHRcdFx0XHRzcGFjaW5nPXszfVxuXHRcdFx0PlxuXHRcdFx0XHR7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG5cdFx0XHRcdFx0PFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvQm94PlxuXHQpO1xufVxuIiwgImltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICd+L3R5cGVzJztcbmltcG9ydCB7XG5cdEFycm93VG9wUmlnaHRJY29uLFxuXHRTaGFyZTJJY29uLFxuXHRWZXJjZWxMb2dvSWNvbixcbn0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWljb25zJztcbmltcG9ydCB7XG5cdEJ1dHRvbixcblx0SFN0YWNrLFxuXHRJbWFnZSxcblx0U3RhY2ssXG5cdFRleHQsXG5cdExpbmssXG5cdENlbnRlcixcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdENhcmRQcm9wcyB7XG5cdHByb2R1Y3Q6IFByb2R1Y3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHtcblx0cHJvZHVjdCxcbn06IFByb2R1Y3RDYXJkUHJvcHMpOiBKU1guRWxlbWVudCB7XG5cdGNvbnN0IHsgbmFtZSwgdXJsLCBpbWFnZV91cmwsIHRhZ2xpbmUsIHRvcGljLCB1cHZvdGVzIH06IGFueSA9IHByb2R1Y3Q7XG5cblx0cmV0dXJuIChcblx0XHQ8U3RhY2tcblx0XHRcdHA9XCI0XCJcblx0XHRcdGg9XCJhdXRvXCJcblx0XHRcdHc9XCIzMTVweFwiXG5cdFx0XHRwb3M9XCJyZWxhdGl2ZVwiXG5cdFx0XHRib3JkZXJSYWRpdXM9XCIyMHB4XCJcblx0XHRcdGJvcmRlcj1cIjJweCBzb2xpZCBibGFja1wiXG5cdFx0XHRiZ0NvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwwLjU1KVwiXG5cdFx0PlxuXHRcdFx0PFN0YWNrXG5cdFx0XHRcdGg9XCJhdXRvXCJcblx0XHRcdFx0c3BhY2luZz17MH1cblx0XHRcdFx0cG9zPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHRhbGlnblNlbGY9XCJzdGFydFwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8VmVyY2VsTG9nb0ljb24gLz5cblx0XHRcdFx0PFRleHQgZm9udFdlaWdodD1cInNlbWlib2xkXCI+e3Vwdm90ZXN9PC9UZXh0PlxuXHRcdFx0PC9TdGFjaz5cblx0XHRcdDxIU3RhY2sgdz1cImZ1bGxcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG5cdFx0XHRcdDxTdGFjayBhbGlnblNlbGY9XCJzdGFydFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz17YCR7aW1hZ2VfdXJsfWB9XG5cdFx0XHRcdFx0XHRib3hTaXplPVwiNjBweFwiXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9XCI1MCVcIlxuXHRcdFx0XHRcdFx0b2JqZWN0Rml0PVwiZmlsbFwiXG5cdFx0XHRcdFx0XHRib3hTaGFkb3c9e2AwcHggNHB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC4yNSlgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHQ+e25hbWV9PC9UZXh0PlxuXHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQ8Q2VudGVyXG5cdFx0XHRcdFx0cD1cIjAuNVwiXG5cdFx0XHRcdFx0dG9wPVwiNVwiXG5cdFx0XHRcdFx0cmlnaHQ9XCI1XCJcblx0XHRcdFx0XHRiZz1cIiNGNEEyNjFcIlxuXHRcdFx0XHRcdHc9XCI1NHB4XCJcblx0XHRcdFx0XHRoPVwiMThweFwiXG5cdFx0XHRcdFx0cG9zPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHRcdGFsaWduU2VsZj1cInN0YXJ0XCJcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM9ezR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VGV4dCBjb2xvcj1cIndoaXRlXCIgaXNUcnVuY2F0ZWQgZm9udFNpemU9XCJzbVwiPlxuXHRcdFx0XHRcdFx0e3RvcGljLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdG9waWMuc2xpY2UoMSl9XG5cdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdDwvSFN0YWNrPlxuXHRcdFx0PFRleHQgbm9PZkxpbmVzPXsyfT57dGFnbGluZX08L1RleHQ+XG5cdFx0XHQ8SFN0YWNrIGp1c3RpZnk9XCJjZW50ZXJcIj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdHc9XCJhdXRvXCJcblx0XHRcdFx0XHRoPVwiMzZweFwiXG5cdFx0XHRcdFx0YmdDb2xvcj1cImJsYWNrXCJcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM9XCI1XCJcblx0XHRcdFx0XHRyaWdodEljb249ezxWZXJjZWxMb2dvSWNvbiAvPn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxUZXh0IGNvbG9yPVwid2hpdGVcIj5VcHZvdGU8L1RleHQ+XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0dz1cImF1dG9cIlxuXHRcdFx0XHRcdGg9XCIzNnB4XCJcblx0XHRcdFx0XHRiZ0NvbG9yPVwiYmxhY2tcIlxuXHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjVcIlxuXHRcdFx0XHRcdHJpZ2h0SWNvbj17PEFycm93VG9wUmlnaHRJY29uIC8+fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PExpbmsgYXM9XCJhXCIgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdDxUZXh0IGNvbG9yPVwid2hpdGVcIj5DaGVjayBvdXQ8L1RleHQ+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PFNoYXJlMkljb24gb25DbGljaz17KCkgPT4gbmF2aWdhdG9yLnNoYXJlKHVybCl9IC8+XG5cdFx0XHQ8L0hTdGFjaz5cblx0XHQ8L1N0YWNrPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNsaWVudCwgU3VwYWJhc2VDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuXG5pZiAoIXByb2Nlc3MuZW52LlNVUEFCQVNFX1VSTClcblx0dGhyb3cgRXJyb3IoJ1N1cGFiYXNlIFVSTCBub3QgZm91bmQgaW4gZW52aXJvbm1lbnQnKTtcbmlmICghcHJvY2Vzcy5lbnYuU1VQQUJBU0VfS0VZKVxuXHR0aHJvdyBFcnJvcignU3VwYWJhc2UgS0VZIG5vdCBmb3VuZCBpbiBlbnZpcm9ubWVudCcpO1xuXG5leHBvcnQgY29uc3Qgc3VwYWJhc2U6IFN1cGFiYXNlQ2xpZW50ID0gY3JlYXRlQ2xpZW50KFxuXHRwcm9jZXNzLmVudi5TVVBBQkFTRV9VUkwgYXMgc3RyaW5nLFxuXHRwcm9jZXNzLmVudi5TVVBBQkFTRV9LRVkgYXMgc3RyaW5nXG4pO1xuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJztcbmltcG9ydCB7IEFycm93UmlnaHRJY29uIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWljb25zJztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDZW50ZXIsIEltYWdlLCBTdGFjaywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHRpdGxlOiAnT24gVGhlIEh1bnQnLFxuXHRcdGRlc2NyaXB0aW9uOiBcIlByb2R1Y3QgSHVudCdzIGRhaWx5IG5ld3NwYXBlclwiLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U3RhY2tcblx0XHRcdFx0cG9zPVwicmVsYXRpdmVcIlxuXHRcdFx0XHRwYWRkaW5nPVwiNlwiXG5cdFx0XHRcdHc9XCJmdWxsXCJcblx0XHRcdFx0YWxpZ25Db250ZW50PVwiY2VudGVyXCJcblx0XHRcdFx0anVzdGlmeT1cImNlbnRlclwiXG5cdFx0XHRcdHNwYWNpbmc9ezEwfVxuXHRcdFx0PlxuXHRcdFx0XHQ8Q2VudGVyPlxuXHRcdFx0XHRcdDxDZW50ZXJcblx0XHRcdFx0XHRcdGJnQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNTUpXCJcblx0XHRcdFx0XHRcdGJhY2tkcm9wRmlsdGVyPXtgYmx1cigxMHB4KWB9XG5cdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcblx0XHRcdFx0XHRcdHc9ezMzMH1cblx0XHRcdFx0XHRcdGg9ezI5OH1cblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz17MjB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJveCB3PVwiMjMwcHhcIj5cblx0XHRcdFx0XHRcdFx0PFN0YWNrIHNwYWNpbmc9ey01fSB3PVwiZnVsbFwiIHNob3VsZFdyYXBDaGlsZHJlbj5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjQ4cHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0T25cblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplPVwiM3JlbVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRtbD1cIjI1JVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0PVwiYm9sZFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhlXG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZT1cIjNyZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWw9XCI1MCVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodD1cImJvbGRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdEh1bnRcblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRTaXplPVwiMjBweFwiIGNvbG9yPVwiIzYzNjM2M1wiPlxuXHRcdFx0XHRcdFx0XHRcdFZpZXcgdGhlIGxhdGVzdCBiZXN0IHByb2R1Y3RzXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdFx0XHR0b3A9XCIxMCVcIlxuXHRcdFx0XHRcdFx0bGVmdD1cIi01JVwiXG5cdFx0XHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRcdFx0c3JjPVwiL3JlZC1jaXJjbGUucG5nXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdFx0XHR0b3A9XCIzNSVcIlxuXHRcdFx0XHRcdFx0cmlnaHQ9XCIwJVwiXG5cdFx0XHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRcdFx0c3JjPVwiL2JsdWUtY2lyY2xlLnBuZ1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHRcdFx0dG9wPVwiNDAlXCJcblx0XHRcdFx0XHRcdGxlZnQ9XCIwJVwiXG5cdFx0XHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRcdFx0c3JjPVwiL3llbGxvdy1jaXJjbGUucG5nXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdFx0PENlbnRlcj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRiZ0NvbG9yPVwiYmxhY2tcIlxuXHRcdFx0XHRcdFx0Y29sb3I9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjE1M3B4XCJcblx0XHRcdFx0XHRcdGhlaWdodD1cIjYwcHhcIlxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwiMTVweFwiXG5cdFx0XHRcdFx0XHRyaWdodEljb249ezxBcnJvd1JpZ2h0SWNvbiAvPn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjIycHhcIiBmb250RmFtaWx5PVwiUm9ib3RvXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL3Byb2R1Y3RzXCI+VmlldzwvTGluaz5cblx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IENlbnRlciwgSW1hZ2UsIEJ1dHRvbiwgU3RhY2ssIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpOiBKU1guRWxlbWVudCB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxDZW50ZXJcblx0XHRcdFx0dz1cImZ1bGxcIlxuXHRcdFx0XHRiZ0NvbG9yPVwicmVkLjMwMFwiXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcblx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxUZXh0IGZvbnRTaXplPVwiNHhsXCI+SG9tZSBQYWdlPC9UZXh0PlxuXHRcdFx0PC9DZW50ZXI+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNWQ2YTZhZTQnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LU43Qkc3SkRQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LVTJWTEdZNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlBRVlNU0ZKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQllURUZSR1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NQVdJQUM1US5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtVlpMWUZORlQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdEWUo2RzZHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvaG9tZSc6eydpZCc6J3JvdXRlcy9ob21lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2hvbWUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaG9tZS1UT0lTQ1JFWS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVMzU0pEVEFJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YUTdKSlMzMy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvZHVjdHMnOnsnaWQnOidyb3V0ZXMvcHJvZHVjdHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJvZHVjdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJvZHVjdHMtU0RMMkozNFAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhRN0pKUzMzLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC01RDZBNkFFNC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUEsWUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQWpCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFB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bUNBQWtDLFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyx1Q0FBcUMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywyQkFBMEIsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixNQUFLLG9CQUFtQixRQUFNLGVBQWMsRUFBQyxNQUFLLGVBQWMsWUFBVyxRQUFPLFFBQU8sUUFBTyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxrQ0FBaUMsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxtQkFBa0IsRUFBQyxNQUFLLG1CQUFrQixZQUFXLFFBQU8sUUFBTyxZQUFXLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHNDQUFxQyxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFdBQVEsT0FBTTs7O0FiTy8wQyxJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosbUJBQW1CO0FBQUEsSUFDZixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixlQUFlO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
