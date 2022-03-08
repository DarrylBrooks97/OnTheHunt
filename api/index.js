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
  Document: () => Document,
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
var import_bs = require("react-icons/bs");
var import_react_icons = require("@radix-ui/react-icons");
var import_react10 = require("@chakra-ui/react");
function ProductCard({
  product
}) {
  const toast = (0, import_react10.useToast)();
  const [isDesktop] = (0, import_react10.useMediaQuery)("(min-width: 768px)");
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
  }))), isDesktop ? /* @__PURE__ */ React.createElement(import_bs.BsLink45Deg, {
    width: 50,
    height: 50,
    cursor: "copy",
    onClick: () => {
      navigator.clipboard.writeText(url);
      toast({
        title: "Copied to clipboard",
        description: "Ready to Share !",
        status: "success",
        duration: 2e3,
        isClosable: true
      });
    }
  }) : /* @__PURE__ */ React.createElement(import_react_icons.Share2Icon, {
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
    throw new Error("Failed to load products");
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
var assets_manifest_default = { "version": "f5f80833", "entry": { "module": "/build/entry.client-IUBXJL5E.js", "imports": ["/build/_shared/chunk-Z42B5OVL.js", "/build/_shared/chunk-YHXMBW64.js", "/build/_shared/chunk-DD4YDJC5.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-IPGCP3CE.js", "imports": ["/build/_shared/chunk-MY5CSQRW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-VIF2NFWT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-J6VXJGMT.js", "imports": ["/build/_shared/chunk-JFSPQOBE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products": { "id": "routes/products", "parentId": "root", "path": "products", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/products-5ZXB2GGH.js", "imports": ["/build/_shared/chunk-JFSPQOBE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products/menu": { "id": "routes/products/menu", "parentId": "routes/products", "path": "menu", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/products/menu-LGE6YTJ4.js", "imports": ["/build/_shared/chunk-MY5CSQRW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F5F80833.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9jb250ZXh0LmNsaWVudCIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vYXBwL2NvbnRleHQuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwgIi4uL2FwcC90aGVtZS50cyIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4IiwgIi4uL2FwcC91dGlscy9pbmRleC50cyIsICIuLi9hcHAvc2VydmVyL3N1cGFiYXNlLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy9tZW51LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvaG9tZS50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvcHJvZHVjdHMvbWVudS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL2hvbWUudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9wcm9kdWN0c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJvZHVjdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvZHVjdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3Byb2R1Y3RzL21lbnVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2R1Y3RzL21lbnVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wcm9kdWN0c1wiLFxuICAgICAgcGF0aDogXCJtZW51XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9ob21lXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ob21lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImhvbWVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QvZW50cnknO1xuXG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tICdAZW1vdGlvbi9zZXJ2ZXIvY3JlYXRlLWluc3RhbmNlJztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gJy4vY3JlYXRlRW1vdGlvbkNhY2hlJztcbmltcG9ydCBTZXJ2ZXJTdHlsZUNvbnRleHQgZnJvbSAnLi9jb250ZXh0LnNlcnZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG5cdHJlcXVlc3Q6IFJlcXVlc3QsXG5cdHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuXHRyZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG5cdHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcblx0Y29uc3QgY2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcblx0Y29uc3QgeyBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyB9ID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cblx0Y29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKFxuXHRcdDxTZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e251bGx9PlxuXHRcdFx0PENhY2hlUHJvdmlkZXIgdmFsdWU9e2NhY2hlfT5cblx0XHRcdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cblx0XHRcdDwvQ2FjaGVQcm92aWRlcj5cblx0XHQ8L1NlcnZlclN0eWxlQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcblxuXHRjb25zdCBjaHVua3MgPSBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyhodG1sKTtcblxuXHRjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcblx0XHQ8U2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjaHVua3Muc3R5bGVzfT5cblx0XHRcdDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG5cdFx0XHRcdDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG5cdFx0XHQ8L0NhY2hlUHJvdmlkZXI+XG5cdFx0PC9TZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG5cblx0cmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoYDwhRE9DVFlQRSBodG1sPiR7bWFya3VwfWAsIHtcblx0XHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcblx0XHRoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG5cdH0pO1xufVxuIiwgImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KTtcbn0iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlclN0eWxlQ29udGV4dERhdGEge1xuICBrZXk6IHN0cmluZztcbiAgaWRzOiBBcnJheTxzdHJpbmc+O1xuICBjc3M6IHN0cmluZztcbn1cblxuY29uc3QgU2VydmVyU3R5bGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxudWxsIHwgU2VydmVyU3R5bGVDb250ZXh0RGF0YVtdPihudWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyU3R5bGVDb250ZXh0IiwgImltcG9ydCAnQGZvbnRzb3VyY2Uvb3N3YWxkLzQwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9hbGVncmV5YS1zYW5zLXNjLzcwMC5jc3MnO1xuLy8gaW1wb3J0ICdAZm9udHNvdXJjZS9hbGVncmV5YS1zYW5zLXNjLzcwMC5jc3MnO1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBTZXJ2ZXJTdHlsZUNvbnRleHQgZnJvbSAnfi9jb250ZXh0LnNlcnZlcic7XG5pbXBvcnQgQ2xpZW50U3R5bGVDb250ZXh0IGZyb20gJ34vY29udGV4dC5jbGllbnQnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENlbnRlciwgVGV4dCwgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRPdXRsZXQsXG5cdE1ldGEsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxuXHR1c2VDYXRjaCxcbn0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PE91dGxldCAvPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuXHRcdFx0XHRcdDxwPntlcnJvci5tZXNzYWdlfTwvcD5cblx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHQ8cD5IZXkgdGhlcmUncyBhbiBlcnJvciBpbiB0aGUgcm9vdCBmaWxlPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdDwvRG9jdW1lbnQ+XG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuXHRsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxDZW50ZXIgaD1cImZ1bGxcIiB3PVwiZnVsbFwiPlxuXHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRiZ0dyYWRpZW50PVwibGluZWFyKHRvLXIsIGJyYW5kLnByaW1hcnksIGJyYW5kLmFjY2VudClcIlxuXHRcdFx0XHRcdFx0YmdDbGlwPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRmb250U2l6ZT1cIjZ4bFwiXG5cdFx0XHRcdFx0XHRmb250V2VpZ2h0PVwiQm9sZFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0UGFnZSBOb3QgRm91bmRcblx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxuaW50ZXJmYWNlIERvY3VtZW50UHJvcHMge1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xuXHR0aXRsZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERvY3VtZW50ID0gd2l0aEVtb3Rpb25DYWNoZShcblx0KHsgY2hpbGRyZW4sIHRpdGxlIH06IERvY3VtZW50UHJvcHMsIGVtb3Rpb25DYWNoZSkgPT4ge1xuXHRcdGNvbnN0IHNlcnZlclN5bGVEYXRhID0gdXNlQ29udGV4dChTZXJ2ZXJTdHlsZUNvbnRleHQpO1xuXHRcdGNvbnN0IGNsaWVudFN0eWxlRGF0YSA9IHVzZUNvbnRleHQoQ2xpZW50U3R5bGVDb250ZXh0KTtcblx0XHQvLyBPbmx5IGV4ZWN1dGVkIG9uIGNsaWVudFxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0XHQvLyByZS1saW5rIHNoZWV0IGNvbnRhaW5lclxuXHRcdFx0ZW1vdGlvbkNhY2hlLnNoZWV0LmNvbnRhaW5lciA9IGRvY3VtZW50LmhlYWQ7XG5cdFx0XHQvLyByZS1pbmplY3QgdGFnc1xuXHRcdFx0Y29uc3QgdGFncyA9IGVtb3Rpb25DYWNoZS5zaGVldC50YWdzO1xuXHRcdFx0ZW1vdGlvbkNhY2hlLnNoZWV0LmZsdXNoKCk7XG5cdFx0XHR0YWdzLmZvckVhY2goKHRhZykgPT4ge1xuXHRcdFx0XHQoZW1vdGlvbkNhY2hlLnNoZWV0IGFzIGFueSkuX2luc2VydFRhZyh0YWcpO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyByZXNldCBjYWNoZSB0byByZWFwcGx5IGdsb2JhbCBzdHlsZXNcblx0XHRcdGNsaWVudFN0eWxlRGF0YS5yZXNldCgpO1xuXHRcdH0sIFtdKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHRcdDxoZWFkPlxuXHRcdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRcdG5hbWU9XCJ2aWV3cG9ydFwiXG5cdFx0XHRcdFx0XHRjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cblx0XHRcdFx0XHQ8TWV0YSAvPlxuXHRcdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0XHRcdHtzZXJ2ZXJTeWxlRGF0YT8ubWFwKCh7IGtleSwgaWRzLCBjc3MgfSkgPT4gKFxuXHRcdFx0XHRcdFx0PHN0eWxlXG5cdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHRkYXRhLWVtb3Rpb249e2Ake2tleX0gJHtpZHMuam9pbignICcpfWB9XG5cdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcblx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjc3MgfX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvaGVhZD5cblx0XHRcdFx0PGJvZHk+XG5cdFx0XHRcdFx0PENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+e2NoaWxkcmVufTwvQ2hha3JhUHJvdmlkZXI+XG5cdFx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdFx0PFNjcmlwdHMgLz5cblx0XHRcdFx0XHR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG5cdFx0XHRcdDwvYm9keT5cblx0XHRcdDwvaHRtbD5cblx0XHQpO1xuXHR9XG4pO1xuIiwgImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBTdGFjaywgRmxleCwgSW1hZ2VQcm9wcywgSW1hZ2UsIEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5jb25zdCBNb3Rpb25JbWFnZSA9IG1vdGlvbjxJbWFnZVByb3BzPihJbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG5cdHJldHVybiAoXG5cdFx0PEJveD5cblx0XHRcdDxTdGFja1xuXHRcdFx0XHRzcGFjaW5nPXswfVxuXHRcdFx0XHRwb3M9XCJyZWxhdGl2ZVwiXG5cdFx0XHRcdHc9XCIxMDB2d1wiXG5cdFx0XHRcdGg9XCIxMDB2aFwiXG5cdFx0XHRcdG92ZXJmbG93WD1cImhpZGRlblwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdFx0PEZsZXggZmxleEdyb3c9ezF9PntjaGlsZHJlbn08L0ZsZXg+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdFx0PE1vdGlvbkltYWdlXG5cdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHR0b3A9XCIyMCVcIlxuXHRcdFx0XHRsZWZ0PVwiLTUlXCJcblx0XHRcdFx0ekluZGV4PXstMX1cblx0XHRcdFx0c3JjPVwiL3JlZC1jaXJjbGUucG5nXCJcblx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdHg6IFsnMCUnLCAnMTAwJScsICc1MCUnLCAnMCUnLCAnMCUnXSxcblx0XHRcdFx0XHR5OiBbJzAlJywgJzEwMCUnLCAnMCUnLCAnMTAwJScsICcwJSddLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dHJhbnNpdGlvbj17e1xuXHRcdFx0XHRcdHR5cGU6ICdlYXNlSW5PdXQnLFxuXHRcdFx0XHRcdHJlcGVhdDogSW5maW5pdHksXG5cdFx0XHRcdFx0cmVwZWF0VHlwZTogJ21pcnJvcicsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDE1LFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxNb3Rpb25JbWFnZVxuXHRcdFx0XHRwb3NpdGlvbj1cImFic29sdXRlXCJcblx0XHRcdFx0dG9wPVwiMzUlXCJcblx0XHRcdFx0cmlnaHQ9XCIwJVwiXG5cdFx0XHRcdHpJbmRleD17LTF9XG5cdFx0XHRcdHNyYz1cIi9ibHVlLWNpcmNsZS5wbmdcIlxuXHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0eDogWycwJScsICctMTMwJScsICctMTMwJScsICcwJScsICcwJSddLFxuXHRcdFx0XHRcdHk6IFsnMTAwJScsICctMTAwJScsICcxMDAlJywgJy0xMDAlJywgJzEwMCUnXSxcblx0XHRcdFx0fX1cblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHR0eXBlOiAnZWFzZUluT3V0Jyxcblx0XHRcdFx0XHRyZXBlYXQ6IEluZmluaXR5LFxuXHRcdFx0XHRcdHJlcGVhdFR5cGU6ICdtaXJyb3IgJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogMTUsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0PE1vdGlvbkltYWdlXG5cdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHR0b3A9XCI1MCVcIlxuXHRcdFx0XHRsZWZ0PVwiMCVcIlxuXHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRzcmM9XCIveWVsbG93LWNpcmNsZS5wbmdcIlxuXHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0eDogWycwJScsICcxMDAlJywgJzAlJywgJzEwMCUnLCAnMCUnXSxcblx0XHRcdFx0XHR5OiBbJzAlJywgJy0xMDAlJywgJy0xMDAlJywgJzAlJywgJzAlJ10sXG5cdFx0XHRcdH19XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0cmFuc2l0aW9uPXt7XG5cdFx0XHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRcdFx0cmVwZWF0OiBJbmZpbml0eSxcblx0XHRcdFx0XHRyZXBlYXRUeXBlOiAnbWlycm9yICcsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDE1LFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHQ8L0JveD5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgQm94LCBIU3RhY2ssIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0cmV0dXJuIChcblx0XHQ8SFN0YWNrXG5cdFx0XHRhcz1cIm5hdlwiXG5cdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHR0b3A9XCIwXCJcblx0XHRcdHBvc2l0aW9uPVwic3RpY2t5XCJcblx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0anVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcblx0XHRcdGJnQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuMjApXCJcblx0XHRcdGJhY2tkcm9wRmlsdGVyPXtgYmx1cigxMHB4KWB9XG5cdFx0XHR6SW5kZXg9ezF9XG5cdFx0XHRwPXs0fVxuXHRcdD5cblx0XHRcdDxMaW5rIHRvPVwiL1wiPlxuXHRcdFx0XHQ8SGVhZGluZyBmb250U2l6ZT1cIjI0cHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuXHRcdFx0XHRcdE9uIFRoZSBIdW50XG5cdFx0XHRcdDwvSGVhZGluZz5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxCb3g+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL3Byb2R1Y3RzL21lbnVcIj5cblx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPVwiL21lbnUuc3ZnXCIgYWx0PVwiTWVudVwiIHc9XCJmdWxsXCIgaD1cImZ1bGxcIiAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L0hTdGFjaz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG5cdHN0eWxlczoge1xuXHRcdGZvbnRzOiB7XG5cdFx0XHRoZWFkaW5nOiAnT3N3YWxkLCBzYW5zLXNlcmlmJyxcblx0XHRcdGJvZHk6ICdBbGVncmV5YSBTQywgc2VyaWYnLFxuXHRcdH0sXG5cdH0sXG59KTtcbiIsICJpbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnfi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkJztcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vc2VydmVyL3N1cGFiYXNlLnNlcnZlcic7XG5pbXBvcnQgdHlwZSB7IFByb2R1Y3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IEJveCwgQm94UHJvcHMsIFN0YWNrLCB1c2VEaXNjbG9zdXJlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgT3V0bGV0LCB1c2VMb2FkZXJEYXRhLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlbWl4JztcblxuY29uc3QgTW90aW9uQm94ID0gbW90aW9uPEJveFByb3BzPihCb3gpO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgeyBkYXRhOiBwcm9kdWN0cywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG5cdFx0LmZyb20oJ3Byb2R1Y3RzJylcblx0XHQuc2VsZWN0KCcqJyk7XG5cblx0aWYgKGVycm9yIHx8ICFwcm9kdWN0cykge1xuXHRcdHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgcHJvZHVjdHMnKTtcblx0fVxuXG5cdHJldHVybiBwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IGFueSkgPT4ge1xuXHRcdGlmIChwcm9kdWN0LmltYWdlX3VybC5pbmNsdWRlcygnLmdpZicpKSB7XG5cdFx0XHRwcm9kdWN0LmltYWdlX3VybCA9XG5cdFx0XHRcdCdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8yMTExLzIxMTE1NTYucG5nJztcblx0XHR9XG5cblx0XHQvLyBHZXQgdGhlIHNob3J0ZXN0IHRvcGljXG5cdFx0cHJvZHVjdC50b3BpYyA9IHByb2R1Y3QudG9waWNzLnJlZHVjZShcblx0XHRcdChhOiB7IG5vZGU6IHsgbmFtZTogc3RyaW5nIH0gfSwgYjogeyBub2RlOiB7IG5hbWU6IHN0cmluZyB9IH0pID0+IHtcblx0XHRcdFx0cmV0dXJuIGEubm9kZS5uYW1lLmxlbmd0aCA8PSBiLm5vZGUubmFtZS5sZW5ndGggPyBhIDogYjtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0cmV0dXJuIHByb2R1Y3Q7XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBwcm9kdWN0cyA9IHVzZUxvYWRlckRhdGE8UHJvZHVjdFtdPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PEJveCBwb3M9XCJyZWxhdGl2ZVwiIHc9XCJmdWxsXCIgaD1cImZ1bGxcIj5cblx0XHRcdDxTdGFja1xuXHRcdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHRcdGg9XCJmdWxsXCJcblx0XHRcdFx0anVzdGlmeT1cImNlbnRlclwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRtdD17OX1cblx0XHRcdFx0c3BhY2luZz17NX1cblx0XHRcdD5cblx0XHRcdFx0e3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8TW90aW9uQm94XG5cdFx0XHRcdFx0XHRpbml0aWFsPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdGFuaW1hdGU9XCJ2aXNpYmxlXCJcblx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRjdXN0b209e2luZGV4fVxuXHRcdFx0XHRcdFx0dmFyaWFudHM9e3tcblx0XHRcdFx0XHRcdFx0aGlkZGVuOiB7XG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdFx0XHR4OiBpbmRleCAlIDIgPT09IDAgPyAtMTAwIDogMTAwLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiAoaW5kZXgpID0+ICh7XG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHRcdFx0XHR4OiAwLFxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5OiBpbmRleCAqIDAuMzUsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC45LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuXHRcdFx0XHRcdDwvTW90aW9uQm94PlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8T3V0bGV0IC8+XG5cdFx0PC9Cb3g+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ34vdHlwZXMnO1xuaW1wb3J0IHsgY29udmVydE51bSB9IGZyb20gJ34vdXRpbHMnO1xuaW1wb3J0IHsgR29UcmlhbmdsZVVwIH0gZnJvbSAncmVhY3QtaWNvbnMvZ28nO1xuaW1wb3J0IHsgQnNMaW5rNDVEZWcgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG5pbXBvcnQgeyBBcnJvd1RvcFJpZ2h0SWNvbiwgU2hhcmUySWNvbiB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1pY29ucyc7XG5pbXBvcnQge1xuXHRIU3RhY2ssXG5cdEltYWdlLFxuXHRTdGFjayxcblx0VGV4dCxcblx0TGluayxcblx0Q2VudGVyLFxuXHRCb3gsXG5cdHVzZVRvYXN0LFxuXHR1c2VNZWRpYVF1ZXJ5LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcblx0cHJvZHVjdDogUHJvZHVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQoe1xuXHRwcm9kdWN0LFxufTogUHJvZHVjdENhcmRQcm9wcyk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xuXHRjb25zdCBbaXNEZXNrdG9wXSA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6IDc2OHB4KScpO1xuXHRjb25zdCB7IG5hbWUsIHVybCwgaW1hZ2VfdXJsLCB0YWdsaW5lLCB0b3BpYywgdXB2b3RlcyB9OiBQcm9kdWN0ID0gcHJvZHVjdDtcblxuXHRyZXR1cm4gKFxuXHRcdDxTdGFja1xuXHRcdFx0cD1cIjRcIlxuXHRcdFx0aD1cImF1dG9cIlxuXHRcdFx0dz1cIjMxNXB4XCJcblx0XHRcdHBvcz1cInJlbGF0aXZlXCJcblx0XHRcdGJvcmRlclJhZGl1cz1cIjIwcHhcIlxuXHRcdFx0Ym9yZGVyPVwiMnB4IHNvbGlkIGJsYWNrXCJcblx0XHRcdGJnQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNTUpXCJcblx0XHQ+XG5cdFx0XHQ8U3RhY2tcblx0XHRcdFx0aD1cImF1dG9cIlxuXHRcdFx0XHRzcGFjaW5nPXswfVxuXHRcdFx0XHRwb3M9XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdGFsaWduU2VsZj1cInN0YXJ0XCJcblx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxHb1RyaWFuZ2xlVXBcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Y29sb3I6ICdncmVlbicsXG5cdFx0XHRcdFx0XHRmaWxsOiAnZ3JlZW4nLFxuXHRcdFx0XHRcdFx0d2lkdGg6ICcyNXB4Jyxcblx0XHRcdFx0XHRcdGhlaWdodDogJzI1cHgnLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiPntjb252ZXJ0TnVtKHVwdm90ZXMpfTwvVGV4dD5cblx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8SFN0YWNrIHc9XCJmdWxsXCIganVzdGlmeT1cImNlbnRlclwiPlxuXHRcdFx0XHQ8U3RhY2sgYWxpZ25TZWxmPVwic3RhcnRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRzcmM9e2Ake2ltYWdlX3VybH1gfVxuXHRcdFx0XHRcdFx0Ym94U2l6ZT1cIjYwcHhcIlxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwiNTAlXCJcblx0XHRcdFx0XHRcdG9iamVjdEZpdD1cImZpbGxcIlxuXHRcdFx0XHRcdFx0Ym94U2hhZG93PXtgMHB4IDRweCAxNXB4IDBweCByZ2JhKDAsMCwwLDAuMjUpYH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0PntuYW1lfTwvVGV4dD5cblx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0PENlbnRlclxuXHRcdFx0XHRcdHA9XCIwLjVcIlxuXHRcdFx0XHRcdHRvcD1cIjVcIlxuXHRcdFx0XHRcdHJpZ2h0PVwiNVwiXG5cdFx0XHRcdFx0Ymc9XCIjRjRBMjYxXCJcblx0XHRcdFx0XHR3PVwiODBweFwiXG5cdFx0XHRcdFx0aD1cIjE4cHhcIlxuXHRcdFx0XHRcdHBvcz1cImFic29sdXRlXCJcblx0XHRcdFx0XHRhbGlnblNlbGY9XCJzdGFydFwiXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPXs0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFRleHQgY29sb3I9XCJ3aGl0ZVwiIGlzVHJ1bmNhdGVkIGZvbnRTaXplPVwic21cIj5cblx0XHRcdFx0XHRcdHt0b3BpY1snbm9kZSddWyduYW1lJ10uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuXHRcdFx0XHRcdFx0XHR0b3BpY1snbm9kZSddWyduYW1lJ10uc2xpY2UoMSl9XG5cdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdDwvSFN0YWNrPlxuXHRcdFx0PFRleHQgY29sb3I9XCJibGFja1wiPnt0YWdsaW5lfTwvVGV4dD5cblx0XHRcdDxCb3ggdz1cImZ1bGxcIiBwPVwiMlwiPlxuXHRcdFx0XHQ8SFN0YWNrIGp1c3RpZnk9XCJjZW50ZXJcIj5cblx0XHRcdFx0XHQ8TGluayBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0PEhTdGFja1xuXHRcdFx0XHRcdFx0XHR3PVwiYXV0b1wiXG5cdFx0XHRcdFx0XHRcdGg9XCIzNnB4XCJcblx0XHRcdFx0XHRcdFx0YmdDb2xvcj1cImJsYWNrXCJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwiNVwiXG5cdFx0XHRcdFx0XHRcdHA9XCIzXCJcblx0XHRcdFx0XHRcdFx0c2hvdWxkV3JhcENoaWxkcmVuXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxUZXh0IGNvbG9yPVwid2hpdGVcIj5DaGVjayBvdXQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdDxBcnJvd1RvcFJpZ2h0SWNvbiBjb2xvcj1cIndoaXRlXCIgLz5cblx0XHRcdFx0XHRcdDwvSFN0YWNrPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHR7aXNEZXNrdG9wID8gKFxuXHRcdFx0XHRcdFx0PEJzTGluazQ1RGVnXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXs1MH1cblx0XHRcdFx0XHRcdFx0aGVpZ2h0PXs1MH1cblx0XHRcdFx0XHRcdFx0Y3Vyc29yPVwiY29weVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh1cmwpO1xuXHRcdFx0XHRcdFx0XHRcdHRvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnQ29waWVkIHRvIGNsaXBib2FyZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ1JlYWR5IHRvIFNoYXJlICEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdHVzOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0XHRcdFx0XHRcdGlzQ2xvc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8U2hhcmUySWNvblxuXHRcdFx0XHRcdFx0XHR3aWR0aD17MjB9XG5cdFx0XHRcdFx0XHRcdGhlaWdodD17MjB9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XG5cdFx0XHRcdFx0XHRcdFx0bmF2aWdhdG9yLnNoYXJlKHsgdXJsOiB1cmwsIHRpdGxlOiBuYW1lIH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9IU3RhY2s+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L1N0YWNrPlxuXHQpO1xufVxuIiwgImV4cG9ydCBjb25zdCBjb252ZXJ0TnVtID0gKG51bTogbnVtYmVyKSA9PiB7XG5cdGlmIChudW0gPCAxMDAwKSByZXR1cm4gbnVtO1xuXG5cdGNvbnN0IHNpID0gW1xuXHRcdHsgdjogMWUzLCBzOiAnSycgfSxcblx0XHR7IHY6IDFlNiwgczogJ00nIH0sXG5cdFx0eyB2OiAxZTksIHM6ICdCJyB9LFxuXHRcdHsgdjogMWUxMiwgczogJ1QnIH0sXG5cdFx0eyB2OiAxZTE1LCBzOiAnUCcgfSxcblx0XHR7IHY6IDFlMTgsIHM6ICdFJyB9LFxuXHRdO1xuXHRsZXQgaTtcblx0Zm9yIChpID0gc2kubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuXHRcdGlmIChudW0gPj0gc2lbaV0udikge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAoXG5cdFx0KG51bSAvIHNpW2ldLnYpLnRvRml4ZWQoMikucmVwbGFjZSgvXFwuMCskfChcXC5bMC05XSpbMS05XSkwKyQvLCAnJDEnKSArXG5cdFx0c2lbaV0uc1xuXHQpO1xufTtcbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnQsIFN1cGFiYXNlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuaWYgKCFwcm9jZXNzLmVudi5TVVBBQkFTRV9VUkwpXG5cdHRocm93IEVycm9yKCdTdXBhYmFzZSBVUkwgbm90IGZvdW5kIGluIGVudmlyb25tZW50Jyk7XG5pZiAoIXByb2Nlc3MuZW52LlNVUEFCQVNFX0tFWSlcblx0dGhyb3cgRXJyb3IoJ1N1cGFiYXNlIEtFWSBub3QgZm91bmQgaW4gZW52aXJvbm1lbnQnKTtcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlOiBTdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChcblx0cHJvY2Vzcy5lbnYuU1VQQUJBU0VfVVJMIGFzIHN0cmluZyxcblx0cHJvY2Vzcy5lbnYuU1VQQUJBU0VfS0VZIGFzIHN0cmluZ1xuKTtcbiIsICJpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7XG5cdEJ1dHRvbixcblx0RHJhd2VyLFxuXHREcmF3ZXJCb2R5LFxuXHREcmF3ZXJDbG9zZUJ1dHRvbixcblx0RHJhd2VyQ29udGVudCxcblx0RHJhd2VyRm9vdGVyLFxuXHREcmF3ZXJIZWFkZXIsXG5cdERyYXdlck92ZXJsYXksXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG5cdHJldHVybiAoXG5cdFx0PERyYXdlciBpc09wZW49e3RydWV9IHBsYWNlbWVudD1cInJpZ2h0XCIgb25DbG9zZT17KCkgPT4gbmF2aWdhdGUoLTEpfT5cblx0XHRcdDxEcmF3ZXJPdmVybGF5IC8+XG5cdFx0XHQ8RHJhd2VyQ29udGVudD5cblx0XHRcdFx0PERyYXdlckNsb3NlQnV0dG9uIC8+XG5cdFx0XHRcdDxEcmF3ZXJIZWFkZXI+U2VuZCBtZSBhIHdhdmUgaWYgeW91IHNlZSB0aGlzITwvRHJhd2VySGVhZGVyPlxuXG5cdFx0XHRcdDxEcmF3ZXJCb2R5PlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3dhdmVkJyl9PldhdmU8L0J1dHRvbj5cblx0XHRcdFx0PC9EcmF3ZXJCb2R5PlxuXG5cdFx0XHRcdDxEcmF3ZXJGb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVcIlxuXHRcdFx0XHRcdFx0bXI9ezN9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgtMSl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0Q2xvc2Vcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9EcmF3ZXJGb290ZXI+XG5cdFx0XHQ8L0RyYXdlckNvbnRlbnQ+XG5cdFx0PC9EcmF3ZXI+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdC9yb3V0ZU1vZHVsZXMnO1xuaW1wb3J0IHsgQm94LCBIU3RhY2ssIENlbnRlciwgU3RhY2ssIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEFycm93UmlnaHRJY29uIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWljb25zJztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0aXRsZTogJ09uIFRoZSBIdW50Jyxcblx0XHRkZXNjcmlwdGlvbjogJ1ZpZXcgdGhlIGxhdGVzdCBwcm9kdWN0cyBmcm9tIFByb2R1Y3QgSHVudCcsXG5cdFx0J3R3aXR0ZXI6Y2FyZCc6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJyxcblx0XHQndHdpdHRlcjpzaXRlJzogJ0BkYXJyeWxfY29kZXMnLFxuXHRcdCd0d2l0dGVyOmNyZWF0b3InOiAnQGRhcnJ5bF9jb2RlcycsXG5cdFx0J3R3aXR0ZXI6dGl0bGUnOiAnT24gVGhlIEh1bnQnLFxuXHRcdCd0d2l0dGVyOmRlc2NyaXB0aW9uJzogJ1ZpZXcgdGhlIGxhdGVzdCBwcm9kdWN0cyBmcm9tIFByb2R1Y3QgSHVudCcsXG5cdFx0J3R3aXR0ZXI6aW1hZ2UnOiAnaHR0cHM6Ly9vdGgtcHJvZC52ZXJjZWwuYXBwL1NFTy5wbmcnLFxuXHRcdCdvZzp0aXRsZSc6ICdPbiBUaGUgSHVudCcsXG5cdFx0J29nOmRlc2NyaXB0aW9uJzogJ1ZpZXcgdGhlIGxhdGVzdCBwcm9kdWN0cyBmcm9tIFByb2R1Y3QgSHVudCcsXG5cdFx0J29nOmltYWdlJzogJ2h0dHBzOi8vb3RoLXByb2QudmVyY2VsLmFwcC9TRU8ucG5nJyxcblx0XHQnb2c6dXJsJzogJ2h0dHBzOi8vb3RoLXByb2QudmVyY2VsLmFwcC8nLFxuXHRcdCdvZzpzaXRlX25hbWUnOiAnT24gVGhlIEh1bnQnLFxuXHRcdCdvZzp0eXBlJzogJ3dlYnNpdGUnLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U3RhY2tcblx0XHRcdFx0cG9zPVwicmVsYXRpdmVcIlxuXHRcdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHRcdGFsaWduQ29udGVudD1cImNlbnRlclwiXG5cdFx0XHRcdGp1c3RpZnk9XCJjZW50ZXJcIlxuXHRcdFx0XHRzcGFjaW5nPXsxMH1cblx0XHRcdD5cblx0XHRcdFx0PENlbnRlcj5cblx0XHRcdFx0XHQ8Q2VudGVyXG5cdFx0XHRcdFx0XHRiZ0NvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwwLjU1KVwiXG5cdFx0XHRcdFx0XHRiYWNrZHJvcEZpbHRlcj17YGJsdXIoMTBweClgfVxuXHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG5cdFx0XHRcdFx0XHR3PXszMzB9XG5cdFx0XHRcdFx0XHRoPXsyOTh9XG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9ezIwfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCb3ggdz1cIjIzMHB4XCI+XG5cdFx0XHRcdFx0XHRcdDxTdGFjayBzcGFjaW5nPXstNX0gdz1cImZ1bGxcIiBzaG91bGRXcmFwQ2hpbGRyZW4+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFNpemU9XCIzcmVtXCIgZm9udFdlaWdodD1cImJvbGRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdE9uXG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZT1cIjNyZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWw9XCIyNSVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodD1cImJvbGRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFRoZVxuXHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU9XCIzcmVtXCJcblx0XHRcdFx0XHRcdFx0XHRcdG1sPVwiNTAlXCJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9XCJib2xkXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRIdW50XG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjIwcHhcIiBjb2xvcj1cIiM2MzYzNjNcIj5cblx0XHRcdFx0XHRcdFx0VmlldyB0aGUgbGF0ZXN0IGJlc3QgcHJvZHVjdHNcblx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHRcdDxDZW50ZXI+XG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdHRvPVwiL3Byb2R1Y3RzXCJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnaW5oZXJpdCcgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8SFN0YWNrXG5cdFx0XHRcdFx0XHRcdGJnQ29sb3I9XCJibGFja1wiXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjE1M3B4XCJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiNjBweFwiXG5cdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjE1cHhcIlxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5PVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFNpemU9XCIyMnB4XCIgZm9udEZhbWlseT1cIlJvYm90b1wiPlxuXHRcdFx0XHRcdFx0XHRcdFZpZXdcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHQ8QXJyb3dSaWdodEljb24gLz5cblx0XHRcdFx0XHRcdDwvSFN0YWNrPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IENlbnRlciwgSW1hZ2UsIEJ1dHRvbiwgU3RhY2ssIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpOiBKU1guRWxlbWVudCB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxDZW50ZXJcblx0XHRcdFx0dz1cImZ1bGxcIlxuXHRcdFx0XHRiZ0NvbG9yPVwicmVkLjMwMFwiXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcblx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxUZXh0IGZvbnRTaXplPVwiNHhsXCI+SG9tZSBQYWdlPC9UZXh0PlxuXHRcdFx0PC9DZW50ZXI+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZjVmODA4MzMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUlVQlhKTDVFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aNDJCNU9WTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlIWE1CVzY0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREQ0WURKQzUuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUlQR0NQM0NFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NWTVDU1FSVy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2hvbWUnOnsnaWQnOidyb3V0ZXMvaG9tZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidob21lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hvbWUtVklGMk5GV1QuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1KNlZYSkdNVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSkZTUFFPQkUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2R1Y3RzJzp7J2lkJzoncm91dGVzL3Byb2R1Y3RzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2R1Y3RzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Byb2R1Y3RzLTVaWEIyR0dILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1KRlNQUU9CRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9kdWN0cy9tZW51Jzp7J2lkJzoncm91dGVzL3Byb2R1Y3RzL21lbnUnLCdwYXJlbnRJZCc6J3JvdXRlcy9wcm9kdWN0cycsJ3BhdGgnOidtZW51JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Byb2R1Y3RzL21lbnUtTEdFNllUSjQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1ZNUNTUVJXLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtRjVGODA4MzMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMz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
