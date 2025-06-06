module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "admin/index.html": "admin.html" });
  eleventyConfig.addPassthroughCopy({ "admin/config.yml": "config.yml" });
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "src/static/_headers": "_headers" });


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
