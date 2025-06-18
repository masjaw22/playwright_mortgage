export const new_ticket_etb = async ( page, record ) => {
    const page1Promise = page.waitForEvent('popup')
    const page1 = await page1Promise

    const menuFrame = page1.locator('frame[name="menu"]')
    const mainFrame = page1.locator('frame[name="main"]')

    await menuFrame.contentFrame().getByRole('link', { name: 'New Ticket' }).click();
    await mainFrame.contentFrame().locator('select[name="maintenanceSBUCode"]').selectOption({label: record.Organisation});
    await mainFrame.contentFrame().getByRole('radio').nth(1).check();
    await mainFrame.contentFrame().getByRole('button', { name: '...' }).click();

    const page2Promise = page1.waitForEvent('popup');
    const page2 = await page2Promise;
    await page2.getByRole('button', { name: 'Go' }).click();
    await page2.getByRole('link', { name: 'HL5000' }).click();

    await mainFrame.contentFrame().locator('select[name="firstIdentificationTypeCode"]').selectOption(record.IDType);
    await mainFrame.contentFrame().locator('input[name="firstIdentificationNumber"]').type(record.NIK);
    await mainFrame.contentFrame().getByRole('cell', { name: 'Search Proceed' }).click();
    await mainFrame.contentFrame().getByRole('button', { name: 'Search' }).click();
    await mainFrame.contentFrame().getByRole('link', { name: record.CustomerName }).click();
    await mainFrame.contentFrame().locator('input[name="customerVO\\.isCBP"]').nth(1).check();
    await mainFrame.contentFrame().locator('select[name="customerVO\\.isJointIncome"]').selectOption('N');
    await mainFrame.contentFrame().locator('select[name="customerIndividualVO\\.maritalStatusCode"]').selectOption("S");
    await mainFrame.contentFrame().locator('select[name="customerIndividualVO\\.genderCode"]').selectOption('M');
    await mainFrame.contentFrame().locator('input[name="customerVO\\.placeOfBirth"]').type('Tangerang');
    await mainFrame.contentFrame().locator('input[name="customerVO\\.npwpNo"]').type(record.NIK);
    await mainFrame.contentFrame().locator('input[name="customerIndividualVO\\.motherMaidenName"]').type('Sibu');
    await mainFrame.contentFrame().locator('select[name="customerIndividualVO\\.educationLevelCode"]').selectOption('2');
    await mainFrame.contentFrame().locator('select[name="customerVO\\.citizenshipCode"]').selectOption('1');
    await mainFrame.contentFrame().locator('input[name="idAddressVO\\.addressLine1"]').click();
    await mainFrame.contentFrame().locator('input[name="idAddressVO\\.addressLine1"]').type('JL. H. BILIN NO.58 ');
    await mainFrame.contentFrame().locator('.clsStdBtnSmallPicklist').first().click();

    const page3Promise = page1.waitForEvent('popup');
    const page3 = await page3Promise;
    await page3.waitForTimeout(1000)
    await page3.getByRole('textbox').click()
    await page3.getByRole('textbox').type('15153')
    await page3.getByRole('button', { name: 'Go' }).click()
    await page3.getByRole('row', { name: '15153 PANINGGILAN UTARA (DK50440)' }).getByRole('link').click()

    page1.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.accept().catch(() => {});
    });

    await mainFrame.contentFrame().getByRole('button', { name: 'Click if the above is the same' }).click();
    await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.mobileNumberAreaCode"]').type('0812');
    await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.mobileNumber"]').type('123456789');
    await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceYear"]').fill('8');
    await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.durationInResidenceMonth"]').fill('8');
    await mainFrame.contentFrame().locator('input[name="residentialAddressVO\\.email"]').type('test@gmail.com');
    await mainFrame.contentFrame().getByRole('row', { name: 'Employer Name/ Own Company' }).getByRole('button').click();

    const page4Promise = page1.waitForEvent('popup');
    const page4 = await page4Promise;
    await page4.getByRole('button', { name: 'Go' }).click();
    await page4.getByRole('link', { name: 'ADIRA' }).click();

    await mainFrame.contentFrame().locator('select[name="customerEmploymentVO\\.employmentTypeCode"]').selectOption('01');
    await mainFrame.contentFrame().locator('select[name="customerEmploymentVO\\.employmentStatusCode"]').selectOption('01');
    await mainFrame.contentFrame().locator('input[name="customerEmploymentVO\\.isOwnCompany"]').nth(1).check();
    await mainFrame.contentFrame().getByRole('row', { name: 'Date of Establishment? Select' }).locator('input[name="customerEmploymentVO\\.dot"]').click();
    
    const page5Promise = page1.waitForEvent('popup')
    const page5 = await page5Promise
    await page5.waitForTimeout(1000)
    await page5.getByRole('textbox').click()
    await page5.getByRole('textbox').type('id')
    await page5.getByRole('button', { name: 'Go' }).click()
    await page5.getByRole('link', { name: 'ID' }).click()

    await mainFrame.contentFrame().locator('input[name="customerEmploymentIncomeVO\\.monthlyMainIncome"]').type('18000000');
    await mainFrame.contentFrame().getByRole('row', { name: 'Occupation ... Nature Of' }).getByRole('button').first().click();

    const page6Promise = page1.waitForEvent('popup');
    const page6 = await page6Promise;
    await page6.getByRole('button', { name: 'Go' }).click();
    await page6.getByRole('link', { name: '0001' }).click();

    await mainFrame.contentFrame().locator('input[name="officeAddressVO\\.addressLine1"]').type('Tangerang');
    await mainFrame.contentFrame().locator("//label[@id='officeAddressVO.postalCodeDisplay']/following-sibling::input[1]").click();
    await page1.waitForLoadState()

    const page7Promise = page1.waitForEvent('popup');
    const page7 = await page7Promise;
    await mainFrame.contentFrame().getByRole('row', { name: 'Postcode ...' }).getByRole('button').click();
    await page7.waitForTimeout(1000)
    await page7.getByRole('textbox').click()
    await page7.getByRole('textbox').type('15580')
    await page7.getByRole('button', { name: 'Go' }).click()
    await page7.getByRole('row', { name: '15580 TANGERANG (242)' }).getByRole('link').click()
    

    await page1.waitForLoadState()

    await mainFrame.contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceYear"]').fill('8');
    await mainFrame.contentFrame().locator('input[name="customerEmploymentVO\\.lengthOfServiceMonth"]').fill('8');

    await page1.waitForLoadState()

    page1.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.accept().catch(() => {});
    });
    await mainFrame.contentFrame().getByRole('button', { name: 'Save & Next' }).click();

    // General Info
    await page1.waitForLoadState()
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[value=\'Edit\']').click()
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="referredByTypeCode"]').selectOption('10');
    const page8Promise = page1.waitForEvent('popup');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: 'Sales Id ... Sales Name' }).getByRole('button').click();
    const page8 = await page8Promise;
    await page8.getByRole('button', { name: 'Go' }).click();
    await page8.getByRole('cell', { name: 'Sales ID' }).getByRole('radio').check();
    await page8.getByRole('textbox').click();
    await page8.getByRole('textbox').type('hanifpw');
    await page8.getByRole('button', { name: 'Go' }).click();
    await page8.getByRole('link', { name: 'HANIFPW' }).click();
    const page9Promise = page1.waitForEvent('popup');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: 'Parking Branch ... Is Special' }).getByRole('button').click();
    const page9 = await page9Promise;
    await page9.getByRole('button', { name: 'Go' }).click();
    await page9.getByRole('link', { name: '00030' }).click();
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="applicationPurposeCode"]').selectOption('02');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="applicationCalculationMethodCode"]').selectOption('01');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: '...' }).nth(2).click();
    const page10Promise = page1.waitForEvent('popup');
    const page10 = await page10Promise;
    await page10.getByRole('button', { name: 'Go' }).click();
    await page10.getByRole('textbox').click();
    await page10.getByRole('textbox').type('CAC006082018');
    await page10.getByRole('button', { name: 'Go' }).click();
    await page1.waitForLoadState()
    await page10.getByRole('link', { name: 'CAC006082018' }).click();
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Check Policy Program Quota' }).click();
    page1.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page1.waitForTimeout(2000)
    // await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="isMBCC"]').first().check();
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="isMBCC"]').nth(1).check();
    await page1.waitForLoadState()
    await page1.waitForTimeout(2000)
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Update' }).click();
  
  
    await page1.waitForLoadState()
    await page1.waitForTimeout(2000)
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator("(//td[@class='clsTabList']/following-sibling::td)[3]").click()
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="productCode"]').selectOption(record.FacilityProduct);
  
    await page1.waitForLoadState()
    await page1.waitForTimeout(2000)
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Add' }).click();
  
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: '...' }).first().click();
    const page11Promise = page1.waitForEvent('popup');
    const page11 = await page11Promise;
    await page11.waitForLoadState()
    await page11.getByRole('row', { name: record.FacilityPackage }).getByRole('radio').check();
    await page11.getByRole('button', { name: 'OK' }).click();
    await page11.waitForLoadState()
    await page1.waitForTimeout(2000)
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="amount07"]').type('500000000');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="downPaymentAmount"]').type('100000000');
    // await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="flexyDecreasePeriod"]').selectOption('FDP1');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="tenure04"]').type('120');
    await page1.waitForLoadState()
    await page1.waitForTimeout(2000)
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Calculate' }).click();
    await page1.waitForLoadState()
    await page1.waitForTimeout(2000)
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Create' }).click();
  
    // Collateral
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
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="buildUpArea"]').type('80');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="buildAreaUnitCode"]').selectOption('02');
    const page13Promise = page1.waitForEvent('popup');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: 'Property Type 01 - Rumah ...' }).getByRole('button').nth(1).click();
    const page13 = await page13Promise;
    await page13.getByRole('button', { name: 'Go' }).click();
    await page13.getByRole('link', { name: '0101' }).click();
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="landArea"]').type('100');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="landAreaUnitCode"]').selectOption('02');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('select[name="propertyStatusCode"]').selectOption('2');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="purchasedPrice"]').type('500000000');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="addressLine1"]').type('jakarta');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="addressLine2"]').type('jakarta');
    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().locator('input[name="addressLine3"]').type('jakarta');
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
    await page1.waitForLoadState()
    await page1.waitForTimeout(2000)

    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: '6 DP1 - KTP NASABAH View' }).locator('input[name="btnAttach"]').click();
    await page1.waitForLoadState()
    const page14Promise = page1.waitForEvent('popup');
    const page14 = await page14Promise;
    await page14.waitForLoadState()
    await page14.locator('//input[@type="file"]').setInputFiles('./tests/assets/file-upload.pdf')
    await page14.getByRole('button', { name: 'Upload' }).click();
    await page1.waitForLoadState()
    await page1.waitForTimeout(2000)

    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('row', { name: '37 DBU8 - DOKUMEN APLIKASI -' }).locator('input[name="btnAttach"]').click();
    await page1.waitForLoadState()
    const page15Promise = page1.waitForEvent('popup');
    const page15 = await page15Promise;
    await page15.waitForLoadState()
    await page15.locator('//input[@type="file"]').setInputFiles('./tests/assets/file-upload.pdf')
    await page15.getByRole('button', { name: 'Upload' }).click();
    await page1.waitForLoadState()
    await page1.waitForTimeout(2000)

    await mainFrame.contentFrame().locator('frame').first().contentFrame().locator('frame').nth(1).contentFrame().getByRole('button', { name: 'Update' }).click();

    page1.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
      
  }