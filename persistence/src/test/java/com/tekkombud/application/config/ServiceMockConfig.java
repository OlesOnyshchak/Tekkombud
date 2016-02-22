package com.tekkombud.application.config;

import com.tekkombud.application.dao.CRUDRepository;
import com.tekkombud.application.dao.impl.CRUDRepositoryImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;

import javax.persistence.EntityManager;

import static org.mockito.Mockito.mock;

@Configuration
@ComponentScan(basePackages = "com.tekkombud.application")
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
    public CRUDRepository entityRepositoryMock()
    {
        return mock(CRUDRepository.class);
    }

    @Bean
    @Primary
    public CRUDRepositoryImpl baseRepositoryMock()
    {
        return mock(CRUDRepositoryImpl.class);
    }
}