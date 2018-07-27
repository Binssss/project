package com.yunzainfo.pitcher.plugin.project.dao;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.entity.Project;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectApply;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 项目申请信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 14:52
 */
@Repository
public interface ProjectApplyMapper {
    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    List<ProjectApply> queryListForPage(Criteria criteria);

    /**
     * 查询所有申请项目名称
     * @return the list
     */
    List<ProjectApply> queryApplication();

    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    int  getTotalCount(Criteria criteria);

    /**
     * 插入
     * @param projectApply
     * @return the int
     */
    int insert(ProjectApply projectApply);

    /**
     * 修改
     * @param projectApply the project Apply
     * @return the int
     */
    int update(ProjectApply projectApply);

    /**
     * 删除
     * @param id the id
     * @return the int
     */
    int  delete(String id);

}
