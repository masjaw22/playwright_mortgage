export const login = async (page, record) => {
        const userId = await page.locator('input[name="userId"]');
        await userId.fill(record.userId);
        const pass = await page.locator('input[type="password"]');
        await pass.fill(record.password);
        const loginBtn = await page.locator('input[type="submit"]');
        await loginBtn.click();
}