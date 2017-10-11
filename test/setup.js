var jsdom = require("jsdom");
const { JSDOM } = jsdom;

//creating a virtual dom to test React components.
const { document } = new JSDOM(
  "<!doctype html><html><body></body></html>"
).window;
global.document = document;

// global.document = jsdom.jsdom("");
// global.window = document.defaultView;
// global.navigator = { userAgent: "node.js" };
