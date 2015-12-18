package com.tekkombud.application.service.offer.impl;

import com.tekkombud.application.dao.CRUDRepository;
import com.tekkombud.application.entity.CV;
import com.tekkombud.application.entity.Messenger;
import com.tekkombud.application.entity.Offer;
import com.tekkombud.application.entity.util.OfferStatus;
import com.tekkombud.application.entity.util.Status;
import com.tekkombud.application.service.messenger.MessengerService;
import com.tekkombud.application.service.offer.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Stack;

@Service
public class OfferServiceImpl implements OfferService {
    @Autowired
    CRUDRepository<Offer> crudRepository;

    @Override
    @Transactional
    public void save(Offer offer) {
        crudRepository.save(offer);
    }

    @Override
    public List<Offer> getAllOffer() {
        crudRepository.setObjectClass(Offer.class);
        return crudRepository.findALL();
    }

    @Override
    public Offer getById(Long id) {
        return crudRepository.findById(id);
    }

    @Override
    @Transactional
    public void update(Offer offer) {
        offer.setOfferStatus(OfferStatus.RESPONDED);
        crudRepository.setObjectClass(Offer.class);
        crudRepository.update(offer);
    }
}
