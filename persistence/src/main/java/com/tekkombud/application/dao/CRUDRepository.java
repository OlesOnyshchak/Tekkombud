package com.tekkombud.application.dao;

import com.tekkombud.application.entity.User;

import java.util.List;

public interface CRUDRepository<T> {

    void setObjectClass(Class<T> objectClass);

    void save(T object);

    T findById(String id);

    List<T> findALL();

    void delete(T object);

    void update(T object);

    User findUserByUsername(String username);

}
