package com.cchf.web.dao;

import com.cchf.web.entity.BackendUser;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * author:  zhang
 * date:    2017/8/13
 * time:    17:15
 **/
@Repository
public interface BackendUserDao {

    Integer insert(BackendUser backendUser);

    BackendUser query(BackendUser backendUser);

    List<BackendUser> queryAll();

}
