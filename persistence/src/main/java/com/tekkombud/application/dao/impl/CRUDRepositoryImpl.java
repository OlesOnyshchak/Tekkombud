package com.tekkombud.application.dao.impl;

import com.tekkombud.application.dao.CRUDRepository;
import com.tekkombud.application.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class CRUDRepositoryImpl<T> implements CRUDRepository<T> {

    @Autowired
    protected EntityManager entityManager;

    private Class<T> objectClass;

    @Override
    public void setObjectClass(Class<T> objectClass) {
        this.objectClass = objectClass;
    }

    @Override
    @Transactional
    public void save(T object) {
        entityManager.merge(object);
    }

    @Override
    @Transactional
    public T findById(String id) {
        return entityManager.find(objectClass,objectClass);
    }

    @Override
    @Transactional
    public void delete(T object){
        entityManager.remove(object);
    }

    @Override
    @Transactional
    public List<T> findALL() {
        return entityManager.createQuery("FROM " + objectClass.getSimpleName(),objectClass).getResultList();
    }

    @Override
    @Transactional
    public void update(T object){
        entityManager.merge(object);
    }
}
