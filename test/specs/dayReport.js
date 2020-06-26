const {expect} = require('chai');
const login = require('../function');

describe('CREATE DAY REPORT', function () {
    before(() => {
        login();
    })

    it('should click diary in main menu', function () {
        $("//div[@id='site-menu']//a[@qa='diary-link']").click();
    });

    it('should have correct title', function () {
        const actualTitle = $("//h1").getText();
        expect(actualTitle).eq('Daily reports');
    });

    it('should check that button Create day report is clickable ', function () {
        const DayReportBtn = $("//a[@qa='create-day-report-button']");
        browser.pause(3000);
        const actualResult = DayReportBtn.isClickable();
        expect(actualResult).true;

    });

    it('should click Create day report btn ', function () {
        const DayReportBtn = $("//a[@qa='create-day-report-button']");
        DayReportBtn.click();
    });

    it('should click I UNDERSTOOD EVERYTHING', function () {

        const checkBox1Label = $("//label[@for='input-1']");
        checkBox1Label.click();
        const checkBox1 = $("//input[@id='input-1']");
        expect(checkBox1.isSelected()).true;
        //browser.pause(2000);
    });

    it('should click Helped classmates', function () {
        const checkBox2 = $("//input[@id='input-2']");
        checkBox2.click();
        expect(checkBox2.isSelected()).true;
        browser.pause(2000);
    });


});