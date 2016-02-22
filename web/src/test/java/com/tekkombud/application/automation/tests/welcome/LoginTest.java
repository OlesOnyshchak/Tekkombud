package com.tekkombud.application.automation.tests.welcome;

import com.tekkombud.application.automation.pageobject.LoginPage;
import com.tekkombud.application.automation.resources.Data;
import com.tekkombud.application.automation.resources.Locator;
import com.tekkombud.application.automation.resources.Url;
import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import static junit.framework.TestCase.assertEquals;

public class LoginTest {
    protected static WebDriver driver;

    @Ignore
    @Before
    public  void openLoginPage() throws Exception {
        driver = Data.getWebDriver();
        driver.get(Url.LOGIN_URL);
    }

    @Ignore
    @Test
    public void testLoginWithWrongPassword() throws Exception {

        LoginPage login = new LoginPage(driver);

       /* login.loginAs(Data.USERNAME_LOGIN, Data.WRONG_PASSWORD_LOGIN);
        System.out.println(driver.findElement(By.xpath(Locator.HEADER_FORM_MESSAGE)).getText());
        assertEquals("Wrong username or password, please sign in again.",
                driver.findElement(By.xpath(Locator.HEADER_FORM_MESSAGE)).getText());*/
    }
    @Ignore
    @Test
    public void testLoginWithCorrectPassword() throws Exception {
        LoginPage login = new LoginPage(driver);
        login.loginAs(Data.USERNAME_LOGIN, Data.USERNAME_PASSWORD);
    }
    @Ignore
    @AfterClass
    public static void closeBrowser() throws Exception {
        driver.quit();
    }
}
