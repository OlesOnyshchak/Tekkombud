package com.tekkombud.application.controller;

import com.tekkombud.application.entity.Messenger;
import com.tekkombud.application.service.messenger.MessengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/")
public class WelcomeController {

    @Autowired
    MessengerService messengerService;

    @RequestMapping(value = "message", method = RequestMethod.POST)
    public void saveMessage(@RequestBody Messenger messenger) {
        messengerService.saveMessage(messenger);
    }
}
