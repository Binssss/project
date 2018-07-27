package com.yunzainfo.pitcher.plugin.project.service.impl;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectTaskMapper;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectTask;
import com.yunzainfo.pitcher.plugin.project.service.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The interface Project Task mapper.
 *
 * @Description: 项目任务信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 16:18
 */
@Service
public class ProjectTaskServiceImpl implements ProjectTaskService {

    @Autowired
    private ProjectTaskMapper projectTaskMapper;

    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    @Override
    public List<ProjectTask> queryListForPage(Criteria criteria) {
        return projectTaskMapper.queryListForPage(criteria);
    }

    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    @Override
    public int getTotalCount(Criteria criteria) {
        return projectTaskMapper.getTotalCount(criteria);
    }




    /**
     * 查询所有子任务
     * @param id the id
     * @return the list
     */
    @Override
    public int queryListForChild(String id) {
        return projectTaskMapper.queryListForChild(id);
    }

    /**
     * 查询所有子任务并分页
     * @param criteria the criteria
     * @return the list
     */
    @Override
    public List<ProjectTask> queryListForChildPage(Criteria criteria) {
        return projectTaskMapper.queryListForChildPage(criteria);
    }

    /**
     * 插入
     * @param projectTask
     * @return the int
     */
    @Override
    public int insert(ProjectTask projectTask) {
        return projectTaskMapper.insert(projectTask);
    }

    /**
     * 修改
     * @param projectTask the project Task
     * @return the int
     */
    @Override
    public int update(ProjectTask projectTask) {
        return projectTaskMapper.update(projectTask);
    }

    /**
     * 删除
     * @param id the id
     * @return the int
     */
    @Override
    public int delete(String id) {
        return projectTaskMapper.delete(id);
    }

    /**
     * 根据Id查
     * @param id the id
     * @return the ProjectTask
     */
    @Override
    public ProjectTask queryById(String id) {
        return projectTaskMapper.queryById(id);
    }
}
