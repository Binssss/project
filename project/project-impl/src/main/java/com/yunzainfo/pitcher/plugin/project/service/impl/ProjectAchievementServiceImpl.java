package com.yunzainfo.pitcher.plugin.project.service.impl;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectAchievementMapper;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectAchievement;
import com.yunzainfo.pitcher.plugin.project.service.ProjectAchievementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 项目成果
 * @Auther: Mr.Bin
 * @create: 2018-04-04 09:18
 */
@Service
public class ProjectAchievementServiceImpl implements ProjectAchievementService {


    @Autowired
    private ProjectAchievementMapper projectAchievementMapper;

    /**
     * 查询所有并分页
     *
     * @param criteria the criteria
     * @return the list
     */
    @Override
    public List<ProjectAchievement> queryListForPage(Criteria criteria) {
        return projectAchievementMapper.queryListForPage(criteria);
    }

    /**
     * 查询总数据条数
     *
     * @param criteria the criteria
     * @return the total count
     */
    @Override
    public int getTotalCount(Criteria criteria) {
        return projectAchievementMapper.getTotalCount(criteria);
    }

    /**
     * 插入
     *
     * @param projectAchievement
     * @return the int
     */
    @Override
    public int insert(ProjectAchievement projectAchievement) {
        return projectAchievementMapper.insert(projectAchievement);
    }

    /**
     * 修改
     *
     * @param projectAchievement
     * @return the int
     */
    @Override
    public int update(ProjectAchievement projectAchievement) {
        return projectAchievementMapper.update(projectAchievement);
    }

    /**
     * 删除
     *
     * @param id the id
     * @return the int
     */
    @Override
    public int delete(String id) {
        return projectAchievementMapper.delete(id);
    }
}
