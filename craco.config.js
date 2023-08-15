const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@components": resolvePath("./src/components"),
      "@const": resolvePath("./src/const"),
      "@image": resolvePath("./src/image"),
      "@styles": resolvePath("./src/styles"),
    },
  },
};
