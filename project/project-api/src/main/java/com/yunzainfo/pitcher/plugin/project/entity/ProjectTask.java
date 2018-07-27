package com.yunzainfo.pitcher.plugin.project.entity;


import java.util.Date;
/**
 * 项目任务
 * */
public class ProjectTask {

    //项目任务ID
    private String id;
    //项目任务名称
    private String name;
    //任务类型 0-事项型  1-数值型
    private String type;
    //总数值 默认为100
    private String totalNumber;
    //任务内容
    private String content;
    //完成度 默认100
    private String completeNumber;
    //父任务ID
    private String parentId;
    //负责人
    private String leader;
    //项目名称
    private String projectName;
    //开始时间
    private Date startTime;
    //结束时间
    private Date endTime;

    public String getLeader() {
        return leader;
    }

    public void setLeader(String leader) {
        this.leader = leader;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public String getTotalNumber() {
        return totalNumber;
    }

    public void setTotalNumber(String totalNumber) {
        this.totalNumber = totalNumber;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCompleteNumber() {
        return completeNumber;
    }

    public void setCompleteNumber(String completeNumber) {
        this.completeNumber = completeNumber;
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
}