package com.yunzainfo.pitcher.plugin.project.dao;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.entity.Project;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectTask;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 项目任务信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 14:52
 */
@Repository
public interface ProjectTaskMapper {

    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    List<ProjectTask> queryListForPage(Criteria criteria);

    /**
     * 查询所有子任务并分页
     * @param criteria the criteria
     * @return the list
     */
    List<ProjectTask> queryListForChildPage(Criteria criteria);
    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    int  getTotalCount(Criteria criteria);


    /**
     * 查询该任务的所有子任务
     * @param id the id
     * @return the int
     */
    int queryListForChild(String id);

    /**
     * 插入
     * @param projectTask
     * @return the int
     */
    int insert(ProjectTask projectTask);

    /**
     * 修改
     * @param projectTask the projec tTask
     * @return the int
     */
    int update(ProjectTask projectTask);

    /**
     * 删除
     * @param id the id
     * @return the int
     */
    int  delete(String id);

    /**
     * 根据Id查
     * @param id the id
     * @return the projectTask
     */
    ProjectTask queryById(String id);


    /**
     * 根据项目ID查询任务
     * @param projectId the projectId
     * @return the projectTask
     */
    List<ProjectTask> queryTreeForProject(String projectId);


    /**
     * 根据父任务ID查询任务
     * @param parentId the parentId
     * @return the projectTask
     */
    List<ProjectTask> queryTreeForParent(String parentId);

}
