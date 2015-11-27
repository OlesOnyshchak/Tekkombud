package com.tekkombud.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HelloWorldController {

    @Autowired
    private ApplicationContext applicationContext;

    @RequestMapping(value = {"/hello"},method = RequestMethod.GET)
    public String hello() {

        String[] beanNames = applicationContext.getBeanDefinitionNames();
        System.out.println("**************************");
        for (String beanName : beanNames) {

            System.out.println(beanName + " : " + applicationContext.getBean(beanName).getClass().toString());
        }
        System.out.println("**************************");

        return "helloworld";
    }
}