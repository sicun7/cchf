package com.cchf.web.util;

import org.springframework.ui.ModelMap;

/**
 * author:  zhang
 * date:    2017/8/13
 * time:    18:14
 **/
public class JsonResult extends ModelMap {

    private static final String CODE = "code";
    private static final String MESSAGE = "message";

    public static JsonResult create() {
        return new JsonResult();
    }

    public JsonResult() {
        this(0, "");
    }

    public JsonResult(int code, String message) {
        addAttribute(CODE, code);
        addAttribute(MESSAGE, message);
    }

    public JsonResult setCode(int code) {
        addAttribute(CODE, code);
        return this;
    }

    public JsonResult setMessage(String message) {
        addAttribute(MESSAGE, message);
        return this;
    }

    public JsonResult addAttribute(String attributeName, Object attributeValue) {
        super.addAttribute(attributeName, attributeValue);
        return this;
    }

    public JsonResult addResult(Object attributeValue) {
        super.addAttribute("result", attributeValue);
        return this;
    }
}
