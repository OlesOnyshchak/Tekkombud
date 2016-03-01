package com.tekkombud.test.config;

import com.tekkombud.application.config.PersistenceConfig;
import com.tekkombud.application.dao.impl.CRUDRepositoryImpl;
import org.springframework.context.annotation.*;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;

import javax.persistence.EntityManager;

import static org.mockito.Mockito.mock;

@Configuration
@ComponentScan(basePackages = "com.tekkombud.test")
public class ServiceMockConfig
{
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory()
    {
        return new EntityManagerFactoryBeanMock(entityManagerMock());
    }

    @Bean
    public EntityManager entityManagerMock()
    {
        return mock(EntityManager.class);
    }

    @Bean
    public CRUDRepositoryImpl baseRepositoryMock()
    {
        return mock(CRUDRepositoryImpl.class);
    }
}
