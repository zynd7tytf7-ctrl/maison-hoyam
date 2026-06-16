import { test, expect } from "@playwright/test";

const ROUTES = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/contact", name: "contact" },
  { path: "/products", name: "products" },
];

test.describe("Console & Rendering", () => {
  for (const route of ROUTES) {
    test(`${route.name}: no console errors, page renders`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") {
          consoleErrors.push(msg.text());
        }
      });

      const pageErrors: Error[] = [];
      page.on("pageerror", (err) => {
        pageErrors.push(err);
      });

      await page.goto(route.path, { waitUntil: "networkidle" });

      // Wait for React hydration
      await page.waitForTimeout(1000);

      // Check console
      expect(consoleErrors).toHaveLength(0);
      expect(pageErrors).toHaveLength(0);
    });
  }
});

test.describe("Navigation", () => {
  test("navigate between all pages without errors", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (err) => consoleErrors.push(err.message));

    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    expect(consoleErrors).toHaveLength(0);

    for (const route of ROUTES.slice(1)) {
      await page.goto(route.path, { waitUntil: "networkidle" });
      await page.waitForTimeout(500);
      expect(consoleErrors).toHaveLength(0);
    }
  });
});

test.describe("SEO & Meta", () => {
  test("home page has correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Maison Hoyam/);
  });

  test("each page has a non-empty title", async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(route.path);
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
    }
  });

  test("viewport meta tag present", async ({ page }) => {
    await page.goto("/");
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute("content", /width=device-width/);
  });

  test("JSON-LD structured data present", async ({ page }) => {
    await page.goto("/");
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });
});

test.describe("Accessibility basics", () => {
  test("images have alt attributes", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("page has a heading", async ({ page }) => {
    await page.goto("/");
    const headings = page.locator("h1, h2, h3");
    const count = await headings.count();
    expect(count).toBeGreaterThan(0);
  });

  test("page has a lang attribute", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("lang");
  });
});

test.describe("Responsiveness", () => {
  test("mobile viewport (375px) no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/", { waitUntil: "networkidle" });
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(
      () => document.documentElement.clientWidth,
    );
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });

  test("tablet viewport (768px) no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/", { waitUntil: "networkidle" });
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(
      () => document.documentElement.clientWidth,
    );
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });
});

test.describe("Resources", () => {
  test("favicon loads", async ({ page }) => {
    const resp = await page.goto("/favicon.svg");
    expect(resp?.status()).toBe(200);
  });

  test("all known routes return 200", async ({ page }) => {
    const paths = ROUTES.map((r) => r.path);
    for (const p of paths) {
      const resp = await page.goto(p, { timeout: 10000 });
      expect(resp?.status()).toBe(200);
    }
  });
});
