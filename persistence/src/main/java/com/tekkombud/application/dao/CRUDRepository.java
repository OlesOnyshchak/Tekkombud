package com.tekkombud.application.dao;

import java.util.List;

/**
 * Created by Oles Onyshchak on 11/15/2015.
 */
public interface CRUDRepository<T> {

    void setObjectClass(Class<T> objectClass);

    void save(T object);

    T findById(String id);

    List<T> findALL();

    void delete(T object);

    void update(T object);

}
