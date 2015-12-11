package com.tekkombud.application.controller;

import com.tekkombud.application.controller.dto.NewUser;
import com.tekkombud.application.entity.Messenger;
import com.tekkombud.application.service.messenger.MessengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class WelcomeController {

    @Autowired
    MessengerService messengerService;

    @RequestMapping(value = "registration", method = RequestMethod.POST)
    public void getNewUser(@RequestBody NewUser user) {
        System.out.println(user.getName());
        System.out.println(user.getPassword());

    }
    @RequestMapping(value = "message", method = RequestMethod.POST)
    public void saveMessage(@RequestBody Messenger messenger) {
        System.out.println(messenger.getName());
        System.out.println(messenger.getText());
        messengerService.saveMessage(messenger);

    }
}
