package com.yunzainfo.pitcher.plugin.project.entity;

/**
 * 项目成果文件
 * */
public class ProjectAchievementFile {

    //成果文件ID
    private String id;
    //成果文件名
    private String fileName;
    //成果文件描述
    private String fileDesc;
    //成果文件路径
    private String fileData;
    //上传者
    private String uploadUser;
    //成果
    private String projectAchievement;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileDesc() {
        return fileDesc;
    }

    public void setFileDesc(String fileDesc) {
        this.fileDesc = fileDesc;
    }

    public String getFileData() {
        return fileData;
    }

    public void setFileData(String fileData) {
        this.fileData = fileData;
    }

    public String getUploadUser() {
        return uploadUser;
    }

    public void setUploadUser(String uploadUser) {
        this.uploadUser = uploadUser;
    }

    public String getProjectAchievement() {
        return projectAchievement;
    }

    public void setProjectAchievement(String projectAchievement) {
        this.projectAchievement = projectAchievement;
    }
}