package com.tekkombud.application.service.messenger;

import com.tekkombud.application.entity.Messenger;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MessengerService {
    void saveMessage(Messenger messenger);

    List<Messenger> getAllMessage();
}
