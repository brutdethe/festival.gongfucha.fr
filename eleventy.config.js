export const config = {
  dir: {
    input: 'src',
    output: 'dist'
  },
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
  dataTemplateEngine: 'njk',
  templateFormats: ['njk', 'md', 'html'],
  pathPrefix: '/',
  langs: { default: 'fr', others: ['en'] }
};


export default function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("2022");
  eleventyConfig.addPassthroughCopy("2023");
  eleventyConfig.addPassthroughCopy({ "src/_assets/img": "assets/img" });
  eleventyConfig.addPassthroughCopy("bundle.css");

  eleventyConfig.addCollection("people", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/people/*.md");
  });

  eleventyConfig.addCollection("events", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/events/*.md");
  });

  eleventyConfig.addFilter("find", (array, key, value) => {
    return array.find(item => {
      const keys = key.split(".");
      let current = item;
      for (let k of keys) {
        if (current && k in current) {
          current = current[k];
        } else {
          return false;
        }
      }
      return current === value;
    });
  });

}
