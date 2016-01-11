package com.tekkombud.application.controller;

import com.tekkombud.application.controller.dto.OfferDTO;
import com.tekkombud.application.entity.CV;
import com.tekkombud.application.entity.Messenger;
import com.tekkombud.application.entity.Offer;
import com.tekkombud.application.entity.util.OfferStatus;
import com.tekkombud.application.service.messenger.MessengerService;
import com.tekkombud.application.service.offer.OfferService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(value = "/")
public class WelcomeController {

    @Autowired
    OfferService offerService;

    @Autowired
    MessengerService messengerService;

    private static Logger logger = Logger.getLogger(WelcomeController.class);

    @RequestMapping(value = "message", method = RequestMethod.POST)
    public void saveMessage(@RequestBody Messenger messenger) {
        messengerService.saveMessage(messenger);
    }

    @RequestMapping(value = "add-cv-to-offer/{id}", method = RequestMethod.PUT)
    public void updateOffer(@PathVariable("id") Integer id, @RequestBody CV cv) {

        Offer offer = offerService.getById(Long.valueOf(id));
        Set<CV> cvList = offer.getCvList();
        cvList.add(cv);
        offer.setOfferStatus(OfferStatus.RESPONDED);
        offerService.update(offer);
    }

    @RequestMapping(value = "offers-welcome", method = RequestMethod.GET)
    public List<OfferDTO> getAllOffer() {
        List<Offer> offerList = offerService.getAllOffer();
        List<Offer> activeAndRespondedOfferList = new ArrayList<Offer>();
        for (Offer offer : offerList) {
            if (!offer.getOfferStatus().equals(OfferStatus.CLOSED)) {
                activeAndRespondedOfferList.add(offer);
            }
        }
        List<OfferDTO> offerDTOList = new ArrayList<OfferDTO>();
        for (Offer offer : activeAndRespondedOfferList) {
            offerDTOList.add(
                    new OfferDTO(
                            offer.getId(),
                            offer.getName(),
                            offer.getDescription(),
                            offer.getSkills(),
                            offer.getSalary())
            );
        }
        return offerDTOList;
    }

}
