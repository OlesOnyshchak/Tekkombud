package com.tekkombud.application.service.offer;

import com.tekkombud.application.entity.Messenger;
import com.tekkombud.application.entity.Offer;

import java.util.List;

public interface OfferService {
    void save(Offer offer);

    List<Offer> getAllMessage();
}
