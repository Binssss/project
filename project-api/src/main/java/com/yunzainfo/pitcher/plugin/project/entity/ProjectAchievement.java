package com.yunzainfo.pitcher.plugin.project.entity;

/**
 * 项目成果实体类
 * */
public class ProjectAchievement {

    //成果ID
    private String id;
    //成果名称
    private String name;
    //项目名称
    private Project projectName;
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

    public Project getProjectName() {
        return projectName;
    }

    public void setProjectName(Project projectName) {
        this.projectName = projectName;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

}