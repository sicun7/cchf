package com.cchf.web.service.impl;

import com.cchf.web.dao.BackendUserDao;
import com.cchf.web.entity.BackendUser;
import com.cchf.web.exception.CustomException;
import com.cchf.web.service.BackendUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * author:  zhang
 * date:    2017/8/13
 * time:    18:09
 **/
@Service
public class BackendUserServiceImpl implements BackendUserService {
    private static final Logger logger = LoggerFactory.getLogger(BackendUserServiceImpl.class);


    @Autowired
    BackendUserDao backendUserDao;

    @Override
    public Integer insert(BackendUser backendUser) {
        Integer result = 0;
        if (null == backendUser) {
            throw new CustomException("backendUser can't be null");
        } else {
            try {
                result = backendUserDao.insert(backendUser);
            } catch (Exception e) {
                logger.error("insert backendUser error, backendUser = {}", backendUser, e);
                throw new CustomException("insert backendUser error");
            }
        }
        return result;
    }

    @Override
    public BackendUser query(String userName, String password) {
        return null;
    }

    @Override
    public List<BackendUser> list() throws CustomException {
        List<BackendUser> list = new ArrayList<BackendUser>();
        try {
            list = backendUserDao.queryAll();
        } catch (Exception e) {
            logger.error("query backendUser list error", e);
            throw new CustomException("query backendUser list error");
        }
        return list;
    }
}
