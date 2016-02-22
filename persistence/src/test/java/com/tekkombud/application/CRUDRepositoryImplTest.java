package com.tekkombud.application;

import com.tekkombud.application.config.RepositoryMockConfig;
import com.tekkombud.application.entity.User;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.persistence.EntityManager;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = RepositoryMockConfig.class)
public class CRUDRepositoryImplTest {

    @Autowired
    @Qualifier("entityManagerMock")
    protected EntityManager entityManager;

    @Ignore
    @Test
    public void findUserByUsernameTest() {

        List<User> users = entityManager.createNamedQuery(User.FIND_BY_USERNAME, User.class)
                .setParameter("username", "oless")
                .getResultList();
        System.out.println(users.size() == 1 ? users.get(0) : null);
    }
}

