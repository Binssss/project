package com.yunzainfo.pitcher.plugin.project.entity;

import com.yunzainfo.pitcher.privilege.entity.BaseUsers;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 项目树列表
 * @Auther: Mr.Bin
 * @create: 2018-06-14 11:31
 */
public class ProjectTree implements Serializable  {

    private List<ProjectTree> children;
    //項目ID
    private String id;
    //父項目ID
    private String parentId;
    //項目名稱
    private String projectName;
    //項目類型
    private String projectType;
    //項目詳情
    private String projectDetail;
    //开始時間
    private Date projectCreateTime;
    //项目结束时间
    private Date projectEndTime;
    //項目是否已經完結  0 未完結  1 已完結
    private String projectIsFinish;
    private Short leaf;

    public Short getLeaf() {
        return leaf;
    }

    public void setLeaf(Short leaf) {
        this.leaf = leaf;
    }

    public List<ProjectTree> getChildren() {
        return children;
    }

    public void setChildren(List<ProjectTree> children) {
        this.children = children;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectType() {
        return projectType;
    }

    public void setProjectType(String projectType) {
        this.projectType = projectType;
    }

    public String getProjectDetail() {
        return projectDetail;
    }

    public void setProjectDetail(String projectDetail) {
        this.projectDetail = projectDetail;
    }

    public Date getProjectCreateTime() {
        return projectCreateTime;
    }

    public void setProjectCreateTime(Date projectCreateTime) {
        this.projectCreateTime = projectCreateTime;
    }

    public Date getProjectEndTime() {
        return projectEndTime;
    }

    public void setProjectEndTime(Date projectEndTime) {
        this.projectEndTime = projectEndTime;
    }

    public String getProjectIsFinish() {
        return projectIsFinish;
    }

    public void setProjectIsFinish(String projectIsFinish) {
        this.projectIsFinish = projectIsFinish;
    }


}
