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
  }, topic["node"]["name"].charAt(0).toUpperCase() + topic["node"]["name"].slice(1)))), /* @__PURE__ */ React.createElement(import_react11.Text, {
    color: "black"
  }, tagline), /* @__PURE__ */ React.createElement(import_react11.Box, {
    w: "full",
    p: "2"
  }, /* @__PURE__ */ React.createElement(import_react11.HStack, {
    justify: "center"
  }, /* @__PURE__ */ React.createElement(import_react11.HStack, {
    w: "auto",
    h: "36px",
    bgColor: "black",
    borderRadius: "5",
    p: "3",
    shouldWrapChildren: true
  }, /* @__PURE__ */ React.createElement(import_react11.Link, {
    href: url,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(import_react11.Text, {
    color: "white"
  }, "Check out")), /* @__PURE__ */ React.createElement(import_react_icons.ArrowTopRightIcon, {
    color: "white"
  })), /* @__PURE__ */ React.createElement(import_react_icons.Share2Icon, {
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
  }, "View the latest best afffsdfs"))), /* @__PURE__ */ React.createElement(import_react13.Center, null, /* @__PURE__ */ React.createElement(import_react13.HStack, {
    bgColor: "black",
    color: "white",
    width: "153px",
    height: "60px",
    borderRadius: "15px",
    justify: "center"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/products"
  }, /* @__PURE__ */ React.createElement(import_react13.Text, {
    fontSize: "22px",
    fontFamily: "Roboto"
  }, "View")), /* @__PURE__ */ React.createElement(import_react_icons2.ArrowRightIcon, null)))));
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
var assets_manifest_default = { "version": "e044a9b9", "entry": { "module": "/build/entry.client-NB6KWGDZ.js", "imports": ["/build/_shared/chunk-NXAZPUMC.js", "/build/_shared/chunk-XIFU2I7F.js", "/build/_shared/chunk-YFM5L3I5.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4U5ZEYSE.js", "imports": ["/build/_shared/chunk-JOHW3RVA.js", "/build/_shared/chunk-KHMOOMAJ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-WC7GCIQY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-KFOSH2AK.js", "imports": ["/build/_shared/chunk-TQNXSATZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/products": { "id": "routes/products", "parentId": "root", "path": "products", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/products-WZCA4HK4.js", "imports": ["/build/_shared/chunk-TQNXSATZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E044A9B9.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgImVtcHR5LW1vZHVsZTp+L2NvbnRleHQuY2xpZW50IiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vYXBwL2NvbnRleHQuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwgIi4uL2FwcC90aGVtZS50cyIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9wcm9kdWN0cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4IiwgIi4uL2FwcC9zZXJ2ZXIvc3VwYWJhc2Uuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9ob21lLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYXJyeWxicm9va3MvR2l0aHViL09uVGhlSHVudC9hcHAvcm91dGVzL3Byb2R1Y3RzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFycnlsYnJvb2tzL0dpdGh1Yi9PblRoZUh1bnQvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RhcnJ5bGJyb29rcy9HaXRodWIvT25UaGVIdW50L2FwcC9yb3V0ZXMvaG9tZS50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3Byb2R1Y3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9kdWN0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9kdWN0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaG9tZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaG9tZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJob21lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L2VudHJ5JztcblxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSAnQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZSc7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuL2NyZWF0ZUVtb3Rpb25DYWNoZSc7XG5pbXBvcnQgU2VydmVyU3R5bGVDb250ZXh0IGZyb20gJy4vY29udGV4dC5zZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcblx0cmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuXHRyZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG5cdGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG5cdGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG5cdGNvbnN0IGh0bWwgPSByZW5kZXJUb1N0cmluZyhcblx0XHQ8U2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtudWxsfT5cblx0XHRcdDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG5cdFx0XHRcdDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG5cdFx0XHQ8L0NhY2hlUHJvdmlkZXI+XG5cdFx0PC9TZXJ2ZXJTdHlsZUNvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG5cblx0Y29uc3QgY2h1bmtzID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaHRtbCk7XG5cblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFNlcnZlclN0eWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y2h1bmtzLnN0eWxlc30+XG5cdFx0XHQ8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuXHRcdFx0XHQ8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuXHRcdFx0PC9DYWNoZVByb3ZpZGVyPlxuXHRcdDwvU2VydmVyU3R5bGVDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKGA8IURPQ1RZUEUgaHRtbD4ke21hcmt1cH1gLCB7XG5cdFx0c3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG5cdFx0aGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuXHR9KTtcbn1cbiIsICJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycgfSk7XG59IiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJTdHlsZUNvbnRleHREYXRhIHtcbiAga2V5OiBzdHJpbmc7XG4gIGlkczogQXJyYXk8c3RyaW5nPjtcbiAgY3NzOiBzdHJpbmc7XG59XG5cbmNvbnN0IFNlcnZlclN0eWxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IFNlcnZlclN0eWxlQ29udGV4dERhdGFbXT4obnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclN0eWxlQ29udGV4dCIsICJpbXBvcnQgJ0Bmb250c291cmNlL29zd2FsZC80MDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2UvYWxlZ3JleWEtc2Fucy1zYy83MDAuY3NzJztcbi8vIGltcG9ydCAnQGZvbnRzb3VyY2UvYWxlZ3JleWEtc2Fucy1zYy83MDAuY3NzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgU2VydmVyU3R5bGVDb250ZXh0IGZyb20gJ34vY29udGV4dC5zZXJ2ZXInO1xuaW1wb3J0IENsaWVudFN0eWxlQ29udGV4dCBmcm9tICd+L2NvbnRleHQuY2xpZW50JztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi90aGVtZSc7XG5pbXBvcnQgeyB3aXRoRW1vdGlvbkNhY2hlIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDZW50ZXIsIFRleHQsIENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQge1xuXHRMaW5rcyxcblx0TGl2ZVJlbG9hZCxcblx0T3V0bGV0LFxuXHRNZXRhLFxuXHRTY3JpcHRzLFxuXHRTY3JvbGxSZXN0b3JhdGlvbixcblx0dXNlQ2F0Y2gsXG59IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudD5cblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdDwvRG9jdW1lbnQ+XG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudCB0aXRsZT1cIkVycm9yIVwiPlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aDE+VGhlcmUgd2FzIGFuIGVycm9yPC9oMT5cblx0XHRcdFx0XHQ8cD57ZXJyb3IubWVzc2FnZX08L3A+XG5cdFx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdFx0PHA+SGV5IHRoZXJlJ3MgYW4gZXJyb3IgaW4gdGhlIHJvb3QgZmlsZTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8L0RvY3VtZW50PlxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcblx0bGV0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQgdGl0bGU9e2Ake2NhdWdodC5zdGF0dXN9ICR7Y2F1Z2h0LnN0YXR1c1RleHR9YH0+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8Q2VudGVyIGg9XCJmdWxsXCIgdz1cImZ1bGxcIj5cblx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0YmdHcmFkaWVudD1cImxpbmVhcih0by1yLCBicmFuZC5wcmltYXJ5LCBicmFuZC5hY2NlbnQpXCJcblx0XHRcdFx0XHRcdGJnQ2xpcD1cInRleHRcIlxuXHRcdFx0XHRcdFx0Zm9udFNpemU9XCI2eGxcIlxuXHRcdFx0XHRcdFx0Zm9udFdlaWdodD1cIkJvbGRcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFBhZ2UgTm90IEZvdW5kXG5cdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdDwvRG9jdW1lbnQ+XG5cdCk7XG59XG5cbmludGVyZmFjZSBEb2N1bWVudFByb3BzIHtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcblx0dGl0bGU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IERvY3VtZW50ID0gd2l0aEVtb3Rpb25DYWNoZShcblx0KHsgY2hpbGRyZW4sIHRpdGxlIH06IERvY3VtZW50UHJvcHMsIGVtb3Rpb25DYWNoZSkgPT4ge1xuXHRcdGNvbnN0IHNlcnZlclN5bGVEYXRhID0gdXNlQ29udGV4dChTZXJ2ZXJTdHlsZUNvbnRleHQpO1xuXHRcdGNvbnN0IGNsaWVudFN0eWxlRGF0YSA9IHVzZUNvbnRleHQoQ2xpZW50U3R5bGVDb250ZXh0KTtcblx0XHQvLyBPbmx5IGV4ZWN1dGVkIG9uIGNsaWVudFxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0XHQvLyByZS1saW5rIHNoZWV0IGNvbnRhaW5lclxuXHRcdFx0ZW1vdGlvbkNhY2hlLnNoZWV0LmNvbnRhaW5lciA9IGRvY3VtZW50LmhlYWQ7XG5cdFx0XHQvLyByZS1pbmplY3QgdGFnc1xuXHRcdFx0Y29uc3QgdGFncyA9IGVtb3Rpb25DYWNoZS5zaGVldC50YWdzO1xuXHRcdFx0ZW1vdGlvbkNhY2hlLnNoZWV0LmZsdXNoKCk7XG5cdFx0XHR0YWdzLmZvckVhY2goKHRhZykgPT4ge1xuXHRcdFx0XHQoZW1vdGlvbkNhY2hlLnNoZWV0IGFzIGFueSkuX2luc2VydFRhZyh0YWcpO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyByZXNldCBjYWNoZSB0byByZWFwcGx5IGdsb2JhbCBzdHlsZXNcblx0XHRcdGNsaWVudFN0eWxlRGF0YS5yZXNldCgpO1xuXHRcdH0sIFtdKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHRcdDxoZWFkPlxuXHRcdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRcdG5hbWU9XCJ2aWV3cG9ydFwiXG5cdFx0XHRcdFx0XHRjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cblx0XHRcdFx0XHQ8TWV0YSAvPlxuXHRcdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0XHRcdHtzZXJ2ZXJTeWxlRGF0YT8ubWFwKCh7IGtleSwgaWRzLCBjc3MgfSkgPT4gKFxuXHRcdFx0XHRcdFx0PHN0eWxlXG5cdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHRkYXRhLWVtb3Rpb249e2Ake2tleX0gJHtpZHMuam9pbignICcpfWB9XG5cdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcblx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjc3MgfX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvaGVhZD5cblx0XHRcdFx0PGJvZHk+XG5cdFx0XHRcdFx0PENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+e2NoaWxkcmVufTwvQ2hha3JhUHJvdmlkZXI+XG5cdFx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdFx0PFNjcmlwdHMgLz5cblx0XHRcdFx0XHR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG5cdFx0XHRcdDwvYm9keT5cblx0XHRcdDwvaHRtbD5cblx0XHQpO1xuXHR9XG4pO1xuIiwgImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBTdGFjaywgRmxleCwgSW1hZ2VQcm9wcywgSW1hZ2UsIEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5jb25zdCBNb3Rpb25JbWFnZSA9IG1vdGlvbjxJbWFnZVByb3BzPihJbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG5cdHJldHVybiAoXG5cdFx0PEJveD5cblx0XHRcdDxTdGFja1xuXHRcdFx0XHRzcGFjaW5nPXswfVxuXHRcdFx0XHRwb3M9XCJyZWxhdGl2ZVwiXG5cdFx0XHRcdHc9XCIxMDB2d1wiXG5cdFx0XHRcdGg9XCIxMDB2aFwiXG5cdFx0XHRcdG92ZXJmbG93WD1cImhpZGRlblwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdFx0PEZsZXggZmxleEdyb3c9ezF9PntjaGlsZHJlbn08L0ZsZXg+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdFx0PE1vdGlvbkltYWdlXG5cdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHR0b3A9XCIyMCVcIlxuXHRcdFx0XHRsZWZ0PVwiLTUlXCJcblx0XHRcdFx0ekluZGV4PXstMX1cblx0XHRcdFx0c3JjPVwiL3JlZC1jaXJjbGUucG5nXCJcblx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdHg6IFsnMCUnLCAnMTAwJScsICc1MCUnLCAnMCUnLCAnMCUnXSxcblx0XHRcdFx0XHR5OiBbJzAlJywgJzEwMCUnLCAnMCUnLCAnMTAwJScsICcwJSddLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0dHJhbnNpdGlvbj17e1xuXHRcdFx0XHRcdHR5cGU6ICdlYXNlSW5PdXQnLFxuXHRcdFx0XHRcdHJlcGVhdDogSW5maW5pdHksXG5cdFx0XHRcdFx0cmVwZWF0VHlwZTogJ21pcnJvcicsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDE1LFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxNb3Rpb25JbWFnZVxuXHRcdFx0XHRwb3NpdGlvbj1cImFic29sdXRlXCJcblx0XHRcdFx0dG9wPVwiMzUlXCJcblx0XHRcdFx0cmlnaHQ9XCIwJVwiXG5cdFx0XHRcdHpJbmRleD17LTF9XG5cdFx0XHRcdHNyYz1cIi9ibHVlLWNpcmNsZS5wbmdcIlxuXHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0eDogWycwJScsICctMTMwJScsICctMTMwJScsICcwJScsICcwJSddLFxuXHRcdFx0XHRcdHk6IFsnMTAwJScsICctMTAwJScsICcxMDAlJywgJy0xMDAlJywgJzEwMCUnXSxcblx0XHRcdFx0fX1cblx0XHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHR0eXBlOiAnZWFzZUluT3V0Jyxcblx0XHRcdFx0XHRyZXBlYXQ6IEluZmluaXR5LFxuXHRcdFx0XHRcdHJlcGVhdFR5cGU6ICdtaXJyb3IgJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogMTUsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0PE1vdGlvbkltYWdlXG5cdFx0XHRcdHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHR0b3A9XCI1MCVcIlxuXHRcdFx0XHRsZWZ0PVwiMCVcIlxuXHRcdFx0XHR6SW5kZXg9ey0xfVxuXHRcdFx0XHRzcmM9XCIveWVsbG93LWNpcmNsZS5wbmdcIlxuXHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0eDogWycwJScsICcxMDAlJywgJzAlJywgJzEwMCUnLCAnMCUnXSxcblx0XHRcdFx0XHR5OiBbJzAlJywgJy0xMDAlJywgJy0xMDAlJywgJzAlJywgJzAlJ10sXG5cdFx0XHRcdH19XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0cmFuc2l0aW9uPXt7XG5cdFx0XHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRcdFx0cmVwZWF0OiBJbmZpbml0eSxcblx0XHRcdFx0XHRyZXBlYXRUeXBlOiAnbWlycm9yICcsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDE1LFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHQ8L0JveD5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEhTdGFjaywgSGVhZGluZywgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxIU3RhY2tcblx0XHRcdGFzPVwibmF2XCJcblx0XHRcdHc9XCJmdWxsXCJcblx0XHRcdHRvcD1cIjBcIlxuXHRcdFx0cG9zaXRpb249XCJzdGlja3lcIlxuXHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuXHRcdFx0YmdDb2xvcj1cInJnYmEoMjU1LDI1NSwyNTUsMC4yMClcIlxuXHRcdFx0YmFja2Ryb3BGaWx0ZXI9e2BibHVyKDEwcHgpYH1cblx0XHRcdHpJbmRleD17MX1cblx0XHRcdHA9ezR9XG5cdFx0PlxuXHRcdFx0PExpbmsgdG89XCIvXCI+XG5cdFx0XHRcdDxIZWFkaW5nIGZvbnRTaXplPVwiMjRweFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG5cdFx0XHRcdFx0T24gVGhlIEh1bnRcblx0XHRcdFx0PC9IZWFkaW5nPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PEJveD5cblx0XHRcdFx0PEltYWdlIHNyYz1cIi9tZW51LnN2Z1wiIGFsdD1cIk1lbnVcIiB3PVwiZnVsbFwiIGg9XCJmdWxsXCIgLz5cblx0XHRcdDwvQm94PlxuXHRcdDwvSFN0YWNrPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcblx0c3R5bGVzOiB7XG5cdFx0Zm9udHM6IHtcblx0XHRcdGhlYWRpbmc6ICdPc3dhbGQsIHNhbnMtc2VyaWYnLFxuXHRcdFx0Ym9keTogJ0FsZWdyZXlhIFNDLCBzZXJpZicsXG5cdFx0fSxcblx0fSxcbn0pO1xuIiwgImltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICd+L2NvbXBvbmVudHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9zZXJ2ZXIvc3VwYWJhc2Uuc2VydmVyJztcbmltcG9ydCB0eXBlIHsgUHJvZHVjdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgQm94LCBCb3hQcm9wcywgU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuXG5jb25zdCBNb3Rpb25Cb3ggPSBtb3Rpb248Qm94UHJvcHM+KEJveCk7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8UHJvZHVjdFtdPiA9PiB7XG5cdGNvbnN0IHsgZGF0YTogcHJvZHVjdHMsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuXHRcdC5mcm9tKCdwcm9kdWN0cycpXG5cdFx0LnNlbGVjdCgnKicpO1xuXG5cdGlmIChlcnJvciB8fCAhcHJvZHVjdHMpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJDb3VsZG4ndCBmZXRjaCBwcm9kdWN0c1wiLCB7IHN0YXR1czogNTAwIH0pO1xuXHR9XG5cblx0cmV0dXJuIHByb2R1Y3RzLm1hcCgocHJvZHVjdDogYW55KSA9PiB7XG5cdFx0aWYgKHByb2R1Y3QuaW1hZ2VfdXJsLmluY2x1ZGVzKCcuZ2lmJykpIHtcblx0XHRcdHByb2R1Y3QuaW1hZ2VfdXJsID1cblx0XHRcdFx0J2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzIxMTEvMjExMTU1Ni5wbmcnO1xuXHRcdH1cblxuXHRcdC8vIEdldCB0aGUgc2hvcnRlc3QgdG9waWNcblx0XHRwcm9kdWN0LnRvcGljID0gcHJvZHVjdC50b3BpY3MucmVkdWNlKFxuXHRcdFx0KGE6IHsgbm9kZTogeyBuYW1lOiBzdHJpbmcgfSB9LCBiOiB7IG5vZGU6IHsgbmFtZTogc3RyaW5nIH0gfSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYS5ub2RlLm5hbWUubGVuZ3RoIDw9IGIubm9kZS5uYW1lLmxlbmd0aCA/IGEgOiBiO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIHByb2R1Y3Q7XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBwcm9kdWN0czogUHJvZHVjdFtdID0gdXNlTG9hZGVyRGF0YSgpO1xuXG5cdHJldHVybiAoXG5cdFx0PEJveCBwb3M9XCJyZWxhdGl2ZVwiIHc9XCJmdWxsXCIgaD1cImZ1bGxcIj5cblx0XHRcdDxTdGFja1xuXHRcdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHRcdGg9XCJmdWxsXCJcblx0XHRcdFx0anVzdGlmeT1cImNlbnRlclwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRtdD17OX1cblx0XHRcdFx0c3BhY2luZz17NX1cblx0XHRcdD5cblx0XHRcdFx0e3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8TW90aW9uQm94XG5cdFx0XHRcdFx0XHRpbml0aWFsPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdGFuaW1hdGU9XCJ2aXNpYmxlXCJcblx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRjdXN0b209e2luZGV4fVxuXHRcdFx0XHRcdFx0dmFyaWFudHM9e3tcblx0XHRcdFx0XHRcdFx0aGlkZGVuOiB7XG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdFx0XHR4OiBpbmRleCAlIDIgPT09IDAgPyAtMTAwIDogMTAwLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR2aXNpYmxlOiAoaW5kZXgpID0+ICh7XG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHRcdFx0XHR4OiAwLFxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5OiBpbmRleCAqIDAuMzUsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC45LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuXHRcdFx0XHRcdDwvTW90aW9uQm94PlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9Cb3g+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ34vdHlwZXMnO1xuaW1wb3J0IHsgR29UcmlhbmdsZVVwIH0gZnJvbSAncmVhY3QtaWNvbnMvZ28nO1xuaW1wb3J0IHsgQXJyb3dUb3BSaWdodEljb24sIFNoYXJlMkljb24gfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHtcblx0SFN0YWNrLFxuXHRJbWFnZSxcblx0U3RhY2ssXG5cdFRleHQsXG5cdExpbmssXG5cdENlbnRlcixcblx0Qm94LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcblx0cHJvZHVjdDogUHJvZHVjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQoe1xuXHRwcm9kdWN0LFxufTogUHJvZHVjdENhcmRQcm9wcyk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgeyBuYW1lLCB1cmwsIGltYWdlX3VybCwgdGFnbGluZSwgdG9waWMsIHVwdm90ZXMgfTogUHJvZHVjdCA9IHByb2R1Y3Q7XG5cblx0cmV0dXJuIChcblx0XHQ8U3RhY2tcblx0XHRcdHA9XCI0XCJcblx0XHRcdGg9XCJhdXRvXCJcblx0XHRcdHc9XCIzMTVweFwiXG5cdFx0XHRwb3M9XCJyZWxhdGl2ZVwiXG5cdFx0XHRib3JkZXJSYWRpdXM9XCIyMHB4XCJcblx0XHRcdGJvcmRlcj1cIjJweCBzb2xpZCBibGFja1wiXG5cdFx0XHRiZ0NvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwwLjU1KVwiXG5cdFx0PlxuXHRcdFx0PFN0YWNrXG5cdFx0XHRcdGg9XCJhdXRvXCJcblx0XHRcdFx0c3BhY2luZz17MH1cblx0XHRcdFx0cG9zPVwiYWJzb2x1dGVcIlxuXHRcdFx0XHRhbGlnblNlbGY9XCJzdGFydFwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHR7LyogPFZlcmNlbExvZ29JY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBmaWxsOiAnZ3JlZW4nIH19IC8+ICovfVxuXHRcdFx0XHQ8R29UcmlhbmdsZVVwXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdGNvbG9yOiAnZ3JlZW4nLFxuXHRcdFx0XHRcdFx0ZmlsbDogJ2dyZWVuJyxcblx0XHRcdFx0XHRcdHdpZHRoOiAnMjVweCcsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICcyNXB4Jyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PVwic2VtaWJvbGRcIj57dXB2b3Rlc308L1RleHQ+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdFx0PEhTdGFjayB3PVwiZnVsbFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cblx0XHRcdFx0PFN0YWNrIGFsaWduU2VsZj1cInN0YXJ0XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0c3JjPXtgJHtpbWFnZV91cmx9YH1cblx0XHRcdFx0XHRcdGJveFNpemU9XCI2MHB4XCJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjUwJVwiXG5cdFx0XHRcdFx0XHRvYmplY3RGaXQ9XCJmaWxsXCJcblx0XHRcdFx0XHRcdGJveFNoYWRvdz17YDBweCA0cHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjI1KWB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VGV4dD57bmFtZX08L1RleHQ+XG5cdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdDxDZW50ZXJcblx0XHRcdFx0XHRwPVwiMC41XCJcblx0XHRcdFx0XHR0b3A9XCI1XCJcblx0XHRcdFx0XHRyaWdodD1cIjVcIlxuXHRcdFx0XHRcdGJnPVwiI0Y0QTI2MVwiXG5cdFx0XHRcdFx0dz1cIjU0cHhcIlxuXHRcdFx0XHRcdGg9XCIxOHB4XCJcblx0XHRcdFx0XHRwb3M9XCJhYnNvbHV0ZVwiXG5cdFx0XHRcdFx0YWxpZ25TZWxmPVwic3RhcnRcIlxuXHRcdFx0XHRcdGJvcmRlclJhZGl1cz17NH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxUZXh0IGNvbG9yPVwid2hpdGVcIiBpc1RydW5jYXRlZCBmb250U2l6ZT1cInNtXCI+XG5cdFx0XHRcdFx0XHR7dG9waWNbJ25vZGUnXVsnbmFtZSddLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcblx0XHRcdFx0XHRcdFx0dG9waWNbJ25vZGUnXVsnbmFtZSddLnNsaWNlKDEpfVxuXHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHQ8L0hTdGFjaz5cblx0XHRcdDxUZXh0IGNvbG9yPVwiYmxhY2tcIj57dGFnbGluZX08L1RleHQ+XG5cdFx0XHQ8Qm94IHc9XCJmdWxsXCIgcD1cIjJcIj5cblx0XHRcdFx0PEhTdGFjayBqdXN0aWZ5PVwiY2VudGVyXCI+XG5cdFx0XHRcdFx0PEhTdGFja1xuXHRcdFx0XHRcdFx0dz1cImF1dG9cIlxuXHRcdFx0XHRcdFx0aD1cIjM2cHhcIlxuXHRcdFx0XHRcdFx0YmdDb2xvcj1cImJsYWNrXCJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjVcIlxuXHRcdFx0XHRcdFx0cD1cIjNcIlxuXHRcdFx0XHRcdFx0c2hvdWxkV3JhcENoaWxkcmVuXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0PFRleHQgY29sb3I9XCJ3aGl0ZVwiPkNoZWNrIG91dDwvVGV4dD5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDxBcnJvd1RvcFJpZ2h0SWNvbiBjb2xvcj1cIndoaXRlXCIgLz5cblx0XHRcdFx0XHQ8L0hTdGFjaz5cblx0XHRcdFx0XHQ8U2hhcmUySWNvblxuXHRcdFx0XHRcdFx0d2lkdGg9ezIwfVxuXHRcdFx0XHRcdFx0aGVpZ2h0PXsyMH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XG5cdFx0XHRcdFx0XHRcdG5hdmlnYXRvci5zaGFyZSh7IHVybDogdXJsLCB0aXRsZTogbmFtZSB9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSFN0YWNrPlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9TdGFjaz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnQsIFN1cGFiYXNlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuaWYgKCFwcm9jZXNzLmVudi5TVVBBQkFTRV9VUkwpXG5cdHRocm93IEVycm9yKCdTdXBhYmFzZSBVUkwgbm90IGZvdW5kIGluIGVudmlyb25tZW50Jyk7XG5pZiAoIXByb2Nlc3MuZW52LlNVUEFCQVNFX0tFWSlcblx0dGhyb3cgRXJyb3IoJ1N1cGFiYXNlIEtFWSBub3QgZm91bmQgaW4gZW52aXJvbm1lbnQnKTtcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlOiBTdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChcblx0cHJvY2Vzcy5lbnYuU1VQQUJBU0VfVVJMIGFzIHN0cmluZyxcblx0cHJvY2Vzcy5lbnYuU1VQQUJBU0VfS0VZIGFzIHN0cmluZ1xuKTtcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcyc7XG5pbXBvcnQgeyBCb3gsIEhTdGFjaywgQ2VudGVyLCBTdGFjaywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgQXJyb3dSaWdodEljb24gfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtaWNvbnMnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHRpdGxlOiAnT24gVGhlIEh1bnQnLFxuXHRcdGRlc2NyaXB0aW9uOiBcIlByb2R1Y3QgSHVudCdzIGRhaWx5IG5ld3NwYXBlclwiLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U3RhY2tcblx0XHRcdFx0cG9zPVwicmVsYXRpdmVcIlxuXHRcdFx0XHR3PVwiZnVsbFwiXG5cdFx0XHRcdGFsaWduQ29udGVudD1cImNlbnRlclwiXG5cdFx0XHRcdGp1c3RpZnk9XCJjZW50ZXJcIlxuXHRcdFx0XHRzcGFjaW5nPXsxMH1cblx0XHRcdD5cblx0XHRcdFx0PENlbnRlcj5cblx0XHRcdFx0XHQ8Q2VudGVyXG5cdFx0XHRcdFx0XHRiZ0NvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwwLjU1KVwiXG5cdFx0XHRcdFx0XHRiYWNrZHJvcEZpbHRlcj17YGJsdXIoMTBweClgfVxuXHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG5cdFx0XHRcdFx0XHR3PXszMzB9XG5cdFx0XHRcdFx0XHRoPXsyOTh9XG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9ezIwfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCb3ggdz1cIjIzMHB4XCI+XG5cdFx0XHRcdFx0XHRcdDxTdGFjayBzcGFjaW5nPXstNX0gdz1cImZ1bGxcIiBzaG91bGRXcmFwQ2hpbGRyZW4+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFNpemU9XCIzcmVtXCIgZm9udFdlaWdodD1cImJvbGRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdE9uXG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZT1cIjNyZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWw9XCIyNSVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodD1cImJvbGRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFRoZVxuXHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU9XCIzcmVtXCJcblx0XHRcdFx0XHRcdFx0XHRcdG1sPVwiNTAlXCJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9XCJib2xkXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRIdW50XG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjIwcHhcIiBjb2xvcj1cIiM2MzYzNjNcIj5cblx0XHRcdFx0XHRcdFx0VmlldyB0aGUgbGF0ZXN0IGJlc3QgYWZmZnNkZnNcblx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHRcdDxDZW50ZXI+XG5cdFx0XHRcdFx0PEhTdGFja1xuXHRcdFx0XHRcdFx0YmdDb2xvcj1cImJsYWNrXCJcblx0XHRcdFx0XHRcdGNvbG9yPVwid2hpdGVcIlxuXHRcdFx0XHRcdFx0d2lkdGg9XCIxNTNweFwiXG5cdFx0XHRcdFx0XHRoZWlnaHQ9XCI2MHB4XCJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cIjE1cHhcIlxuXHRcdFx0XHRcdFx0anVzdGlmeT1cImNlbnRlclwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PExpbmsgdG89XCIvcHJvZHVjdHNcIj5cblx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFNpemU9XCIyMnB4XCIgZm9udEZhbWlseT1cIlJvYm90b1wiPlxuXHRcdFx0XHRcdFx0XHRcdFZpZXdcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PEFycm93UmlnaHRJY29uIC8+XG5cdFx0XHRcdFx0PC9IU3RhY2s+XG5cdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBDZW50ZXIsIEltYWdlLCBCdXR0b24sIFN0YWNrLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Q2VudGVyXG5cdFx0XHRcdHc9XCJmdWxsXCJcblx0XHRcdFx0YmdDb2xvcj1cInJlZC4zMDBcIlxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjR4bFwiPkhvbWUgUGFnZTwvVGV4dD5cblx0XHRcdDwvQ2VudGVyPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2UwNDRhOWI5JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1OQjZLV0dEWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTlhBWlBVTUMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1YSUZVMkk3Ri5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlGTTVMM0k1LmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC00VTVaRVlTRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSk9IVzNSVkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LSE1PT01BSi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2hvbWUnOnsnaWQnOidyb3V0ZXMvaG9tZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidob21lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hvbWUtV0M3R0NJUVkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1LRk9TSDJBSy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFFOWFNBVFouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2R1Y3RzJzp7J2lkJzoncm91dGVzL3Byb2R1Y3RzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2R1Y3RzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Byb2R1Y3RzLVdaQ0E0SEs0LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UUU5YU0FUWi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtRTA0NEE5QjkuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBLFlBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0FqQjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1B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
