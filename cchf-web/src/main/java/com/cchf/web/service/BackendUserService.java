package com.cchf.web.service;


import com.cchf.web.entity.BackendUser;

import java.util.List;

/**
 * author:  zhang
 * date:    2017/8/13
 * time:    18:06
 **/
public interface BackendUserService {

    Integer insert(BackendUser backendUser);

    BackendUser query(String userName, String password);

    List<BackendUser> list();
}
