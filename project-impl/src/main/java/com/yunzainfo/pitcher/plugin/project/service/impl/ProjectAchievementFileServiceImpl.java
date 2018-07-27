package com.yunzainfo.pitcher.plugin.project.service.impl;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectAchievementFileMapper;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectAchievementFile;
import com.yunzainfo.pitcher.plugin.project.service.ProjectAchievementFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The interface Book detail mapper.
 *@see ProjectAchievementFileMapper
 * @Description: 项目成果文件
 * @Auther: Mr.Bin
 * @create: 2018-04-04 09:24
 */
@Service
public class ProjectAchievementFileServiceImpl implements ProjectAchievementFileService {


    @Autowired
    private ProjectAchievementFileMapper projectAchievementFileMapper;

    /**
     * 查询所有并分页
     *
     * @param criteria the criteria
     * @return the list
     */
    @Override
    public List<ProjectAchievementFile> queryListForPage(Criteria criteria) {
        return projectAchievementFileMapper.queryListForPage(criteria);
    }

    /**
     * 查询总数据条数
     *
     * @param criteria the criteria
     * @return the total count
     */
    @Override
    public int getTotalCount(Criteria criteria) {
        return projectAchievementFileMapper.getTotalCount(criteria);
    }

    /**
     * 插入
     *
     * @param projectAchievementFile
     * @return the int
     */
    @Override
    public int insert(ProjectAchievementFile projectAchievementFile) {
        return projectAchievementFileMapper.insert(projectAchievementFile);
    }

    /**
     * 修改
     *
     * @param projectAchievementFile the project AchievementFile
     * @return the int
     */
    @Override
    public int update(ProjectAchievementFile projectAchievementFile) {
        return projectAchievementFileMapper.update(projectAchievementFile);
    }

    /**
     * 删除
     *
     * @param id the id
     * @return the int
     */
    @Override
    public int delete(String id) {
        return projectAchievementFileMapper.delete(id);
    }
}
