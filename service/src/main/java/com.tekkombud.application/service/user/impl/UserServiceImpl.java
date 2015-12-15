package com.tekkombud.application.service.user.impl;

import com.tekkombud.application.dao.CRUDRepository;
import com.tekkombud.application.entity.User;
import com.tekkombud.application.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    CRUDRepository crudRepository;

    @Override
    @Transactional
    public void saveUser(User user) {
        crudRepository.save(user);
    }
}
