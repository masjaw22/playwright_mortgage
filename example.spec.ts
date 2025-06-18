import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://10.25.136.209:9446/login.view');
  await page.waitForLoadState()
  await page.locator('input[name="userId"]').click();
  await page.locator('input[name="userId"]').fill('hanifpw');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('password');
  await page.locator("input[value='Login']").click();
  
  const page1Promise = page.waitForEvent('popup')
  const page1 = await page1Promise

  const menuFrame = page1.locator('frame[name="menu"]')
  const mainFrame = page1.locator('frame[name="main"]')

  await menuFrame.contentFrame().getByText('New Ticket').click()

  // customer inquiry
  await mainFrame.contentFrame().locator('select[name="maintenanceSBUCode"]').selectOption('01')
  await mainFrame.contentFrame().locator("(//input[@name='customerVO.ocrScanData'])[2]").check()
  await mainFrame.contentFrame().locator("input[name='ocrPassReasonBtn']").click()
  const page2Promise = page1.waitForEvent('popup')
  const page2 = await page2Promise
  await page2.locator("input[name='Go']").click()
  await page2.getByText('HL5000').click()
  await page1.waitForLoadState()
  await mainFrame.contentFrame().locator('select[name="firstIdentificationTypeCode"]').selectOption('10')
  await mainFrame.contentFrame().locator('input[name="firstIdentificationNumber"]').click()
  await mainFrame.contentFrame().locator('input[name="firstIdentificationNumber"]').fill('3216060812920003')
  await mainFrame.contentFrame().locator("input[value='Search']").click()
  await page1.waitForLoadState()
  await page1.waitForTimeout(2000)
  await mainFrame.contentFrame().locator('input[value="Proceed"]').click()

  await page1.waitForLoadState()

  // Create New Ticket (Step 1: Add Customer Information)
  await mainFrame.contentFrame().locator('select[name="customerVO\\.isJointIncome"]').selectOption('Y')
  await mainFrame.contentFrame().locator('input[name="customerVO\\.name"]').click()
  await mainFrame.contentFrame().locator('input[name="customerVO\\.name"]').fill('Foo')
  await mainFrame.contentFrame().locator('input[name="customerVO\\.nameDukcapil"]').click()
  await mainFrame.contentFrame().locator('select[name="customerIndividualVO\\.maritalStatusCode"]').selectOption('M')
  await mainFrame.contentFrame().locator('input[name="customerVO\\.registeredDateDisplay"]').click()
  await mainFrame.contentFrame().locator('input[name="customerVO\\.registeredDateDisplay"]').fill('10/11/1991')
  await mainFrame.contentFrame().locator('select[name="customerIndividualVO\\.genderCode"]').selectOption('M')
  await mainFrame.contentFrame().locator('input[name="customerVO\\.placeOfBirth"]').click()
  await mainFrame.contentFrame().locator('input[name="customerVO\\.placeOfBirth"]').fill('jakarta')
  await mainFrame.contentFrame().locator('input[name="customerVO\\.npwpNo"]').click()
  await mainFrame.contentFrame().locator('input[name="customerVO\\.npwpNo"]').fill('1234567890')
  await mainFrame.contentFrame().locator('input[name="customerIndividualVO\\.motherMaidenName"]').click()
  await mainFrame.contentFrame().locator('input[name="customerIndividualVO\\.motherMaidenName"]').fill('sibu')
  await mainFrame.contentFrame().locator('select[name="customerIndividualVO\\.educationLevelCode"]').selectOption('2')
  await mainFrame.contentFrame().locator('select[name="customerVO\\.citizenshipCode"]').selectOption('1')
  await mainFrame.contentFrame().locator('input[name="idAddressVO\\.addressLine1"]').click()
  await mainFrame.contentFrame().locator('input[name="idAddressVO\\.addressLine1"]').fill('jakarta')
  await mainFrame.contentFrame().locator('.clsStdBtnSmallPicklist').first().click()

  const page3Promise = page1.waitForEvent('popup')
  const page3 = await page3Promise
  await page3.getByRole('button', { name: 'Go' }).click()
  await page3.getByRole('row', { name: '10009 SAWAH BESAR (43)' }).getByRole('link').click()

  page1.once('dialog', dialog => {
    dialog.accept().catch(() => {})
  })

  await mainFrame.contentFrame().locator('input[value="Click if the above is the same"]').click()
  await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceYear"]').click()
  await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceYear"]').fill('8')
  await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceMonth"]').click()
  await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceMonth"]').fill('8')
  await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.mobileNumberAreaCode"]').click()
  await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.mobileNumberAreaCode"]').fill('0812')
  await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.mobileNumber"]').click()
  await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.mobileNumber"]').fill('1234567')
  await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.email"]').click()
  await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.email"]').fill('test@gmail.com')
  await mainFrame.contentFrame().getByRole('row', { name: 'Employer Name/ Own Company' }).getByRole('button').click()

  const page4Promise = page1.waitForEvent('popup')
  const page4 = await page4Promise
  await page4.getByRole('button', { name: 'Go' }).click()
  await page4.getByRole('link', { name: 'ADIRA' }).click()

  await mainFrame.contentFrame().locator('select[name="customerEmploymentVO\\.employmentTypeCode"]').selectOption('02')
  await mainFrame.contentFrame().locator('select[name="customerEmploymentVO\\.employmentTypeCode"]').selectOption('01')
  await mainFrame.contentFrame().locator('select[name="customerEmploymentVO\\.employmentStatusCode"]').selectOption('01')
  await mainFrame.contentFrame().locator('input[name="customerEmploymentVO\\.isOwnCompany"]').nth(1).check()
  await mainFrame.contentFrame().getByRole('row', { name: 'Date of Establishment? Select' }).locator('input[name="customerEmploymentVO\\.dot"]').click()

  const page5Promise = page1.waitForEvent('popup')
  const page5 = await page5Promise
  await page5.getByRole('textbox').click()
  await page5.getByRole('textbox').fill('id')
  await page5.getByRole('button', { name: 'Go' }).click()
  await page5.getByRole('link', { name: 'ID' }).click()

  await mainFrame.contentFrame().locator('input[name="customerEmploymentIncomeVO\\.monthlyMainIncome"]').click()
  await mainFrame.contentFrame().locator('input[name="customerEmploymentIncomeVO\\.monthlyMainIncome"]').fill('8000000')
  await mainFrame.contentFrame().getByRole('row', { name: 'Occupation ... Nature Of' }).getByRole('button').first().click()

  const page6Promise = page1.waitForEvent('popup')
  const page6 = await page6Promise
  await page6.getByRole('button', { name: 'Go' }).click()
  await page6.getByRole('link', { name: '0001' }).click()

  await mainFrame.contentFrame().locator('input[name="officeAddressVO\\.addressLine1"]').click()
  await mainFrame.contentFrame().locator('input[name="officeAddressVO\\.addressLine1"]').fill('jakarta')
  await mainFrame.contentFrame().locator("//label[@id='officeAddressVO.postalCodeDisplay']/following-sibling::input[1]").click()
  await page1.waitForLoadState('load')

  const page7Promise = page1.waitForEvent('popup')
  const page7 = await page7Promise
  await page7.getByRole('button', { name: 'Go' }).click()
  await page7.getByRole('row', { name: '10009 SAWAH BESAR (43)' }).getByRole('link').click()

  await page1.waitForLoadState('load')
  await mainFrame.contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceYear"]').click()
  await mainFrame.contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceYear"]').fill('8')
  await mainFrame.contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceMonth"]').click()
  await mainFrame.contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceMonth"]').fill('8')

  page1.once('dialog', dialog => {
    dialog.accept().catch(() => {})
  })

  await page1.waitForLoadState()
  await mainFrame.contentFrame().getByRole('button', { name: 'Save & Next' }).click()

  await page1.waitForLoadState()

  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[value=\'Edit\']').click()


  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="referredByTypeCode"]').selectOption('10');
  const page8Promise = page1.waitForEvent('popup');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: 'Sales Id ... Sales Name' }).getByRole('button').click();
  const page8 = await page8Promise;
  await page8.getByRole('button', { name: 'Go' }).click();
  await page8.getByRole('cell', { name: 'Sales ID' }).getByRole('radio').check();
  await page8.getByRole('textbox').click();
  await page8.getByRole('textbox').fill('hanifpw');
  await page8.getByRole('button', { name: 'Go' }).click();
  await page8.getByRole('link', { name: 'HANIFPW' }).click();
  const page9Promise = page1.waitForEvent('popup');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: 'Parking Branch ... Is Special' }).getByRole('button').click();
  const page9 = await page9Promise;
  await page9.getByRole('button', { name: 'Go' }).click();
  await page9.getByRole('link', { name: '00030' }).click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="applicationPurposeCode"]').selectOption('02');
  
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: '...' }).nth(2).click();
  const page10Promise = page1.waitForEvent('popup');
  const page10 = await page10Promise;
  await page10.getByRole('button', { name: 'Go' }).click();
  await page10.getByRole('textbox').click();
  await page10.getByRole('textbox').fill('CAC006082018');
  await page10.getByRole('button', { name: 'Go' }).click();
  await page1.waitForLoadState()
  await page10.getByRole('link', { name: 'CAC006082018' }).click();

  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Check Policy Program Quota' }).click();
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page1.waitForLoadState()
  await page1.waitForTimeout(2000)
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Update' }).click();


  await page1.waitForLoadState()
  await page1.waitForTimeout(2000)
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator("(//td[@class='clsTabList']/following-sibling::td)[3]").click()
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="productCode"]').selectOption('XMAN');

  await page1.waitForLoadState()
  await page1.waitForTimeout(2000)
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Add' }).click();

  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: '...' }).first().click();
  const page11Promise = page1.waitForEvent('popup');
  const page11 = await page11Promise;
  await page11.waitForLoadState()
  await page11.getByRole('row', { name: 'K20317FIXMNR (KPR Xtra' }).getByRole('radio').check();
  await page11.getByRole('button', { name: 'OK' }).click();
  await page11.waitForLoadState()
  await page1.waitForTimeout(2000)
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="amount07"]').click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="amount07"]').fill('700000000.00');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('cell', { name: '700000000.00' }).click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="downPaymentAmount"]').click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="downPaymentAmount"]').fill('100000000');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="tenure04"]').click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="tenure04"]').fill('120');
  await page1.waitForLoadState()
  await page1.waitForTimeout(2000)
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Calculate' }).click();
  await page1.waitForLoadState()
  await page1.waitForTimeout(2000)
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Create' }).click();

  await page1.waitForLoadState()
  await page1.waitForTimeout(2000)
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('cell', { name: 'Collateral' }).click();
  await page1.waitForLoadState()
  await page1.waitForTimeout(2000)
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator("//input[@name='Add']").click();
  await page1.waitForLoadState()
  await page1.waitForTimeout(2000)
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="primarySecondaryCode"]').selectOption('01');
  
  const page12Promise = page1.waitForEvent('popup');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: 'Property Type ... Property' }).getByRole('button').first().click();
  const page12 = await page12Promise;
  await page12.getByRole('button', { name: 'Go' }).click();
  await page12.getByRole('link', { name: '01' }).click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="purcSourceCode"]').selectOption('02');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="buildUpArea"]').click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="buildUpArea"]').fill('80');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="buildAreaUnitCode"]').selectOption('02');
  const page13Promise = page1.waitForEvent('popup');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: 'Property Type 01 - Rumah ...' }).getByRole('button').nth(1).click();
  const page13 = await page13Promise;
  await page13.getByRole('button', { name: 'Go' }).click();
  await page13.getByRole('link', { name: '0101' }).click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="landArea"]').click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="landArea"]').fill('100');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="landAreaUnitCode"]').selectOption('02');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="propertyStatusCode"]').selectOption('2');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="purchasedPrice"]').click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="purchasedPrice"]').fill('700000000.00');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="addressLine1"]').click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="addressLine1"]').fill('jakarta');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="addressLine2"]').click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="addressLine2"]').fill('jakarta');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="addressLine3"]').click();
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="addressLine3"]').fill('jakarta');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="ownerRelationshipCode"]').selectOption('1');
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Create' }).click();


  // Sup Doc
  await page1.waitForLoadState()
  await page1.waitForTimeout(2000)
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('cell', { name: 'Sup Doc' }).click();

  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: '6 DP1 - KTP NASABAH View' }).locator('input[name="btnAttach"]').click();
  const page14Promise = page1.waitForEvent('popup');
  const page14 = await page14Promise;
  await page14.getByRole('button', { name: 'Browse' }).click();
  await page14.getByRole('button', { name: 'Browse' }).setInputFiles('assets/file-upload.pdf');
  await page14.getByRole('button', { name: 'Upload' }).click();

  const page15Promise = page1.waitForEvent('popup');
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: '37 DBU8 - DOKUMEN APLIKASI -' }).locator('input[name="btnAttach"]').click();
  const page15 = await page15Promise;
  await page15.getByRole('button', { name: 'Browse' }).click();
  await page15.getByRole('button', { name: 'Browse' }).setInputFiles('assets/file-upload.pdf');
  await page15.getByRole('button', { name: 'Upload' }).click();
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Update' }).click();
});