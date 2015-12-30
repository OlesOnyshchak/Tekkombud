package com.tekkombud.application.controller;

import com.tekkombud.application.entity.Messenger;
import com.tekkombud.application.entity.Offer;
import com.tekkombud.application.entity.util.OfferStatus;
import com.tekkombud.application.service.messenger.MessengerService;
import com.tekkombud.application.service.offer.OfferService;
import org.springframework.beans.factory.ListableBeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
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

    @RequestMapping(value = "delete-offer/{id}", method = RequestMethod.DELETE)
    public void deleteOfferById(@PathVariable("id") Integer id) {
        offerService.delete(Long.valueOf(id));
    }

    @RequestMapping(value = "add-offer", method = RequestMethod.POST)
    public void addOffer(@RequestBody Offer offer) {
        offer.setOfferStatus(OfferStatus.ACTIVE);
        offerService.save(offer);
    }

    @RequestMapping(value = "update-offer", method = RequestMethod.PUT)
    public void updateOffer(@RequestBody Offer offer) {
        offerService.update(offer);
    }

    @RequestMapping(value = "offers", method = RequestMethod.GET)
    public List<Offer> getAllOffer() {
        return offerService.getAllOffer();
    }
}
