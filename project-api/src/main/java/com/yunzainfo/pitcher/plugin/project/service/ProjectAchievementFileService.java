package com.yunzainfo.pitcher.plugin.project.service;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectAchievementFile;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * The interface Project Achievement File Service
 *
 * @Description: 项目成果文件信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 14:52
 */
public interface ProjectAchievementFileService {
    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    List<ProjectAchievementFile> queryListForPage(Criteria criteria);

    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    int  getTotalCount(Criteria criteria);

    /**
     * 插入
     * @param projectAchievementFile
     * @return the int
     */
    int insert(ProjectAchievementFile projectAchievementFile);

    /**
     * 修改
     * @param projectAchievementFile the project AchievementFile
     * @return the int
     */
    int update(ProjectAchievementFile projectAchievementFile);

    /**
     * 删除
     * @param id the id
     * @return the String
     */
    int  delete(String id);

}
