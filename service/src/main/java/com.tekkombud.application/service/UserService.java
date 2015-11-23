package com.tekkombud.application.service;

import com.tekkombud.application.entity.User;
import org.springframework.stereotype.Service;

public interface UserService {
    void saveUser(User user);
}
