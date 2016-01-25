package com.tekkombud.application.automation.resources;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Data {
    private static WebDriver webDriver;
    public static final String USERNAME_LOGIN = "oless";
    public static final String USERNAME_PASSWORD = "oless";
    public static final String WRONG_PASSWORD_LOGIN="oles";

    public static WebDriver getWebDriver()
    {
        if (webDriver == null)
        {
            instantiateWebDriver();
        }
        return webDriver;
    }

    private static void instantiateWebDriver()
    {
        System.setProperty("webdriver.chrome.driver", "src\\test\\java\\com\\tekkombud\\application\\automation\\resources\\chromedriver.exe");
        webDriver = new ChromeDriver();
    }
}

