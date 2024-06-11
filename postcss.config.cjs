/* eslint-disable @typescript-eslint/no-var-requires */
const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');

const config = {
  plugins: [postcssJitProps(OpenProps)]
};

module.exports = config;
