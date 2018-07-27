package com.yunzainfo.pitcher.plugin.project.entity;

import com.yunzainfo.pitcher.privilege.entity.BaseUsers;

import java.io.Serializable;
import java.util.Date;

/**
 * 项目
 * */
public class Project implements Serializable {

    //項目ID
    private String id;
    //項目名稱
    private String projectName;
    //項目類型
    private String projectType;
    //項目詳情
    private String projectDetail;
    //項目参与总人数
    private String projectTotalUser;
    //开始時間
    private Date projectCreateTime;
    //项目结束时间
    private Date projectEndTime;
    //項目是否已經完結  0 未完結  1 已完結
    private String projectIsFinish;
    //项目完成度
    private String completeNumber;
    // 項目任務
    private ProjectTask projectTask;
    //項目負責人
    private BaseUsers leader;
    //項目立項申請
    private ProjectApply projectApply;

    public String getCompleteNumber() {
        return completeNumber;
    }

    public void setCompleteNumber(String completeNumber) {
        this.completeNumber = completeNumber;
    }

    public String getProjectTotalUser() {
        return projectTotalUser;
    }

    public void setProjectTotalUser(String projectTotalUser) {
        this.projectTotalUser = projectTotalUser;
    }

    public Date getProjectEndTime() {
        return projectEndTime;
    }

    public void setProjectEndTime(Date projectEndTime) {
        this.projectEndTime = projectEndTime;
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

    public String getProjectIsFinish() {
        return projectIsFinish;
    }

    public void setProjectIsFinish(String projectIsFinish) {
        this.projectIsFinish = projectIsFinish;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ProjectTask getProjectTask() {
        return projectTask;
    }

    public void setProjectTask(ProjectTask projectTask) {
        this.projectTask = projectTask;
    }

    public BaseUsers getLeader() {
        return leader;
    }

    public void setLeader(BaseUsers leader) {
        this.leader = leader;
    }

    public ProjectApply getProjectApply() {
        return projectApply;
    }

    public void setProjectApply(ProjectApply projectApply) {
        this.projectApply = projectApply;
    }
}