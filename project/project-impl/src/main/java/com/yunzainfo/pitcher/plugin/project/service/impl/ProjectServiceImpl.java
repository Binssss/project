package com.yunzainfo.pitcher.plugin.project.service.impl;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.common.vo.Tree;
import com.yunzainfo.pitcher.plugin.project.dao.ProjectMapper;
import com.yunzainfo.pitcher.plugin.project.entity.Project;
import com.yunzainfo.pitcher.plugin.project.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 项目信息
 * @Auther: Mr.Bin
 * @create: 2018-03-26 16:18
 */
@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectMapper projectMapper;

    /**
     * 查询所有并分页
     * @param criteria the criteria
     * @return the list
     */
    @Override
    public List<Project> queryListForPage(Criteria criteria) {
        return projectMapper.queryListForPage(criteria);
    }

    @Override
    public List<Tree> getProjectTree() {
        List<Project> projectList = projectMapper.getProjectTree();
        //加载子节点
        List<Tree> trees = new ArrayList<>();
        for(Project project : projectList){
            Tree tree = new Tree();
            tree.setId(project.getId());
            tree.setLeaf(true);
            tree.setText(project.getProjectName());
            tree.setExpanded(false);
            trees.add(tree);
        }
        //设置父节点
        Tree title = new Tree();
        title.setExpanded(false);
        title.setText("项目列表");
        title.setLeaf(false);
        title.setId("root");
        title.setChildren(trees);
        List<Tree> root = new ArrayList<>();
        root.add(title);
        return root;
    }

    /**
     * 查询总数据条数
     * @param criteria the criteria
     * @return the total count
     */
    @Override
    public int getTotalCount(Criteria criteria) {
        return projectMapper.getTotalCount(criteria);
    }

    /**
     * 插入
     * @param project
     * @return the int
     */
    @Override
    public int insert(Project project) {
        return projectMapper.insert(project);
    }

    /**
     * 修改
     * @param project the book detail
     * @return the int
     */
    @Override
    public int update(Project project) {
        return projectMapper.update(project);
    }

    /**
     * 删除
     * @param id the id
     * @return the int
     */
    @Override
    public int delete(int id) {
        return projectMapper.delete(id);
    }

    /**
     * 根据Id查
     * @param id the id
     * @return the project
     */
    @Override
    public Project queryById(String id) {
        return projectMapper.queryById(id);
    }
}
