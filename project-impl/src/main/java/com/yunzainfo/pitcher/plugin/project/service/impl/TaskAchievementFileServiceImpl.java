package com.yunzainfo.pitcher.plugin.project.service.impl;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectAchievementFileMapper;
import com.yunzainfo.pitcher.plugin.project.dao.TaskAchievementFileMapper;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectAchievementFile;
import com.yunzainfo.pitcher.plugin.project.entity.TaskAchievementFile;
import com.yunzainfo.pitcher.plugin.project.service.ProjectAchievementFileService;
import com.yunzainfo.pitcher.plugin.project.service.TaskAchievementFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The interface task achievement file mapper.
 *
 * @Description: 项目成果文件
 * @Auther: Mr.Bin
 * @create: 2018-04-04 09:24
 */
@Service
public class TaskAchievementFileServiceImpl implements TaskAchievementFileService {


    @Autowired
    private TaskAchievementFileMapper taskAchievementFileMapper;

    /**
     * 查询所有并分页
     *
     * @param criteria the criteria
     * @return the list
     */
    @Override
    public List<TaskAchievementFile> queryListForPage(Criteria criteria) {
        return taskAchievementFileMapper.queryListForPage(criteria);
    }

    /**
     * 查询总数据条数
     *
     * @param criteria the criteria
     * @return the total count
     */
    @Override
    public int getTotalCount(Criteria criteria) {
        return taskAchievementFileMapper.getTotalCount(criteria);
    }

    /**
     * 插入
     *
     * @param taskAchievementFile
     * @return the int
     */
    @Override
    public int insert(TaskAchievementFile taskAchievementFile) {
        return taskAchievementFileMapper.insert(taskAchievementFile);
    }

    /**
     * 修改
     *
     * @param taskAchievementFile the task AchievementFile
     * @return the int
     */
    @Override
    public int update(TaskAchievementFile taskAchievementFile) {
        return taskAchievementFileMapper.update(taskAchievementFile);
    }

    /**
     * 删除
     *
     * @param id the id
     * @return the int
     */
    @Override
    public int delete(String id) {
        return taskAchievementFileMapper.delete(id);
    }
}
