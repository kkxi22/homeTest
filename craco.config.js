const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
  devServer: {
    proxy: {
      "/prod": {
        target:
          "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com",
        changeOrigin: true,
      },
    },
  },
};
