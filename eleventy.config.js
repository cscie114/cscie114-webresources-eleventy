module.exports = function (eleventyConfig) {
  const inspect = require("util").inspect;
  eleventyConfig.addFilter(
    "debug",
    (content) => `<pre>${inspect(content)}</pre>`
  );
  eleventyConfig.addPassthroughCopy("src/assets/**");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addShortcode("hostname", function (url) {
    let urlObj = new URL(url);
    let hostname = urlObj.hostname;
    return hostname;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
