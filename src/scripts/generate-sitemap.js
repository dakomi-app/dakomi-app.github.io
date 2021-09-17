const fs = require("fs");

const prettier = require("prettier");

const webrootDomain = "https://dakomi-app.github.io";

const getDate = new Date().toISOString();

const formatted = (sitemap) =>
    prettier.format(sitemap, { parser: "html", printWidth: 480 });

(async () => {
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            <url>
                <loc>${`${webrootDomain}`}</loc>
                <lastmod>${getDate}</lastmod>
            </url>
        </urlset>
    `;

    const formattedSitemap = formatted(sitemap);

    fs.writeFileSync("../../docs/sitemap.xml", formattedSitemap, "utf8");
})();
