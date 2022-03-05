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

// empty-module:~/context.client
var require_context = __commonJS({
  "empty-module:~/context.client"(exports, module2) {
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
var import_framer_motion = require("framer-motion");
var import_react6 = require("@chakra-ui/react");
var MotionImage = (0, import_framer_motion.motion)(import_react6.Image);
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(import_react6.Box, null, /* @__PURE__ */ React.createElement(import_react6.Stack, {
    spacing: 0,
    pos: "relative",
    w: "100vw",
    h: "100vh",
    overflowX: "hidden"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_react6.Flex, {
    flexGrow: 1
  }, children)), /* @__PURE__ */ React.createElement(MotionImage, {
    position: "absolute",
    top: "20%",
    left: "-5%",
    zIndex: -1,
    src: "/red-circle.png",
    animate: {
      x: ["0%", "100%", "50%", "0%", "0%"],
      y: ["0%", "100%", "0%", "100%", "0%"]
    },
    transition: {
      type: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15
    }
  }), /* @__PURE__ */ React.createElement(MotionImage, {
    position: "absolute",
    top: "35%",
    right: "0%",
    zIndex: -1,
    src: "/blue-circle.png",
    animate: {
      x: ["0%", "-130%", "-130%", "0%", "0%"],
      y: ["100%", "-100%", "100%", "-100%", "100%"]
    },
    transition: {
      type: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror ",
      duration: 15
    }
  }), /* @__PURE__ */ React.createElement(MotionImage, {
    position: "absolute",
    top: "50%",
    left: "0%",
    zIndex: -1,
    src: "/yellow-circle.png",
    animate: {
      x: ["0%", "100%", "0%", "100%", "0%"],
      y: ["0%", "-100%", "-100%", "0%", "0%"]
    },
    transition: {
      type: "spring",
      repeat: Infinity,
      repeatType: "mirror ",
      duration: 15
    }
  }));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/root.tsx
var import_context3 = __toESM(require_context());

// app/theme.ts
init_react();
var import_react7 = require("@chakra-ui/react");
var theme = (0, import_react7.extendTheme)({
  styles: {
    fonts: {
      heading: "Oswald, sans-serif",
      body: "Alegreya SC, serif"
    }
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

// app/utils/index.ts
init_react();
var convertNum = (num) => {
  if (num < 1e3)
    return num;
  const si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" }
  ];
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].v) {
      break;
    }
  }
  return (num / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].s;
};

// app/components/ProductCard.tsx
var import_go = require("react-icons/go");
var import_react_icons = require("@radix-ui/react-icons");
var import_react11 = require("@chakra-ui/react");
function ProductCard({
  product
}) {
  const { name, url, image_url, tagline, topic, upvotes } = product;
  return /* @__PURE__ */ React.createElement(import_react11.Stack, {
    p: "4",
    h: "auto",
    w: "315px",
    pos: "relative",
    borderRadius: "20px",
    border: "2px solid black",
    bgColor: "rgba(255,255,255,0.55)"
  }, /* @__PURE__ */ React.createElement(import_react11.Stack, {
    h: "auto",
    spacing: 0,
    pos: "absolute",
    alignSelf: "start",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_go.GoTriangleUp, {
    style: {
      color: "green",
      fill: "green",
      width: "25px",
      height: "25px"
    }
  }), /* @__PURE__ */ React.createElement(import_react11.Text, {
    fontWeight: "semibold"
  }, convertNum(upvotes))), /* @__PURE__ */ React.createElement(import_react11.HStack, {
    w: "full",
    justify: "center"
  }, /* @__PURE__ */ React.createElement(import_react11.Stack, {
    alignSelf: "start",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react11.Image, {
    src: `${image_url}`,
    boxSize: "60px",
    borderRadius: "50%",
    objectFit: "fill",
    boxShadow: `0px 4px 15px 0px rgba(0,0,0,0.25)`
  }), /* @__PURE__ */ React.createElement(import_react11.Text, null, name)), /* @__PURE__ */ React.createElement(import_react11.Center, {
    p: "0.5",
    top: "5",
    right: "5",
    bg: "#F4A261",
    w: "80px",
    h: "18px",
    pos: "absolute",
    alignSelf: "start",
    borderRadius: 4
  }, /* @__PURE__ */ React.createElement(import_react11.Text, {
    color: "white",
    isTruncated: true,
    fontSize: "sm"
  }, topic["node"]["name"].charAt(0).toUpperCase() + topic["node"]["name"].slice(1)))), /* @__PURE__ */ React.createElement(import_react11.Text, {
    color: "black"
  }, tagline), /* @__PURE__ */ React.createElement(import_react11.Box, {
    w: "full",
    p: "2"
  }, /* @__PURE__ */ React.createElement(import_react11.HStack, {
    justify: "center"
  }, /* @__PURE__ */ React.createElement(import_react11.Link, {
    href: url,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(import_react11.HStack, {
    w: "auto",
    h: "36px",
    bgColor: "black",
    borderRadius: "5",
    p: "3",
    shouldWrapChildren: true
  }, /* @__PURE__ */ React.createElement(import_react11.Text, {
    color: "white"
  }, "Check out"), /* @__PURE__ */ React.createElement(import_react_icons.ArrowTopRightIcon, {
    color: "white"
  }))), /* @__PURE__ */ React.createElement(import_react_icons.Share2Icon, {
    width: 20,
    height: 20,
    onClick: () => navigator.share({ url, title: name })
  }))));
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
var import_framer_motion2 = require("framer-motion");
var import_react12 = require("@chakra-ui/react");
var import_remix2 = __toESM(require_remix());
var MotionBox = (0, import_framer_motion2.motion)(import_react12.Box);
var loader = async () => {
  const { data: products, error } = await supabase.from("products").select("*");
  if (error || !products) {
    throw new Response("Couldn't fetch products", { status: 500 });
  }
  return products.map((product) => {
    if (product.image_url.includes(".gif")) {
      product.image_url = "https://cdn-icons-png.flaticon.com/512/2111/2111556.png";
    }
    product.topic = product.topics.reduce((a, b) => {
      return a.node.name.length <= b.node.name.length ? a : b;
    });
    return product;
  });
};
function Products() {
  const products = (0, import_remix2.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_react12.Box, {
    pos: "relative",
    w: "full",
    h: "full"
  }, /* @__PURE__ */ React.createElement(import_react12.Stack, {
    w: "full",
    h: "full",
    justify: "center",
    alignItems: "center",
    mt: 9,
    spacing: 5
  }, products.map((product, index) => /* @__PURE__ */ React.createElement(MotionBox, {
    initial: "hidden",
    animate: "visible",
    key: index,
    custom: index,
    variants: {
      hidden: {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100
      },
      visible: (index2) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: index2 * 0.35,
          duration: 0.9
        }
      })
    }
  }, /* @__PURE__ */ React.createElement(ProductCard, {
    key: product.id,
    product
  })))));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());
var import_react13 = require("@chakra-ui/react");
var import_react_icons2 = require("@radix-ui/react-icons");
var meta = () => {
  return {
    title: "On The Hunt",
    description: "View the latest products from Product Hunt",
    "twitter:card": "summary_large_image",
    "twitter:site": "@darryl_codes",
    "twitter:creator": "@darryl_codes",
    "twitter:title": "On The Hunt",
    "twitter:description": "View the latest products from Product Hunt",
    "twitter:image": "https://oth-prod.vercel.app/SEO.png",
    "og:title": "On The Hunt",
    "og:description": "View the latest products from Product Hunt",
    "og:image": "https://oth-prod.vercel.app/SEO.png",
    "og:url": "https://oth-prod.vercel.app/",
    "og:site_name": "On The Hunt",
    "og:type": "website"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react13.Stack, {
    pos: "relative",
    w: "full",
    alignContent: "center",
    justify: "center",
    spacing: 10
  }, /* @__PURE__ */ React.createElement(import_react13.Center, null, /* @__PURE__ */ React.createElement(import_react13.Center, {
    bgColor: "rgba(255,255,255,0.55)",
    backdropFilter: `blur(10px)`,
    flexDirection: "column",
    w: 330,
    h: 298,
    borderRadius: 20
  }, /* @__PURE__ */ React.createElement(import_react13.Box, {
    w: "230px"
  }, /* @__PURE__ */ React.createElement(import_react13.Stack, {
    spacing: -5,
    w: "full",
    shouldWrapChildren: true
  }, /* @__PURE__ */ React.createElement(import_react13.Text, {
    fontSize: "3rem",
    fontWeight: "bold"
  }, "On"), /* @__PURE__ */ React.createElement(import_react13.Text, {
    fontSize: "3rem",
    ml: "25%",
    fontWeight: "bold"
  }, "The"), /* @__PURE__ */ React.createElement(import_react13.Text, {
    fontSize: "3rem",
    ml: "50%",
    fontWeight: "bold"
  }, "Hunt"))), /* @__PURE__ */ React.createElement(import_react13.Text, {
    fontSize: "20px",
    color: "#636363"
  }, "View the latest best products"))), /* @__PURE__ */ React.createElement(import_react13.Center, null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/products",
    style: { textDecoration: "none", color: "inherit" }
  }, /* @__PURE__ */ React.createElement(import_react13.HStack, {
    bgColor: "black",
    color: "white",
    width: "153px",
    height: "60px",
    borderRadius: "15px",
    justify: "center"
  }, /* @__PURE__ */ React.createElement(import_react13.Text, {
    fontSize: "22px",
    fontFamily: "Roboto"
  }, "View"), /* @__PURE__ */ React.createElement(import_react_icons2.ArrowRightIcon, null))))));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
init_react();
var import_react14 = require("@chakra-ui/react");
function Home() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react14.Center, {
    w: "full",
    bgColor: "red.300",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react14.Text, {
    fontSize: "4xl"
  }, "Home Page")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "4cde6021", "entry": { "module": "/build/entry.client-NB6KWGDZ.js", "imports": ["/build/_shared/chunk-NXAZPUMC.js", "/build/_shared/chunk-XIFU2I7F.js", "/build/_shared/chunk-YFM5L3I5.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4U5ZEYSE.js", "imports": ["/build/_shared/chunk-JOHW3RVA.js", "/build/_shared/chunk-KHMOOMAJ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-WC7GCIQY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-D4RZ4QGL.js", "imports": ["/build/_shared/chunk-TQNXSATZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products": { "id": "routes/products", "parentId": "root", "path": "products", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/products-EUOSJZ2W.js", "imports": ["/build/_shared/chunk-TQNXSATZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-4CDE6021.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgImVtcHR5LW1vZHVsZTp+L2NvbnRleHQuY2xpZW50IiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vYXBwL2NvbnRleHQuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwgIi4uL2FwcC90aGVtZS50cyIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4IiwgIi4uL2FwcC91dGlscy9pbmRleC50cyIsICIuLi9hcHAvc2VydmVyL3N1cGFiYXNlLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvaG9tZS50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL2hvbWUudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9wcm9kdWN0c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJvZHVjdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvZHVjdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2hvbWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvbWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdC9lbnRyeSc7XG5cbmltcG9ydCBjcmVhdGVFbW90aW9uU2VydmVyIGZyb20gJ0BlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2UnO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnLi9jcmVhdGVFbW90aW9uQ2FjaGUnO1xuaW1wb3J0IFNlcnZlclN0eWxlQ29udGV4dCBmcm9tICcuL2NvbnRleHQuc2VydmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcblx0cmVxdWVzdDogUmVxdWVzdCxcblx0cmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG5cdHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcblx0cmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuXHRjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuXHRjb25zdCB7IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIH0gPSBjcmVhdGVFbW90aW9uU2VydmVyKGNhY2hlKTtcblxuXHRjb25zdCBodG1sID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFNlcnZlclN0eWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bnVsbH0+XG5cdFx0XHQ8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuXHRcdFx0XHQ8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuXHRcdFx0PC9DYWNoZVByb3ZpZGVyPlxuXHRcdDwvU2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xuXG5cdGNvbnN0IGNodW5rcyA9IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKGh0bWwpO1xuXG5cdGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuXHRcdDxTZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NodW5rcy5zdHlsZXN9PlxuXHRcdFx0PENhY2hlUHJvdmlkZXIgdmFsdWU9e2NhY2hlfT5cblx0XHRcdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cblx0XHRcdDwvQ2FjaGVQcm92aWRlcj5cblx0XHQ8L1NlcnZlclN0eWxlQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcblxuXHRyZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG5cblx0cmV0dXJuIG5ldyBSZXNwb25zZShgPCFET0NUWVBFIGh0bWw+JHttYXJrdXB9YCwge1xuXHRcdHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuXHRcdGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcblx0fSk7XG59XG4iLCAiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCkge1xuICByZXR1cm4gY3JlYXRlQ2FjaGUoeyBrZXk6ICdjc3MnIH0pO1xufSIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmVyU3R5bGVDb250ZXh0RGF0YSB7XG4gIGtleTogc3RyaW5nO1xuICBpZHM6IEFycmF5PHN0cmluZz47XG4gIGNzczogc3RyaW5nO1xufVxuXG5jb25zdCBTZXJ2ZXJTdHlsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PG51bGwgfCBTZXJ2ZXJTdHlsZUNvbnRleHREYXRhW10+KG51bGwpO1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJTdHlsZUNvbnRleHQiLCAiaW1wb3J0ICdAZm9udHNvdXJjZS9vc3dhbGQvNDAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL2FsZWdyZXlhLXNhbnMtc2MvNzAwLmNzcyc7XG4vLyBpbXBvcnQgJ0Bmb250c291cmNlL2FsZWdyZXlhLXNhbnMtc2MvNzAwLmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFNlcnZlclN0eWxlQ29udGV4dCBmcm9tICd+L2NvbnRleHQuc2VydmVyJztcbmltcG9ydCBDbGllbnRTdHlsZUNvbnRleHQgZnJvbSAnfi9jb250ZXh0LmNsaWVudCc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vdGhlbWUnO1xuaW1wb3J0IHsgd2l0aEVtb3Rpb25DYWNoZSB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2VudGVyLCBUZXh0LCBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHtcblx0TGlua3MsXG5cdExpdmVSZWxvYWQsXG5cdE91dGxldCxcblx0TWV0YSxcblx0U2NyaXB0cyxcblx0U2Nyb2xsUmVzdG9yYXRpb24sXG5cdHVzZUNhdGNoLFxufSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQ+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8L0RvY3VtZW50PlxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG5cdFx0XHRcdFx0PHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuXHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdDxwPkhleSB0aGVyZSdzIGFuIGVycm9yIGluIHRoZSByb290IGZpbGU8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG5cdGxldCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PENlbnRlciBoPVwiZnVsbFwiIHc9XCJmdWxsXCI+XG5cdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdGJnR3JhZGllbnQ9XCJsaW5lYXIodG8tciwgYnJhbmQucHJpbWFyeSwgYnJhbmQuYWNjZW50KVwiXG5cdFx0XHRcdFx0XHRiZ0NsaXA9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGZvbnRTaXplPVwiNnhsXCJcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9XCJCb2xkXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRQYWdlIE5vdCBGb3VuZFxuXHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8L0RvY3VtZW50PlxuXHQpO1xufVxuXG5pbnRlcmZhY2UgRG9jdW1lbnRQcm9wcyB7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG5cdHRpdGxlPzogc3RyaW5nO1xufVxuXG5jb25zdCBEb2N1bWVudCA9IHdpdGhFbW90aW9uQ2FjaGUoXG5cdCh7IGNoaWxkcmVuLCB0aXRsZSB9OiBEb2N1bWVudFByb3BzLCBlbW90aW9uQ2FjaGUpID0+IHtcblx0XHRjb25zdCBzZXJ2ZXJTeWxlRGF0YSA9IHVzZUNvbnRleHQoU2VydmVyU3R5bGVDb250ZXh0KTtcblx0XHRjb25zdCBjbGllbnRTdHlsZURhdGEgPSB1c2VDb250ZXh0KENsaWVudFN0eWxlQ29udGV4dCk7XG5cdFx0Ly8gT25seSBleGVjdXRlZCBvbiBjbGllbnRcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdFx0Ly8gcmUtbGluayBzaGVldCBjb250YWluZXJcblx0XHRcdGVtb3Rpb25DYWNoZS5zaGVldC5jb250YWluZXIgPSBkb2N1bWVudC5oZWFkO1xuXHRcdFx0Ly8gcmUtaW5qZWN0IHRhZ3Ncblx0XHRcdGNvbnN0IHRhZ3MgPSBlbW90aW9uQ2FjaGUuc2hlZXQudGFncztcblx0XHRcdGVtb3Rpb25DYWNoZS5zaGVldC5mbHVzaCgpO1xuXHRcdFx0dGFncy5mb3JFYWNoKCh0YWcpID0+IHtcblx0XHRcdFx0KGVtb3Rpb25DYWNoZS5zaGVldCBhcyBhbnkpLl9pbnNlcnRUYWcodGFnKTtcblx0XHRcdH0pO1xuXHRcdFx0Ly8gcmVzZXQgY2FjaGUgdG8gcmVhcHBseSBnbG9iYWwgc3R5bGVzXG5cdFx0XHRjbGllbnRTdHlsZURhdGEucmVzZXQoKTtcblx0XHR9LCBbXSk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0XHQ8aGVhZD5cblx0XHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdFx0Y29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG5cdFx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0XHQ8TGlua3MgLz5cblx0XHRcdFx0XHR7c2VydmVyU3lsZURhdGE/Lm1hcCgoeyBrZXksIGlkcywgY3NzIH0pID0+IChcblx0XHRcdFx0XHRcdDxzdHlsZVxuXHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0ZGF0YS1lbW90aW9uPXtgJHtrZXl9ICR7aWRzLmpvaW4oJyAnKX1gfVxuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG5cdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY3NzIH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2hlYWQ+XG5cdFx0XHRcdDxib2R5PlxuXHRcdFx0XHRcdDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PntjaGlsZHJlbn08L0NoYWtyYVByb3ZpZGVyPlxuXHRcdFx0XHRcdDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuXHRcdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdFx0e3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0XHQ8L2JvZHk+XG5cdFx0XHQ8L2h0bWw+XG5cdFx0KTtcblx0fVxuKTtcbiIsICJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgU3RhY2ssIEZsZXgsIEltYWdlUHJvcHMsIEltYWdlLCBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuY29uc3QgTW90aW9uSW1hZ2UgPSBtb3Rpb248SW1hZ2VQcm9wcz4oSW1hZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxCb3g+XG5cdFx0XHQ8U3RhY2tcblx0XHRcdFx0c3BhY2luZz17MH1cblx0XHRcdFx0cG9zPVwicmVsYXRpdmVcIlxuXHRcdFx0XHR3PVwiMTAwdndcIlxuXHRcdFx0XHRoPVwiMTAwdmhcIlxuXHRcdFx0XHRvdmVyZmxvd1g9XCJoaWRkZW5cIlxuXHRcdFx0PlxuXHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdDxGbGV4IGZsZXhHcm93PXsxfT57Y2hpbGRyZW59PC9GbGV4PlxuXHRcdFx0PC9TdGFjaz5cblx0XHRcdDxNb3Rpb25JbWFnZVxuXHRcdFx0XHRwb3NpdGlvbj1cImFic29sdXRlXCJcblx0XHRcdFx0dG9wPVwiMjAlXCJcblx0XHRcdFx0bGVmdD1cIi01JVwiXG5cdFx0XHRcdHpJbmRleD17LTF9XG5cdFx0XHRcdHNyYz1cIi9yZWQtY2lyY2xlLnBuZ1wiXG5cdFx0XHRcdGFuaW1hdGU9e3tcblx0XHRcdFx0XHR4OiBbJzAlJywgJzEwMCUnLCAnNTAlJywgJzAlJywgJzAlJ10sXG5cdFx0XHRcdFx0eTogWycwJScsICcxMDAlJywgJzAlJywgJzEwMCUnLCAnMCUnXSxcblx0XHRcdFx0fX1cblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHR0eXBlOiAnZWFzZUluT3V0Jyxcblx0XHRcdFx0XHRyZXBlYXQ6IEluZmluaXR5LFxuXHRcdFx0XHRcdHJlcGVhdFR5cGU6ICdtaXJyb3InLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxNSxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHQ8TW90aW9uSW1hZ2Vcblx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdHRvcD1cIjM1JVwiXG5cdFx0XHRcdHJpZ2h0PVwiMCVcIlxuXHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRzcmM9XCIvYmx1ZS1jaXJjbGUucG5nXCJcblx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdHg6IFsnMCUnLCAnLTEzMCUnLCAnLTEzMCUnLCAnMCUnLCAnMCUnXSxcblx0XHRcdFx0XHR5OiBbJzEwMCUnLCAnLTEwMCUnLCAnMTAwJScsICctMTAwJScsICcxMDAlJ10sXG5cdFx0XHRcdH19XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0cmFuc2l0aW9uPXt7XG5cdFx0XHRcdFx0dHlwZTogJ2Vhc2VJbk91dCcsXG5cdFx0XHRcdFx0cmVwZWF0OiBJbmZpbml0eSxcblx0XHRcdFx0XHRyZXBlYXRUeXBlOiAnbWlycm9yICcsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDE1LFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxNb3Rpb25JbWFnZVxuXHRcdFx0XHRwb3NpdGlvbj1cImFic29sdXRlXCJcblx0XHRcdFx0dG9wPVwiNTAlXCJcblx0XHRcdFx0bGVmdD1cIjAlXCJcblx0XHRcdFx0ekluZGV4PXstMX1cblx0XHRcdFx0c3JjPVwiL3llbGxvdy1jaXJjbGUucG5nXCJcblx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdHg6IFsnMCUnLCAnMTAwJScsICcwJScsICcxMDAlJywgJzAlJ10sXG5cdFx0XHRcdFx0eTogWycwJScsICctMTAwJScsICctMTAwJScsICcwJScsICcwJSddLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dHJhbnNpdGlvbj17e1xuXHRcdFx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0XHRcdHJlcGVhdDogSW5maW5pdHksXG5cdFx0XHRcdFx0cmVwZWF0VHlwZTogJ21pcnJvciAnLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxNSxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0PC9Cb3g+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgQm94LCBIU3RhY2ssIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0cmV0dXJuIChcblx0XHQ8SFN0YWNrXG5cdFx0XHRhcz1cIm5hdlwiXG5cdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHR0b3A9XCIwXCJcblx0XHRcdHBvc2l0aW9uPVwic3RpY2t5XCJcblx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0anVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcblx0XHRcdGJnQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuMjApXCJcblx0XHRcdGJhY2tkcm9wRmlsdGVyPXtgYmx1cigxMHB4KWB9XG5cdFx0XHR6SW5kZXg9ezF9XG5cdFx0XHRwPXs0fVxuXHRcdD5cblx0XHRcdDxMaW5rIHRvPVwiL1wiPlxuXHRcdFx0XHQ8SGVhZGluZyBmb250U2l6ZT1cIjI0cHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuXHRcdFx0XHRcdE9uIFRoZSBIdW50XG5cdFx0XHRcdDwvSGVhZGluZz5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxCb3g+XG5cdFx0XHRcdDxJbWFnZSBzcmM9XCIvbWVudS5zdmdcIiBhbHQ9XCJNZW51XCIgdz1cImZ1bGxcIiBoPVwiZnVsbFwiIC8+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L0hTdGFjaz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG5cdHN0eWxlczoge1xuXHRcdGZvbnRzOiB7XG5cdFx0XHRoZWFkaW5nOiAnT3N3YWxkLCBzYW5zLXNlcmlmJyxcblx0XHRcdGJvZHk6ICdBbGVncmV5YSBTQywgc2VyaWYnLFxuXHRcdH0sXG5cdH0sXG59KTtcbiIsICJpbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnfi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkJztcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vc2VydmVyL3N1cGFiYXNlLnNlcnZlcic7XG5pbXBvcnQgdHlwZSB7IFByb2R1Y3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IEJveCwgQm94UHJvcHMsIFN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcblxuY29uc3QgTW90aW9uQm94ID0gbW90aW9uPEJveFByb3BzPihCb3gpO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPFByb2R1Y3RbXT4gPT4ge1xuXHRjb25zdCB7IGRhdGE6IHByb2R1Y3RzLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Vcblx0XHQuZnJvbSgncHJvZHVjdHMnKVxuXHRcdC5zZWxlY3QoJyonKTtcblxuXHRpZiAoZXJyb3IgfHwgIXByb2R1Y3RzKSB7XG5cdFx0dGhyb3cgbmV3IFJlc3BvbnNlKFwiQ291bGRuJ3QgZmV0Y2ggcHJvZHVjdHNcIiwgeyBzdGF0dXM6IDUwMCB9KTtcblx0fVxuXG5cdHJldHVybiBwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IGFueSkgPT4ge1xuXHRcdGlmIChwcm9kdWN0LmltYWdlX3VybC5pbmNsdWRlcygnLmdpZicpKSB7XG5cdFx0XHRwcm9kdWN0LmltYWdlX3VybCA9XG5cdFx0XHRcdCdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8yMTExLzIxMTE1NTYucG5nJztcblx0XHR9XG5cblx0XHQvLyBHZXQgdGhlIHNob3J0ZXN0IHRvcGljXG5cdFx0cHJvZHVjdC50b3BpYyA9IHByb2R1Y3QudG9waWNzLnJlZHVjZShcblx0XHRcdChhOiB7IG5vZGU6IHsgbmFtZTogc3RyaW5nIH0gfSwgYjogeyBub2RlOiB7IG5hbWU6IHN0cmluZyB9IH0pID0+IHtcblx0XHRcdFx0cmV0dXJuIGEubm9kZS5uYW1lLmxlbmd0aCA8PSBiLm5vZGUubmFtZS5sZW5ndGggPyBhIDogYjtcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiBwcm9kdWN0O1xuXHR9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IHVzZUxvYWRlckRhdGEoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxCb3ggcG9zPVwicmVsYXRpdmVcIiB3PVwiZnVsbFwiIGg9XCJmdWxsXCI+XG5cdFx0XHQ8U3RhY2tcblx0XHRcdFx0dz1cImZ1bGxcIlxuXHRcdFx0XHRoPVwiZnVsbFwiXG5cdFx0XHRcdGp1c3RpZnk9XCJjZW50ZXJcIlxuXHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0bXQ9ezl9XG5cdFx0XHRcdHNwYWNpbmc9ezV9XG5cdFx0XHQ+XG5cdFx0XHRcdHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PE1vdGlvbkJveFxuXHRcdFx0XHRcdFx0aW5pdGlhbD1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRhbmltYXRlPVwidmlzaWJsZVwiXG5cdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0XHRcdFx0Y3VzdG9tPXtpbmRleH1cblx0XHRcdFx0XHRcdHZhcmlhbnRzPXt7XG5cdFx0XHRcdFx0XHRcdGhpZGRlbjoge1xuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHRcdFx0eDogaW5kZXggJSAyID09PSAwID8gLTEwMCA6IDEwMCxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0dmlzaWJsZTogKGluZGV4KSA9PiAoe1xuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0XHRcdFx0eDogMCxcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxheTogaW5kZXggKiAwLjM1LFxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuOSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cblx0XHRcdFx0XHQ8L01vdGlvbkJveD5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvQm94PlxuXHQpO1xufVxuIiwgImltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICd+L3R5cGVzJztcbmltcG9ydCB7IGNvbnZlcnROdW0gfSBmcm9tICd+L3V0aWxzJztcbmltcG9ydCB7IEdvVHJpYW5nbGVVcCB9IGZyb20gJ3JlYWN0LWljb25zL2dvJztcbmltcG9ydCB7IEFycm93VG9wUmlnaHRJY29uLCBTaGFyZTJJY29uIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWljb25zJztcbmltcG9ydCB7XG5cdEhTdGFjayxcblx0SW1hZ2UsXG5cdFN0YWNrLFxuXHRUZXh0LFxuXHRMaW5rLFxuXHRDZW50ZXIsXG5cdEJveCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdENhcmRQcm9wcyB7XG5cdHByb2R1Y3Q6IFByb2R1Y3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHtcblx0cHJvZHVjdCxcbn06IFByb2R1Y3RDYXJkUHJvcHMpOiBKU1guRWxlbWVudCB7XG5cdGNvbnN0IHsgbmFtZSwgdXJsLCBpbWFnZV91cmwsIHRhZ2xpbmUsIHRvcGljLCB1cHZvdGVzIH06IFByb2R1Y3QgPSBwcm9kdWN0O1xuXG5cdHJldHVybiAoXG5cdFx0PFN0YWNrXG5cdFx0XHRwPVwiNFwiXG5cdFx0XHRoPVwiYXV0b1wiXG5cdFx0XHR3PVwiMzE1cHhcIlxuXHRcdFx0cG9zPVwicmVsYXRpdmVcIlxuXHRcdFx0Ym9yZGVyUmFkaXVzPVwiMjBweFwiXG5cdFx0XHRib3JkZXI9XCIycHggc29saWQgYmxhY2tcIlxuXHRcdFx0YmdDb2xvcj1cInJnYmEoMjU1LDI1NSwyNTUsMC41NSlcIlxuXHRcdD5cblx0XHRcdDxTdGFja1xuXHRcdFx0XHRoPVwiYXV0b1wiXG5cdFx0XHRcdHNwYWNpbmc9ezB9XG5cdFx0XHRcdHBvcz1cImFic29sdXRlXCJcblx0XHRcdFx0YWxpZ25TZWxmPVwic3RhcnRcIlxuXHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdD5cblx0XHRcdFx0PEdvVHJpYW5nbGVVcFxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRjb2xvcjogJ2dyZWVuJyxcblx0XHRcdFx0XHRcdGZpbGw6ICdncmVlbicsXG5cdFx0XHRcdFx0XHR3aWR0aDogJzI1cHgnLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMjVweCcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFRleHQgZm9udFdlaWdodD1cInNlbWlib2xkXCI+e2NvbnZlcnROdW0odXB2b3Rlcyl9PC9UZXh0PlxuXHRcdFx0PC9TdGFjaz5cblx0XHRcdDxIU3RhY2sgdz1cImZ1bGxcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG5cdFx0XHRcdDxTdGFjayBhbGlnblNlbGY9XCJzdGFydFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz17YCR7aW1hZ2VfdXJsfWB9XG5cdFx0XHRcdFx0XHRib3hTaXplPVwiNjBweFwiXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9XCI1MCVcIlxuXHRcdFx0XHRcdFx0b2JqZWN0Rml0PVwiZmlsbFwiXG5cdFx0XHRcdFx0XHRib3hTaGFkb3c9e2AwcHggNHB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC4yNSlgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHQ+e25hbWV9PC9UZXh0PlxuXHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQ8Q2VudGVyXG5cdFx0XHRcdFx0cD1cIjAuNVwiXG5cdFx0XHRcdFx0dG9wPVwiNVwiXG5cdFx0XHRcdFx0cmlnaHQ9XCI1XCJcblx0XHRcdFx0XHRiZz1cIiNGNEEyNjFcIlxuXHRcdFx0XHRcdHc9XCI4MHB4XCJcblx0XHRcdFx0XHRoPVwiMThweFwiXG5cdFx0XHRcdFx0cG9zPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHRcdGFsaWduU2VsZj1cInN0YXJ0XCJcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM9ezR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VGV4dCBjb2xvcj1cIndoaXRlXCIgaXNUcnVuY2F0ZWQgZm9udFNpemU9XCJzbVwiPlxuXHRcdFx0XHRcdFx0e3RvcGljWydub2RlJ11bJ25hbWUnXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG5cdFx0XHRcdFx0XHRcdHRvcGljWydub2RlJ11bJ25hbWUnXS5zbGljZSgxKX1cblx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0PC9IU3RhY2s+XG5cdFx0XHQ8VGV4dCBjb2xvcj1cImJsYWNrXCI+e3RhZ2xpbmV9PC9UZXh0PlxuXHRcdFx0PEJveCB3PVwiZnVsbFwiIHA9XCIyXCI+XG5cdFx0XHRcdDxIU3RhY2sganVzdGlmeT1cImNlbnRlclwiPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHQ8SFN0YWNrXG5cdFx0XHRcdFx0XHRcdHc9XCJhdXRvXCJcblx0XHRcdFx0XHRcdFx0aD1cIjM2cHhcIlxuXHRcdFx0XHRcdFx0XHRiZ0NvbG9yPVwiYmxhY2tcIlxuXHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9XCI1XCJcblx0XHRcdFx0XHRcdFx0cD1cIjNcIlxuXHRcdFx0XHRcdFx0XHRzaG91bGRXcmFwQ2hpbGRyZW5cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFRleHQgY29sb3I9XCJ3aGl0ZVwiPkNoZWNrIG91dDwvVGV4dD5cblx0XHRcdFx0XHRcdFx0PEFycm93VG9wUmlnaHRJY29uIGNvbG9yPVwid2hpdGVcIiAvPlxuXHRcdFx0XHRcdFx0PC9IU3RhY2s+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDxTaGFyZTJJY29uXG5cdFx0XHRcdFx0XHR3aWR0aD17MjB9XG5cdFx0XHRcdFx0XHRoZWlnaHQ9ezIwfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRcdFx0bmF2aWdhdG9yLnNoYXJlKHsgdXJsOiB1cmwsIHRpdGxlOiBuYW1lIH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IU3RhY2s+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L1N0YWNrPlxuXHQpO1xufVxuIiwgImV4cG9ydCBjb25zdCBjb252ZXJ0TnVtID0gKG51bTogbnVtYmVyKSA9PiB7XG5cdGlmIChudW0gPCAxMDAwKSByZXR1cm4gbnVtO1xuXG5cdGNvbnN0IHNpID0gW1xuXHRcdHsgdjogMWUzLCBzOiAnSycgfSxcblx0XHR7IHY6IDFlNiwgczogJ00nIH0sXG5cdFx0eyB2OiAxZTksIHM6ICdCJyB9LFxuXHRcdHsgdjogMWUxMiwgczogJ1QnIH0sXG5cdFx0eyB2OiAxZTE1LCBzOiAnUCcgfSxcblx0XHR7IHY6IDFlMTgsIHM6ICdFJyB9LFxuXHRdO1xuXHRsZXQgaTtcblx0Zm9yIChpID0gc2kubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuXHRcdGlmIChudW0gPj0gc2lbaV0udikge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAoXG5cdFx0KG51bSAvIHNpW2ldLnYpLnRvRml4ZWQoMikucmVwbGFjZSgvXFwuMCskfChcXC5bMC05XSpbMS05XSkwKyQvLCAnJDEnKSArXG5cdFx0c2lbaV0uc1xuXHQpO1xufTtcbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnQsIFN1cGFiYXNlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuaWYgKCFwcm9jZXNzLmVudi5TVVBBQkFTRV9VUkwpXG5cdHRocm93IEVycm9yKCdTdXBhYmFzZSBVUkwgbm90IGZvdW5kIGluIGVudmlyb25tZW50Jyk7XG5pZiAoIXByb2Nlc3MuZW52LlNVUEFCQVNFX0tFWSlcblx0dGhyb3cgRXJyb3IoJ1N1cGFiYXNlIEtFWSBub3QgZm91bmQgaW4gZW52aXJvbm1lbnQnKTtcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlOiBTdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChcblx0cHJvY2Vzcy5lbnYuU1VQQUJBU0VfVVJMIGFzIHN0cmluZyxcblx0cHJvY2Vzcy5lbnYuU1VQQUJBU0VfS0VZIGFzIHN0cmluZ1xuKTtcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcyc7XG5pbXBvcnQgeyBCb3gsIEhTdGFjaywgQ2VudGVyLCBTdGFjaywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgQXJyb3dSaWdodEljb24gfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtaWNvbnMnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHRpdGxlOiAnT24gVGhlIEh1bnQnLFxuXHRcdGRlc2NyaXB0aW9uOiAnVmlldyB0aGUgbGF0ZXN0IHByb2R1Y3RzIGZyb20gUHJvZHVjdCBIdW50Jyxcblx0XHQndHdpdHRlcjpjYXJkJzogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxuXHRcdCd0d2l0dGVyOnNpdGUnOiAnQGRhcnJ5bF9jb2RlcycsXG5cdFx0J3R3aXR0ZXI6Y3JlYXRvcic6ICdAZGFycnlsX2NvZGVzJyxcblx0XHQndHdpdHRlcjp0aXRsZSc6ICdPbiBUaGUgSHVudCcsXG5cdFx0J3R3aXR0ZXI6ZGVzY3JpcHRpb24nOiAnVmlldyB0aGUgbGF0ZXN0IHByb2R1Y3RzIGZyb20gUHJvZHVjdCBIdW50Jyxcblx0XHQndHdpdHRlcjppbWFnZSc6ICdodHRwczovL290aC1wcm9kLnZlcmNlbC5hcHAvU0VPLnBuZycsXG5cdFx0J29nOnRpdGxlJzogJ09uIFRoZSBIdW50Jyxcblx0XHQnb2c6ZGVzY3JpcHRpb24nOiAnVmlldyB0aGUgbGF0ZXN0IHByb2R1Y3RzIGZyb20gUHJvZHVjdCBIdW50Jyxcblx0XHQnb2c6aW1hZ2UnOiAnaHR0cHM6Ly9vdGgtcHJvZC52ZXJjZWwuYXBwL1NFTy5wbmcnLFxuXHRcdCdvZzp1cmwnOiAnaHR0cHM6Ly9vdGgtcHJvZC52ZXJjZWwuYXBwLycsXG5cdFx0J29nOnNpdGVfbmFtZSc6ICdPbiBUaGUgSHVudCcsXG5cdFx0J29nOnR5cGUnOiAnd2Vic2l0ZScsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpOiBKU1guRWxlbWVudCB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxTdGFja1xuXHRcdFx0XHRwb3M9XCJyZWxhdGl2ZVwiXG5cdFx0XHRcdHc9XCJmdWxsXCJcblx0XHRcdFx0YWxpZ25Db250ZW50PVwiY2VudGVyXCJcblx0XHRcdFx0anVzdGlmeT1cImNlbnRlclwiXG5cdFx0XHRcdHNwYWNpbmc9ezEwfVxuXHRcdFx0PlxuXHRcdFx0XHQ8Q2VudGVyPlxuXHRcdFx0XHRcdDxDZW50ZXJcblx0XHRcdFx0XHRcdGJnQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNTUpXCJcblx0XHRcdFx0XHRcdGJhY2tkcm9wRmlsdGVyPXtgYmx1cigxMHB4KWB9XG5cdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcblx0XHRcdFx0XHRcdHc9ezMzMH1cblx0XHRcdFx0XHRcdGg9ezI5OH1cblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz17MjB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJveCB3PVwiMjMwcHhcIj5cblx0XHRcdFx0XHRcdFx0PFN0YWNrIHNwYWNpbmc9ey01fSB3PVwiZnVsbFwiIHNob3VsZFdyYXBDaGlsZHJlbj5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjNyZW1cIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0T25cblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplPVwiM3JlbVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRtbD1cIjI1JVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0PVwiYm9sZFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhlXG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZT1cIjNyZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWw9XCI1MCVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodD1cImJvbGRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdEh1bnRcblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHRcdDxUZXh0IGZvbnRTaXplPVwiMjBweFwiIGNvbG9yPVwiIzYzNjM2M1wiPlxuXHRcdFx0XHRcdFx0XHRWaWV3IHRoZSBsYXRlc3QgYmVzdCBwcm9kdWN0c1xuXHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdFx0PENlbnRlcj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0dG89XCIvcHJvZHVjdHNcIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICdpbmhlcml0JyB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxIU3RhY2tcblx0XHRcdFx0XHRcdFx0YmdDb2xvcj1cImJsYWNrXCJcblx0XHRcdFx0XHRcdFx0Y29sb3I9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiMTUzcHhcIlxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCI2MHB4XCJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwiMTVweFwiXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnk9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjIycHhcIiBmb250RmFtaWx5PVwiUm9ib3RvXCI+XG5cdFx0XHRcdFx0XHRcdFx0Vmlld1xuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdDxBcnJvd1JpZ2h0SWNvbiAvPlxuXHRcdFx0XHRcdFx0PC9IU3RhY2s+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgQ2VudGVyLCBJbWFnZSwgQnV0dG9uLCBTdGFjaywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCk6IEpTWC5FbGVtZW50IHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PENlbnRlclxuXHRcdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHRcdGJnQ29sb3I9XCJyZWQuMzAwXCJcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuXHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdD5cblx0XHRcdFx0PFRleHQgZm9udFNpemU9XCI0eGxcIj5Ib21lIFBhZ2U8L1RleHQ+XG5cdFx0XHQ8L0NlbnRlcj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic0Y2RlNjAyMScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtTkI2S1dHRFouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5YQVpQVU1DLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWElGVTJJN0YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZRk01TDNJNS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtNFU1WkVZU0UuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUpPSFczUlZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS0hNT09NQUouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9ob21lJzp7J2lkJzoncm91dGVzL2hvbWUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaG9tZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ob21lLVdDN0dDSVFZLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtRDRSWjRRR0wuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVRRTlhTQVRaLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9kdWN0cyc6eydpZCc6J3JvdXRlcy9wcm9kdWN0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9kdWN0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcm9kdWN0cy1FVU9TSloyVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFFOWFNBVFouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTRDREU2MDIxLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQSxZQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNBakI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FB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
