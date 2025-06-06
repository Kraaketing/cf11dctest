module.exports = function (eleventyConfig) {
eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
eleventyConfig.addPassthroughCopy("src/_redirects");


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
