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
    global: {
      body: {
        textStyle: {
          color: "#000",
          fontFamily: "Oswald",
          fontSize: "1.6rem"
        }
      }
    },
    fonts: {
      heading: "oswald",
      body: "Alegreya SC"
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
var import_react_icons = require("@radix-ui/react-icons");
var import_react11 = require("@chakra-ui/react");
function ProductCard({
  product
}) {
  const { name, url, image_url, tagline, topics, upvotes } = product;
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
  }, /* @__PURE__ */ React.createElement(import_react_icons.VercelLogoIcon, null), /* @__PURE__ */ React.createElement(import_react11.Text, {
    fontWeight: "semibold"
  }, upvotes)), /* @__PURE__ */ React.createElement(import_react11.HStack, {
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
    w: "54px",
    h: "18px",
    pos: "absolute",
    alignSelf: "start",
    borderRadius: 4
  }, /* @__PURE__ */ React.createElement(import_react11.Text, {
    color: "white",
    isTruncated: true,
    fontSize: "sm"
  }, topics[0].node.name.charAt(0).toUpperCase() + topics[0].node.name.slice(1)))), /* @__PURE__ */ React.createElement(import_react11.Box, {
    w: "full",
    p: "2"
  }, /* @__PURE__ */ React.createElement(import_react11.Text, {
    color: "black"
  }, tagline), /* @__PURE__ */ React.createElement(import_react11.HStack, {
    justify: "center",
    spacing: 3
  }, /* @__PURE__ */ React.createElement(import_react11.Button, {
    w: "auto",
    h: "36px",
    bgColor: "black",
    borderRadius: "5",
    rightIcon: /* @__PURE__ */ React.createElement(import_react_icons.ArrowTopRightIcon, null)
  }, /* @__PURE__ */ React.createElement(import_react11.Link, {
    as: "a",
    href: url,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(import_react11.Text, {
    color: "white"
  }, "Check out"))), /* @__PURE__ */ React.createElement(import_react_icons.Share2Icon, {
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
      product.image_url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEXeVCX////dTBP87OfcRQD44t3cSAjzx7vdTxzdSg7//fz329TeURrvtqreUiLcRwD1zsP21cz99PHxvrH87+v++PblgGPhYzrcQADrn4vfWy7pk3vwtaXlfF3trZvkdFHhZ0Htp5TibEjmhmvni3PplHzusaPjc1TgXzPzyb3qmoXkeFfnjXb44NiQigp4AAALSklEQVR4nOWd2YKiOhCGQ4wx2HRQUFRc21Z7OfL+r3dAWxuUsKQqgtP/1dyMwzfZKpVaiGVafS8a+IfZMVhvJmFICAnDyWYdHGcHfxB5feP/PjH421736223lVPGbSqEjEXOSv4oBLU5m8rtbuZ3Rwa/whRh5M8/QpcnZKRICSlnZD33I0NfYoIweg2IzZ0Stiynw22yXJigxCb0ekeH2TXg0pg2k/Oeh/xFqIQdP6Bci+6XktPA72B+FB7h2F86MLzrUDr/+WO078IiHB45Bt4V0t0Nkb4MhdBbbJhAortIsM0KZUkiEEbf0sYavbSkTb4RNlcwYRTY1ATfiZHS5UvDhMP1FHt6ZiXYGrggQYTDJfryy2P8D8QIIIznp3m+EyMPAOtRm3A0dx/Dd2Jke+19VZOwf6D0YXyJKF1oXrT0CIcbbmr/VEnyjd5y1CHs7x+0ALMSfK5jy2kQDh48QX9F7a8HEHo79ugJ+ivJdrV3nLqEw8+mBvAsGg7MEs7c5gbwLOnODBJ2NnbDfInsTa0bch3CgWxiC72XcOrM1BqEq8Zn6EXSXRkgHAe8abCUeFD5aKxKOJo0u4feik6qepErEkZhO5bgr0RY8W5cjXDgtA2w+n5TifB12pY9Ji05fcUiPLCmYRRiCxzCN7dpEqV4hVOjnHDWXsB4FMtNuFLCWVun6FnliGWELZ6iZ7GyiVpCuGo7YLwWS7abYsLXdk/Rs5ivTziYNv31lTQtPPqLCCOnjQf9vaRT5DAuIBy1zhZVSYQFZriacDx5FsAYcaK+TKkJg3Zdl4pFg/qEqzZdeMultt9UhIPnAiTEVW2oCsKOfI5t9FdSKDxwCsLN8+wyF4ltHcJZG/yidcXzjfBcwmH7rdE85S/FPELv89kW4VnyM+/ZJo9w90wnYVp0V43w6xkuFPliOe+L94R9YwFA5iX5vfV2Tzh/1jmaiB7LCYfPZsxkxe/CGW4J+0941qclNrdBKbeE+gY3Z5pKIvnxlv6dCX5DONKOoxTDrpZehl+L2XFrM4ozeST1Cgn1txkKypnoj4er7RQlTIfOiwgj/aOQwsPPx/6aIhxVbtZrkyUM9P8TEQhjRXsHfFiJ7H0/Qwg5KXAI451gxqFzNXtiZAiXgN/GIoxv3+/AqCuxVBEOIQYpHiE88IqlBzFNuIZMD0xCazwH3VDFOp8wAvnwUQktywfN1GlqO00RAjZSfEKrCwnAEu95hBHMN4NNaI0gFjLt5hB+w1Y3OqHlbQGn8/c9oQf0kOITWmP9pyFJrtbplfAAdCAaILQ8fUT7+jJ8JdwADUIThIAXTLm5JQSd9sYILV/7XGSXsLcL4Q5qDJohtPa6i0dcPDY/hGOwl9sQoaXtnXbHGUIf/FBhilD7hYH7GULIrcIsobbb4XLDOBN24FEXxghHRO/bLg+KZ0If7iQ1Rmi9aQ7izzQ9E8KM7iJC76VEUacs626s6bv58WacCD0E/4+CsDe1i0VFuFwU++lmeoMoHe9K2EPw5KsIy39aCnv6XhTVNNK0RtzelXCO4KfUJ0wk2HdBAoXmInLmV0KM+DUYYWwqT9Rb1ZfemSjlhRDgB/4VlJAIR5lA4WkeGKz7Q7jAiLwAExaFGL7rTdPTFSohhBs0BIOQiE/VWtQ0Kk/nRUKoOQeyQiDMjzRIFGmeF+RMCHRBXb4OgTDryk2pH+oNgh2dCBFMNoJEmPXHp6TprE4Mt5hw7mj97RuhEBK7m/sruo5AsT8RfqA8vuIQ0rd8wlfNreYjIRxpzvHbb0MhzLw4pKQZ7ipDLybs4oTp4RASO//AeNE1TbsxIYbZTdAIWf5C7GoS8l5MqHvBvBESoSKYuaNJGK9rAvcj/vwWDiHPr+2he4ESu5gQ8P6RVjvHMN65SB8pZh1rHeZfMHQJJekTDymaFGsM86uz6O6lhHkE5XJIsAjlXeDdWQPdI41FBCt1BMmm2ef+ir7tzAcE7s//+TYUQldxudA+0myfHJBCgnHuFluF81T7kk4PZIYUMYtCyFUJrxPdDZ/OyLFFhKrEHqujfcETRxIgheciEEpX5VDUt51FQNatIZS8pwAEuKzlmkAjFC6CE6rreIy1lyGRW6L/l7OCEoqpcgQhYRRyQkLtv5wVjFDyrcJDk2gP2A3DNhBKwSZFtTt1HxBPwuLTfz+0OaPvvcLKXZpuKGwpCLuH12L5vdIKujiuMrDMveNDPdaG1yFcfdhub3yngWsFW4Wh6fMQrA4siiI+Dw3bNGABHzdjm8awXQrVAuhkie1Sw3cLoCJo14X4bmH4fgiT9wn9uvh+aPiOD1L/P3jI5My0nwakd7i5Rg+mfW0QHREcnbZv2l+qr/4O48v4wLTPW1vjJcrkYhHxkKrOIRN2kOoWTz3Tb0+a8pEqaydvT4bfD7U0escqr5K8Hxp+A9bRgqAVHzm9AZt9x6+vrwlif6zTO77ZWIyaGvc2qO0zTrEYZuNpaqk7+0RuD3KKpzEbE1V99IazLUbNiIzOMVFm49qsfqm87sDfbzhHKm6S1jmuDeRR/pXKX8qcYtks6TWLWKAmrZ/YRMPxpbJYGP+2Uj/xpS2KEcYWjVoW542tS5x3a2L10XWN1W9JvgW+rvkW7ciZMSAWWS3KezKg37ynFuSuGVEqd63Z/ENjSuUfmswhbY4wnUNqMA+4QcJ0HrDBXO4GCTO53Oby8ZsjzObjm6up0BxhtqYCwjRtHeFNXQxjtU2aI7ypbWKsPk1jhLf1aYzVGGqM8K7GkKk6UU0R3teJAl+hWkaYU+tLN6v/onYR5tVrM1RzryHCvJp7VtdI3cSmCPPqJpqpfdkMYbqUcIrwxUT90mYIFfVLjdSgbYRQVYPWSB3hRgiVdYRN1IJuglBdC9pEPe8mCAvqeRuoyd4AYVFNdgN19RsgZEV19a09dm+Er4cTpsyZPMKxtsNG0d9i8eiuNdIZFxJaC+QeJQ9vy+PeZsD9c31m7jKJ73sFtSPJSFflvYIgm00LlJPP/4/17KL3SX45fdcGT9x3Lacyyp/snfcH+h8+bQ/L3KIaij6kz9herk4f0j/QS/YZ+wE79foB//s9nf9AX+4/0FvdGk+eZ7cRE3VJBjWhNdLv8vJgibCgqHsBIaDLy2NVUES6hNAaIGV9GdZUtY2WE1r+M1wzmKp8VhVCgNvmYeLK0kSVCK1V20eRKQ/CioTWW7sRWb65XYew3YhuKWAFQmvV3tui2larRQiuTWFM6vpnNQktf9rGo19Oi4+JOoTWwGmfASecwoO+JqEVtc5GFWFpBa1ahNYIKT8eS3RStdN5VUJrHLTJvOFBWR+s+oTJqdGW/UZWOSU0CK0BpEUvooSotsfUJ7Q62zbMVL6tlVRdizA24RqfqbLcEgURgtueQ0U/68xQHULL2yEXBagjyXb5VekxCRMDp6lhpDS/NwQ2odXf201sqoLvKx+CQMJ4NW75o6eqdDeKivRGCK3+gT52qlJaVIfXAGG84+zZ46aqYPvCOrxGCOP7RvCg5Sh4UFAo2iBhvByDB4yjYEu9BYhBGDOup2YZBVuD+MCEltV9R6+bc5WkdKls3fkwwqT2EUGsXZXis8k3YP0hEsb76mLLUFoMpiTYZlXbQssTCmGslznnaIWCpODuETw9f4RFmBQiCwQGpBS2WPrax9+d8AhjdfzAcUHPqtLhTvCKWoIRlTCW9zWXTK+wVTx4TM57KIsvJWzCRN3Xd2JzUQNTCsEpWS4qukBryQRhosjff4Qup2WcMRvlLvnY+yboEpkiTOR1v952a8IYt2mCeo0ki/8Ug1GbM0bWu5nfrerd1ZFJwrP6XjTwD7NjsN5MwqRPQRhONuvgODv4g8jTvBLV0P/NEb5zbmqmegAAAABJRU5ErkJggg==";
    }
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
var import_react_icons2 = require("@radix-ui/react-icons");
var import_react13 = require("@chakra-ui/react");
var meta = () => {
  return {
    title: "On The Hunt",
    description: "Product Hunt's daily newspaper"
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
  }, "View the latest best afffsdfs"))), /* @__PURE__ */ React.createElement(import_react13.Center, null, /* @__PURE__ */ React.createElement(import_react13.Button, {
    bgColor: "black",
    color: "white",
    width: "153px",
    height: "60px",
    borderRadius: "15px",
    rightIcon: /* @__PURE__ */ React.createElement(import_react_icons2.ArrowRightIcon, null)
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/products"
  }, /* @__PURE__ */ React.createElement(import_react13.Text, {
    fontSize: "22px",
    fontFamily: "Roboto"
  }, "View"))))));
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
var assets_manifest_default = { "version": "a8a4b90f", "entry": { "module": "/build/entry.client-NB6KWGDZ.js", "imports": ["/build/_shared/chunk-NXAZPUMC.js", "/build/_shared/chunk-XIFU2I7F.js", "/build/_shared/chunk-YFM5L3I5.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-3F63T4O2.js", "imports": ["/build/_shared/chunk-5I6Z35P5.js", "/build/_shared/chunk-FB45JNBJ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-NUMTW3CE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EUWU6ZWA.js", "imports": ["/build/_shared/chunk-XOHJSINA.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products": { "id": "routes/products", "parentId": "root", "path": "products", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/products-WS5FDBJE.js", "imports": ["/build/_shared/chunk-XOHJSINA.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A8A4B90F.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgImVtcHR5LW1vZHVsZTp+L2NvbnRleHQuY2xpZW50IiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vYXBwL2NvbnRleHQuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwgIi4uL2FwcC90aGVtZS50cyIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4IiwgIi4uL2FwcC9zZXJ2ZXIvc3VwYWJhc2Uuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9ob21lLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL3Byb2R1Y3RzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvaG9tZS50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3Byb2R1Y3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9kdWN0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9kdWN0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaG9tZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaG9tZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJob21lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L2VudHJ5JztcblxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSAnQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZSc7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuL2NyZWF0ZUVtb3Rpb25DYWNoZSc7XG5pbXBvcnQgU2VydmVyU3R5bGVDb250ZXh0IGZyb20gJy4vY29udGV4dC5zZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcblx0cmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuXHRyZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG5cdGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG5cdGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG5cdGNvbnN0IGh0bWwgPSByZW5kZXJUb1N0cmluZyhcblx0XHQ8U2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtudWxsfT5cblx0XHRcdDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG5cdFx0XHRcdDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG5cdFx0XHQ8L0NhY2hlUHJvdmlkZXI+XG5cdFx0PC9TZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG5cblx0Y29uc3QgY2h1bmtzID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaHRtbCk7XG5cblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFNlcnZlclN0eWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y2h1bmtzLnN0eWxlc30+XG5cdFx0XHQ8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuXHRcdFx0XHQ8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuXHRcdFx0PC9DYWNoZVByb3ZpZGVyPlxuXHRcdDwvU2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKGA8IURPQ1RZUEUgaHRtbD4ke21hcmt1cH1gLCB7XG5cdFx0c3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG5cdFx0aGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuXHR9KTtcbn1cbiIsICJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycgfSk7XG59IiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJTdHlsZUNvbnRleHREYXRhIHtcbiAga2V5OiBzdHJpbmc7XG4gIGlkczogQXJyYXk8c3RyaW5nPjtcbiAgY3NzOiBzdHJpbmc7XG59XG5cbmNvbnN0IFNlcnZlclN0eWxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IFNlcnZlclN0eWxlQ29udGV4dERhdGFbXT4obnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclN0eWxlQ29udGV4dCIsICJpbXBvcnQgJ0Bmb250c291cmNlL29zd2FsZC9pbmRleC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9hbGVncmV5YS1zYy9pbmRleC5jc3MnO1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBTZXJ2ZXJTdHlsZUNvbnRleHQgZnJvbSAnfi9jb250ZXh0LnNlcnZlcic7XG5pbXBvcnQgQ2xpZW50U3R5bGVDb250ZXh0IGZyb20gJ34vY29udGV4dC5jbGllbnQnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENlbnRlciwgVGV4dCwgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRPdXRsZXQsXG5cdE1ldGEsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxuXHR1c2VDYXRjaCxcbn0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PE91dGxldCAvPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuXHRcdFx0XHRcdDxwPntlcnJvci5tZXNzYWdlfTwvcD5cblx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHQ8cD5IZXkgdGhlcmUncyBhbiBlcnJvciBpbiB0aGUgcm9vdCBmaWxlPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdDwvRG9jdW1lbnQ+XG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuXHRsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxDZW50ZXIgaD1cImZ1bGxcIiB3PVwiZnVsbFwiPlxuXHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRiZ0dyYWRpZW50PVwibGluZWFyKHRvLXIsIGJyYW5kLnByaW1hcnksIGJyYW5kLmFjY2VudClcIlxuXHRcdFx0XHRcdFx0YmdDbGlwPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRmb250U2l6ZT1cIjZ4bFwiXG5cdFx0XHRcdFx0XHRmb250V2VpZ2h0PVwiQm9sZFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0UGFnZSBOb3QgRm91bmRcblx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxuaW50ZXJmYWNlIERvY3VtZW50UHJvcHMge1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xuXHR0aXRsZT86IHN0cmluZztcbn1cblxuY29uc3QgRG9jdW1lbnQgPSB3aXRoRW1vdGlvbkNhY2hlKFxuXHQoeyBjaGlsZHJlbiwgdGl0bGUgfTogRG9jdW1lbnRQcm9wcywgZW1vdGlvbkNhY2hlKSA9PiB7XG5cdFx0Y29uc3Qgc2VydmVyU3lsZURhdGEgPSB1c2VDb250ZXh0KFNlcnZlclN0eWxlQ29udGV4dCk7XG5cdFx0Y29uc3QgY2xpZW50U3R5bGVEYXRhID0gdXNlQ29udGV4dChDbGllbnRTdHlsZUNvbnRleHQpO1xuXHRcdC8vIE9ubHkgZXhlY3V0ZWQgb24gY2xpZW50XG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRcdC8vIHJlLWxpbmsgc2hlZXQgY29udGFpbmVyXG5cdFx0XHRlbW90aW9uQ2FjaGUuc2hlZXQuY29udGFpbmVyID0gZG9jdW1lbnQuaGVhZDtcblx0XHRcdC8vIHJlLWluamVjdCB0YWdzXG5cdFx0XHRjb25zdCB0YWdzID0gZW1vdGlvbkNhY2hlLnNoZWV0LnRhZ3M7XG5cdFx0XHRlbW90aW9uQ2FjaGUuc2hlZXQuZmx1c2goKTtcblx0XHRcdHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG5cdFx0XHRcdChlbW90aW9uQ2FjaGUuc2hlZXQgYXMgYW55KS5faW5zZXJ0VGFnKHRhZyk7XG5cdFx0XHR9KTtcblx0XHRcdC8vIHJlc2V0IGNhY2hlIHRvIHJlYXBwbHkgZ2xvYmFsIHN0eWxlc1xuXHRcdFx0Y2xpZW50U3R5bGVEYXRhLnJlc2V0KCk7XG5cdFx0fSwgW10pO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdFx0PGhlYWQ+XG5cdFx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuXHRcdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdFx0e3NlcnZlclN5bGVEYXRhPy5tYXAoKHsga2V5LCBpZHMsIGNzcyB9KSA9PiAoXG5cdFx0XHRcdFx0XHQ8c3R5bGVcblx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdGRhdGEtZW1vdGlvbj17YCR7a2V5fSAke2lkcy5qb2luKCcgJyl9YH1cblx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuXHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNzcyB9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9oZWFkPlxuXHRcdFx0XHQ8Ym9keT5cblx0XHRcdFx0XHQ8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT57Y2hpbGRyZW59PC9DaGFrcmFQcm92aWRlcj5cblx0XHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0XHQ8U2NyaXB0cyAvPlxuXHRcdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cblx0XHRcdFx0PC9ib2R5PlxuXHRcdFx0PC9odG1sPlxuXHRcdCk7XG5cdH1cbik7XG4iLCAiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFN0YWNrLCBGbGV4LCBJbWFnZVByb3BzLCBJbWFnZSwgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmNvbnN0IE1vdGlvbkltYWdlID0gbW90aW9uPEltYWdlUHJvcHM+KEltYWdlKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8Qm94PlxuXHRcdFx0PFN0YWNrXG5cdFx0XHRcdHNwYWNpbmc9ezB9XG5cdFx0XHRcdHBvcz1cInJlbGF0aXZlXCJcblx0XHRcdFx0dz1cIjEwMHZ3XCJcblx0XHRcdFx0aD1cIjEwMHZoXCJcblx0XHRcdFx0b3ZlcmZsb3dYPVwiaGlkZGVuXCJcblx0XHRcdD5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8RmxleCBmbGV4R3Jvdz17MX0+e2NoaWxkcmVufTwvRmxleD5cblx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8TW90aW9uSW1hZ2Vcblx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdHRvcD1cIjIwJVwiXG5cdFx0XHRcdGxlZnQ9XCItNSVcIlxuXHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRzcmM9XCIvcmVkLWNpcmNsZS5wbmdcIlxuXHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0eDogWycwJScsICcxMDAlJywgJzUwJScsICcwJScsICcwJSddLFxuXHRcdFx0XHRcdHk6IFsnMCUnLCAnMTAwJScsICcwJScsICcxMDAlJywgJzAlJ10sXG5cdFx0XHRcdH19XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0cmFuc2l0aW9uPXt7XG5cdFx0XHRcdFx0dHlwZTogJ2Vhc2VJbk91dCcsXG5cdFx0XHRcdFx0cmVwZWF0OiBJbmZpbml0eSxcblx0XHRcdFx0XHRyZXBlYXRUeXBlOiAnbWlycm9yJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogMTUsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0PE1vdGlvbkltYWdlXG5cdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHR0b3A9XCIzNSVcIlxuXHRcdFx0XHRyaWdodD1cIjAlXCJcblx0XHRcdFx0ekluZGV4PXstMX1cblx0XHRcdFx0c3JjPVwiL2JsdWUtY2lyY2xlLnBuZ1wiXG5cdFx0XHRcdGFuaW1hdGU9e3tcblx0XHRcdFx0XHR4OiBbJzAlJywgJy0xMzAlJywgJy0xMzAlJywgJzAlJywgJzAlJ10sXG5cdFx0XHRcdFx0eTogWycxMDAlJywgJy0xMDAlJywgJzEwMCUnLCAnLTEwMCUnLCAnMTAwJSddLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dHJhbnNpdGlvbj17e1xuXHRcdFx0XHRcdHR5cGU6ICdlYXNlSW5PdXQnLFxuXHRcdFx0XHRcdHJlcGVhdDogSW5maW5pdHksXG5cdFx0XHRcdFx0cmVwZWF0VHlwZTogJ21pcnJvciAnLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxNSxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHQ8TW90aW9uSW1hZ2Vcblx0XHRcdFx0cG9zaXRpb249XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdHRvcD1cIjUwJVwiXG5cdFx0XHRcdGxlZnQ9XCIwJVwiXG5cdFx0XHRcdHpJbmRleD17LTF9XG5cdFx0XHRcdHNyYz1cIi95ZWxsb3ctY2lyY2xlLnBuZ1wiXG5cdFx0XHRcdGFuaW1hdGU9e3tcblx0XHRcdFx0XHR4OiBbJzAlJywgJzEwMCUnLCAnMCUnLCAnMTAwJScsICcwJSddLFxuXHRcdFx0XHRcdHk6IFsnMCUnLCAnLTEwMCUnLCAnLTEwMCUnLCAnMCUnLCAnMCUnXSxcblx0XHRcdFx0fX1cblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdFx0XHRyZXBlYXQ6IEluZmluaXR5LFxuXHRcdFx0XHRcdHJlcGVhdFR5cGU6ICdtaXJyb3IgJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogMTUsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdDwvQm94PlxuXHQpO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB7IEJveCwgSFN0YWNrLCBIZWFkaW5nLCBJbWFnZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG5cdHJldHVybiAoXG5cdFx0PEhTdGFja1xuXHRcdFx0YXM9XCJuYXZcIlxuXHRcdFx0dz1cImZ1bGxcIlxuXHRcdFx0dG9wPVwiMFwiXG5cdFx0XHRwb3NpdGlvbj1cInN0aWNreVwiXG5cdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG5cdFx0XHRiZ0NvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwwLjIwKVwiXG5cdFx0XHRiYWNrZHJvcEZpbHRlcj17YGJsdXIoMTBweClgfVxuXHRcdFx0ekluZGV4PXsxfVxuXHRcdFx0cD17NH1cblx0XHQ+XG5cdFx0XHQ8TGluayB0bz1cIi9cIj5cblx0XHRcdFx0PEhlYWRpbmcgZm9udFNpemU9XCIyNHB4XCIgZm9udFdlaWdodD1cImJvbGRcIj5cblx0XHRcdFx0XHRPbiBUaGUgSHVudFxuXHRcdFx0XHQ8L0hlYWRpbmc+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8Qm94PlxuXHRcdFx0XHQ8SW1hZ2Ugc3JjPVwiL21lbnUuc3ZnXCIgYWx0PVwiTWVudVwiIHc9XCJmdWxsXCIgaD1cImZ1bGxcIiAvPlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9IU3RhY2s+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuXHRzdHlsZXM6IHtcblx0XHRnbG9iYWw6IHtcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0dGV4dFN0eWxlOiB7XG5cdFx0XHRcdFx0Y29sb3I6ICcjMDAwJyxcblx0XHRcdFx0XHRmb250RmFtaWx5OiAnT3N3YWxkJyxcblx0XHRcdFx0XHRmb250U2l6ZTogJzEuNnJlbScsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Zm9udHM6IHtcblx0XHRcdGhlYWRpbmc6ICdvc3dhbGQnLFxuXHRcdFx0Ym9keTogJ0FsZWdyZXlhIFNDJyxcblx0XHR9LFxuXHR9LFxufSk7XG4iLCAiaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ34vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL3NlcnZlci9zdXBhYmFzZS5zZXJ2ZXInO1xuaW1wb3J0IHR5cGUgeyBQcm9kdWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBCb3gsIEJveFByb3BzLCBTdGFjayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5cbmNvbnN0IE1vdGlvbkJveCA9IG1vdGlvbjxCb3hQcm9wcz4oQm94KTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKTogUHJvbWlzZTxQcm9kdWN0W10+ID0+IHtcblx0Y29uc3QgeyBkYXRhOiBwcm9kdWN0cywgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG5cdFx0LmZyb20oJ3Byb2R1Y3RzJylcblx0XHQuc2VsZWN0KCcqJyk7XG5cblx0aWYgKGVycm9yIHx8ICFwcm9kdWN0cykge1xuXHRcdHRocm93IG5ldyBSZXNwb25zZShcIkNvdWxkbid0IGZldGNoIHByb2R1Y3RzXCIsIHsgc3RhdHVzOiA1MDAgfSk7XG5cdH1cblxuXHRyZXR1cm4gcHJvZHVjdHMubWFwKChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG5cdFx0aWYgKHByb2R1Y3QuaW1hZ2VfdXJsLmluY2x1ZGVzKCcuZ2lmJykpIHtcblx0XHRcdHByb2R1Y3QuaW1hZ2VfdXJsID1cblx0XHRcdFx0J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT0VBQUFEaENBTUFBQUFKYlNKSUFBQUFpbEJNVkVYZVZDWC8vLy9kVEJQODdPZmNSUUQ0NHQzY1NBanp4N3ZkVHh6ZFNnNy8vZnozMjlUZVVScnZ0cXJlVWlMY1J3RDF6c1AyMWN6OTlQSHh2ckg4Nyt2KytQYmxnR1BoWXpyY1FBRHJuNHZmV3k3cGszdnd0YVhsZkYzdHJadmtkRkhoWjBIdHA1VGliRWptaG12bmkzUHBsSHp1c2FQamMxVGdYelB6eWIzcW1vWGtlRmZualhiNDROaVFpZ3A0QUFBTFNrbEVRVlI0bk9XZDJZS2lPaENHUTR3eDJIUlFVRlJjMjFaN09mTCtyM2RBV3h1VXNLUXFndFAvMWR5TXd6ZlpLcFZhaUdWYWZTOGErSWZaTVZodkptRklDQW5EeVdZZEhHY0hmeEI1ZmVQL1BqSDQyMTczNjIyM2xWUEdiU3FFakVYT1N2NG9CTFU1bThydGJ1WjNSd2Evd2hSaDVNOC9RcGNuWktSSUNTbG5aRDMzSTBOZllvSXdlZzJJelowU3RpeW53MjJ5WEppZ3hDYjBla2VIMlRYZzBwZzJrL09laC94RnFJUWRQNkJjaSs2WGt0UEE3MkIrRkI3aDJGODZNTHpyVURyLytXTzA3OElpSEI0NUJ0NFYwdDBOa2I0TWhkQmJiSmhBb3J0SXNNMEtaVWtpRUViZjBzWWF2YlNrVGI0Uk5sY3dZUlRZMUFUZmlaSFM1VXZEaE1QMUZIdDZaaVhZR3JnZ1FZVERKZnJ5eTJQOEQ4UUlJSXpucDNtK0V5TVBBT3RSbTNBMGR4L0RkMkprZSsxOVZaT3dmNkQwWVh5SktGMW9YclQwQ0ljYmJtci9WRW55amQ1eTFDSHM3eCswQUxNU2ZLNWp5MmtRRGg0OFFYOUY3YThIRUhvNzl1Z0oraXZKZHJWM25McUV3OCttQnZBc0dnN01FczdjNWdid0xPbk9EQkoyTm5iRGZJbnNUYTBiY2gzQ2dXeGlDNzJYY09yTTFCcUVxOFpuNkVYU1hSa2dIQWU4YWJDVWVGRDVhS3hLT0pvMHU0ZmVpazZxZXBFckVrWmhPNWJncjBSWThXNWNqWERndEEydytuNVRpZkIxMnBZOUppMDVmY1VpUExDbVlSUmlDeHpDTjdkcEVxVjRoVk9qbkhEV1hzQjRGTXROdUZMQ1dWdW42Rm5saUdXRUxaNmlaN0d5aVZwQ3VHbzdZTHdXUzdhYllzTFhkay9SczVpdlR6aVlOdjMxbFRRdFBQcUxDQ09ualFmOXZhUlQ1REF1SUJ5MXpoWlZTWVFGWnJpYWNEeDVGc0FZY2FLK1RLa0pnM1pkbDRwRmcvcUVxelpkZU11bHR0OVVoSVBuQWlURVZXMm9Dc0tPZkk1dDlGZFNLRHh3Q3NMTjgrd3lGNGx0SGNKWkcveWlkY1h6amZCY3dtSDdyZEU4NVMvRlBFTHY4OWtXNFZueU0rL1pKbzl3OTB3bllWcDBWNDN3NnhrdUZQbGlPZStMOTRSOVl3RkE1aVg1dmZWMlR6aC8xam1haUI3TENZZlBac3hreGUvQ0dXNEorMDk0MXFjbE5yZEJLYmVFK2dZM1o1cEtJdm54bHY2ZENYNURPTktPb3hURHJwWmVobCtMMlhGck00b3plU1QxQ2duMXR4a0t5cG5vajRlcjdSUWxUSWZPaXdnai9hT1F3c1BQeC82YUloeFZidFpya3lVTTlQOFRFUWhqUlhzSGZGaUo3SDAvUXdnNUtYQUk0NTFneHFGek5YdGlaQWlYZ04vR0lveHYzKy9BcUN1eFZCRU9JUVlwSGlFODhJcWxCekZOdUlaTUQweENhendIM1ZERk9wOHdBdm53VVFrdHl3Zk4xR2xxTzAwUkFqWlNmRUtyQ3duQUV1OTVoQkhNTjROTmFJMGdGakx0NWhCK3cxWTNPcUhsYlFHbjgvYzlvUWYwa09JVFdtUDlweUZKcnRicGxmQUFkQ0FhSUxROGZVVDcrako4SmR3QURVSVRoSUFYVExtNUpRU2Q5c1lJTFYvN1hHU1hzTGNMNFE1cURKb2h0UGE2aTBkY1BEWS9oR093bDlzUW9hWHRuWGJIR1VJZi9GQmhpbEQ3aFlIN0dVTElyY0lzb2JiYjRYTERPQk4yNEZFWHhnaEhSTy9iTGcrS1owSWY3aVExUm1pOWFRN2l6elE5RThLTTdpSkM3NlZFVWFjczYyNnM2YnY1OFdhY0NEMEUvNCtDc0RlMWkwVkZ1RndVKytsbWVvTW9IZTlLMkVQdzVLc0l5MzlhQ252NlhoVFZOTkswUnR6ZWxYQ080S2ZVSjB3azJIZEJBb1htSW5MbVYwS00rRFVZWVd3cVQ5UmIxWmZlbVNqbGhSRGdCLzRWbEpBSVI1bEE0V2tlR0t6N1E3akFpTHdBRXhhRkdMN3JUZFBURlNvaGhCczBCSU9RaUUvVld0UTBLay9uUlVLb09RZXlRaURNanpSSUZHbWVGK1JNQ0hSQlhiNE9nVERyeWsycEgrb05naDJkQ0JGTU5vSkVtUFhIcDZUcHJFNE10NWh3N21qOTdSdWhFQks3bS9zcnVvNUFzVDhSZnFBOHZ1SVEwcmQ4d2xmTnJlWWpJUnhwenZIYmIwTWh6THc0cEtRWjdpcERMeWJzNG9UcDRSQVNPLy9BZU5FMVRic3hJWWJaVGRBSVdmNUM3R29TOGw1TXFIdkJ2QkVTb1NLWXVhTkpHSzlyQXZjai92d1dEaUhQcisyaGU0RVN1NWdROFA2UlZqdkhNTjY1U0I4cFpoMXJIZVpmTUhRSkpla1REeW1hRkdzTTg2dXo2TzZsaEhrRTVYSklzQWpsWGVEZFdRUGRJNDFGQkN0MUJNbW0yZWYraXI3dHpBY0U3cy8vK1RZVVFsZHh1ZEErMG15ZkhKQkNnbkh1Rmx1RjgxVDdrazRQWklZVU1ZdEN5RlVKcnhQZERaL095TEZGaEtyRUhxdWpmY0VUUnhJZ2hlY2lFRXBYNVZEVXQ1MUZRTmF0SVpTOHB3QUV1S3psbWtBakZDNkNFNnJyZUl5MWx5R1JXNkwvbDdPQ0VvcXBjZ1FoWVJSeVFrTHR2NXdWakZEeXJjSkRrMmdQMkEzRE5oQkt3U1pGdFR0MUh4QlB3dUxUZnorME9hUHZ2Y0xLWFpwdUtHd3BDTHVIMTJMNXZkSUt1aml1TXJETXZlTkRQZGFHMXlGY2ZkaHViM3luZ1dzRlc0V2g2Zk1RckE0c2lpSStEdzNiTkdBQkh6ZGptOGF3WFFyVkF1aGtpZTFTdzNjTG9DSm8xNFg0Ym1INGZnaVQ5d245dXZoK2FQaU9EMUwvUDNqSTVNeTBud2FrZDdpNVJnK21mVzBRSFJFY25iWnYybCtxci80TzQ4djR3TFRQVzF2akpjcmtZaEh4a0tyT0lSTjJrT29XVHozVGIwK2E4cEVxYXlkdlQ0YmZEN1UwZXNjcXI1SzhIeHArQTliUmdxQVZIem05QVp0OXg2K3Zyd2xpZjZ6VE83N1pXSXlhR3ZjMnFPMHpUckVZWnVOcGFxazcrMFJ1RDNLS3B6RWJFMVY5OUlhekxVYk5pSXpPTVZGbTQ5cXNmcW04N3NEZmJ6aEhLbTZTMWptdURlUlIvcFhLWDhxY1l0a3M2VFdMV0tBbXJaL1lSTVB4cGJKWUdQKzJVai94cFMyS0VjWVdqVm9XNTQydFM1eDNhMkwxMFhXTjFXOUp2Z1crcnZrVzdjaVpNU0FXV1MzS2V6S2czN3luRnVTdUdWRXFkNjNaL0VOalN1VWZtc3doYlk0d25VTnFNQSs0UWNKMEhyREJYTzRHQ1RPNTNPYnk4WnNqek9iam02dXAwQnhodHFZQ3dqUnRIZUZOWFF4anRVMmFJN3lwYldLc1BrMWpoTGYxYVl6VkdHcU04SzdHa0trNlVVMFIzdGVKQWwraFdrYVlVK3RMTjZ2L29uWVI1dFZyTTFSenJ5SEN2SnA3VnRkSTNjU21DUFBxSnBxcGZka01ZYnFVY0lyd3hVVDkwbVlJRmZWTGpkU2diWVJRVllQV1NCM2hSZ2lWZFlSTjFJSnVnbEJkQzlwRVBlOG1DQXZxZVJ1b3lkNEFZVkZOZGdOMTlSc2daRVYxOWEwOWRtK0VyNGNUcHN5WlBNS3h0c05HMGQ5aThlaXVOZElaRnhKYUMrUWVKUTl2eStQZVpzRDljMzFtN2pLSjczc0Z0U1BKU0ZmbHZZSWdtMDBMbEpQUC80LzE3S0wzU1g0NWZkY0dUOXgzTGFjeXlwL3NuZmNIK2g4K2JRL0wzS0lhaWo2a3o5aGVyazRmMGovUVMvWVord0U3OWZvQi8vczluZjlBWCs0LzBGdmRHaytlWjdjUkUzVkpCaldoTmRMdjh2SmdpYkNncUhzQklhREx5Mk5WVUVTNmhOQWFJR1Y5R2RaVXRZMldFMXIrTTF3em1LcDhWaFZDZ052bVllTEswa1NWQ0sxVjIwZVJLUS9DaW9UV1c3c1JXYjY1WFlldzNZaHVLV0FGUW12VjN0dWkybGFyUlFpdVRXRk02dnBuTlFrdGY5ckdvMTlPaTQrSk9vVFd3R21mQVNlY3dvTytKcUVWdGM1R0ZXRnBCYTFhaE5ZSUtUOGVTM1JTdGRONVZVSnJITFRKdk9GQldSK3Mrb1RKcWRHVy9VWldPU1UwQ0swQnBFVXZvb1NvdHNmVUo3UTYyemJNVkw2dGxWUmRpekEyNFJxZnFiTGNFZ1VSZ3R1ZVEwVS82OHhRSFVMTDJ5RVhCYWdqeVhiNVZla3hDUk1EcDZsaHBEUy9Od1Eyb2RYZjIwMXNxb0x2S3grQ1FNSjROVzc1bzZlcWREZUtpdlJHQ0szK2dUNTJxbEphVklmWEFHRzg0K3paNDZhcVlQdkNPcnhHQ09QN1J2Q2c1U2g0VUZBbzJpQmh2QnlEQjR5allFdTlCWWhCR0RPdXAyWVpCVnVEK01DRWx0VjlSNitiYzVXa2RLbHMzZmt3d3FUMkVVR3NYWlhpczhrM1lQMGhFc2I3Nm1MTFVGb01waVRZWmxYYlFzc1RDbUdzbHpubmFJV0NwT0R1RVR3OWY0UkZtQlFpQ3dRR3BCUzJXUHJheDkrZDhBaGpkZnpBY1VIUHF0TGhUdkNLV29JUmxUQ1c5eldYVEsrd1ZUeDRUTTU3S0lzdkpXekNSTjNYZDJKelVRTlRDc0VwV1M0cXVrQnJ5UVJob3NqZmY0UXVwMldjTVJ2bEx2blkreWJvRXBraVRPUjF2OTUyYThJWXQybUNlbzBraS84VWcxR2JNMGJXdTVuZnJlcmQxWkZKd3JQNlhqVHdEN05qc041TXdxUlBRUmhPTnV2Z09EdjRnOGpUdkJMVjBQL05FYjV6Ym1xbWVnQUFBQUJKUlU1RXJrSmdnZz09Jztcblx0XHR9XG5cdFx0cmV0dXJuIHByb2R1Y3Q7XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBwcm9kdWN0czogUHJvZHVjdFtdID0gdXNlTG9hZGVyRGF0YSgpO1xuXG5cdHJldHVybiAoXG5cdFx0PEJveCBwb3M9XCJyZWxhdGl2ZVwiIHc9XCJmdWxsXCIgaD1cImZ1bGxcIj5cblx0XHRcdDxTdGFja1xuXHRcdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHRcdGg9XCJmdWxsXCJcblx0XHRcdFx0anVzdGlmeT1cImNlbnRlclwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRtdD17OX1cblx0XHRcdFx0c3BhY2luZz17NX1cblx0XHRcdD5cblx0XHRcdFx0e3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8TW90aW9uQm94XG5cdFx0XHRcdFx0XHRpbml0aWFsPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdGFuaW1hdGU9XCJ2aXNpYmxlXCJcblx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRjdXN0b209e2luZGV4fVxuXHRcdFx0XHRcdFx0dmFyaWFudHM9e3tcblx0XHRcdFx0XHRcdFx0aGlkZGVuOiB7XG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdFx0XHR4OiBpbmRleCAlIDIgPT09IDAgPyAtMTAwIDogMTAwLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiAoaW5kZXgpID0+ICh7XG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHRcdFx0XHR4OiAwLFxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5OiBpbmRleCAqIDAuMzUsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC45LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuXHRcdFx0XHRcdDwvTW90aW9uQm94PlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9Cb3g+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ34vdHlwZXMnO1xuaW1wb3J0IHtcblx0QXJyb3dUb3BSaWdodEljb24sXG5cdFNoYXJlMkljb24sXG5cdFZlcmNlbExvZ29JY29uLFxufSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHtcblx0QnV0dG9uLFxuXHRIU3RhY2ssXG5cdEltYWdlLFxuXHRTdGFjayxcblx0VGV4dCxcblx0TGluayxcblx0Q2VudGVyLFxuXHRCb3gsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RDYXJkUHJvcHMge1xuXHRwcm9kdWN0OiBQcm9kdWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Q2FyZCh7XG5cdHByb2R1Y3QsXG59OiBQcm9kdWN0Q2FyZFByb3BzKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCB7IG5hbWUsIHVybCwgaW1hZ2VfdXJsLCB0YWdsaW5lLCB0b3BpY3MsIHVwdm90ZXMgfTogUHJvZHVjdCA9IHByb2R1Y3Q7XG5cblx0cmV0dXJuIChcblx0XHQ8U3RhY2tcblx0XHRcdHA9XCI0XCJcblx0XHRcdGg9XCJhdXRvXCJcblx0XHRcdHc9XCIzMTVweFwiXG5cdFx0XHRwb3M9XCJyZWxhdGl2ZVwiXG5cdFx0XHRib3JkZXJSYWRpdXM9XCIyMHB4XCJcblx0XHRcdGJvcmRlcj1cIjJweCBzb2xpZCBibGFja1wiXG5cdFx0XHRiZ0NvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwwLjU1KVwiXG5cdFx0PlxuXHRcdFx0PFN0YWNrXG5cdFx0XHRcdGg9XCJhdXRvXCJcblx0XHRcdFx0c3BhY2luZz17MH1cblx0XHRcdFx0cG9zPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHRhbGlnblNlbGY9XCJzdGFydFwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8VmVyY2VsTG9nb0ljb24gLz5cblx0XHRcdFx0PFRleHQgZm9udFdlaWdodD1cInNlbWlib2xkXCI+e3Vwdm90ZXN9PC9UZXh0PlxuXHRcdFx0PC9TdGFjaz5cblx0XHRcdDxIU3RhY2sgdz1cImZ1bGxcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG5cdFx0XHRcdDxTdGFjayBhbGlnblNlbGY9XCJzdGFydFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz17YCR7aW1hZ2VfdXJsfWB9XG5cdFx0XHRcdFx0XHRib3hTaXplPVwiNjBweFwiXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9XCI1MCVcIlxuXHRcdFx0XHRcdFx0b2JqZWN0Rml0PVwiZmlsbFwiXG5cdFx0XHRcdFx0XHRib3hTaGFkb3c9e2AwcHggNHB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC4yNSlgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHQ+e25hbWV9PC9UZXh0PlxuXHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQ8Q2VudGVyXG5cdFx0XHRcdFx0cD1cIjAuNVwiXG5cdFx0XHRcdFx0dG9wPVwiNVwiXG5cdFx0XHRcdFx0cmlnaHQ9XCI1XCJcblx0XHRcdFx0XHRiZz1cIiNGNEEyNjFcIlxuXHRcdFx0XHRcdHc9XCI1NHB4XCJcblx0XHRcdFx0XHRoPVwiMThweFwiXG5cdFx0XHRcdFx0cG9zPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHRcdGFsaWduU2VsZj1cInN0YXJ0XCJcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM9ezR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VGV4dCBjb2xvcj1cIndoaXRlXCIgaXNUcnVuY2F0ZWQgZm9udFNpemU9XCJzbVwiPlxuXHRcdFx0XHRcdFx0e3RvcGljc1swXS5ub2RlLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuXHRcdFx0XHRcdFx0XHR0b3BpY3NbMF0ubm9kZS5uYW1lLnNsaWNlKDEpfVxuXHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHQ8L0hTdGFjaz5cblx0XHRcdDxCb3ggdz1cImZ1bGxcIiBwPVwiMlwiPlxuXHRcdFx0XHQ8VGV4dCBjb2xvcj1cImJsYWNrXCI+e3RhZ2xpbmV9PC9UZXh0PlxuXHRcdFx0XHQ8SFN0YWNrIGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXszfT5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR3PVwiYXV0b1wiXG5cdFx0XHRcdFx0XHRoPVwiMzZweFwiXG5cdFx0XHRcdFx0XHRiZ0NvbG9yPVwiYmxhY2tcIlxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwiNVwiXG5cdFx0XHRcdFx0XHRyaWdodEljb249ezxBcnJvd1RvcFJpZ2h0SWNvbiAvPn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8TGluayBhcz1cImFcIiBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBjb2xvcj1cIndoaXRlXCI+Q2hlY2sgb3V0PC9UZXh0PlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxTaGFyZTJJY29uXG5cdFx0XHRcdFx0XHR3aWR0aD17MjB9XG5cdFx0XHRcdFx0XHRoZWlnaHQ9ezIwfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRcdFx0bmF2aWdhdG9yLnNoYXJlKHsgdXJsOiB1cmwsIHRpdGxlOiBuYW1lIH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IU3RhY2s+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L1N0YWNrPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNsaWVudCwgU3VwYWJhc2VDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuXG5pZiAoIXByb2Nlc3MuZW52LlNVUEFCQVNFX1VSTClcblx0dGhyb3cgRXJyb3IoJ1N1cGFiYXNlIFVSTCBub3QgZm91bmQgaW4gZW52aXJvbm1lbnQnKTtcbmlmICghcHJvY2Vzcy5lbnYuU1VQQUJBU0VfS0VZKVxuXHR0aHJvdyBFcnJvcignU3VwYWJhc2UgS0VZIG5vdCBmb3VuZCBpbiBlbnZpcm9ubWVudCcpO1xuXG5leHBvcnQgY29uc3Qgc3VwYWJhc2U6IFN1cGFiYXNlQ2xpZW50ID0gY3JlYXRlQ2xpZW50KFxuXHRwcm9jZXNzLmVudi5TVVBBQkFTRV9VUkwgYXMgc3RyaW5nLFxuXHRwcm9jZXNzLmVudi5TVVBBQkFTRV9LRVkgYXMgc3RyaW5nXG4pO1xuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJztcbmltcG9ydCB7IEFycm93UmlnaHRJY29uIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWljb25zJztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDZW50ZXIsIFN0YWNrLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dGl0bGU6ICdPbiBUaGUgSHVudCcsXG5cdFx0ZGVzY3JpcHRpb246IFwiUHJvZHVjdCBIdW50J3MgZGFpbHkgbmV3c3BhcGVyXCIsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpOiBKU1guRWxlbWVudCB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxTdGFja1xuXHRcdFx0XHRwb3M9XCJyZWxhdGl2ZVwiXG5cdFx0XHRcdHc9XCJmdWxsXCJcblx0XHRcdFx0YWxpZ25Db250ZW50PVwiY2VudGVyXCJcblx0XHRcdFx0anVzdGlmeT1cImNlbnRlclwiXG5cdFx0XHRcdHNwYWNpbmc9ezEwfVxuXHRcdFx0PlxuXHRcdFx0XHQ8Q2VudGVyPlxuXHRcdFx0XHRcdDxDZW50ZXJcblx0XHRcdFx0XHRcdGJnQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNTUpXCJcblx0XHRcdFx0XHRcdGJhY2tkcm9wRmlsdGVyPXtgYmx1cigxMHB4KWB9XG5cdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcblx0XHRcdFx0XHRcdHc9ezMzMH1cblx0XHRcdFx0XHRcdGg9ezI5OH1cblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz17MjB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJveCB3PVwiMjMwcHhcIj5cblx0XHRcdFx0XHRcdFx0PFN0YWNrIHNwYWNpbmc9ey01fSB3PVwiZnVsbFwiIHNob3VsZFdyYXBDaGlsZHJlbj5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjNyZW1cIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0T25cblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplPVwiM3JlbVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRtbD1cIjI1JVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0PVwiYm9sZFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhlXG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZT1cIjNyZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWw9XCI1MCVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodD1cImJvbGRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdEh1bnRcblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHRcdDxUZXh0IGZvbnRTaXplPVwiMjBweFwiIGNvbG9yPVwiIzYzNjM2M1wiPlxuXHRcdFx0XHRcdFx0XHRWaWV3IHRoZSBsYXRlc3QgYmVzdCBhZmZmc2Rmc1xuXHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdFx0PENlbnRlcj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRiZ0NvbG9yPVwiYmxhY2tcIlxuXHRcdFx0XHRcdFx0Y29sb3I9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjE1M3B4XCJcblx0XHRcdFx0XHRcdGhlaWdodD1cIjYwcHhcIlxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwiMTVweFwiXG5cdFx0XHRcdFx0XHRyaWdodEljb249ezxBcnJvd1JpZ2h0SWNvbiAvPn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9wcm9kdWN0c1wiPlxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjIycHhcIiBmb250RmFtaWx5PVwiUm9ib3RvXCI+XG5cdFx0XHRcdFx0XHRcdFx0Vmlld1xuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBDZW50ZXIsIEltYWdlLCBCdXR0b24sIFN0YWNrLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Q2VudGVyXG5cdFx0XHRcdHc9XCJmdWxsXCJcblx0XHRcdFx0YmdDb2xvcj1cInJlZC4zMDBcIlxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjR4bFwiPkhvbWUgUGFnZTwvVGV4dD5cblx0XHRcdDwvQ2VudGVyPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2E4YTRiOTBmJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1OQjZLV0dEWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTlhBWlBVTUMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1YSUZVMkk3Ri5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlGTTVMM0k1LmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC0zRjYzVDRPMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNUk2WjM1UDUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GQjQ1Sk5CSi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2hvbWUnOnsnaWQnOidyb3V0ZXMvaG9tZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidob21lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hvbWUtTlVNVFczQ0UuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1FVVdVNlpXQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWE9ISlNJTkEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2R1Y3RzJzp7J2lkJzoncm91dGVzL3Byb2R1Y3RzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2R1Y3RzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Byb2R1Y3RzLVdTNUZEQkpFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YT0hKU0lOQS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtQThBNEI5MEYuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBLFlBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0FqQjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFj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
