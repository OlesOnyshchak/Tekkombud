package com.tekkombud.application.controller;

import com.tekkombud.application.controller.dto.NewUser;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class WelcomeController {

    @RequestMapping(value = "registration", method = RequestMethod.POST)
    public void getNewUser(@RequestBody NewUser user) {
        System.out.println(user.getName());
        System.out.println(user.getPassword());

    }
}
