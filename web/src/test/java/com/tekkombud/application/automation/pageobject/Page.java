package com.tekkombud.application.automation.pageobject;

import org.openqa.selenium.WebDriver;

/**
 * Created by oonysh on 25.01.2016.
 */
public abstract class Page {
    protected WebDriver webDriver;
    public static final int WEB_DRIVER_WAIT_SEC = 15;

    Page(WebDriver webDriver) {
        this.webDriver = webDriver;
    }
}
