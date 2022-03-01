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
    alignItems: "center",
    justifyContent: "space-between",
    bgColor: "rgba(255,255,255,0.20)",
    backdropFilter: `blur(10px)`,
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
    h: "100vh"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_react6.Flex, {
    flexGrow: 1,
    overflowY: "auto"
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
var import_remix = __toESM(require_remix());
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix.Outlet, null)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey there's an error in the root file"))));
}
function CatchBoundary() {
  let caught = (0, import_remix.useCatch)();
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
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix.Meta, null), /* @__PURE__ */ React.createElement(import_remix.Links, null), serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ React.createElement("style", {
    key,
    "data-emotion": `${key} ${ids.join(" ")}`,
    dangerouslySetInnerHTML: { __html: css }
  }))), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react10.ChakraProvider, {
    theme
  }, children), /* @__PURE__ */ React.createElement(import_remix.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix.Scripts, null), /* @__PURE__ */ React.createElement(import_remix.LiveReload, null)));
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
var import_react11 = require("@chakra-ui/react");
function ProductCard({
  product
}) {
  const { name, url, imageUrl, tagline, topic, upvotes } = product;
  return /* @__PURE__ */ React.createElement(import_react11.Stack, {
    pos: "relative",
    border: "2px solid black",
    w: "315px",
    h: "auto",
    p: "4",
    borderRadius: "20px",
    bgColor: "rgba(255,255,255,0.55)"
  }, /* @__PURE__ */ React.createElement(import_react11.HStack, {
    w: "full",
    justify: "space-between",
    align: "center"
  }, /* @__PURE__ */ React.createElement(import_react11.Stack, {
    h: "auto",
    alignSelf: "start",
    alignItems: "center",
    spacing: 0,
    shouldWrapChildren: true
  }, /* @__PURE__ */ React.createElement(import_react_icons.VercelLogoIcon, null), /* @__PURE__ */ React.createElement(import_react11.Text, {
    fontWeight: "semibold"
  }, upvotes)), /* @__PURE__ */ React.createElement(import_react11.Stack, {
    alignSelf: "start",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react11.Image, {
    src: `${imageUrl}`,
    boxSize: "60px",
    borderRadius: "50%",
    boxShadow: `0px 4px 15px 0px rgba(0,0,0,0.25)`
  }), /* @__PURE__ */ React.createElement(import_react11.Text, null, name)), /* @__PURE__ */ React.createElement(import_react11.Box, {
    bg: "#F4A261",
    borderRadius: 4,
    alignSelf: "start"
  }, /* @__PURE__ */ React.createElement(import_react11.Text, {
    color: "white"
  }, topic.charAt(0).toUpperCase() + topic.slice(1)))), /* @__PURE__ */ React.createElement(import_react11.Text, {
    noOfLines: 2
  }, tagline), /* @__PURE__ */ React.createElement(import_react11.HStack, {
    justify: "center"
  }, /* @__PURE__ */ React.createElement(import_react11.Button, {
    bgColor: "black",
    w: "auto",
    h: "36px",
    borderRadius: "5",
    rightIcon: /* @__PURE__ */ React.createElement(import_react_icons.VercelLogoIcon, null)
  }, /* @__PURE__ */ React.createElement(import_react11.Text, {
    color: "white"
  }, "Upvote")), /* @__PURE__ */ React.createElement(import_react11.Button, {
    bgColor: "black",
    w: "auto",
    h: "36px",
    borderRadius: "5",
    rightIcon: /* @__PURE__ */ React.createElement(import_react_icons.ArrowTopRightIcon, null)
  }, /* @__PURE__ */ React.createElement(import_react11.Link, {
    as: "a",
    href: url,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(import_react11.Text, {
    color: "white"
  }, "Check out")))));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/products.tsx
var import_react12 = require("@chakra-ui/react");
var import_remix2 = __toESM(require_remix());

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
  const products = (0, import_remix2.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_react12.Box, {
    pos: "relative",
    w: "full"
  }, /* @__PURE__ */ React.createElement(import_react12.Image, {
    position: "absolute",
    top: "10%",
    left: "-5%",
    zIndex: -1,
    src: "/red-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react12.Image, {
    position: "absolute",
    top: "35%",
    right: "0%",
    zIndex: -1,
    src: "/blue-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react12.Image, {
    position: "absolute",
    top: "40%",
    left: "0%",
    zIndex: -1,
    src: "/yellow-circle.png"
  }), /* @__PURE__ */ React.createElement(import_react12.Stack, {
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
var import_react13 = require("@remix-run/react");
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
  }, /* @__PURE__ */ React.createElement(import_react13.Link, {
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
var assets_manifest_default = { "version": "021b3e91", "entry": { "module": "/build/entry.client-N7BG7JDP.js", "imports": ["/build/_shared/chunk-KU2VLGY7.js", "/build/_shared/chunk-YAEYMSFJ.js", "/build/_shared/chunk-BYTEFRGT.js", "/build/_shared/chunk-MAWIAC5Q.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-HW6IHXRA.js", "imports": ["/build/_shared/chunk-WDYJ6G6G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-TOISCREY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-SOI7JV7L.js", "imports": ["/build/_shared/chunk-UXXNPUMC.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products": { "id": "routes/products", "parentId": "root", "path": "products", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/products-ZN27J2AI.js", "imports": ["/build/_shared/chunk-UXXNPUMC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-021B3E91.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgImVtcHR5LW1vZHVsZTouL2NvbnRleHQuY2xpZW50IiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vYXBwL2NvbnRleHQuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwgIi4uL2FwcC90aGVtZS50cyIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4IiwgIi4uL2FwcC9zZXJ2ZXIvc3VwYWJhc2Uuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9ob21lLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL3Byb2R1Y3RzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvaG9tZS50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3Byb2R1Y3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9kdWN0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9kdWN0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaG9tZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaG9tZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJob21lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L2VudHJ5JztcblxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSAnQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZSc7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuL2NyZWF0ZUVtb3Rpb25DYWNoZSc7XG5pbXBvcnQgU2VydmVyU3R5bGVDb250ZXh0IGZyb20gJy4vY29udGV4dC5zZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcblx0cmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuXHRyZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG5cdGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG5cdGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG5cdGNvbnN0IGh0bWwgPSByZW5kZXJUb1N0cmluZyhcblx0XHQ8U2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtudWxsfT5cblx0XHRcdDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG5cdFx0XHRcdDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG5cdFx0XHQ8L0NhY2hlUHJvdmlkZXI+XG5cdFx0PC9TZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG5cblx0Y29uc3QgY2h1bmtzID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaHRtbCk7XG5cblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFNlcnZlclN0eWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y2h1bmtzLnN0eWxlc30+XG5cdFx0XHQ8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuXHRcdFx0XHQ8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuXHRcdFx0PC9DYWNoZVByb3ZpZGVyPlxuXHRcdDwvU2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKGA8IURPQ1RZUEUgaHRtbD4ke21hcmt1cH1gLCB7XG5cdFx0c3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG5cdFx0aGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuXHR9KTtcbn1cbiIsICJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycgfSk7XG59IiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJTdHlsZUNvbnRleHREYXRhIHtcbiAga2V5OiBzdHJpbmc7XG4gIGlkczogQXJyYXk8c3RyaW5nPjtcbiAgY3NzOiBzdHJpbmc7XG59XG5cbmNvbnN0IFNlcnZlclN0eWxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IFNlcnZlclN0eWxlQ29udGV4dERhdGFbXT4obnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclN0eWxlQ29udGV4dCIsICJpbXBvcnQgJ0Bmb250c291cmNlL29zd2FsZC9pbmRleC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9hbGVncmV5YS1zYy9pbmRleC5jc3MnO1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBTZXJ2ZXJTdHlsZUNvbnRleHQgZnJvbSAnfi9jb250ZXh0LnNlcnZlcic7XG5pbXBvcnQgQ2xpZW50U3R5bGVDb250ZXh0IGZyb20gJy4vY29udGV4dC5jbGllbnQnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICd+L3RoZW1lJztcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENlbnRlciwgVGV4dCwgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRPdXRsZXQsXG5cdE1ldGEsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxuXHR1c2VDYXRjaCxcbn0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PE91dGxldCAvPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuXHRcdFx0XHRcdDxwPntlcnJvci5tZXNzYWdlfTwvcD5cblx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHQ8cD5IZXkgdGhlcmUncyBhbiBlcnJvciBpbiB0aGUgcm9vdCBmaWxlPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdDwvRG9jdW1lbnQ+XG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuXHRsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxDZW50ZXIgaD1cImZ1bGxcIiB3PVwiZnVsbFwiPlxuXHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRiZ0dyYWRpZW50PVwibGluZWFyKHRvLXIsIGJyYW5kLnByaW1hcnksIGJyYW5kLmFjY2VudClcIlxuXHRcdFx0XHRcdFx0YmdDbGlwPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRmb250U2l6ZT1cIjZ4bFwiXG5cdFx0XHRcdFx0XHRmb250V2VpZ2h0PVwiQm9sZFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0UGFnZSBOb3QgRm91bmRcblx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxuaW50ZXJmYWNlIERvY3VtZW50UHJvcHMge1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xuXHR0aXRsZT86IHN0cmluZztcbn1cblxuY29uc3QgRG9jdW1lbnQgPSB3aXRoRW1vdGlvbkNhY2hlKFxuXHQoeyBjaGlsZHJlbiwgdGl0bGUgfTogRG9jdW1lbnRQcm9wcywgZW1vdGlvbkNhY2hlKSA9PiB7XG5cdFx0Y29uc3Qgc2VydmVyU3lsZURhdGEgPSB1c2VDb250ZXh0KFNlcnZlclN0eWxlQ29udGV4dCk7XG5cdFx0Y29uc3QgY2xpZW50U3R5bGVEYXRhID0gdXNlQ29udGV4dChDbGllbnRTdHlsZUNvbnRleHQpO1xuXHRcdC8vIE9ubHkgZXhlY3V0ZWQgb24gY2xpZW50XG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRcdC8vIHJlLWxpbmsgc2hlZXQgY29udGFpbmVyXG5cdFx0XHRlbW90aW9uQ2FjaGUuc2hlZXQuY29udGFpbmVyID0gZG9jdW1lbnQuaGVhZDtcblx0XHRcdC8vIHJlLWluamVjdCB0YWdzXG5cdFx0XHRjb25zdCB0YWdzID0gZW1vdGlvbkNhY2hlLnNoZWV0LnRhZ3M7XG5cdFx0XHRlbW90aW9uQ2FjaGUuc2hlZXQuZmx1c2goKTtcblx0XHRcdHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG5cdFx0XHRcdChlbW90aW9uQ2FjaGUuc2hlZXQgYXMgYW55KS5faW5zZXJ0VGFnKHRhZyk7XG5cdFx0XHR9KTtcblx0XHRcdC8vIHJlc2V0IGNhY2hlIHRvIHJlYXBwbHkgZ2xvYmFsIHN0eWxlc1xuXHRcdFx0Y2xpZW50U3R5bGVEYXRhLnJlc2V0KCk7XG5cdFx0fSwgW10pO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdFx0PGhlYWQ+XG5cdFx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuXHRcdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdFx0e3NlcnZlclN5bGVEYXRhPy5tYXAoKHsga2V5LCBpZHMsIGNzcyB9KSA9PiAoXG5cdFx0XHRcdFx0XHQ8c3R5bGVcblx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdGRhdGEtZW1vdGlvbj17YCR7a2V5fSAke2lkcy5qb2luKCcgJyl9YH1cblx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuXHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNzcyB9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9oZWFkPlxuXHRcdFx0XHQ8Ym9keT5cblx0XHRcdFx0XHQ8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT57Y2hpbGRyZW59PC9DaGFrcmFQcm92aWRlcj5cblx0XHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0XHQ8U2NyaXB0cyAvPlxuXHRcdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cblx0XHRcdFx0PC9ib2R5PlxuXHRcdFx0PC9odG1sPlxuXHRcdCk7XG5cdH1cbik7XG4iLCAiaW1wb3J0IHsgU3RhY2ssIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxTdGFjayBzcGFjaW5nPXswfSBiZz1cImJhY2tncm91bmQubWFpblwiIHc9XCIxMDB2d1wiIGg9XCIxMDB2aFwiPlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0PEZsZXggZmxleEdyb3c9ezF9IG92ZXJmbG93WT1cImF1dG9cIj5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9GbGV4PlxuXHRcdDwvU3RhY2s+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgQm94LCBIU3RhY2ssIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0cmV0dXJuIChcblx0XHQ8SFN0YWNrXG5cdFx0XHRhcz1cIm5hdlwiXG5cdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG5cdFx0XHRiZ0NvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwwLjIwKVwiXG5cdFx0XHRiYWNrZHJvcEZpbHRlcj17YGJsdXIoMTBweClgfVxuXHRcdFx0cD17NH1cblx0XHQ+XG5cdFx0XHQ8TGluayB0bz1cIi9cIj5cblx0XHRcdFx0PEhlYWRpbmcgZm9udFNpemU9XCIyNHB4XCIgZm9udFdlaWdodD1cImJvbGRcIj5cblx0XHRcdFx0XHRPbiBUaGUgSHVudFxuXHRcdFx0XHQ8L0hlYWRpbmc+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8Qm94PlxuXHRcdFx0XHQ8SW1hZ2Ugc3JjPVwiL21lbnUuc3ZnXCIgYWx0PVwiTWVudVwiIHc9XCJmdWxsXCIgaD1cImZ1bGxcIiAvPlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9IU3RhY2s+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuXHRmb250czoge1xuXHRcdGhlYWRpbmc6ICdPc3dhbGQsIHNhbnMtc2VyaWYnLFxuXHRcdGJvZHk6ICdBbGVncmV5YSBTQywgc2VyaWYnLFxuXHR9LFxufSk7XG4iLCAiaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ34vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgeyBCb3gsIENlbnRlciwgSW1hZ2UsIFN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgdHlwZSB7IFByb2R1Y3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vc2VydmVyL3N1cGFiYXNlLnNlcnZlcic7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ3Byb2R1Y3RzJykuc2VsZWN0KCcqJyk7XG5cdHJldHVybiBwcm9kdWN0cy5kYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBwcm9kdWN0czogUHJvZHVjdFtdID0gdXNlTG9hZGVyRGF0YSgpO1xuXG5cdHJldHVybiAoXG5cdFx0PEJveCBwb3M9XCJyZWxhdGl2ZVwiIHc9XCJmdWxsXCI+XG5cdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdHRvcD1cIjEwJVwiXG5cdFx0XHRcdGxlZnQ9XCItNSVcIlxuXHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRzcmM9XCIvcmVkLWNpcmNsZS5wbmdcIlxuXHRcdFx0Lz5cblx0XHRcdDxJbWFnZVxuXHRcdFx0XHRwb3NpdGlvbj1cImFic29sdXRlXCJcblx0XHRcdFx0dG9wPVwiMzUlXCJcblx0XHRcdFx0cmlnaHQ9XCIwJVwiXG5cdFx0XHRcdHpJbmRleD17LTF9XG5cdFx0XHRcdHNyYz1cIi9ibHVlLWNpcmNsZS5wbmdcIlxuXHRcdFx0Lz5cblx0XHRcdDxJbWFnZVxuXHRcdFx0XHRwb3NpdGlvbj1cImFic29sdXRlXCJcblx0XHRcdFx0dG9wPVwiNDAlXCJcblx0XHRcdFx0bGVmdD1cIjAlXCJcblx0XHRcdFx0ekluZGV4PXstMX1cblx0XHRcdFx0c3JjPVwiL3llbGxvdy1jaXJjbGUucG5nXCJcblx0XHRcdC8+XG5cdFx0XHQ8U3RhY2tcblx0XHRcdFx0dz1cImZ1bGxcIlxuXHRcdFx0XHRoPVwiZnVsbFwiXG5cdFx0XHRcdGp1c3RpZnk9XCJjZW50ZXJcIlxuXHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0c3BhY2luZz17M31cblx0XHRcdD5cblx0XHRcdFx0e3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuXHRcdFx0XHRcdDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L0JveD5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnfi90eXBlcyc7XG5pbXBvcnQgeyBBcnJvd1RvcFJpZ2h0SWNvbiwgVmVyY2VsTG9nb0ljb24gfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHtcblx0Qm94LFxuXHRCdXR0b24sXG5cdEhTdGFjayxcblx0SW1hZ2UsXG5cdFN0YWNrLFxuXHRUZXh0LFxuXHRMaW5rLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcblx0cHJvZHVjdDogUHJvZHVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQoe1xuXHRwcm9kdWN0LFxufTogUHJvZHVjdENhcmRQcm9wcyk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgeyBuYW1lLCB1cmwsIGltYWdlVXJsLCB0YWdsaW5lLCB0b3BpYywgdXB2b3RlcyB9OiBQcm9kdWN0ID0gcHJvZHVjdDtcblxuXHRyZXR1cm4gKFxuXHRcdDxTdGFja1xuXHRcdFx0cG9zPVwicmVsYXRpdmVcIlxuXHRcdFx0Ym9yZGVyPVwiMnB4IHNvbGlkIGJsYWNrXCJcblx0XHRcdHc9XCIzMTVweFwiXG5cdFx0XHRoPVwiYXV0b1wiXG5cdFx0XHRwPVwiNFwiXG5cdFx0XHRib3JkZXJSYWRpdXM9XCIyMHB4XCJcblx0XHRcdGJnQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNTUpXCJcblx0XHQ+XG5cdFx0XHQ8SFN0YWNrIHc9XCJmdWxsXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiPlxuXHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRoPVwiYXV0b1wiXG5cdFx0XHRcdFx0YWxpZ25TZWxmPVwic3RhcnRcIlxuXHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdHNwYWNpbmc9ezB9XG5cdFx0XHRcdFx0c2hvdWxkV3JhcENoaWxkcmVuXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VmVyY2VsTG9nb0ljb24gLz5cblx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PVwic2VtaWJvbGRcIj57dXB2b3Rlc308L1RleHQ+XG5cdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdDxTdGFjayBhbGlnblNlbGY9XCJzdGFydFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz17YCR7aW1hZ2VVcmx9YH1cblx0XHRcdFx0XHRcdGJveFNpemU9XCI2MHB4XCJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjUwJVwiXG5cdFx0XHRcdFx0XHRib3hTaGFkb3c9e2AwcHggNHB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC4yNSlgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHQ+e25hbWV9PC9UZXh0PlxuXHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQ8Qm94IGJnPVwiI0Y0QTI2MVwiIGJvcmRlclJhZGl1cz17NH0gYWxpZ25TZWxmPVwic3RhcnRcIj5cblx0XHRcdFx0XHQ8VGV4dCBjb2xvcj1cIndoaXRlXCI+XG5cdFx0XHRcdFx0XHR7dG9waWMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0b3BpYy5zbGljZSgxKX1cblx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0PC9IU3RhY2s+XG5cdFx0XHQ8VGV4dCBub09mTGluZXM9ezJ9Pnt0YWdsaW5lfTwvVGV4dD5cblx0XHRcdDxIU3RhY2sganVzdGlmeT1cImNlbnRlclwiPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YmdDb2xvcj1cImJsYWNrXCJcblx0XHRcdFx0XHR3PVwiYXV0b1wiXG5cdFx0XHRcdFx0aD1cIjM2cHhcIlxuXHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjVcIlxuXHRcdFx0XHRcdHJpZ2h0SWNvbj17PFZlcmNlbExvZ29JY29uIC8+fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFRleHQgY29sb3I9XCJ3aGl0ZVwiPlVwdm90ZTwvVGV4dD5cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRiZ0NvbG9yPVwiYmxhY2tcIlxuXHRcdFx0XHRcdHc9XCJhdXRvXCJcblx0XHRcdFx0XHRoPVwiMzZweFwiXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwiNVwiXG5cdFx0XHRcdFx0cmlnaHRJY29uPXs8QXJyb3dUb3BSaWdodEljb24gLz59XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TGluayBhcz1cImFcIiBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0PFRleHQgY29sb3I9XCJ3aGl0ZVwiPkNoZWNrIG91dDwvVGV4dD5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9IU3RhY2s+XG5cdFx0PC9TdGFjaz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnQsIFN1cGFiYXNlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuaWYgKCFwcm9jZXNzLmVudi5TVVBBQkFTRV9VUkwpXG5cdHRocm93IEVycm9yKCdTdXBhYmFzZSBVUkwgbm90IGZvdW5kIGluIGVudmlyb25tZW50Jyk7XG5pZiAoIXByb2Nlc3MuZW52LlNVUEFCQVNFX0tFWSlcblx0dGhyb3cgRXJyb3IoJ1N1cGFiYXNlIEtFWSBub3QgZm91bmQgaW4gZW52aXJvbm1lbnQnKTtcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlOiBTdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChcblx0cHJvY2Vzcy5lbnYuU1VQQUJBU0VfVVJMIGFzIHN0cmluZyxcblx0cHJvY2Vzcy5lbnYuU1VQQUJBU0VfS0VZIGFzIHN0cmluZ1xuKTtcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJztcbmltcG9ydCB7IEFycm93UmlnaHRJY29uIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWljb25zJztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDZW50ZXIsIEltYWdlLCBTdGFjaywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHRpdGxlOiAnT24gVGhlIEh1bnQnLFxuXHRcdGRlc2NyaXB0aW9uOiBcIlByb2R1Y3QgSHVudCdzIGRhaWx5IG5ld3NwYXBlclwiLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U3RhY2tcblx0XHRcdFx0cG9zPVwicmVsYXRpdmVcIlxuXHRcdFx0XHRwYWRkaW5nPVwiNlwiXG5cdFx0XHRcdHc9XCJmdWxsXCJcblx0XHRcdFx0YWxpZ25Db250ZW50PVwiY2VudGVyXCJcblx0XHRcdFx0anVzdGlmeT1cImNlbnRlclwiXG5cdFx0XHRcdHNwYWNpbmc9ezEwfVxuXHRcdFx0PlxuXHRcdFx0XHQ8Q2VudGVyPlxuXHRcdFx0XHRcdDxDZW50ZXJcblx0XHRcdFx0XHRcdGJnQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNTUpXCJcblx0XHRcdFx0XHRcdGJhY2tkcm9wRmlsdGVyPXtgYmx1cigxMHB4KWB9XG5cdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcblx0XHRcdFx0XHRcdHc9ezMzMH1cblx0XHRcdFx0XHRcdGg9ezI5OH1cblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz17MjB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJveCB3PVwiMjMwcHhcIj5cblx0XHRcdFx0XHRcdFx0PFN0YWNrIHNwYWNpbmc9ey01fSB3PVwiZnVsbFwiIHNob3VsZFdyYXBDaGlsZHJlbj5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjQ4cHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0T25cblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplPVwiM3JlbVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRtbD1cIjI1JVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0PVwiYm9sZFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhlXG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZT1cIjNyZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWw9XCI1MCVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodD1cImJvbGRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdEh1bnRcblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRTaXplPVwiMjBweFwiIGNvbG9yPVwiIzYzNjM2M1wiPlxuXHRcdFx0XHRcdFx0XHRcdFZpZXcgdGhlIGxhdGVzdCBiZXN0IHByb2R1Y3RzXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdFx0XHR0b3A9XCIxMCVcIlxuXHRcdFx0XHRcdFx0bGVmdD1cIi01JVwiXG5cdFx0XHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRcdFx0c3JjPVwiL3JlZC1jaXJjbGUucG5nXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdFx0XHR0b3A9XCIzNSVcIlxuXHRcdFx0XHRcdFx0cmlnaHQ9XCIwJVwiXG5cdFx0XHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRcdFx0c3JjPVwiL2JsdWUtY2lyY2xlLnBuZ1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHRcdFx0dG9wPVwiNDAlXCJcblx0XHRcdFx0XHRcdGxlZnQ9XCIwJVwiXG5cdFx0XHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRcdFx0c3JjPVwiL3llbGxvdy1jaXJjbGUucG5nXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdFx0PENlbnRlcj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRiZ0NvbG9yPVwiYmxhY2tcIlxuXHRcdFx0XHRcdFx0Y29sb3I9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjE1M3B4XCJcblx0XHRcdFx0XHRcdGhlaWdodD1cIjYwcHhcIlxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwiMTVweFwiXG5cdFx0XHRcdFx0XHRyaWdodEljb249ezxBcnJvd1JpZ2h0SWNvbiAvPn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjIycHhcIiBmb250RmFtaWx5PVwiUm9ib3RvXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL3Byb2R1Y3RzXCI+VmlldzwvTGluaz5cblx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IENlbnRlciwgSW1hZ2UsIEJ1dHRvbiwgU3RhY2ssIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpOiBKU1guRWxlbWVudCB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxDZW50ZXJcblx0XHRcdFx0dz1cImZ1bGxcIlxuXHRcdFx0XHRiZ0NvbG9yPVwicmVkLjMwMFwiXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcblx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxUZXh0IGZvbnRTaXplPVwiNHhsXCI+SG9tZSBQYWdlPC9UZXh0PlxuXHRcdFx0PC9DZW50ZXI+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMDIxYjNlOTEnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LU43Qkc3SkRQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LVTJWTEdZNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlBRVlNU0ZKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQllURUZSR1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NQVdJQUM1US5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtSFc2SUhYUkEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdEWUo2RzZHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvaG9tZSc6eydpZCc6J3JvdXRlcy9ob21lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2hvbWUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaG9tZS1UT0lTQ1JFWS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVNPSTdKVjdMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VWFhOUFVNQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvZHVjdHMnOnsnaWQnOidyb3V0ZXMvcHJvZHVjdHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJvZHVjdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJvZHVjdHMtWk4yN0oyQUkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVVYWE5QVU1DLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0wMjFCM0U5MS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUEsWUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQWpCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtB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
