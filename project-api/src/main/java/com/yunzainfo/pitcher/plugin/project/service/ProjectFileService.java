package com.yunzainfo.pitcher.plugin.project.service;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.entity.Project;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectFile;

import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 项目文件信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 14:57
 */
public interface ProjectFileService {

    /** 查询所有并分页 **/
    List<ProjectFile> queryListForPage(Criteria criteria);

    /** 查询总数据条数 **/
    int  getTotalCount(Criteria criteria);

    /**
     * 插入
     * @param projectFile
     * @return the int
     */
    int insert(ProjectFile projectFile);

    /**
     * 修改
     * @param projectFile the book detail
     * @return the int
     */
    int update(ProjectFile projectFile);

    /**
     * 删除
     * @param id the id
     * @return the int
     */
    int  delete(int id);

    /**
     * 根据Id查
     * @param id the id
     * @return the project
     */
    ProjectFile queryById(int id);
}
