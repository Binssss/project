package com.yunzainfo.pitcher.plugin.project.test;

import com.yunzainfo.pitcher.common.vo.Criteria;

import java.util.List;

public class ProjectServiceImpl extends BaseServiceImpl<Project,Integer> implements ProjectService {

    private ProjectMapper projectMapper;

    @Override
    BaseMapper getMapper() {
        return projectMapper;
    }


    @Override
    public List<Project> listForPage(Criteria criteria) {
        return projectMapper.listForPage(criteria);
    }

    @Override
    public Integer update(Project project) {
        return projectMapper.update(project);
    }

    @Override
    public Integer delete(Integer id) {
        return projectMapper.delete(id);
    }

    @Override
    public Integer count(Criteria criteria) {
        return projectMapper.count(criteria);
    }
}
