package com.yunzainfo.pitcher.plugin.project.dao;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.entity.Project;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 项目信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 14:52
 */
@Repository
public interface ProjectMapper {
    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    List<Project> queryListForPage(Criteria criteria);

    /**
     * 查询项目树
     * @return the list
     */
    List<Project> getProjectTree();

    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    int  getTotalCount(Criteria criteria);

    /**
     * 插入
     * @param project
     * @return the int
     */
    int insert(Project project);

    /**
     * 修改
     * @param project the book detail
     * @return the int
     */
    int update(Project project);

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
    Project queryById(String id);
}
