package com.yunzainfo.pitcher.plugin.project.entity;

/**
 * 任务成果实体类
 * */
public class TaskAchievement {

    //成果ID
    private String id;
    //成果名称
    private String name;
    //关联任务
    private ProjectTask task;
    //成果描述
    private String desc;



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

    public ProjectTask getTask() {
        return task;
    }

    public void setTask(ProjectTask task) {
        this.task = task;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

}