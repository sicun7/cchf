package com.chhf.mgmt.service;


import com.chhf.mgmt.entity.BackendUser;

import java.util.List;

/**
 * author:  zhang
 * date:    2017/8/13
 * time:    18:06
 **/
public interface BackendUserService {

    BackendUser insert(BackendUser backendUser);

    BackendUser query(String userName, String password);

    List<BackendUser> list();
}
