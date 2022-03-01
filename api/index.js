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

// empty-module:./context.client
var require_context = __commonJS({
  "empty-module:./context.client"(exports, module2) {
    init_react();
    module2.exports = {};
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
var import_remix = __toESM(require_remix());
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
var import_react2 = require("@emotion/react");

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
  }, /* @__PURE__ */ React.createElement(import_react2.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  const chunks = extractCriticalToChunks(html);
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(context_server_default.Provider, {
    value: chunks.styles
  }, /* @__PURE__ */ React.createElement(import_react2.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_remix.RemixServer, {
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
var import_react4 = require("@chakra-ui/react");

// app/components/Header.tsx
init_react();
var import_remix2 = __toESM(require_remix());
var import_react3 = require("@chakra-ui/react");
function Header() {
  return /* @__PURE__ */ React.createElement(import_react3.HStack, {
    as: "nav",
    w: "full",
    alignItems: "center",
    justifyContent: "space-between",
    bgColor: "rgba(255,255,255,0.20)",
    backdropFilter: `blur(10px)`,
    p: 4
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(import_react3.Heading, {
    fontSize: "24px",
    fontWeight: "bold"
  }, "On The Hunt")), /* @__PURE__ */ React.createElement(import_react3.Box, null, /* @__PURE__ */ React.createElement(import_react3.Image, {
    src: "/menu.svg",
    alt: "Menu",
    w: "full",
    h: "full"
  })));
}

// app/components/Layout.tsx
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(import_react4.Stack, {
    spacing: 0,
    bg: "background.main",
    w: "100vw",
    h: "100vh"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_react4.Flex, {
    flexGrow: 1,
    overflowY: "auto"
  }, children));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/root.tsx
var import_context3 = __toESM(require_context());

// app/theme.ts
init_react();
var import_react5 = require("@chakra-ui/react");
var theme = (0, import_react5.extendTheme)({
  fonts: {
    heading: "Oswald, sans-serif",
    body: "Alegreya SC, serif"
  }
});

// route:/Users/darrylbrooks/Github/OnTheHunt/app/root.tsx
var import_react6 = require("@emotion/react");
var import_react7 = require("react");
var import_react8 = require("@chakra-ui/react");
var import_remix3 = __toESM(require_remix());
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey there's an error in the root file"))));
}
function CatchBoundary() {
  let caught = (0, import_remix3.useCatch)();
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react8.Center, {
    h: "full",
    w: "full"
  }, /* @__PURE__ */ React.createElement(import_react8.Text, {
    bgGradient: "linear(to-r, brand.primary, brand.accent)",
    bgClip: "text",
    fontSize: "6xl",
    fontWeight: "Bold"
  }, "Page Not Found"))));
}
var Document = (0, import_react6.withEmotionCache)(({ children, title }, emotionCache) => {
  const serverSyleData = (0, import_react7.useContext)(context_server_default);
  const clientStyleData = (0, import_react7.useContext)(import_context3.default);
  (0, import_react7.useEffect)(() => {
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
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null), serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ React.createElement("style", {
    key,
    "data-emotion": `${key} ${ids.join(" ")}`,
    dangerouslySetInnerHTML: { __html: css }
  }))), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react8.ChakraProvider, {
    theme
  }, children), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
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
var import_react9 = require("@chakra-ui/react");
function ProductCard({
  product
}) {
  const { name, url, imageUrl, tagline, topic, upvotes } = product;
  return /* @__PURE__ */ React.createElement(import_react9.Stack, {
    pos: "relative",
    border: "2px solid black",
    w: "315px",
    h: "auto",
    p: "4",
    borderRadius: "20px",
    bgColor: "rgba(255,255,255,0.55)"
  }, /* @__PURE__ */ React.createElement(import_react9.HStack, {
    w: "full",
    justify: "space-between",
    align: "center"
  }, /* @__PURE__ */ React.createElement(import_react9.Stack, {
    h: "auto",
    alignSelf: "start",
    alignItems: "center",
    spacing: 0,
    shouldWrapChildren: true
  }, /* @__PURE__ */ React.createElement(import_react_icons.VercelLogoIcon, null), /* @__PURE__ */ React.createElement(import_react9.Text, {
    fontWeight: "semibold"
  }, upvotes)), /* @__PURE__ */ React.createElement(import_react9.Stack, {
    alignSelf: "start",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react9.Image, {
    src: `${imageUrl}`,
    boxSize: "60px",
    borderRadius: "50%",
    boxShadow: `0px 4px 15px 0px rgba(0,0,0,0.25)`
  }), /* @__PURE__ */ React.createElement(import_react9.Text, null, name)), /* @__PURE__ */ React.createElement(import_react9.Box, {
    bg: "#F4A261",
    borderRadius: 4,
    alignSelf: "start"
  }, /* @__PURE__ */ React.createElement(import_react9.Text, {
    color: "white"
  }, topic.charAt(0).toUpperCase() + topic.slice(1)))), /* @__PURE__ */ React.createElement(import_react9.Text, {
    noOfLines: 2
  }, tagline), /* @__PURE__ */ React.createElement(import_react9.HStack, {
    justify: "center"
  }, /* @__PURE__ */ React.createElement(import_react9.Button, {
    bgColor: "black",
    w: "auto",
    h: "36px",
    borderRadius: "5",
    rightIcon: /* @__PURE__ */ React.createElement(import_react_icons.VercelLogoIcon, null)
  }, /* @__PURE__ */ React.createElement(import_react9.Text, {
    color: "white"
  }, "Upvote")), /* @__PURE__ */ React.createElement(import_react9.Button, {
    bgColor: "black",
    w: "auto",
    h: "36px",
    borderRadius: "5",
    rightIcon: /* @__PURE__ */ React.createElement(import_react_icons.ArrowTopRightIcon, null)
  }, /* @__PURE__ */ React.createElement(import_react9.Link, {
    as: "a",
    href: url,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(import_react9.Text, {
    color: "white"
  }, "Check out")))));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/products.tsx
var import_react10 = require("@chakra-ui/react");
var import_remix4 = __toESM(require_remix());

// app/server/supabase.server.ts
init_react();
var import_supabase_js = require("@supabase/supabase-js");
if (!process.env.SUPABASE_URL)
  throw Error("Supabase URL not found in environment");
if (!process.env.SUPABASE_KEY)
  throw Error("Supabase KEY not found in environment");
var supabase = (0, import_supabase_js.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/products.tsx
var loader = async () => {
  const products = await supabase.from("products").select("*");
  return products.data;
};
function Products() {
  const products = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_react10.Box, {
    pos: "relative",
    w: "full"
  }, /* @__PURE__ */ React.createElement(import_react10.Image, {
    position: "absolute",
    top: "10%",
    left: "-5%",
    zIndex: -1,
    src: "/red-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react10.Image, {
    position: "absolute",
    top: "35%",
    right: "0%",
    zIndex: -1,
    src: "/blue-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react10.Image, {
    position: "absolute",
    top: "40%",
    left: "0%",
    zIndex: -1,
    src: "/yellow-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react10.Stack, {
    w: "full",
    h: "full",
    justify: "center",
    alignItems: "center",
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
var import_remix5 = __toESM(require_remix());
var import_react_icons2 = require("@radix-ui/react-icons");
var import_react11 = require("@chakra-ui/react");
var meta = () => {
  return {
    title: "On The Hunt",
    description: "Product Hunt's daily newspaper"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react11.Stack, {
    pos: "relative",
    padding: "6",
    w: "full",
    alignContent: "center",
    justify: "center",
    spacing: 10
  }, /* @__PURE__ */ React.createElement(import_react11.Center, null, /* @__PURE__ */ React.createElement(import_react11.Center, {
    bgColor: "rgba(255,255,255,0.55)",
    backdropFilter: `blur(10px)`,
    flexDirection: "column",
    w: 330,
    h: 298,
    borderRadius: 20
  }, /* @__PURE__ */ React.createElement(import_react11.Box, {
    w: "230px"
  }, /* @__PURE__ */ React.createElement(import_react11.Stack, {
    spacing: -5,
    w: "full",
    shouldWrapChildren: true
  }, /* @__PURE__ */ React.createElement(import_react11.Text, {
    fontSize: "48px",
    fontWeight: "bold"
  }, "On"), /* @__PURE__ */ React.createElement(import_react11.Text, {
    fontSize: "3rem",
    ml: "25%",
    fontWeight: "bold"
  }, "The"), /* @__PURE__ */ React.createElement(import_react11.Text, {
    fontSize: "3rem",
    ml: "50%",
    fontWeight: "bold"
  }, "Hunt")), /* @__PURE__ */ React.createElement(import_react11.Text, {
    fontSize: "20px",
    color: "#636363"
  }, "View the latest best products"))), /* @__PURE__ */ React.createElement(import_react11.Image, {
    position: "absolute",
    top: "10%",
    left: "-5%",
    zIndex: -1,
    src: "/red-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react11.Image, {
    position: "absolute",
    top: "35%",
    right: "0%",
    zIndex: -1,
    src: "/blue-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react11.Image, {
    position: "absolute",
    top: "40%",
    left: "0%",
    zIndex: -1,
    src: "/yellow-circle.png"
  })), /* @__PURE__ */ React.createElement(import_react11.Center, null, /* @__PURE__ */ React.createElement(import_react11.Button, {
    bgColor: "black",
    color: "white",
    width: "153px",
    height: "60px",
    borderRadius: "15px",
    rightIcon: /* @__PURE__ */ React.createElement(import_react_icons2.ArrowRightIcon, null)
  }, /* @__PURE__ */ React.createElement(import_react11.Text, {
    fontSize: "22px",
    fontFamily: "Roboto"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/products"
  }, "View"))))));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
init_react();
var import_react12 = require("@chakra-ui/react");
function Home() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react12.Center, {
    w: "full",
    bgColor: "red.300",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react12.Text, {
    fontSize: "4xl"
  }, "Home Page")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "765f4d49", "entry": { "module": "/build/entry.client-BURG2NLZ.js", "imports": ["/build/_shared/chunk-KU2VLGY7.js", "/build/_shared/chunk-6E3MMSY2.js", "/build/_shared/chunk-MAWIAC5Q.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-FUCM657X.js", "imports": ["/build/_shared/chunk-WDYJ6G6G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-TOISCREY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-5GWMYJUU.js", "imports": ["/build/_shared/chunk-UXXNPUMC.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products": { "id": "routes/products", "parentId": "root", "path": "products", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/products-HG7FRRNA.js", "imports": ["/build/_shared/chunk-UXXNPUMC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-765F4D49.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6Li9jb250ZXh0LmNsaWVudCIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vYXBwL2NvbnRleHQuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwgIi4uL2FwcC90aGVtZS50cyIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4IiwgIi4uL2FwcC9zZXJ2ZXIvc3VwYWJhc2Uuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9ob21lLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL3Byb2R1Y3RzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvaG9tZS50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3Byb2R1Y3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9kdWN0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9kdWN0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaG9tZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaG9tZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJob21lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tICdAZW1vdGlvbi9zZXJ2ZXIvY3JlYXRlLWluc3RhbmNlJztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gJy4vY3JlYXRlRW1vdGlvbkNhY2hlJztcbmltcG9ydCBTZXJ2ZXJTdHlsZUNvbnRleHQgZnJvbSAnLi9jb250ZXh0LnNlcnZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG5cdHJlcXVlc3Q6IFJlcXVlc3QsXG5cdHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuXHRyZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG5cdHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcblx0Y29uc3QgY2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcblx0Y29uc3QgeyBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyB9ID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cblx0Y29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKFxuXHRcdDxTZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e251bGx9PlxuXHRcdFx0PENhY2hlUHJvdmlkZXIgdmFsdWU9e2NhY2hlfT5cblx0XHRcdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cblx0XHRcdDwvQ2FjaGVQcm92aWRlcj5cblx0XHQ8L1NlcnZlclN0eWxlQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcblxuXHRjb25zdCBjaHVua3MgPSBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyhodG1sKTtcblxuXHRjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcblx0XHQ8U2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjaHVua3Muc3R5bGVzfT5cblx0XHRcdDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG5cdFx0XHRcdDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG5cdFx0XHQ8L0NhY2hlUHJvdmlkZXI+XG5cdFx0PC9TZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG5cblx0cmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoYDwhRE9DVFlQRSBodG1sPiR7bWFya3VwfWAsIHtcblx0XHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcblx0XHRoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG5cdH0pO1xufVxuIiwgImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KTtcbn0iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlclN0eWxlQ29udGV4dERhdGEge1xuICBrZXk6IHN0cmluZztcbiAgaWRzOiBBcnJheTxzdHJpbmc+O1xuICBjc3M6IHN0cmluZztcbn1cblxuY29uc3QgU2VydmVyU3R5bGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxudWxsIHwgU2VydmVyU3R5bGVDb250ZXh0RGF0YVtdPihudWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyU3R5bGVDb250ZXh0IiwgImltcG9ydCAnQGZvbnRzb3VyY2Uvb3N3YWxkL2luZGV4LmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL2FsZWdyZXlhLXNjL2luZGV4LmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFNlcnZlclN0eWxlQ29udGV4dCBmcm9tICd+L2NvbnRleHQuc2VydmVyJztcbmltcG9ydCBDbGllbnRTdHlsZUNvbnRleHQgZnJvbSAnLi9jb250ZXh0LmNsaWVudCc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ34vdGhlbWUnO1xuaW1wb3J0IHsgd2l0aEVtb3Rpb25DYWNoZSB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2VudGVyLCBUZXh0LCBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHtcblx0TGlua3MsXG5cdExpdmVSZWxvYWQsXG5cdE91dGxldCxcblx0TWV0YSxcblx0U2NyaXB0cyxcblx0U2Nyb2xsUmVzdG9yYXRpb24sXG5cdHVzZUNhdGNoLFxufSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQ+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8L0RvY3VtZW50PlxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG5cdFx0XHRcdFx0PHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuXHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdDxwPkhleSB0aGVyZSdzIGFuIGVycm9yIGluIHRoZSByb290IGZpbGU8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG5cdGxldCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PENlbnRlciBoPVwiZnVsbFwiIHc9XCJmdWxsXCI+XG5cdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdGJnR3JhZGllbnQ9XCJsaW5lYXIodG8tciwgYnJhbmQucHJpbWFyeSwgYnJhbmQuYWNjZW50KVwiXG5cdFx0XHRcdFx0XHRiZ0NsaXA9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGZvbnRTaXplPVwiNnhsXCJcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9XCJCb2xkXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRQYWdlIE5vdCBGb3VuZFxuXHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8L0RvY3VtZW50PlxuXHQpO1xufVxuXG5pbnRlcmZhY2UgRG9jdW1lbnRQcm9wcyB7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG5cdHRpdGxlPzogc3RyaW5nO1xufVxuXG5jb25zdCBEb2N1bWVudCA9IHdpdGhFbW90aW9uQ2FjaGUoXG5cdCh7IGNoaWxkcmVuLCB0aXRsZSB9OiBEb2N1bWVudFByb3BzLCBlbW90aW9uQ2FjaGUpID0+IHtcblx0XHRjb25zdCBzZXJ2ZXJTeWxlRGF0YSA9IHVzZUNvbnRleHQoU2VydmVyU3R5bGVDb250ZXh0KTtcblx0XHRjb25zdCBjbGllbnRTdHlsZURhdGEgPSB1c2VDb250ZXh0KENsaWVudFN0eWxlQ29udGV4dCk7XG5cdFx0Ly8gT25seSBleGVjdXRlZCBvbiBjbGllbnRcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdFx0Ly8gcmUtbGluayBzaGVldCBjb250YWluZXJcblx0XHRcdGVtb3Rpb25DYWNoZS5zaGVldC5jb250YWluZXIgPSBkb2N1bWVudC5oZWFkO1xuXHRcdFx0Ly8gcmUtaW5qZWN0IHRhZ3Ncblx0XHRcdGNvbnN0IHRhZ3MgPSBlbW90aW9uQ2FjaGUuc2hlZXQudGFncztcblx0XHRcdGVtb3Rpb25DYWNoZS5zaGVldC5mbHVzaCgpO1xuXHRcdFx0dGFncy5mb3JFYWNoKCh0YWcpID0+IHtcblx0XHRcdFx0KGVtb3Rpb25DYWNoZS5zaGVldCBhcyBhbnkpLl9pbnNlcnRUYWcodGFnKTtcblx0XHRcdH0pO1xuXHRcdFx0Ly8gcmVzZXQgY2FjaGUgdG8gcmVhcHBseSBnbG9iYWwgc3R5bGVzXG5cdFx0XHRjbGllbnRTdHlsZURhdGEucmVzZXQoKTtcblx0XHR9LCBbXSk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0XHQ8aGVhZD5cblx0XHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdFx0Y29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG5cdFx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0XHQ8TGlua3MgLz5cblx0XHRcdFx0XHR7c2VydmVyU3lsZURhdGE/Lm1hcCgoeyBrZXksIGlkcywgY3NzIH0pID0+IChcblx0XHRcdFx0XHRcdDxzdHlsZVxuXHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0ZGF0YS1lbW90aW9uPXtgJHtrZXl9ICR7aWRzLmpvaW4oJyAnKX1gfVxuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG5cdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY3NzIH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2hlYWQ+XG5cdFx0XHRcdDxib2R5PlxuXHRcdFx0XHRcdDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PntjaGlsZHJlbn08L0NoYWtyYVByb3ZpZGVyPlxuXHRcdFx0XHRcdDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuXHRcdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdFx0e3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0XHQ8L2JvZHk+XG5cdFx0XHQ8L2h0bWw+XG5cdFx0KTtcblx0fVxuKTtcbiIsICJpbXBvcnQgeyBTdGFjaywgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG5cdHJldHVybiAoXG5cdFx0PFN0YWNrIHNwYWNpbmc9ezB9IGJnPVwiYmFja2dyb3VuZC5tYWluXCIgdz1cIjEwMHZ3XCIgaD1cIjEwMHZoXCI+XG5cdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHQ8RmxleCBmbGV4R3Jvdz17MX0gb3ZlcmZsb3dZPVwiYXV0b1wiPlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L0ZsZXg+XG5cdFx0PC9TdGFjaz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgQm94LCBIU3RhY2ssIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0cmV0dXJuIChcblx0XHQ8SFN0YWNrXG5cdFx0XHRhcz1cIm5hdlwiXG5cdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG5cdFx0XHRiZ0NvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwwLjIwKVwiXG5cdFx0XHRiYWNrZHJvcEZpbHRlcj17YGJsdXIoMTBweClgfVxuXHRcdFx0cD17NH1cblx0XHQ+XG5cdFx0XHQ8TGluayB0bz1cIi9cIj5cblx0XHRcdFx0PEhlYWRpbmcgZm9udFNpemU9XCIyNHB4XCIgZm9udFdlaWdodD1cImJvbGRcIj5cblx0XHRcdFx0XHRPbiBUaGUgSHVudFxuXHRcdFx0XHQ8L0hlYWRpbmc+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8Qm94PlxuXHRcdFx0XHQ8SW1hZ2Ugc3JjPVwiL21lbnUuc3ZnXCIgYWx0PVwiTWVudVwiIHc9XCJmdWxsXCIgaD1cImZ1bGxcIiAvPlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9IU3RhY2s+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuXHQvLyBnbG9iYWw6IHtcblx0Ly8gXHQnaHRtbCwgYm9keSc6IHtcblx0Ly8gXHRcdGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcblx0Ly8gXHR9LFxuXHQvLyB9LFxuXHRmb250czoge1xuXHRcdGhlYWRpbmc6ICdPc3dhbGQsIHNhbnMtc2VyaWYnLFxuXHRcdGJvZHk6ICdBbGVncmV5YSBTQywgc2VyaWYnLFxuXHR9LFxufSk7XG4iLCAiaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ34vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgeyBCb3gsIENlbnRlciwgSW1hZ2UsIFN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgdHlwZSB7IFByb2R1Y3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vc2VydmVyL3N1cGFiYXNlLnNlcnZlcic7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ3Byb2R1Y3RzJykuc2VsZWN0KCcqJyk7XG5cdHJldHVybiBwcm9kdWN0cy5kYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBwcm9kdWN0czogUHJvZHVjdFtdID0gdXNlTG9hZGVyRGF0YSgpO1xuXG5cdHJldHVybiAoXG5cdFx0PEJveCBwb3M9XCJyZWxhdGl2ZVwiIHc9XCJmdWxsXCI+XG5cdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdHRvcD1cIjEwJVwiXG5cdFx0XHRcdGxlZnQ9XCItNSVcIlxuXHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRzcmM9XCIvcmVkLWNpcmNsZS5wbmdcIlxuXHRcdFx0Lz5cblx0XHRcdDxJbWFnZVxuXHRcdFx0XHRwb3NpdGlvbj1cImFic29sdXRlXCJcblx0XHRcdFx0dG9wPVwiMzUlXCJcblx0XHRcdFx0cmlnaHQ9XCIwJVwiXG5cdFx0XHRcdHpJbmRleD17LTF9XG5cdFx0XHRcdHNyYz1cIi9ibHVlLWNpcmNsZS5wbmdcIlxuXHRcdFx0Lz5cblx0XHRcdDxJbWFnZVxuXHRcdFx0XHRwb3NpdGlvbj1cImFic29sdXRlXCJcblx0XHRcdFx0dG9wPVwiNDAlXCJcblx0XHRcdFx0bGVmdD1cIjAlXCJcblx0XHRcdFx0ekluZGV4PXstMX1cblx0XHRcdFx0c3JjPVwiL3llbGxvdy1jaXJjbGUucG5nXCJcblx0XHRcdC8+XG5cdFx0XHQ8U3RhY2tcblx0XHRcdFx0dz1cImZ1bGxcIlxuXHRcdFx0XHRoPVwiZnVsbFwiXG5cdFx0XHRcdGp1c3RpZnk9XCJjZW50ZXJcIlxuXHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0c3BhY2luZz17M31cblx0XHRcdD5cblx0XHRcdFx0e3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuXHRcdFx0XHRcdDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L0JveD5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnfi90eXBlcyc7XG5pbXBvcnQgeyBBcnJvd1RvcFJpZ2h0SWNvbiwgVmVyY2VsTG9nb0ljb24gfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHtcblx0Qm94LFxuXHRCdXR0b24sXG5cdEhTdGFjayxcblx0SW1hZ2UsXG5cdFN0YWNrLFxuXHRUZXh0LFxuXHRMaW5rLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcblx0cHJvZHVjdDogUHJvZHVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQoe1xuXHRwcm9kdWN0LFxufTogUHJvZHVjdENhcmRQcm9wcyk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgeyBuYW1lLCB1cmwsIGltYWdlVXJsLCB0YWdsaW5lLCB0b3BpYywgdXB2b3RlcyB9OiBQcm9kdWN0ID0gcHJvZHVjdDtcblxuXHRyZXR1cm4gKFxuXHRcdDxTdGFja1xuXHRcdFx0cG9zPVwicmVsYXRpdmVcIlxuXHRcdFx0Ym9yZGVyPVwiMnB4IHNvbGlkIGJsYWNrXCJcblx0XHRcdHc9XCIzMTVweFwiXG5cdFx0XHRoPVwiYXV0b1wiXG5cdFx0XHRwPVwiNFwiXG5cdFx0XHRib3JkZXJSYWRpdXM9XCIyMHB4XCJcblx0XHRcdGJnQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNTUpXCJcblx0XHQ+XG5cdFx0XHQ8SFN0YWNrIHc9XCJmdWxsXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiPlxuXHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRoPVwiYXV0b1wiXG5cdFx0XHRcdFx0YWxpZ25TZWxmPVwic3RhcnRcIlxuXHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdHNwYWNpbmc9ezB9XG5cdFx0XHRcdFx0c2hvdWxkV3JhcENoaWxkcmVuXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VmVyY2VsTG9nb0ljb24gLz5cblx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PVwic2VtaWJvbGRcIj57dXB2b3Rlc308L1RleHQ+XG5cdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdDxTdGFjayBhbGlnblNlbGY9XCJzdGFydFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz17YCR7aW1hZ2VVcmx9YH1cblx0XHRcdFx0XHRcdGJveFNpemU9XCI2MHB4XCJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjUwJVwiXG5cdFx0XHRcdFx0XHRib3hTaGFkb3c9e2AwcHggNHB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC4yNSlgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHQ+e25hbWV9PC9UZXh0PlxuXHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQ8Qm94IGJnPVwiI0Y0QTI2MVwiIGJvcmRlclJhZGl1cz17NH0gYWxpZ25TZWxmPVwic3RhcnRcIj5cblx0XHRcdFx0XHQ8VGV4dCBjb2xvcj1cIndoaXRlXCI+XG5cdFx0XHRcdFx0XHR7dG9waWMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0b3BpYy5zbGljZSgxKX1cblx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0PC9IU3RhY2s+XG5cdFx0XHQ8VGV4dCBub09mTGluZXM9ezJ9Pnt0YWdsaW5lfTwvVGV4dD5cblx0XHRcdDxIU3RhY2sganVzdGlmeT1cImNlbnRlclwiPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YmdDb2xvcj1cImJsYWNrXCJcblx0XHRcdFx0XHR3PVwiYXV0b1wiXG5cdFx0XHRcdFx0aD1cIjM2cHhcIlxuXHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjVcIlxuXHRcdFx0XHRcdHJpZ2h0SWNvbj17PFZlcmNlbExvZ29JY29uIC8+fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFRleHQgY29sb3I9XCJ3aGl0ZVwiPlVwdm90ZTwvVGV4dD5cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRiZ0NvbG9yPVwiYmxhY2tcIlxuXHRcdFx0XHRcdHc9XCJhdXRvXCJcblx0XHRcdFx0XHRoPVwiMzZweFwiXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwiNVwiXG5cdFx0XHRcdFx0cmlnaHRJY29uPXs8QXJyb3dUb3BSaWdodEljb24gLz59XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TGluayBhcz1cImFcIiBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0PFRleHQgY29sb3I9XCJ3aGl0ZVwiPkNoZWNrIG91dDwvVGV4dD5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9IU3RhY2s+XG5cdFx0PC9TdGFjaz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnQsIFN1cGFiYXNlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuaWYgKCFwcm9jZXNzLmVudi5TVVBBQkFTRV9VUkwpXG5cdHRocm93IEVycm9yKCdTdXBhYmFzZSBVUkwgbm90IGZvdW5kIGluIGVudmlyb25tZW50Jyk7XG5pZiAoIXByb2Nlc3MuZW52LlNVUEFCQVNFX0tFWSlcblx0dGhyb3cgRXJyb3IoJ1N1cGFiYXNlIEtFWSBub3QgZm91bmQgaW4gZW52aXJvbm1lbnQnKTtcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlOiBTdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChcblx0cHJvY2Vzcy5lbnYuU1VQQUJBU0VfVVJMIGFzIHN0cmluZyxcblx0cHJvY2Vzcy5lbnYuU1VQQUJBU0VfS0VZIGFzIHN0cmluZ1xuKTtcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBBcnJvd1JpZ2h0SWNvbiB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2VudGVyLCBJbWFnZSwgU3RhY2ssIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0aXRsZTogJ09uIFRoZSBIdW50Jyxcblx0XHRkZXNjcmlwdGlvbjogXCJQcm9kdWN0IEh1bnQncyBkYWlseSBuZXdzcGFwZXJcIixcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCk6IEpTWC5FbGVtZW50IHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFN0YWNrXG5cdFx0XHRcdHBvcz1cInJlbGF0aXZlXCJcblx0XHRcdFx0cGFkZGluZz1cIjZcIlxuXHRcdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHRcdGFsaWduQ29udGVudD1cImNlbnRlclwiXG5cdFx0XHRcdGp1c3RpZnk9XCJjZW50ZXJcIlxuXHRcdFx0XHRzcGFjaW5nPXsxMH1cblx0XHRcdD5cblx0XHRcdFx0PENlbnRlcj5cblx0XHRcdFx0XHQ8Q2VudGVyXG5cdFx0XHRcdFx0XHRiZ0NvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwwLjU1KVwiXG5cdFx0XHRcdFx0XHRiYWNrZHJvcEZpbHRlcj17YGJsdXIoMTBweClgfVxuXHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG5cdFx0XHRcdFx0XHR3PXszMzB9XG5cdFx0XHRcdFx0XHRoPXsyOTh9XG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9ezIwfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCb3ggdz1cIjIzMHB4XCI+XG5cdFx0XHRcdFx0XHRcdDxTdGFjayBzcGFjaW5nPXstNX0gdz1cImZ1bGxcIiBzaG91bGRXcmFwQ2hpbGRyZW4+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFNpemU9XCI0OHB4XCIgZm9udFdlaWdodD1cImJvbGRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdE9uXG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZT1cIjNyZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWw9XCIyNSVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodD1cImJvbGRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFRoZVxuXHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU9XCIzcmVtXCJcblx0XHRcdFx0XHRcdFx0XHRcdG1sPVwiNTAlXCJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9XCJib2xkXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRIdW50XG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjIwcHhcIiBjb2xvcj1cIiM2MzYzNjNcIj5cblx0XHRcdFx0XHRcdFx0XHRWaWV3IHRoZSBsYXRlc3QgYmVzdCBwcm9kdWN0c1xuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHRcdFx0dG9wPVwiMTAlXCJcblx0XHRcdFx0XHRcdGxlZnQ9XCItNSVcIlxuXHRcdFx0XHRcdFx0ekluZGV4PXstMX1cblx0XHRcdFx0XHRcdHNyYz1cIi9yZWQtY2lyY2xlLnBuZ1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHRcdFx0dG9wPVwiMzUlXCJcblx0XHRcdFx0XHRcdHJpZ2h0PVwiMCVcIlxuXHRcdFx0XHRcdFx0ekluZGV4PXstMX1cblx0XHRcdFx0XHRcdHNyYz1cIi9ibHVlLWNpcmNsZS5wbmdcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRwb3NpdGlvbj1cImFic29sdXRlXCJcblx0XHRcdFx0XHRcdHRvcD1cIjQwJVwiXG5cdFx0XHRcdFx0XHRsZWZ0PVwiMCVcIlxuXHRcdFx0XHRcdFx0ekluZGV4PXstMX1cblx0XHRcdFx0XHRcdHNyYz1cIi95ZWxsb3ctY2lyY2xlLnBuZ1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHRcdDxDZW50ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0YmdDb2xvcj1cImJsYWNrXCJcblx0XHRcdFx0XHRcdGNvbG9yPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0d2lkdGg9XCIxNTNweFwiXG5cdFx0XHRcdFx0XHRoZWlnaHQ9XCI2MHB4XCJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjE1cHhcIlxuXHRcdFx0XHRcdFx0cmlnaHRJY29uPXs8QXJyb3dSaWdodEljb24gLz59XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFRleHQgZm9udFNpemU9XCIyMnB4XCIgZm9udEZhbWlseT1cIlJvYm90b1wiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9wcm9kdWN0c1wiPlZpZXc8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBDZW50ZXIsIEltYWdlLCBCdXR0b24sIFN0YWNrLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Q2VudGVyXG5cdFx0XHRcdHc9XCJmdWxsXCJcblx0XHRcdFx0YmdDb2xvcj1cInJlZC4zMDBcIlxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjR4bFwiPkhvbWUgUGFnZTwvVGV4dD5cblx0XHRcdDwvQ2VudGVyPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6Jzc2NWY0ZDQ5JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1CVVJHMk5MWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS1UyVkxHWTcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02RTNNTVNZMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1BV0lBQzVRLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1GVUNNNjU3WC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV0RZSjZHNkcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9ob21lJzp7J2lkJzoncm91dGVzL2hvbWUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaG9tZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ob21lLVRPSVNDUkVZLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtNUdXTVlKVVUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVVYWE5QVU1DLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9kdWN0cyc6eydpZCc6J3JvdXRlcy9wcm9kdWN0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9kdWN0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcm9kdWN0cy1IRzdGUlJOQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVVhYTlBVTUMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTc2NUY0RDQ5LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFn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
