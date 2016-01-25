package com.tekkombud.application.automation.pageobject;

import com.tekkombud.application.automation.resources.Locator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static junit.framework.TestCase.assertEquals;


public class LoginPage extends Page {
    private WebDriverWait wait;

    public LoginPage(WebDriver driver) {
        super(driver);
        wait = new WebDriverWait(driver, WEB_DRIVER_WAIT_SEC);
    }

    public void loginAs(String user, String pass)
            throws InterruptedException {
        Thread.sleep(10000);
        assertEquals("Sign in", webDriver
                .findElement(By.xpath(Locator.SIGN_IN_BUTTON)).getText());
        webDriver.findElement(By.xpath(Locator.USERNAME_LOCATOR_LOGIN)).clear();
        webDriver.findElement(By.xpath(Locator.USERNAME_LOCATOR_LOGIN)).sendKeys(user);
        webDriver.findElement(By.xpath(Locator.PASSWORD_LOCATOR_LOGIN)).clear();
        webDriver.findElement(By.xpath(Locator.PASSWORD_LOCATOR_LOGIN)).sendKeys(pass);
        webDriver.findElement(By.xpath(Locator.SIGN_IN_BUTTON))
                .click();
        Thread.sleep(10000);

    }
}
