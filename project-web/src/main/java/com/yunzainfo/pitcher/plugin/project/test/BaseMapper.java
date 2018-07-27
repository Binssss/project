package com.yunzainfo.pitcher.plugin.project.test;

import com.yunzainfo.pitcher.common.vo.Criteria;

import java.io.Serializable;
import java.util.List;

interface BaseMapper<T,ID extends Serializable> {

    List<T> listForPage(Criteria criteria);

    T getById(ID id);

    Integer insert(T t);

    Integer update(T t);

    Integer delete(ID id);

    Integer count(Criteria criteria);


}
