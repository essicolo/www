import lume from "lume/mod.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import nunjucks from "lume/plugins/nunjucks.ts";

const site = lume();

site.use(nunjucks());

site.use(multilanguage({
  languages: ["fr", "en"],
  defaultLanguage: "fr",
}));

export default site;