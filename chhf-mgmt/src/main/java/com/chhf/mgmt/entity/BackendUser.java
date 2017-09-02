package com.chhf.mgmt.entity;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * author:  zhang
 * date:    2017/8/13
 * time:    17:07
 **/
public class BackendUser extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private Integer id;

    @JSONField(name = "user_name")
    private String userName;

    private String password;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
