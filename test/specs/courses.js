const {expect} = require('chai');
const login = require('../function');
describe('COURSES PAGE', function () {
    before(() => {
        login();
    })
//$('')

    it('should navigate to courses page', function () {
        const courseLink = $("//div[@id='site-menu']//a[@qa='courses-link']");
        courseLink.click();
        const coursesHeader = $("//h1");
        expect(coursesHeader.getText()).eq('Courses');
    });
    it('should create new course', function () {
        const createCourse = $('.btn.btn-primary');
        createCourse.click();
        // const header = $('')
    });
    it('should add course name', function () {
        const courseName = $('input[name="name"]');
        courseName.setValue("Test course ED");
        expect(courseName.getValue()).eq("Test course ED")

    });
    it('should add', function () {
        const courseDescr = $('input[name="description"]');
        courseDescr.setValue("To test new course creation");
        expect(courseDescr.getValue()).eq("To test new course creation")
    });
    it('should change access type ot ALL', function () {
        const accessType = $('select[name="accessType"]');
        accessType.click();
        // browser.keys('ArrowDown');
        // browser.keys('Enter');
        accessType.selectByVisibleText("All");
        browser.keys('Tab');
        browser.pause(3000);
        expect(accessType.getValue()).eq("all");


        // $('//select[@name=\'accessType\']').click();
        // browser.keys('ArrowDown');
        // browser.keys('Enter')
        // browser.keys('Tab')
        // browser.pause(3000)
        // const all = $('//option[@value=\'all\']').getText();
        // expect(all).eq('All')

    });

    it('should click create button', function () {
        const createBtn = $('button[type="submit"]');
        createBtn.click();
    });


});