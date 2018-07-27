package com.yunzainfo.pitcher.plugin.project.test;

import com.yunzainfo.pitcher.common.vo.Criteria;

import java.io.Serializable;
import java.util.List;

public abstract class BaseServiceImpl<T,ID extends Serializable> implements BaseService<T,ID> {

    abstract BaseMapper getMapper();

    @Override
    public T getById(ID id) {
        return (T) getMapper().getById(id);
    }

    @Override
    public Integer insert(T t) {
        return getMapper().insert(t);
    }

    @Override
    public List<T> listForPage(Criteria criteria) {
        return getMapper().listForPage(criteria);
    }

    @Override
    public Integer update(T t) {
        return getMapper().update(t);
    }

    @Override
    public Integer delete(ID id) {
        return getMapper().delete(id);
    }

    @Override
    public Integer count(Criteria criteria) {
        return getMapper().count(criteria);
    }
}
