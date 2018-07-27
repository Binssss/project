package com.yunzainfo.pitcher.plugin.project.entity;

import com.yunzainfo.pitcher.privilege.entity.BaseUsers;

import java.io.Serializable;
import java.util.Date;
/**
 * 项目申请
 * */
public class ProjectApply implements Serializable {

    //项目申请ID
    private String id;
    //项目申请名称
    private String name;
    //项目申请说明
    private String detail;
    //项目申请类型
    private String type;
    //申请人
    private String applyUser;
    //申请时间
    private Date applyTime;
    //审批人
    private String auditUser;
    //审批时间
    private Date auditTime;
    //审批备注
    private String auditRemark;
    //申请状态
    private String status;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getApplyUser() {
        return applyUser;
    }

    public void setApplyUser(String applyUser) {
        this.applyUser = applyUser;
    }

    public String getAuditUser() {
        return auditUser;
    }

    public void setAuditUser(String auditUser) {
        this.auditUser = auditUser;
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

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public Date getApplyTime() {
        return applyTime;
    }

    public void setApplyTime(Date applyTime) {
        this.applyTime = applyTime;
    }

    public Date getAuditTime() {
        return auditTime;
    }

    public void setAuditTime(Date auditTime) {
        this.auditTime = auditTime;
    }

    public String getAuditRemark() {
        return auditRemark;
    }

    public void setAuditRemark(String auditRemark) {
        this.auditRemark = auditRemark;
    }
}