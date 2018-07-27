package com.yunzainfo.pitcher.plugin.project.service.impl;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectFileMapper;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectMapper;
import com.yunzainfo.pitcher.plugin.project.entity.Project;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectFile;
import com.yunzainfo.pitcher.plugin.project.service.ProjectFileService;
import com.yunzainfo.pitcher.plugin.project.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 项目文件信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 16:18
 */
@Service
public class ProjectFileServiceImpl implements ProjectFileService {

    @Autowired
    private ProjectFileMapper projectFileMapper;

    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    @Override
    public List<ProjectFile> queryListForPage(Criteria criteria) {
        return projectFileMapper.queryListForPage(criteria);
    }

    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    @Override
    public int getTotalCount(Criteria criteria) {
        return projectFileMapper.getTotalCount(criteria);
    }

    /**
     * 插入
     * @param projectFile
     * @return the int
     */
    @Override
    public int insert(ProjectFile projectFile) {
        return projectFileMapper.insert(projectFile);
    }

    /**
     * 修改
     * @param projectFile the book detail
     * @return the int
     */
    @Override
    public int update(ProjectFile projectFile) {
        return projectFileMapper.update(projectFile);
    }

    /**
     * 删除
     * @param id the id
     * @return the int
     */
    @Override
    public int delete(int id) {
        return projectFileMapper.delete(id);
    }

    /**
     * 根据Id查
     * @param id the id
     * @return the project
     */
    @Override
    public ProjectFile queryById(int id) {
        return projectFileMapper.queryById(id);
    }
}
