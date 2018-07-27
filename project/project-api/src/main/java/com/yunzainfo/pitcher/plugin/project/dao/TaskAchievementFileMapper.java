package com.yunzainfo.pitcher.plugin.project.dao;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectAchievementFile;
import com.yunzainfo.pitcher.plugin.project.entity.TaskAchievementFile;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * The interface TaskAchievementFileMapper
 *
 * @Description: 任务成果文件信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 14:52
 */
@Repository
public interface TaskAchievementFileMapper {
    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    List<TaskAchievementFile> queryListForPage(Criteria criteria);

    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    int  getTotalCount(Criteria criteria);

    /**
     * 插入
     * @param taskAchievementFile
     * @return the int
     */
    int insert(TaskAchievementFile taskAchievementFile);

    /**
     * 修改
     * @param taskAchievementFile the task AchievementFile
     * @return the int
     */
    int update(TaskAchievementFile taskAchievementFile);

    /**
     * 删除
     * @param id the id
     * @return String int
     */
    int  delete(String id);

}
