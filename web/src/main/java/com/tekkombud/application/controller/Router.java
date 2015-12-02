package com.tekkombud.application.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class Router {
    @RequestMapping(value = {"/"},method = RequestMethod.GET)
    public String showWelcomePage() {
        return "/app/start.html";
    }

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String admin() {
        return "/app/admin/index.html";
    }

    @RequestMapping(value = "/employee", method = RequestMethod.GET)
    public String provider() {
        return "/app/employee/index.html";
    }

}
