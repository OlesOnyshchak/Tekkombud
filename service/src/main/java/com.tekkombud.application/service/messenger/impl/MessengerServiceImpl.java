package com.tekkombud.application.service.messenger.impl;

import com.tekkombud.application.dao.CRUDRepository;
import com.tekkombud.application.entity.Messenger;
import com.tekkombud.application.entity.User;
import com.tekkombud.application.service.messenger.MessengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessengerServiceImpl implements MessengerService {
    @Autowired
    CRUDRepository crudRepository;

    @Override
    public void saveMessage(Messenger messenger) {
        crudRepository.save(messenger);
    }
}
