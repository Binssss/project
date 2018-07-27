package com.yunzainfo.pitcher.plugin.project.test;

import com.yunzainfo.pitcher.common.vo.Criteria;

import java.util.List;

interface ProjectService extends BaseService<Project,Integer> {

    @Override
    List<Project> listForPage(Criteria criteria);

    @Override
    Project getById(Integer id);

    @Override
    Integer insert(Project project);

    @Override
    Integer update(Project project);

    @Override
    Integer delete(Integer integer);

    @Override
    Integer count(Criteria criteria);
}
