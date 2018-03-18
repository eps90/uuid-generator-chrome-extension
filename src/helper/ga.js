import ReactGa from "react-ga";

const debugMode = process.env.NODE_ENV !== "production";
const analyticsKey = process.env.GOOGLE_ANALYTICS_KEY || null;

if (debugMode) {
    window.ga_debug = {trace: true};
}

ReactGa.initialize(
    analyticsKey,
    {
        debug: debugMode,
        gaOptions: {
            cookieDomain: "none"
        },
        gaAddress: debugMode
            ? "https://www.google-analytics.com/analytics_debug.js"
            : "https://www.google-analytics.com/analytics.js"
    }
);
ReactGa.set({checkProtocolTask: null});
ReactGa.pageview("/index.html");