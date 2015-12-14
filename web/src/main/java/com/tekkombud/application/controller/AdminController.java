package com.tekkombud.application.controller;

import com.tekkombud.application.entity.Messenger;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class AdminController {

    @RequestMapping(value = "messages", method = RequestMethod.GET)
    public String saveMessage() {
        System.out.println("hello");
        String hello = "hello";
       return hello;
    }
}
