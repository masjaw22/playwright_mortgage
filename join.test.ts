import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://10.25.136.209:9446/login.view');
  await page.waitForLoadState()
  await page.locator('input[name="userId"]').click();
  await page.locator('input[name="userId"]').fill('hanifpw');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('password');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Login' }).click();
  const page1 = await page1Promise;
  await page1.locator('frame[name="menu"]').contentFrame().getByRole('link', { name: 'New Ticket' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('select[name="maintenanceSBUCode"]').selectOption('01');
  await page1.locator('frame[name="main"]').contentFrame().getByRole('radio').nth(1).check();
  const page2Promise = page1.waitForEvent('popup');
  await page1.locator('frame[name="main"]').contentFrame().getByRole('button', { name: '...' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: 'Go' }).click();
  await page2.getByRole('link', { name: 'HL5000' }).click();

  await page1.locator('frame[name="main"]').contentFrame().locator('select[name="firstIdentificationTypeCode"]').selectOption('10');
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="firstIdentificationNumber"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="firstIdentificationNumber"]').fill('3337449990001123');
  await page1.locator('frame[name="main"]').contentFrame().getByRole('cell', { name: 'Search Proceed' }).click();
  await page1.locator('frame[name="main"]').contentFrame().getByRole('cell', { name: 'Search Proceed' }).click();
  await page1.locator('frame[name="main"]').contentFrame().getByRole('button', { name: 'Search' }).click();
  await page1.locator('frame[name="main"]').contentFrame().getByRole('link', { name: 'ALAN BUDI KUSUM' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerVO\\.isCBP"]').nth(1).check();
  await page1.locator('frame[name="main"]').contentFrame().locator('select[name="customerVO\\.isJointIncome"]').selectOption('Y');
  await page1.locator('frame[name="main"]').contentFrame().locator('select[name="customerIndividualVO\\.maritalStatusCode"]').selectOption('S');
  await page1.locator('frame[name="main"]').contentFrame().locator('select[name="customerIndividualVO\\.genderCode"]').selectOption('M');
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerVO\\.placeOfBirth"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerVO\\.placeOfBirth"]').fill('Jakarta');
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerVO\\.npwpNo"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerVO\\.npwpNo"]').fill('3337449990001123');
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerIndividualVO\\.motherMaidenName"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerIndividualVO\\.motherMaidenName"]').fill('Sibu');
  await page1.locator('frame[name="main"]').contentFrame().locator('select[name="customerIndividualVO\\.educationLevelCode"]').selectOption('2');
  await page1.locator('frame[name="main"]').contentFrame().locator('select[name="customerVO\\.citizenshipCode"]').selectOption('1');
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="idAddressVO\\.addressLine1"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="idAddressVO\\.addressLine1"]').fill('Jakarta');
  const page3Promise = page1.waitForEvent('popup');
  await page1.locator('frame[name="main"]').contentFrame().locator('.clsStdBtnSmallPicklist').first().click();
  const page3 = await page3Promise;
  await page3.getByRole('button', { name: 'Go' }).click();
  await page3.getByRole('row', { name: '10009 SAWAH BESAR (43)' }).getByRole('link').click();

  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });

  await page1.locator('frame[name="main"]').contentFrame().getByRole('button', { name: 'Click if the above is the same' }).click();

  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="residentialAddressVO\\.mobileNumberAreaCode"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="residentialAddressVO\\.mobileNumberAreaCode"]').fill('0812');
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="residentialAddressVO\\.mobileNumber"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="residentialAddressVO\\.mobileNumber"]').fill('123456789');
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceYear"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceYear"]').fill('8');
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceMonth"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceMonth"]').fill('8');
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="residentialAddressVO\\.email"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="residentialAddressVO\\.email"]').fill('test@gmail.com');

  const page4Promise = page1.waitForEvent('popup');
  await page1.locator('frame[name="main"]').contentFrame().getByRole('row', { name: 'Employer Name/ Own Company' }).getByRole('button').click();
  const page4 = await page4Promise;
  await page4.getByRole('button', { name: 'Go' }).click();
  await page4.getByRole('link', { name: 'ADIRA' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('select[name="customerEmploymentVO\\.employmentTypeCode"]').selectOption('01');
  await page1.locator('frame[name="main"]').contentFrame().locator('select[name="customerEmploymentVO\\.employmentStatusCode"]').selectOption('01');
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerEmploymentVO\\.isOwnCompany"]').nth(1).check();
  const page5Promise = page1.waitForEvent('popup');
  await page1.locator('frame[name="main"]').contentFrame().getByRole('row', { name: 'Date of Establishment? Select' }).locator('input[name="customerEmploymentVO\\.dot"]').click();
  const page5 = await page5Promise;
  await page5.getByRole('textbox').click();
  await page5.getByRole('textbox').fill('id');
  await page5.getByRole('button', { name: 'Go' }).click();
  await page5.getByRole('link', { name: 'ID' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerEmploymentIncomeVO\\.monthlyMainIncome"]').fill('14000000');
  const page6Promise = page1.waitForEvent('popup');
  await page1.locator('frame[name="main"]').contentFrame().getByRole('row', { name: 'Occupation ... Nature Of' }).getByRole('button').first().click();
  const page6 = await page6Promise;
  await page6.getByRole('button', { name: 'Go' }).click();
  await page6.getByRole('link', { name: '0001' }).click();

  await page1.waitForLoadState('load')
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="officeAddressVO\\.addressLine1"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="officeAddressVO\\.addressLine1"]').fill('Jakarta');
  await page1.locator('frame[name="main"]').contentFrame().locator("//label[@id='officeAddressVO.postalCodeDisplay']/following-sibling::input[1]").click();
  await page1.waitForLoadState('load')

  const page7Promise = page1.waitForEvent('popup');
  await page1.waitForLoadState()
  await page1.locator('frame[name="main"]').contentFrame().getByRole('row', { name: 'Postcode ...' }).getByRole('button').click();
  const page7 = await page7Promise;
  await page7.getByRole('button', { name: 'Go' }).click();
  await page7.getByRole('row', { name: '10009 SAWAH BESAR (43)' }).getByRole('link').click();

  await page1.waitForLoadState()

  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceYear"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceYear"]').fill('8');
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceMonth"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceMonth"]').fill('8');

  await page1.waitForLoadState()

  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page1.locator('frame[name="main"]').contentFrame().getByRole('button', { name: 'Save & Next' }).click();


  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Add' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('radio').nth(1).check();
  const page8Promise = page1.waitForEvent('popup');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: '...' }).click();
  const page8 = await page8Promise;
  await page8.getByRole('button', { name: 'Go' }).click();
  await page8.getByRole('link', { name: 'HL5000' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="firstIdentificationTypeCode"]').selectOption('10');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="firstIdentificationNumber"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="firstIdentificationNumber"]').fill('3216060812920003');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Search' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Proceed' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerVO\\.name"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerVO\\.name"]').fill('Jheny Doe');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerVO\\.nameDukcapil"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerVO\\.registeredDateDisplay"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerVO\\.registeredDateDisplay_sel"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerVO\\.registeredDateDisplay"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerVO\\.registeredDateDisplay"]').fill('13/03/1979');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="customerIndividualVO\\.genderCode"]').selectOption('F');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerVO\\.placeOfBirth"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerVO\\.placeOfBirth"]').fill('Jakarta');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerVO\\.npwpNo"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerVO\\.npwpNo"]').fill('3216060812920003');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerIndividualVO\\.motherMaidenName"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerIndividualVO\\.motherMaidenName"]').fill('Sibu');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerIndividualVO\\.numberOfDependent"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerIndividualVO\\.numberOfDependent"]').fill('1');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="customerIndividualVO\\.educationLevelCode"]').selectOption('2');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="customerVO\\.citizenshipCode"]').selectOption('1');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="idAddressVO\\.addressLine1"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="idAddressVO\\.addressLine1"]').fill('Jakarta');
  const page9Promise = page1.waitForEvent('popup');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('.clsStdBtnSmallPicklist').first().click();
  const page9 = await page9Promise;
  await page9.goto('https://10.25.136.209:9446/maintenance/dynamic_picklist.view?do=Search');
  await page9.getByRole('row', { name: '10009 SAWAH BESAR (43)' }).getByRole('link').click();
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Click if the above is the same' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceYear"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceYear"]').fill('8');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceMonth"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceMonth"]').fill('8');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="residentialAddressVO\\.mobileNumberAreaCode"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="residentialAddressVO\\.mobileNumberAreaCode"]').fill('0812');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="residentialAddressVO\\.mobileNumber"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="residentialAddressVO\\.mobileNumber"]').fill('123456789');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="residentialAddressVO\\.email"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="residentialAddressVO\\.email"]').fill('test@gmail.com');
  const page10Promise = page1.waitForEvent('popup');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: 'Employer Name/ Own Company' }).getByRole('button').click();
  const page10 = await page10Promise;
  await page10.getByRole('button', { name: 'Go' }).click();
  await page10.getByRole('link', { name: 'ADIRA' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="customerEmploymentVO\\.employmentTypeCode"]').selectOption('01');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="customerEmploymentVO\\.employmentStatusCode"]').selectOption('01');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerEmploymentVO\\.isOwnCompany"]').nth(1).check();
  const page11Promise = page1.waitForEvent('popup');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: 'Date Established Select Clear' }).locator('input[name="customerEmploymentVO\\.dot"]').click();
  const page11 = await page11Promise;
  await page11.getByRole('textbox').click();
  await page11.getByRole('textbox').fill('id');
  await page11.getByRole('button', { name: 'Go' }).click();
  await page11.getByRole('link', { name: 'ID' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerEmploymentIncomeVO\\.monthlyMainIncome"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerEmploymentIncomeVO\\.monthlyMainIncome"]').fill('14000000');
  const page12Promise = page1.waitForEvent('popup');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: 'Occupation ... Nature Of' }).getByRole('button').first().click();
  const page12 = await page12Promise;
  await page12.getByRole('button', { name: 'Go' }).click();
  await page12.getByRole('link', { name: '0001' }).click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="officeAddressVO\\.addressLine1"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="officeAddressVO\\.addressLine1"]').fill('Jakarta');
  const page13Promise = page1.waitForEvent('popup');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: 'Postcode ...' }).getByRole('button').click();
  const page13 = await page13Promise;
  await page13.getByRole('button', { name: 'Go' }).click();
  await page13.getByRole('row', { name: '10009 SAWAH BESAR (43)' }).getByRole('link').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceYear"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceYear"]').fill('8');
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceMonth"]').click();
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceMonth"]').fill('8');
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page1.locator('frame[name="main"]').contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Create' }).click();
});