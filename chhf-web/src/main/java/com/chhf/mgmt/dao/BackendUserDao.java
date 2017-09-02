package com.chhf.mgmt.dao;

import com.chhf.mgmt.entity.BackendUser;
import org.apache.ibatis.annotations.Param;
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
