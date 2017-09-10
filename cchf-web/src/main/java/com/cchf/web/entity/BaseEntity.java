package com.cchf.web.entity;

import com.alibaba.fastjson.annotation.JSONField;

import java.io.Serializable;
import java.util.Date;

/**
 * author:  zhang
 * date:    2017/8/13
 * time:    17:15
 **/
public class BaseEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer status;

    @JSONField(name = "create_time")
    private Date createTime;


    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
