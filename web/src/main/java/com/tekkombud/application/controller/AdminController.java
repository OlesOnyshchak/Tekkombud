package com.tekkombud.application.controller;

import com.tekkombud.application.entity.Messenger;
import com.tekkombud.application.service.messenger.MessengerService;
import org.springframework.beans.factory.ListableBeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/")
public class AdminController {

    @Autowired
    MessengerService messengerService;

    @RequestMapping(value = "messages", method = RequestMethod.GET)
    public List<Messenger> saveMessage() {
        return messengerService.getAllMessage();
    }
}
