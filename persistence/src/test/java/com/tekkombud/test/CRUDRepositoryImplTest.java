package com.tekkombud.test;

import com.tekkombud.application.dao.CRUDRepository;
import com.tekkombud.application.entity.Messenger;
import com.tekkombud.test.config.RepositoryMockConfig;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.mockito.Mockito.*;

import javax.persistence.EntityManager;
import java.util.Iterator;

import static org.junit.Assert.assertEquals;

@ContextConfiguration(classes = RepositoryMockConfig.class)
@RunWith(SpringJUnit4ClassRunner.class)
public class CRUDRepositoryImplTest {

    @Autowired
    @InjectMocks
    private CRUDRepository<Messenger> crudRepository;

    @Autowired
    @Qualifier("entityManagerMock")
    protected EntityManager entityManager;

    @Before
    public void setUp()
    {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void saveMessage(){
        Messenger messenger = mock(Messenger.class);
        crudRepository.save(messenger);
        verify(entityManager).merge(messenger);
    }

    @Test
    public void getById(){
        long id = 5;
        crudRepository.setObjectClass(Messenger.class);
        Messenger messenger = crudRepository.findById(id);
        verify(entityManager).find(Messenger.class,id);
    }
}

