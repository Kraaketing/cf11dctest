module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/static/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/static/config.yml": "config.yml" });
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });


  return {
    dir: {
      input: "src",
      // includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
