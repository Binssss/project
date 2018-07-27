package com.yunzainfo.pitcher.plugin.project.service.impl;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectApplyFileMapper;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectFileMapper;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectApply;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectApplyFile;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectFile;
import com.yunzainfo.pitcher.plugin.project.service.ProjectApplyFileService;
import com.yunzainfo.pitcher.plugin.project.service.ProjectFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 项目申请文件信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 16:18
 */
@Service
public class ProjectApplyFileServiceImpl implements ProjectApplyFileService {

    @Autowired
    private ProjectApplyFileMapper projectApplyFileMapper;

    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    @Override
    public List<ProjectApplyFile> queryListForPage(Criteria criteria) {
        return projectApplyFileMapper.queryListForPage(criteria);
    }

    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    @Override
    public int getTotalCount(Criteria criteria) {
        return projectApplyFileMapper.getTotalCount(criteria);
    }

    /**
     * 插入
     * @param projectApplyFile
     * @return the int
     */
    @Override
    public int insert(ProjectApplyFile projectApplyFile) {
        return projectApplyFileMapper.insert(projectApplyFile);
    }

    /**
     * 修改
     * @param projectApplyFile the project ApplyFile
     * @return the int
     */
    @Override
    public int update(ProjectApplyFile projectApplyFile) {
        return projectApplyFileMapper.update(projectApplyFile);
    }

    /**
     * 删除
     * @param id the id
     * @return the int
     */
    @Override
    public int delete(int id) {
        return projectApplyFileMapper.delete(id);
    }

    /**
     * 根据Id查
     * @param id the id
     * @return the project
     */
    @Override
    public ProjectFile queryById(int id) {
        return projectApplyFileMapper.queryById(id);
    }
}
