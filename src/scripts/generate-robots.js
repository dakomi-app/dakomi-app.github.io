const fs = require("fs");

const webrootDomain = "https://dakomi-app.github.io";

(async () => {
    const sitemap = `User-agent: *
Allow: /

Sitemap: ${webrootDomain}/sitemap.xml`;

    fs.writeFileSync("../../docs/robots.txt", sitemap, "utf8");
})();
