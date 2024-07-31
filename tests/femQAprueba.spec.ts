import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://femqa.basetis.com/es');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/FemQA/);
});

test('FAQ', async ({ page }) => {
  await page.goto('https://femqa.basetis.com/es');

  // Click the FAQ navbar.
  await page.getByRole('link', { name: 'faq' }).nth(0).click();

  
  // Expects page to have a heading with the name of faq.
  await expect(page.getByRole('heading', { name: 'FAQ' })).toBeVisible();
});

test('contact button header', async ({ page }) => {
  
  const contactButton = page.locator('button:has-text("Contact")').nth(0);

  await page.goto('https://femqa.basetis.com/es');

  // Click the FAQ.
  await contactButton.click();

  // Expects page to have a heading with the name of faq.
  await expect(page.getByRole('heading', { name: 'Formulario de contacto' })).toBeVisible();
});