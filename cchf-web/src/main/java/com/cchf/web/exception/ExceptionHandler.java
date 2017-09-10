package com.cchf.web.exception;

import com.alibaba.fastjson.JSON;
import com.cchf.web.util.JsonResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.ControllerAdvice;

import javax.security.sasl.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@ControllerAdvice
public class ExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(ExceptionHandler.class);

    @org.springframework.web.bind.annotation.ExceptionHandler(CustomException.class)
    public void handlerCustomException(CustomException ex, HttpServletRequest request, HttpServletResponse response) {
        logger.warn("error ", ex);
        String message = ex.getMessage();
        responseException(HttpStatus.BAD_REQUEST, message, request, response);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(IllegalArgumentException.class)
    public void handleIllegalArgumentException(IllegalArgumentException ex, HttpServletRequest request, HttpServletResponse response) {
        logger.warn("Incorrect parameter", ex);
        String message = ex.getMessage();
        responseException(HttpStatus.BAD_REQUEST, message, request, response);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(DataIntegrityViolationException.class)
    public void handleDataIntegrityViolationException(DataIntegrityViolationException ex, HttpServletRequest request, HttpServletResponse response) {
        logger.warn("数据库错误", ex);
        String message = "唯一性约束错误: " + ex.getRootCause().getMessage();
        responseException(HttpStatus.BAD_REQUEST, message, request, response);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(AuthenticationException.class)
    public void handleIllegalAuthenticationException(AuthenticationException ex, HttpServletRequest request, HttpServletResponse response) {
        String message = ex.getMessage();
        responseException(HttpStatus.UNAUTHORIZED, message, request, response);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(ServletRequestBindingException.class)
    public void handleMissingServletRequestParameterException(ServletRequestBindingException ex, HttpServletRequest request, HttpServletResponse response) {
        String message = ex.getMessage();
        responseException(HttpStatus.BAD_REQUEST, message, request, response);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(Exception.class)
    public void handleException(Exception ex, HttpServletRequest request, HttpServletResponse response) {
        logger.warn("Something went wrong", ex);
        String message = "Service unavailable";
        responseException(HttpStatus.INTERNAL_SERVER_ERROR, message, request, response);
    }

    private void responseException(HttpStatus status, String msg, HttpServletRequest request, HttpServletResponse response) {
        response.setStatus(status.value());
        JsonResult result = new JsonResult()
                .setMessage(msg).setCode(status.value())
                .addAttribute("contact", "if.zhang@foxmail.com");
        try {
            response.getWriter().write(JSON.toJSONString(result));
        } catch (IOException E) {
            logger.info("can't write exception result ");
        }
    }
}
