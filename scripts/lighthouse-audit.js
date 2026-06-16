#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");

const SITE_URL = process.env.SITE_URL || "http://localhost:3000";
const ROUTES = ["/", "/about", "/contact", "/products"];

async function run() {
  console.log("Starting Lighthouse audits...\n");

  for (const route of ROUTES) {
    const url = `${SITE_URL}${route}`;
    const label = route === "/" ? "home" : route.slice(1);

    console.log(`  Auditing: ${label} (${url})`);

    try {
      const output = execSync(
        `npx lighthouse "${url}" --output=json --output-path=stdout --chrome-flags="--headless" --quiet --only-categories=performance,accessibility,seo,best-practices`,
        {
          encoding: "utf-8",
          timeout: 60000,
          env: { ...process.env, CI: "1" },
        }
      );

      const report = JSON.parse(output);
      const scores = {
        performance: Math.round(report.categories.performance.score * 100),
        accessibility: Math.round(report.categories.accessibility.score * 100),
        seo: Math.round(report.categories.seo.score * 100),
        "best-practices": Math.round(
          report.categories["best-practices"].score * 100
        ),
      };

      console.log(`    Performance:    ${scores.performance}`);
      console.log(`    Accessibility:  ${scores.accessibility}`);
      console.log(`    SEO:            ${scores.seo}`);
      console.log(`    Best Practices: ${scores["best-practices"]}`);
      console.log();
    } catch (err) {
      console.error(`    FAILED: ${err.message}`);
      console.log();
    }
  }

  console.log("Lighthouse audit complete.");
}

run().catch(console.error);
