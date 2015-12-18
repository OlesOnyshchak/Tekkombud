package com.tekkombud.application.controller;

import com.tekkombud.application.entity.Messenger;
import com.tekkombud.application.entity.Offer;
import com.tekkombud.application.entity.util.OfferStatus;
import com.tekkombud.application.service.messenger.MessengerService;
import com.tekkombud.application.service.offer.OfferService;
import org.springframework.beans.factory.ListableBeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/")
public class AdminController {

    @Autowired
    MessengerService messengerService;

    @Autowired
    OfferService offerService;

    @RequestMapping(value = "messages", method = RequestMethod.GET)
    public List<Messenger> getAllMessage() {
        return messengerService.getAllMessage();
    }

    @RequestMapping(value = "delete-message/{id}", method = RequestMethod.DELETE)
    public void deletePersonById(@PathVariable("id") Integer id) {
        messengerService.delete(id);
    }

    @RequestMapping(value = "add-offer", method = RequestMethod.POST)
    public void addOffer(@RequestBody Offer offer) {
        System.out.println(offer.getName());
        offer.setOfferStatus(OfferStatus.ACTIVE);
        offerService.save(offer);
    }

    @RequestMapping(value = "offers", method = RequestMethod.GET)
    public List<Offer> getAllOffer() {
        return offerService.getAllOffer();
    }
}
