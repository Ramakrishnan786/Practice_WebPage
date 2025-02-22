
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/WebPageForAutomation/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/WebPageForAutomation/login",
    "route": "/WebPageForAutomation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7I5WLVOP.js",
      "chunk-L7FZME2G.js"
    ],
    "route": "/WebPageForAutomation/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XWFSGHFZ.js",
      "chunk-L7FZME2G.js"
    ],
    "route": "/WebPageForAutomation/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "redirectTo": "/WebPageForAutomation/dashboard/double-click",
    "route": "/WebPageForAutomation/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/WebPageForAutomation/dashboard/single-click"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/WebPageForAutomation/dashboard/double-click"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/WebPageForAutomation/dashboard/right-click"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/WebPageForAutomation/dashboard/drag-drop"
  },
  {
    "renderMode": 2,
    "redirectTo": "/WebPageForAutomation/login",
    "route": "/WebPageForAutomation/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 575, hash: 'c8fd133b2037a8441c7753c2c4f9d155d013353b69ce33d47298a61759e6d0f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1088, hash: '3a757a0f279805e0ab686114d2afd5df3d48bab4bd169e8d49c528c589f80e3b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 8652, hash: '2fb07e7483435240547889653247087bbe3d5ab178ff71d40fe1c827da0b3e77', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'dashboard/double-click/index.html': {size: 6214, hash: 'f431827e5eb0221b711a0e4ad973abf69e89a5d56a0b3286c9290f46cfc087e8', text: () => import('./assets-chunks/dashboard_double-click_index_html.mjs').then(m => m.default)},
    'dashboard/right-click/index.html': {size: 6214, hash: 'f431827e5eb0221b711a0e4ad973abf69e89a5d56a0b3286c9290f46cfc087e8', text: () => import('./assets-chunks/dashboard_right-click_index_html.mjs').then(m => m.default)},
    'dashboard/drag-drop/index.html': {size: 6214, hash: 'f431827e5eb0221b711a0e4ad973abf69e89a5d56a0b3286c9290f46cfc087e8', text: () => import('./assets-chunks/dashboard_drag-drop_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6264, hash: '41a3129236369c93b0d9d4ab02173d6da6661f7647067d5e03daaacdd6292bab', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/single-click/index.html': {size: 6212, hash: '8a628c63cfa2014dd5af1acc8a91fbc9d304436796c1f6c50bbfea81016de16b', text: () => import('./assets-chunks/dashboard_single-click_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
