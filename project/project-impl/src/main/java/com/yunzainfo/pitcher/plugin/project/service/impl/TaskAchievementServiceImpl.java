package com.yunzainfo.pitcher.plugin.project.service.impl;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.common.vo.Tree;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectAchievementMapper;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectMapper;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectTaskMapper;
import com.yunzainfo.pitcher.plugin.project.dao.TaskAchievementMapper;
import com.yunzainfo.pitcher.plugin.project.entity.Project;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectAchievement;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectTask;
import com.yunzainfo.pitcher.plugin.project.entity.TaskAchievement;
import com.yunzainfo.pitcher.plugin.project.service.ProjectAchievementService;
import com.yunzainfo.pitcher.plugin.project.service.TaskAchievementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * The interface task achievement mapper.
 *
 * @Description: 任务成果服务
 * @Auther: Mr.Bin
 * @create: 2018-04 09:18
 */
@Service
public class TaskAchievementServiceImpl implements TaskAchievementService {


    @Autowired
    private TaskAchievementMapper taskAchievementMapper;
    @Autowired
    private ProjectMapper projectMapper;
    @Autowired
    private ProjectTaskMapper projectTaskMapper;

    /**
     * 查询所有并分页
     *
     * @param criteria the criteria
     * @return the list
     */
    @Override
    public List<TaskAchievement> queryListForPage(Criteria criteria) {
        return taskAchievementMapper.queryListForPage(criteria);
    }

    /**
     * 查询总数据条数
     *
     * @param criteria the criteria
     * @return the total count
     */
    @Override
    public int getTotalCount(Criteria criteria) {
        return taskAchievementMapper.getTotalCount(criteria);
    }

    /**
     * 插入
     *
     * @param taskAchievement
     * @return the int
     */
    @Override
    public int insert(TaskAchievement taskAchievement) {
        return taskAchievementMapper.insert(taskAchievement);
    }

    /**
     * 修改
     *
     * @param taskAchievement
     * @return the int
     */
    @Override
    public int update(TaskAchievement taskAchievement) {
        return taskAchievementMapper.update(taskAchievement);
    }

    /**
     * 删除
     *
     * @param id the id
     * @return the int
     */
    @Override
    public int delete(String id) {
        return taskAchievementMapper.delete(id);
    }

    /**
     * 获取任务树
     */
    @Override
    public List<Tree> getTaskTree() {
        List<Project> projects = projectMapper.getProjectTree();
        //项目集合，收集项目
        List<Tree> root = new ArrayList<>();
        for(Project project : projects){
            Tree projectTree = new Tree();
            //projectTree.setId(project.getId());
            projectTree.setLeaf(false);
            projectTree.setText(project.getProjectName());
            List<ProjectTask> projectTasks = projectTaskMapper.queryTreeForProject(project.getId());
            //父任务集合
            List<Tree> tasks = new ArrayList<>();
            for(ProjectTask projectTask : projectTasks){
                Tree task = new Tree();
                task.setText(projectTask.getName());
                task.setId(projectTask.getId());

                //子任务集合
                List<Tree> childList = new ArrayList<>();
                List<ProjectTask> childs = projectTaskMapper.queryTreeForParent(projectTask.getId());
                if(childs.size() > 0 && childs != null){
                    for(ProjectTask child : childs){
                        Tree childTask = new Tree();
                        childTask.setText(child.getName());
                        childTask.setLeaf(true);
                        childTask.setId(child.getId());
                        childList.add(childTask);
                    }
                    task.setLeaf(false);
                    task.setChildren(childList);
                }else {
                    task.setLeaf(true);
                }

                tasks.add(task);
            }
            projectTree.setChildren(tasks);
            projectTree.setLeaf(false);
            root.add(projectTree);

        }
        Tree pro = new Tree();
        pro.setText("项目列表");
        pro.setLeaf(false);
        pro.setChildren(root);
        List<Tree> result = new ArrayList<>();
        result.add(pro);
        return result;
    }
}
