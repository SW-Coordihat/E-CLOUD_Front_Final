const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: process.env.REACT_APP_BACK_URL,
      changeOrigin: true,
    })
  );
};
