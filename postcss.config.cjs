/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require("autoprefixer");
const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');

const config = {
  plugins: [postcssJitProps(OpenProps), autoprefixer]
};

module.exports = config;
