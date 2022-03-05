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

// empty-module:~/context.client
var require_context = __commonJS({
  "empty-module:~/context.client"(exports, module2) {
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
var import_remix = __toESM(require_remix());
var import_react4 = require("@chakra-ui/react");
function Header() {
  return /* @__PURE__ */ React.createElement(import_react4.HStack, {
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
  }, /* @__PURE__ */ React.createElement(import_remix.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(import_react4.Heading, {
    fontSize: "24px",
    fontWeight: "bold"
  }, "On The Hunt")), /* @__PURE__ */ React.createElement(import_react4.Box, null, /* @__PURE__ */ React.createElement(import_remix.Link, {
    to: "/products/menu"
  }, /* @__PURE__ */ React.createElement(import_react4.Image, {
    src: "/menu.svg",
    alt: "Menu",
    w: "full",
    h: "full"
  }))));
}

// app/components/Layout.tsx
var import_framer_motion = require("framer-motion");
var import_react5 = require("@chakra-ui/react");
var MotionImage = (0, import_framer_motion.motion)(import_react5.Image);
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(import_react5.Box, null, /* @__PURE__ */ React.createElement(import_react5.Stack, {
    spacing: 0,
    pos: "relative",
    w: "100vw",
    h: "100vh",
    overflowX: "hidden"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_react5.Flex, {
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
var import_react6 = require("@chakra-ui/react");
var theme = (0, import_react6.extendTheme)({
  styles: {
    fonts: {
      heading: "Oswald, sans-serif",
      body: "Alegreya SC, serif"
    }
  }
});

// route:/Users/darrylbrooks/Github/OnTheHunt/app/root.tsx
var import_react7 = require("@emotion/react");
var import_react8 = require("react");
var import_react9 = require("@chakra-ui/react");
var import_remix2 = __toESM(require_remix());
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey there's an error in the root file"))));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react9.Center, {
    h: "full",
    w: "full"
  }, /* @__PURE__ */ React.createElement(import_react9.Text, {
    bgGradient: "linear(to-r, brand.primary, brand.accent)",
    bgClip: "text",
    fontSize: "6xl",
    fontWeight: "Bold"
  }, "Page Not Found"))));
}
var Document = (0, import_react7.withEmotionCache)(({ children, title }, emotionCache) => {
  const serverSyleData = (0, import_react8.useContext)(context_server_default);
  const clientStyleData = (0, import_react8.useContext)(import_context3.default);
  (0, import_react8.useEffect)(() => {
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
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ React.createElement("style", {
    key,
    "data-emotion": `${key} ${ids.join(" ")}`,
    dangerouslySetInnerHTML: { __html: css }
  }))), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react9.ChakraProvider, {
    theme
  }, children), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
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
var import_react10 = require("@chakra-ui/react");
function ProductCard({
  product
}) {
  const { name, url, image_url, tagline, topic, upvotes } = product;
  return /* @__PURE__ */ React.createElement(import_react10.Stack, {
    p: "4",
    h: "auto",
    w: "315px",
    pos: "relative",
    borderRadius: "20px",
    border: "2px solid black",
    bgColor: "rgba(255,255,255,0.55)"
  }, /* @__PURE__ */ React.createElement(import_react10.Stack, {
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
  }), /* @__PURE__ */ React.createElement(import_react10.Text, {
    fontWeight: "semibold"
  }, convertNum(upvotes))), /* @__PURE__ */ React.createElement(import_react10.HStack, {
    w: "full",
    justify: "center"
  }, /* @__PURE__ */ React.createElement(import_react10.Stack, {
    alignSelf: "start",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react10.Image, {
    src: `${image_url}`,
    boxSize: "60px",
    borderRadius: "50%",
    objectFit: "fill",
    boxShadow: `0px 4px 15px 0px rgba(0,0,0,0.25)`
  }), /* @__PURE__ */ React.createElement(import_react10.Text, null, name)), /* @__PURE__ */ React.createElement(import_react10.Center, {
    p: "0.5",
    top: "5",
    right: "5",
    bg: "#F4A261",
    w: "80px",
    h: "18px",
    pos: "absolute",
    alignSelf: "start",
    borderRadius: 4
  }, /* @__PURE__ */ React.createElement(import_react10.Text, {
    color: "white",
    isTruncated: true,
    fontSize: "sm"
  }, topic["node"]["name"].charAt(0).toUpperCase() + topic["node"]["name"].slice(1)))), /* @__PURE__ */ React.createElement(import_react10.Text, {
    color: "black"
  }, tagline), /* @__PURE__ */ React.createElement(import_react10.Box, {
    w: "full",
    p: "2"
  }, /* @__PURE__ */ React.createElement(import_react10.HStack, {
    justify: "center"
  }, /* @__PURE__ */ React.createElement(import_react10.Link, {
    href: url,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(import_react10.HStack, {
    w: "auto",
    h: "36px",
    bgColor: "black",
    borderRadius: "5",
    p: "3",
    shouldWrapChildren: true
  }, /* @__PURE__ */ React.createElement(import_react10.Text, {
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
var import_react11 = require("@chakra-ui/react");
var import_remix3 = __toESM(require_remix());
var MotionBox = (0, import_framer_motion2.motion)(import_react11.Box);
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
  const products = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_react11.Box, {
    pos: "relative",
    w: "full",
    h: "full"
  }, /* @__PURE__ */ React.createElement(import_react11.Stack, {
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
  })))), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/products/menu.tsx
var menu_exports = {};
__export(menu_exports, {
  default: () => Menu
});
init_react();
var import_remix4 = __toESM(require_remix());
var import_react12 = require("@chakra-ui/react");
function Menu() {
  const navigate = (0, import_remix4.useNavigate)();
  return /* @__PURE__ */ React.createElement(import_react12.Drawer, {
    isOpen: true,
    placement: "right",
    onClose: () => navigate(-1)
  }, /* @__PURE__ */ React.createElement(import_react12.DrawerOverlay, null), /* @__PURE__ */ React.createElement(import_react12.DrawerContent, null, /* @__PURE__ */ React.createElement(import_react12.DrawerCloseButton, null), /* @__PURE__ */ React.createElement(import_react12.DrawerHeader, null, "Send me a wave if you see this!"), /* @__PURE__ */ React.createElement(import_react12.DrawerBody, null, /* @__PURE__ */ React.createElement(import_react12.Button, {
    onClick: () => console.log("waved")
  }, "Wave")), /* @__PURE__ */ React.createElement(import_react12.DrawerFooter, null, /* @__PURE__ */ React.createElement(import_react12.Button, {
    variant: "outline",
    mr: 3,
    onClick: () => navigate(-1)
  }, "Close"))));
}

// route:/Users/darrylbrooks/Github/OnTheHunt/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta
});
init_react();
var import_remix5 = __toESM(require_remix());
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
  }, "View the latest best products"))), /* @__PURE__ */ React.createElement(import_react13.Center, null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
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
var assets_manifest_default = { "version": "94f2bbcf", "entry": { "module": "/build/entry.client-K436KPGR.js", "imports": ["/build/_shared/chunk-Z42B5OVL.js", "/build/_shared/chunk-GCVVYQJM.js", "/build/_shared/chunk-DD4YDJC5.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-PY6ALTWS.js", "imports": ["/build/_shared/chunk-3CLJKJ4Q.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-YLA6CJTU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-M2A3WFSX.js", "imports": ["/build/_shared/chunk-JFSPQOBE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products": { "id": "routes/products", "parentId": "root", "path": "products", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/products-BCOR6REA.js", "imports": ["/build/_shared/chunk-JFSPQOBE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products/menu": { "id": "routes/products/menu", "parentId": "routes/products", "path": "menu", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/products/menu-RQ4G7C5E.js", "imports": ["/build/_shared/chunk-3CLJKJ4Q.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-94F2BBCF.js" };

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
  "routes/products/menu": {
    id: "routes/products/menu",
    parentId: "routes/products",
    path: "menu",
    index: void 0,
    caseSensitive: void 0,
    module: menu_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9jb250ZXh0LmNsaWVudCIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vYXBwL2NvbnRleHQuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwgIi4uL2FwcC90aGVtZS50cyIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4IiwgIi4uL2FwcC91dGlscy9pbmRleC50cyIsICIuLi9hcHAvc2VydmVyL3N1cGFiYXNlLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy9tZW51LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvaG9tZS50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvcHJvZHVjdHMvbWVudS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL2hvbWUudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9wcm9kdWN0c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJvZHVjdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvZHVjdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3Byb2R1Y3RzL21lbnVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2R1Y3RzL21lbnVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wcm9kdWN0c1wiLFxuICAgICAgcGF0aDogXCJtZW51XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9ob21lXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ob21lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImhvbWVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QvZW50cnknO1xuXG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tICdAZW1vdGlvbi9zZXJ2ZXIvY3JlYXRlLWluc3RhbmNlJztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gJy4vY3JlYXRlRW1vdGlvbkNhY2hlJztcbmltcG9ydCBTZXJ2ZXJTdHlsZUNvbnRleHQgZnJvbSAnLi9jb250ZXh0LnNlcnZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG5cdHJlcXVlc3Q6IFJlcXVlc3QsXG5cdHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuXHRyZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG5cdHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcblx0Y29uc3QgY2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcblx0Y29uc3QgeyBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyB9ID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cblx0Y29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKFxuXHRcdDxTZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e251bGx9PlxuXHRcdFx0PENhY2hlUHJvdmlkZXIgdmFsdWU9e2NhY2hlfT5cblx0XHRcdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cblx0XHRcdDwvQ2FjaGVQcm92aWRlcj5cblx0XHQ8L1NlcnZlclN0eWxlQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcblxuXHRjb25zdCBjaHVua3MgPSBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyhodG1sKTtcblxuXHRjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcblx0XHQ8U2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjaHVua3Muc3R5bGVzfT5cblx0XHRcdDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG5cdFx0XHRcdDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG5cdFx0XHQ8L0NhY2hlUHJvdmlkZXI+XG5cdFx0PC9TZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG5cblx0cmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoYDwhRE9DVFlQRSBodG1sPiR7bWFya3VwfWAsIHtcblx0XHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcblx0XHRoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG5cdH0pO1xufVxuIiwgImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KTtcbn0iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlclN0eWxlQ29udGV4dERhdGEge1xuICBrZXk6IHN0cmluZztcbiAgaWRzOiBBcnJheTxzdHJpbmc+O1xuICBjc3M6IHN0cmluZztcbn1cblxuY29uc3QgU2VydmVyU3R5bGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxudWxsIHwgU2VydmVyU3R5bGVDb250ZXh0RGF0YVtdPihudWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyU3R5bGVDb250ZXh0IiwgImltcG9ydCAnQGZvbnRzb3VyY2Uvb3N3YWxkLzQwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9hbGVncmV5YS1zYW5zLXNjLzcwMC5jc3MnO1xuLy8gaW1wb3J0ICdAZm9udHNvdXJjZS9hbGVncmV5YS1zYW5zLXNjLzcwMC5jc3MnO1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBTZXJ2ZXJTdHlsZUNvbnRleHQgZnJvbSAnfi9jb250ZXh0LnNlcnZlcic7XG5pbXBvcnQgQ2xpZW50U3R5bGVDb250ZXh0IGZyb20gJ34vY29udGV4dC5jbGllbnQnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENlbnRlciwgVGV4dCwgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRPdXRsZXQsXG5cdE1ldGEsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxuXHR1c2VDYXRjaCxcbn0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PE91dGxldCAvPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuXHRcdFx0XHRcdDxwPntlcnJvci5tZXNzYWdlfTwvcD5cblx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHQ8cD5IZXkgdGhlcmUncyBhbiBlcnJvciBpbiB0aGUgcm9vdCBmaWxlPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdDwvRG9jdW1lbnQ+XG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuXHRsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxDZW50ZXIgaD1cImZ1bGxcIiB3PVwiZnVsbFwiPlxuXHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRiZ0dyYWRpZW50PVwibGluZWFyKHRvLXIsIGJyYW5kLnByaW1hcnksIGJyYW5kLmFjY2VudClcIlxuXHRcdFx0XHRcdFx0YmdDbGlwPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRmb250U2l6ZT1cIjZ4bFwiXG5cdFx0XHRcdFx0XHRmb250V2VpZ2h0PVwiQm9sZFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0UGFnZSBOb3QgRm91bmRcblx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxuaW50ZXJmYWNlIERvY3VtZW50UHJvcHMge1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xuXHR0aXRsZT86IHN0cmluZztcbn1cblxuY29uc3QgRG9jdW1lbnQgPSB3aXRoRW1vdGlvbkNhY2hlKFxuXHQoeyBjaGlsZHJlbiwgdGl0bGUgfTogRG9jdW1lbnRQcm9wcywgZW1vdGlvbkNhY2hlKSA9PiB7XG5cdFx0Y29uc3Qgc2VydmVyU3lsZURhdGEgPSB1c2VDb250ZXh0KFNlcnZlclN0eWxlQ29udGV4dCk7XG5cdFx0Y29uc3QgY2xpZW50U3R5bGVEYXRhID0gdXNlQ29udGV4dChDbGllbnRTdHlsZUNvbnRleHQpO1xuXHRcdC8vIE9ubHkgZXhlY3V0ZWQgb24gY2xpZW50XG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRcdC8vIHJlLWxpbmsgc2hlZXQgY29udGFpbmVyXG5cdFx0XHRlbW90aW9uQ2FjaGUuc2hlZXQuY29udGFpbmVyID0gZG9jdW1lbnQuaGVhZDtcblx0XHRcdC8vIHJlLWluamVjdCB0YWdzXG5cdFx0XHRjb25zdCB0YWdzID0gZW1vdGlvbkNhY2hlLnNoZWV0LnRhZ3M7XG5cdFx0XHRlbW90aW9uQ2FjaGUuc2hlZXQuZmx1c2goKTtcblx0XHRcdHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG5cdFx0XHRcdChlbW90aW9uQ2FjaGUuc2hlZXQgYXMgYW55KS5faW5zZXJ0VGFnKHRhZyk7XG5cdFx0XHR9KTtcblx0XHRcdC8vIHJlc2V0IGNhY2hlIHRvIHJlYXBwbHkgZ2xvYmFsIHN0eWxlc1xuXHRcdFx0Y2xpZW50U3R5bGVEYXRhLnJlc2V0KCk7XG5cdFx0fSwgW10pO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdFx0PGhlYWQ+XG5cdFx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuXHRcdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdFx0e3NlcnZlclN5bGVEYXRhPy5tYXAoKHsga2V5LCBpZHMsIGNzcyB9KSA9PiAoXG5cdFx0XHRcdFx0XHQ8c3R5bGVcblx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdGRhdGEtZW1vdGlvbj17YCR7a2V5fSAke2lkcy5qb2luKCcgJyl9YH1cblx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuXHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNzcyB9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9oZWFkPlxuXHRcdFx0XHQ8Ym9keT5cblx0XHRcdFx0XHQ8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT57Y2hpbGRyZW59PC9DaGFrcmFQcm92aWRlcj5cblx0XHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0XHQ8U2NyaXB0cyAvPlxuXHRcdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cblx0XHRcdFx0PC9ib2R5PlxuXHRcdFx0PC9odG1sPlxuXHRcdCk7XG5cdH1cbik7XG4iLCAiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFN0YWNrLCBGbGV4LCBJbWFnZVByb3BzLCBJbWFnZSwgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmNvbnN0IE1vdGlvbkltYWdlID0gbW90aW9uPEltYWdlUHJvcHM+KEltYWdlKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8Qm94PlxuXHRcdFx0PFN0YWNrXG5cdFx0XHRcdHNwYWNpbmc9ezB9XG5cdFx0XHRcdHBvcz1cInJlbGF0aXZlXCJcblx0XHRcdFx0dz1cIjEwMHZ3XCJcblx0XHRcdFx0aD1cIjEwMHZoXCJcblx0XHRcdFx0b3ZlcmZsb3dYPVwiaGlkZGVuXCJcblx0XHRcdD5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8RmxleCBmbGV4R3Jvdz17MX0+e2NoaWxkcmVufTwvRmxleD5cblx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8TW90aW9uSW1hZ2Vcblx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdHRvcD1cIjIwJVwiXG5cdFx0XHRcdGxlZnQ9XCItNSVcIlxuXHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRzcmM9XCIvcmVkLWNpcmNsZS5wbmdcIlxuXHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0eDogWycwJScsICcxMDAlJywgJzUwJScsICcwJScsICcwJSddLFxuXHRcdFx0XHRcdHk6IFsnMCUnLCAnMTAwJScsICcwJScsICcxMDAlJywgJzAlJ10sXG5cdFx0XHRcdH19XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0cmFuc2l0aW9uPXt7XG5cdFx0XHRcdFx0dHlwZTogJ2Vhc2VJbk91dCcsXG5cdFx0XHRcdFx0cmVwZWF0OiBJbmZpbml0eSxcblx0XHRcdFx0XHRyZXBlYXRUeXBlOiAnbWlycm9yJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogMTUsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0PE1vdGlvbkltYWdlXG5cdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHR0b3A9XCIzNSVcIlxuXHRcdFx0XHRyaWdodD1cIjAlXCJcblx0XHRcdFx0ekluZGV4PXstMX1cblx0XHRcdFx0c3JjPVwiL2JsdWUtY2lyY2xlLnBuZ1wiXG5cdFx0XHRcdGFuaW1hdGU9e3tcblx0XHRcdFx0XHR4OiBbJzAlJywgJy0xMzAlJywgJy0xMzAlJywgJzAlJywgJzAlJ10sXG5cdFx0XHRcdFx0eTogWycxMDAlJywgJy0xMDAlJywgJzEwMCUnLCAnLTEwMCUnLCAnMTAwJSddLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dHJhbnNpdGlvbj17e1xuXHRcdFx0XHRcdHR5cGU6ICdlYXNlSW5PdXQnLFxuXHRcdFx0XHRcdHJlcGVhdDogSW5maW5pdHksXG5cdFx0XHRcdFx0cmVwZWF0VHlwZTogJ21pcnJvciAnLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxNSxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHQ8TW90aW9uSW1hZ2Vcblx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdHRvcD1cIjUwJVwiXG5cdFx0XHRcdGxlZnQ9XCIwJVwiXG5cdFx0XHRcdHpJbmRleD17LTF9XG5cdFx0XHRcdHNyYz1cIi95ZWxsb3ctY2lyY2xlLnBuZ1wiXG5cdFx0XHRcdGFuaW1hdGU9e3tcblx0XHRcdFx0XHR4OiBbJzAlJywgJzEwMCUnLCAnMCUnLCAnMTAwJScsICcwJSddLFxuXHRcdFx0XHRcdHk6IFsnMCUnLCAnLTEwMCUnLCAnLTEwMCUnLCAnMCUnLCAnMCUnXSxcblx0XHRcdFx0fX1cblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdFx0XHRyZXBlYXQ6IEluZmluaXR5LFxuXHRcdFx0XHRcdHJlcGVhdFR5cGU6ICdtaXJyb3IgJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogMTUsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdDwvQm94PlxuXHQpO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBCb3gsIEhTdGFjaywgSGVhZGluZywgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxIU3RhY2tcblx0XHRcdGFzPVwibmF2XCJcblx0XHRcdHc9XCJmdWxsXCJcblx0XHRcdHRvcD1cIjBcIlxuXHRcdFx0cG9zaXRpb249XCJzdGlja3lcIlxuXHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuXHRcdFx0YmdDb2xvcj1cInJnYmEoMjU1LDI1NSwyNTUsMC4yMClcIlxuXHRcdFx0YmFja2Ryb3BGaWx0ZXI9e2BibHVyKDEwcHgpYH1cblx0XHRcdHpJbmRleD17MX1cblx0XHRcdHA9ezR9XG5cdFx0PlxuXHRcdFx0PExpbmsgdG89XCIvXCI+XG5cdFx0XHRcdDxIZWFkaW5nIGZvbnRTaXplPVwiMjRweFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG5cdFx0XHRcdFx0T24gVGhlIEh1bnRcblx0XHRcdFx0PC9IZWFkaW5nPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PEJveD5cblx0XHRcdFx0PExpbmsgdG89XCIvcHJvZHVjdHMvbWVudVwiPlxuXHRcdFx0XHRcdDxJbWFnZSBzcmM9XCIvbWVudS5zdmdcIiBhbHQ9XCJNZW51XCIgdz1cImZ1bGxcIiBoPVwiZnVsbFwiIC8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdDwvQm94PlxuXHRcdDwvSFN0YWNrPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcblx0c3R5bGVzOiB7XG5cdFx0Zm9udHM6IHtcblx0XHRcdGhlYWRpbmc6ICdPc3dhbGQsIHNhbnMtc2VyaWYnLFxuXHRcdFx0Ym9keTogJ0FsZWdyZXlhIFNDLCBzZXJpZicsXG5cdFx0fSxcblx0fSxcbn0pO1xuIiwgImltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICd+L2NvbXBvbmVudHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9zZXJ2ZXIvc3VwYWJhc2Uuc2VydmVyJztcbmltcG9ydCB0eXBlIHsgUHJvZHVjdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgQm94LCBCb3hQcm9wcywgU3RhY2ssIHVzZURpc2Nsb3N1cmUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBPdXRsZXQsIHVzZUxvYWRlckRhdGEsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVtaXgnO1xuXG5jb25zdCBNb3Rpb25Cb3ggPSBtb3Rpb248Qm94UHJvcHM+KEJveCk7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8UHJvZHVjdFtdPiA9PiB7XG5cdGNvbnN0IHsgZGF0YTogcHJvZHVjdHMsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuXHRcdC5mcm9tKCdwcm9kdWN0cycpXG5cdFx0LnNlbGVjdCgnKicpO1xuXG5cdGlmIChlcnJvciB8fCAhcHJvZHVjdHMpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJDb3VsZG4ndCBmZXRjaCBwcm9kdWN0c1wiLCB7IHN0YXR1czogNTAwIH0pO1xuXHR9XG5cblx0cmV0dXJuIHByb2R1Y3RzLm1hcCgocHJvZHVjdDogYW55KSA9PiB7XG5cdFx0aWYgKHByb2R1Y3QuaW1hZ2VfdXJsLmluY2x1ZGVzKCcuZ2lmJykpIHtcblx0XHRcdHByb2R1Y3QuaW1hZ2VfdXJsID1cblx0XHRcdFx0J2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzIxMTEvMjExMTU1Ni5wbmcnO1xuXHRcdH1cblxuXHRcdC8vIEdldCB0aGUgc2hvcnRlc3QgdG9waWNcblx0XHRwcm9kdWN0LnRvcGljID0gcHJvZHVjdC50b3BpY3MucmVkdWNlKFxuXHRcdFx0KGE6IHsgbm9kZTogeyBuYW1lOiBzdHJpbmcgfSB9LCBiOiB7IG5vZGU6IHsgbmFtZTogc3RyaW5nIH0gfSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYS5ub2RlLm5hbWUubGVuZ3RoIDw9IGIubm9kZS5uYW1lLmxlbmd0aCA/IGEgOiBiO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIHByb2R1Y3Q7XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBwcm9kdWN0czogUHJvZHVjdFtdID0gdXNlTG9hZGVyRGF0YSgpO1xuXG5cdHJldHVybiAoXG5cdFx0PEJveCBwb3M9XCJyZWxhdGl2ZVwiIHc9XCJmdWxsXCIgaD1cImZ1bGxcIj5cblx0XHRcdDxTdGFja1xuXHRcdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHRcdGg9XCJmdWxsXCJcblx0XHRcdFx0anVzdGlmeT1cImNlbnRlclwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRtdD17OX1cblx0XHRcdFx0c3BhY2luZz17NX1cblx0XHRcdD5cblx0XHRcdFx0e3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8TW90aW9uQm94XG5cdFx0XHRcdFx0XHRpbml0aWFsPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdGFuaW1hdGU9XCJ2aXNpYmxlXCJcblx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRjdXN0b209e2luZGV4fVxuXHRcdFx0XHRcdFx0dmFyaWFudHM9e3tcblx0XHRcdFx0XHRcdFx0aGlkZGVuOiB7XG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdFx0XHR4OiBpbmRleCAlIDIgPT09IDAgPyAtMTAwIDogMTAwLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiAoaW5kZXgpID0+ICh7XG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHRcdFx0XHR4OiAwLFxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5OiBpbmRleCAqIDAuMzUsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC45LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuXHRcdFx0XHRcdDwvTW90aW9uQm94PlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8T3V0bGV0IC8+XG5cdFx0PC9Cb3g+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ34vdHlwZXMnO1xuaW1wb3J0IHsgY29udmVydE51bSB9IGZyb20gJ34vdXRpbHMnO1xuaW1wb3J0IHsgR29UcmlhbmdsZVVwIH0gZnJvbSAncmVhY3QtaWNvbnMvZ28nO1xuaW1wb3J0IHsgQXJyb3dUb3BSaWdodEljb24sIFNoYXJlMkljb24gfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHtcblx0SFN0YWNrLFxuXHRJbWFnZSxcblx0U3RhY2ssXG5cdFRleHQsXG5cdExpbmssXG5cdENlbnRlcixcblx0Qm94LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcblx0cHJvZHVjdDogUHJvZHVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQoe1xuXHRwcm9kdWN0LFxufTogUHJvZHVjdENhcmRQcm9wcyk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgeyBuYW1lLCB1cmwsIGltYWdlX3VybCwgdGFnbGluZSwgdG9waWMsIHVwdm90ZXMgfTogUHJvZHVjdCA9IHByb2R1Y3Q7XG5cblx0cmV0dXJuIChcblx0XHQ8U3RhY2tcblx0XHRcdHA9XCI0XCJcblx0XHRcdGg9XCJhdXRvXCJcblx0XHRcdHc9XCIzMTVweFwiXG5cdFx0XHRwb3M9XCJyZWxhdGl2ZVwiXG5cdFx0XHRib3JkZXJSYWRpdXM9XCIyMHB4XCJcblx0XHRcdGJvcmRlcj1cIjJweCBzb2xpZCBibGFja1wiXG5cdFx0XHRiZ0NvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwwLjU1KVwiXG5cdFx0PlxuXHRcdFx0PFN0YWNrXG5cdFx0XHRcdGg9XCJhdXRvXCJcblx0XHRcdFx0c3BhY2luZz17MH1cblx0XHRcdFx0cG9zPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHRhbGlnblNlbGY9XCJzdGFydFwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8R29UcmlhbmdsZVVwXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdGNvbG9yOiAnZ3JlZW4nLFxuXHRcdFx0XHRcdFx0ZmlsbDogJ2dyZWVuJyxcblx0XHRcdFx0XHRcdHdpZHRoOiAnMjVweCcsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICcyNXB4Jyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PVwic2VtaWJvbGRcIj57Y29udmVydE51bSh1cHZvdGVzKX08L1RleHQ+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdFx0PEhTdGFjayB3PVwiZnVsbFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cblx0XHRcdFx0PFN0YWNrIGFsaWduU2VsZj1cInN0YXJ0XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0c3JjPXtgJHtpbWFnZV91cmx9YH1cblx0XHRcdFx0XHRcdGJveFNpemU9XCI2MHB4XCJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjUwJVwiXG5cdFx0XHRcdFx0XHRvYmplY3RGaXQ9XCJmaWxsXCJcblx0XHRcdFx0XHRcdGJveFNoYWRvdz17YDBweCA0cHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjI1KWB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VGV4dD57bmFtZX08L1RleHQ+XG5cdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdDxDZW50ZXJcblx0XHRcdFx0XHRwPVwiMC41XCJcblx0XHRcdFx0XHR0b3A9XCI1XCJcblx0XHRcdFx0XHRyaWdodD1cIjVcIlxuXHRcdFx0XHRcdGJnPVwiI0Y0QTI2MVwiXG5cdFx0XHRcdFx0dz1cIjgwcHhcIlxuXHRcdFx0XHRcdGg9XCIxOHB4XCJcblx0XHRcdFx0XHRwb3M9XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdFx0YWxpZ25TZWxmPVwic3RhcnRcIlxuXHRcdFx0XHRcdGJvcmRlclJhZGl1cz17NH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxUZXh0IGNvbG9yPVwid2hpdGVcIiBpc1RydW5jYXRlZCBmb250U2l6ZT1cInNtXCI+XG5cdFx0XHRcdFx0XHR7dG9waWNbJ25vZGUnXVsnbmFtZSddLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcblx0XHRcdFx0XHRcdFx0dG9waWNbJ25vZGUnXVsnbmFtZSddLnNsaWNlKDEpfVxuXHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHQ8L0hTdGFjaz5cblx0XHRcdDxUZXh0IGNvbG9yPVwiYmxhY2tcIj57dGFnbGluZX08L1RleHQ+XG5cdFx0XHQ8Qm94IHc9XCJmdWxsXCIgcD1cIjJcIj5cblx0XHRcdFx0PEhTdGFjayBqdXN0aWZ5PVwiY2VudGVyXCI+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdDxIU3RhY2tcblx0XHRcdFx0XHRcdFx0dz1cImF1dG9cIlxuXHRcdFx0XHRcdFx0XHRoPVwiMzZweFwiXG5cdFx0XHRcdFx0XHRcdGJnQ29sb3I9XCJibGFja1wiXG5cdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjVcIlxuXHRcdFx0XHRcdFx0XHRwPVwiM1wiXG5cdFx0XHRcdFx0XHRcdHNob3VsZFdyYXBDaGlsZHJlblxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBjb2xvcj1cIndoaXRlXCI+Q2hlY2sgb3V0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHQ8QXJyb3dUb3BSaWdodEljb24gY29sb3I9XCJ3aGl0ZVwiIC8+XG5cdFx0XHRcdFx0XHQ8L0hTdGFjaz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PFNoYXJlMkljb25cblx0XHRcdFx0XHRcdHdpZHRoPXsyMH1cblx0XHRcdFx0XHRcdGhlaWdodD17MjB9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxuXHRcdFx0XHRcdFx0XHRuYXZpZ2F0b3Iuc2hhcmUoeyB1cmw6IHVybCwgdGl0bGU6IG5hbWUgfSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0hTdGFjaz5cblx0XHRcdDwvQm94PlxuXHRcdDwvU3RhY2s+XG5cdCk7XG59XG4iLCAiZXhwb3J0IGNvbnN0IGNvbnZlcnROdW0gPSAobnVtOiBudW1iZXIpID0+IHtcblx0aWYgKG51bSA8IDEwMDApIHJldHVybiBudW07XG5cblx0Y29uc3Qgc2kgPSBbXG5cdFx0eyB2OiAxZTMsIHM6ICdLJyB9LFxuXHRcdHsgdjogMWU2LCBzOiAnTScgfSxcblx0XHR7IHY6IDFlOSwgczogJ0InIH0sXG5cdFx0eyB2OiAxZTEyLCBzOiAnVCcgfSxcblx0XHR7IHY6IDFlMTUsIHM6ICdQJyB9LFxuXHRcdHsgdjogMWUxOCwgczogJ0UnIH0sXG5cdF07XG5cdGxldCBpO1xuXHRmb3IgKGkgPSBzaS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG5cdFx0aWYgKG51bSA+PSBzaVtpXS52KSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0cmV0dXJuIChcblx0XHQobnVtIC8gc2lbaV0udikudG9GaXhlZCgyKS5yZXBsYWNlKC9cXC4wKyR8KFxcLlswLTldKlsxLTldKTArJC8sICckMScpICtcblx0XHRzaVtpXS5zXG5cdCk7XG59O1xuIiwgImltcG9ydCB7IGNyZWF0ZUNsaWVudCwgU3VwYWJhc2VDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuXG5pZiAoIXByb2Nlc3MuZW52LlNVUEFCQVNFX1VSTClcblx0dGhyb3cgRXJyb3IoJ1N1cGFiYXNlIFVSTCBub3QgZm91bmQgaW4gZW52aXJvbm1lbnQnKTtcbmlmICghcHJvY2Vzcy5lbnYuU1VQQUJBU0VfS0VZKVxuXHR0aHJvdyBFcnJvcignU3VwYWJhc2UgS0VZIG5vdCBmb3VuZCBpbiBlbnZpcm9ubWVudCcpO1xuXG5leHBvcnQgY29uc3Qgc3VwYWJhc2U6IFN1cGFiYXNlQ2xpZW50ID0gY3JlYXRlQ2xpZW50KFxuXHRwcm9jZXNzLmVudi5TVVBBQkFTRV9VUkwgYXMgc3RyaW5nLFxuXHRwcm9jZXNzLmVudi5TVVBBQkFTRV9LRVkgYXMgc3RyaW5nXG4pO1xuIiwgImltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHtcblx0QnV0dG9uLFxuXHREcmF3ZXIsXG5cdERyYXdlckJvZHksXG5cdERyYXdlckNsb3NlQnV0dG9uLFxuXHREcmF3ZXJDb250ZW50LFxuXHREcmF3ZXJGb290ZXIsXG5cdERyYXdlckhlYWRlcixcblx0RHJhd2VyT3ZlcmxheSxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8RHJhd2VyIGlzT3Blbj17dHJ1ZX0gcGxhY2VtZW50PVwicmlnaHRcIiBvbkNsb3NlPXsoKSA9PiBuYXZpZ2F0ZSgtMSl9PlxuXHRcdFx0PERyYXdlck92ZXJsYXkgLz5cblx0XHRcdDxEcmF3ZXJDb250ZW50PlxuXHRcdFx0XHQ8RHJhd2VyQ2xvc2VCdXR0b24gLz5cblx0XHRcdFx0PERyYXdlckhlYWRlcj5TZW5kIG1lIGEgd2F2ZSBpZiB5b3Ugc2VlIHRoaXMhPC9EcmF3ZXJIZWFkZXI+XG5cblx0XHRcdFx0PERyYXdlckJvZHk+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnd2F2ZWQnKX0+V2F2ZTwvQnV0dG9uPlxuXHRcdFx0XHQ8L0RyYXdlckJvZHk+XG5cblx0XHRcdFx0PERyYXdlckZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZVwiXG5cdFx0XHRcdFx0XHRtcj17M31cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRDbG9zZVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0RyYXdlckZvb3Rlcj5cblx0XHRcdDwvRHJhd2VyQ29udGVudD5cblx0XHQ8L0RyYXdlcj5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcyc7XG5pbXBvcnQgeyBCb3gsIEhTdGFjaywgQ2VudGVyLCBTdGFjaywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgQXJyb3dSaWdodEljb24gfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtaWNvbnMnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHRpdGxlOiAnT24gVGhlIEh1bnQnLFxuXHRcdGRlc2NyaXB0aW9uOiAnVmlldyB0aGUgbGF0ZXN0IHByb2R1Y3RzIGZyb20gUHJvZHVjdCBIdW50Jyxcblx0XHQndHdpdHRlcjpjYXJkJzogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxuXHRcdCd0d2l0dGVyOnNpdGUnOiAnQGRhcnJ5bF9jb2RlcycsXG5cdFx0J3R3aXR0ZXI6Y3JlYXRvcic6ICdAZGFycnlsX2NvZGVzJyxcblx0XHQndHdpdHRlcjp0aXRsZSc6ICdPbiBUaGUgSHVudCcsXG5cdFx0J3R3aXR0ZXI6ZGVzY3JpcHRpb24nOiAnVmlldyB0aGUgbGF0ZXN0IHByb2R1Y3RzIGZyb20gUHJvZHVjdCBIdW50Jyxcblx0XHQndHdpdHRlcjppbWFnZSc6ICdodHRwczovL290aC1wcm9kLnZlcmNlbC5hcHAvU0VPLnBuZycsXG5cdFx0J29nOnRpdGxlJzogJ09uIFRoZSBIdW50Jyxcblx0XHQnb2c6ZGVzY3JpcHRpb24nOiAnVmlldyB0aGUgbGF0ZXN0IHByb2R1Y3RzIGZyb20gUHJvZHVjdCBIdW50Jyxcblx0XHQnb2c6aW1hZ2UnOiAnaHR0cHM6Ly9vdGgtcHJvZC52ZXJjZWwuYXBwL1NFTy5wbmcnLFxuXHRcdCdvZzp1cmwnOiAnaHR0cHM6Ly9vdGgtcHJvZC52ZXJjZWwuYXBwLycsXG5cdFx0J29nOnNpdGVfbmFtZSc6ICdPbiBUaGUgSHVudCcsXG5cdFx0J29nOnR5cGUnOiAnd2Vic2l0ZScsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpOiBKU1guRWxlbWVudCB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxTdGFja1xuXHRcdFx0XHRwb3M9XCJyZWxhdGl2ZVwiXG5cdFx0XHRcdHc9XCJmdWxsXCJcblx0XHRcdFx0YWxpZ25Db250ZW50PVwiY2VudGVyXCJcblx0XHRcdFx0anVzdGlmeT1cImNlbnRlclwiXG5cdFx0XHRcdHNwYWNpbmc9ezEwfVxuXHRcdFx0PlxuXHRcdFx0XHQ8Q2VudGVyPlxuXHRcdFx0XHRcdDxDZW50ZXJcblx0XHRcdFx0XHRcdGJnQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNTUpXCJcblx0XHRcdFx0XHRcdGJhY2tkcm9wRmlsdGVyPXtgYmx1cigxMHB4KWB9XG5cdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcblx0XHRcdFx0XHRcdHc9ezMzMH1cblx0XHRcdFx0XHRcdGg9ezI5OH1cblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz17MjB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJveCB3PVwiMjMwcHhcIj5cblx0XHRcdFx0XHRcdFx0PFN0YWNrIHNwYWNpbmc9ey01fSB3PVwiZnVsbFwiIHNob3VsZFdyYXBDaGlsZHJlbj5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjNyZW1cIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0T25cblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplPVwiM3JlbVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRtbD1cIjI1JVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0PVwiYm9sZFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhlXG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZT1cIjNyZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWw9XCI1MCVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodD1cImJvbGRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdEh1bnRcblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHRcdDxUZXh0IGZvbnRTaXplPVwiMjBweFwiIGNvbG9yPVwiIzYzNjM2M1wiPlxuXHRcdFx0XHRcdFx0XHRWaWV3IHRoZSBsYXRlc3QgYmVzdCBwcm9kdWN0c1xuXHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdFx0PENlbnRlcj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0dG89XCIvcHJvZHVjdHNcIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICdpbmhlcml0JyB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxIU3RhY2tcblx0XHRcdFx0XHRcdFx0YmdDb2xvcj1cImJsYWNrXCJcblx0XHRcdFx0XHRcdFx0Y29sb3I9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiMTUzcHhcIlxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCI2MHB4XCJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwiMTVweFwiXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnk9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjIycHhcIiBmb250RmFtaWx5PVwiUm9ib3RvXCI+XG5cdFx0XHRcdFx0XHRcdFx0Vmlld1xuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdDxBcnJvd1JpZ2h0SWNvbiAvPlxuXHRcdFx0XHRcdFx0PC9IU3RhY2s+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgQ2VudGVyLCBJbWFnZSwgQnV0dG9uLCBTdGFjaywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCk6IEpTWC5FbGVtZW50IHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PENlbnRlclxuXHRcdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHRcdGJnQ29sb3I9XCJyZWQuMzAwXCJcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuXHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdD5cblx0XHRcdFx0PFRleHQgZm9udFNpemU9XCI0eGxcIj5Ib21lIFBhZ2U8L1RleHQ+XG5cdFx0XHQ8L0NlbnRlcj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic5NGYyYmJjZicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtSzQzNktQR1IuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVo0MkI1T1ZMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR0NWVllRSk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ERDRZREpDNS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtUFk2QUxUV1MuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNDTEpLSjRRLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvaG9tZSc6eydpZCc6J3JvdXRlcy9ob21lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2hvbWUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaG9tZS1ZTEE2Q0pUVS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LU0yQTNXRlNYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1KRlNQUU9CRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvZHVjdHMnOnsnaWQnOidyb3V0ZXMvcHJvZHVjdHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJvZHVjdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJvZHVjdHMtQkNPUjZSRUEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUpGU1BRT0JFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2R1Y3RzL21lbnUnOnsnaWQnOidyb3V0ZXMvcHJvZHVjdHMvbWVudScsJ3BhcmVudElkJzoncm91dGVzL3Byb2R1Y3RzJywncGF0aCc6J21lbnUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJvZHVjdHMvbWVudS1SUTRHN0M1RS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM0NMSktKNFEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC05NEYyQkJDRi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxl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
