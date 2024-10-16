import { test, expect} from '@playwright/test';



//Test de NavBar
test('has navBar', async ({ page }) => {
  await page.goto('https://es.wallapop.com/');

  // Selecciona la barra de navegación
  const navBar = page.getByRole('navigation').first();

  // Verifica que la barra de navegación sea visible
  await expect(navBar).toBeVisible();
});

test('has logo', async ({ page }) => {
  await page.goto('https://es.wallapop.com/');

  const wallapopLogo = page.getByAltText('Wallapop logo');

  //Expect logo to be visible
  await expect(wallapopLogo).toBeVisible();
  
});


test('link del logo redirige al home', async ({ page }) => {
  await page.goto('https://es.wallapop.com/');


  const wallapopLogo = page.getByAltText('Wallapop logo');

  await wallapopLogo.click();

  // Esperar que la URL sea la de la página principal
  await expect(page).toHaveURL('https://es.wallapop.com/');

  
});


test('botón de sign in (inicio sesión) es visible ', async ({ page }) => {
  
  await page.goto('https://es.wallapop.com/');

  const registerButton = page.getByRole('button',{name:'Regístrate o inicia sesión'});

  await expect(registerButton).toBeVisible();

});


  
  test('botón de sign in (inicio sesión) redirige a registro o sign in', async ({ page }) => {
    await page.goto('https://es.wallapop.com/');
  
    // Selecciona el botón "Regístrate o inicia sesión" y haz clic en él
    const registerButton = page.getByRole('button',{name:'Regístrate o inicia sesión'})
    await registerButton.click();
  
    // Verifica que la URL cambie a la página de registro/inicio de sesión
    await expect(page).toHaveURL(/auth\/onboarding/);
  });

  test('aceptar cookies', async ({ page }) => {
    await page.goto('https://es.wallapop.com/');
  
    // Selecciona el botón para aceptar todas las cookies
    const acceptCookiesButton = page.locator('#onetrust-accept-btn-handler');
    if (await acceptCookiesButton.isVisible()) {
      await acceptCookiesButton.click();
    }
  
    // Verifica que el botón de aceptar cookies ya no esté visible
    await expect(acceptCookiesButton).not.toBeVisible();
  });


  test('buscar un producto', async ({ page }) => {
    await page.goto('https://es.wallapop.com/');
  
    // Aceptar cookies
    const acceptCookiesButton = page.locator('#onetrust-accept-btn-handler');
    if (await acceptCookiesButton.isVisible()) {
      await acceptCookiesButton.click();
    }
  
    // Busca el cuadro de búsqueda e ingresa un término
    const searchBox = page.getByRole('textbox', { name: 'Busca' });
    await searchBox.fill('bicicleta');
  
    // Presiona enter para buscar
    await searchBox.press('Enter');
  
    // Espera que los resultados sean visibles
    const firstResult = page.locator('.ItemCard');
    await expect(firstResult).toBeVisible();
  });









/*
test('FAQ', async ({ page }) => {
  await page.goto('https://es.wallapop.com/');

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
});*/