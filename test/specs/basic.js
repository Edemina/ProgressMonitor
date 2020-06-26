const {expect} = require('chai');

// describe('REGISTRATION PAGE', function () {
//     before(()=>{
//         browser.url('https://stage.pasv.us/user/register')
//         browser.maximizeWindow()
//     })
//
//     it('should verify that title is correct', function () {
//         const actualTitleText = $('//h1').getText();
//         const expectedTitleText = 'User Register';
//         expect(actualTitleText).eq(expectedTitleText);
//     });
//
//     it('should check that submit button is not clickable', function () {
//         const submitButton = $("//button[@type='submit']")
//         const result = submitButton.isClickable()
//         expect(result).false;
//     });
//
//     it('should fill out First Name Field', function () {
//         const firstNameField = $("//input[@name='firstName']");
//         firstNameField.setValue('Eltest');
//     });
//
//     it('should check first name validation', function () {
//         const firstNameField = $("//input[@name='firstName']");
//         browser.keys('Tab');
//         browser.pause(1000);
//         const result = firstNameField.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//
//     it('should fill out Last Name Field', function () {
//         const lastNameField = $("//input[@name='lastName']");
//         lastNameField.setValue('Demtest');
//     });
//
//     it('should check validation of the Last Name Field', function () {
//         const lastNameField = $("//input[@name='lastName']");
//         browser.keys('Tab');
//         browser.pause(1000);
//         const result = lastNameField.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//
//     it('should fill out Phone Field', function () {
//         const phoneField = $("//input[@name='phone']");
//         phoneField.setValue('380653332244');
//     });
//
//     it('should check validation of the phone Field', function () {
//         const phoneField = $("//input[@name='phone']");
//         browser.keys('Tab');
//         browser.pause(1000);
//         const result = phoneField.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//
//     it('should fill out Email Field', function () {
//         const emailField = $("//input[@name='email']");
//         emailField.setValue('test@test.com');
//     });
//
//     it('should check validation of the email Field', function () {
//         const emailField = $("//input[@name='email']");
//         browser.keys('Tab');
//         browser.pause(1000);
//         const result = emailField.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//
//     it('should fill out Password Field', function () {
//         const passwordField = $("//input[@name='password']");
//         passwordField.setValue('testtest');
//     });
//
//     it('should check validation of the email Field', function () {
//         const passwordField = $("//input[@name='password']");
//         browser.keys('Tab');
//         browser.pause(1000);
//         const result = passwordField.getAttribute('class');
//         expect(result).contains('is-valid')
//     });
//
//     it('should check that submit button is clickable', function () {
//         const submitButton = $("//button[@type='submit']")
//         const result = submitButton.isClickable()
//         expect(result).true;
//     });
//
// });

// describe('EDIT PROFILE', function () {
//     before(()=>{
//         browser.maximizeWindow();
//         browser.url('https://stage.pasv.us/user/login');
//         $('//input[@name="email"]').setValue('test@test.com');
//         $('//input[@name="password"]').setValue('testtest');
//         $('//button[@type="submit"]').click();
//         $('//div[@id="user-section"]//a[@class="dropdown-toggle nav-link"]').click();
//         $("//button[text()='Settings']").click();
//         browser.pause(3000);
//     })
//
//     it('should ', function () {
//         browser.pause(3000);
//         $("//select[@name='tShirtSize']").selectByVisibleText('Women - S')
//
//
//     });
//
//
// });