package com.chhf.mgmt.service.impl;

import com.chhf.mgmt.dao.BackendUserDao;
import com.chhf.mgmt.entity.BackendUser;
import com.chhf.mgmt.service.BackendUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * author:  zhang
 * date:    2017/8/13
 * time:    18:09
 **/
@Service
public class BackendUserServiceImpl implements BackendUserService {

    @Autowired
    BackendUserDao backendUserDao;

    @Override
    public BackendUser insert(BackendUser backendUser) {
        return null;
    }

    @Override
    public BackendUser query(String userName, String password) {
        return null;
    }

    @Override
    public List<BackendUser> list() {
        List<BackendUser> list = null;
        list = backendUserDao.queryAll();
        return list;
    }
}
