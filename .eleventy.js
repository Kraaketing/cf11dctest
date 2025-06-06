module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/static/admin.html": "admin.html" });
  eleventyConfig.addPassthroughCopy({ "src/static/config.yml": "config.yml" });
  eleventyConfig.addPassthroughCopy({ "src/static/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/static/_headers": "_headers" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
