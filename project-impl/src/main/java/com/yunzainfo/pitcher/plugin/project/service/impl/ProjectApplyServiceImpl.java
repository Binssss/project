package com.yunzainfo.pitcher.plugin.project.service.impl;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectApplyMapper;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectMapper;
import com.yunzainfo.pitcher.plugin.project.entity.Project;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectApply;
import com.yunzainfo.pitcher.plugin.project.service.ProjectApplyService;
import com.yunzainfo.pitcher.plugin.project.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 项目申请信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 16:18
 */
@Service
public class ProjectApplyServiceImpl implements ProjectApplyService {

    @Autowired
    private ProjectApplyMapper projectApplyMapper;

    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    @Override
    public List<ProjectApply> queryListForPage(Criteria criteria) {
        return projectApplyMapper.queryListForPage(criteria);
    }

    /**
     * 查询所有申请项目名称
     * @return the list
     */
    public List<ProjectApply> queryApplication(){
        return projectApplyMapper.queryApplication();
    }

    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    @Override
    public int getTotalCount(Criteria criteria) {
        return projectApplyMapper.getTotalCount(criteria);
    }

    /**
     * 插入
     * @param projectApply
     * @return the int
     */
    @Override
    public int insert(ProjectApply projectApply) {
        return projectApplyMapper.insert(projectApply);
    }

    /**
     * 修改
     * @param projectApply the project Apply
     * @return the int
     */
    @Override
    public int update(ProjectApply projectApply) {
        return projectApplyMapper.update(projectApply);
    }

    /**
     * 删除
     * @param id the id
     * @return the int
     */
    @Override
    public int delete(String id) {
        return projectApplyMapper.delete(id);
    }

}
