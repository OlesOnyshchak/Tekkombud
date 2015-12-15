package com.tekkombud.application.service.offer.impl;

import com.tekkombud.application.dao.CRUDRepository;
import com.tekkombud.application.entity.Messenger;
import com.tekkombud.application.entity.Offer;
import com.tekkombud.application.service.messenger.MessengerService;
import com.tekkombud.application.service.offer.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OfferServiceImpl implements OfferService {
    @Autowired
    CRUDRepository<Offer> crudRepository;

    @Override
    @Transactional
    public void save(Offer offer) {
        crudRepository.save(offer);
    }
}
