package com.tekkombud.application.dao;

import com.tekkombud.application.entity.User;

import java.util.List;

public interface CRUDRepository<T> {

    void setObjectClass(Class<T> objectClass);

    void save(T object);

    T findById(Long id);

    List<T> findALL();

    void delete(Long id);

    void update(T object);

    User findUserByUsername(String username);

}
