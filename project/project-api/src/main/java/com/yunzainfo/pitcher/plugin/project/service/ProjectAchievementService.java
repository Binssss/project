package com.yunzainfo.pitcher.plugin.project.service;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectAchievement;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * The interface ProjectAchievement service.
 *
 * @Description: 项目成果信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 14:52
 */
public interface ProjectAchievementService {
    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    List<ProjectAchievement> queryListForPage(Criteria criteria);

    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    int  getTotalCount(Criteria criteria);

    /**
     * 插入
     * @param projectAchievement
     * @return the int
     */
    int insert(ProjectAchievement projectAchievement);

    /**
     * 修改
     * @param projectAchievement
     * @return the int
     */
    int update(ProjectAchievement projectAchievement);

    /**
     * 删除
     * @param id the id
     * @return the String
     */
    int  delete(String id);

}
