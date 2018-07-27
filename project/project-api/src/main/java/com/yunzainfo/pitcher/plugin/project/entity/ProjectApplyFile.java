package com.yunzainfo.pitcher.plugin.project.entity;


import com.yunzainfo.pitcher.privilege.entity.BaseUsers;

import java.io.Serializable;
/**
 * 项目申请文件
 * */
public class ProjectApplyFile implements Serializable {

    //项目申请文件ID
    private String id;
    //项目申请文件名称
    private String fileName;
    //项目申请文件描述
    private String fileDesc;
    //项目申请文件路径
    private String fileData;
    //项目申请名称
    private String applyName;
    //上传者
    private String uploadUser;

    public String getUploadUser() {
        return uploadUser;
    }

    public void setUploadUser(String uploadUser) {
        this.uploadUser = uploadUser;
    }

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

    public String getApplyName() {
        return applyName;
    }

    public void setApplyName(String applyName) {
        this.applyName = applyName;
    }
}