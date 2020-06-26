function login() {
    //browser.maximizeWindow();
    browser.url('https://stage.pasv.us/user/login');
    $('//input[@name="email"]').setValue('lutka@yahoo.com');
    $('//input[@name="password"]').setValue('lutka');
    $('//button[@type="submit"]').click();
    // $('//div[@id="user-section"]//a[@class="dropdown-toggle nav-link"]').click();
    // $("//button[text()='Settings']").click();
    // browser.pause(3000);
}

module.exports = login;