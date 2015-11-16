package com.tekkombud.application;

import com.tekkombud.application.config.PersistenceConfig;
import com.tekkombud.application.dao.CRUDRepository;
import com.tekkombud.application.dao.impl.CRUDRepositoryImpl;
import com.tekkombud.application.entity.User;
import com.tekkombud.application.entity.util.Status;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(PersistenceConfig.class);
        CRUDRepository<User> userDao = applicationContext.getBean(CRUDRepository.class);
        User user = new User();
        user.setFirstName("Oles");
        user.setLastName("Onyshchak");
        user.setStatus(Status.ADMIN);
        user.setId(1L);
        user.setPassword("123");
        userDao.save(user);
    }
}
