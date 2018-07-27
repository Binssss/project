package com.yunzainfo.pitcher.plugin.project.dao;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectAchievement;
import com.yunzainfo.pitcher.plugin.project.entity.TaskAchievement;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * The interface TaskAchievement mapper.
 *
 * @Description: 任务成果信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 14:52
 */
@Repository
public interface TaskAchievementMapper {
    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    List<TaskAchievement> queryListForPage(Criteria criteria);

    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    int  getTotalCount(Criteria criteria);

    /**
     * 插入
     * @param taskAchievement
     * @return the int
     */
    int insert(TaskAchievement taskAchievement);

    /**
     * 修改
     * @param taskAchievement
     * @return the int
     */
    int update(TaskAchievement taskAchievement);

    /**
     * 删除
     * @param id the id
     * @return the String
     */
    int  delete(String id);

}
