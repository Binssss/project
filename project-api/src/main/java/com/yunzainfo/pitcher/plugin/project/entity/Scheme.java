package com.yunzainfo.pitcher.plugin.project.entity;

/**
 * The interface Book detail mapper.
 *
 * @Description: 建设方案实体类
 * @Auther: Mr.Bin
 * @create: 2018-06-05 16:13
 */
public class Scheme {

    private String id;
    //方案名称
    private String fileName;
    //上传时间
    private String uploadTime;
    //上传者
    private String uploader;
    //文件描述
    private String fileDesc;
    //文件类型
    private String fileType;
    //审核状态
    private String status;
    //方案类型    0 : 学院   1 ：子项目
    private String code;

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

    public String getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(String uploadTime) {
        this.uploadTime = uploadTime;
    }

    public String getUploader() {
        return uploader;
    }

    public void setUploader(String uploader) {
        this.uploader = uploader;
    }

    public String getFileDesc() {
        return fileDesc;
    }

    public void setFileDesc(String fileDesc) {
        this.fileDesc = fileDesc;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
