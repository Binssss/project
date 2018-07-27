package com.yunzainfo.pitcher.plugin.project.entity;


import java.io.Serializable;
/**
 * 项目文件
 * */
public class ProjectFile  implements Serializable {

    //上传项目文件ID
    private String id;
    //文件名称
    private String fileName;
    //文件描述
    private String fileDesc;
    //文件数据
    private String fileData;
    //项目名称
    private String projectName;
    //上传人
    private String uploadUser;

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

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getUploadUser() {
        return uploadUser;
    }

    public void setUploadUser(String uploadUser) {
        this.uploadUser = uploadUser;
    }
}