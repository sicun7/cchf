package com.cchf.web.controller;

import com.cchf.web.entity.BackendUser;
import com.cchf.web.service.BackendUserService;
import com.cchf.web.util.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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


    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public JsonResult create(@RequestBody BackendUser backendUser) {
        return JsonResult.create().addResult(backendUserService.insert(backendUser));
    }
}
