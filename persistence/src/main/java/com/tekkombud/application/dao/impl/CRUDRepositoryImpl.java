package com.tekkombud.application.dao.impl;

import com.tekkombud.application.dao.CRUDRepository;
import com.tekkombud.application.entity.Messenger;
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
    public T findById(Long id) {
        return entityManager.find(objectClass,id);
    }

    @Override
    @Transactional
    public void delete(Long id){
        T object = entityManager.find(objectClass, id);
        if (object != null) {
            entityManager.remove(object);
        }
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

    @Override
    public User findUserByUsername(String username) {

        List<User> users = entityManager.createNamedQuery(User.FIND_BY_USERNAME, User.class)
                .setParameter("username", username)
                .getResultList();

        return users.size() == 1 ? users.get(0) : null;
    }
}
