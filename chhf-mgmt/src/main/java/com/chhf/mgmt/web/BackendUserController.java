package com.chhf.mgmt.web;

import com.chhf.mgmt.entity.BackendUser;
import com.chhf.mgmt.service.BackendUserService;
import com.chhf.mgmt.util.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * author:  zhang
 * date:    2017/8/13
 * time:    18:12
 **/
@Controller
@RequestMapping("backend_user")
public class BackendUserController {

    @Autowired
    private BackendUserService backendUserService;


    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @ResponseBody
    public JsonResult list() {
        return JsonResult.create().addResult(backendUserService.list());
    }
}
