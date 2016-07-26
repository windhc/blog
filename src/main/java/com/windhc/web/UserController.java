package com.windhc.web;

import com.windhc.domain.User;
import com.windhc.service.UserService;
import com.windhc.utils.JsonView;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by HC on 2016/6/17.
 */
@RestController
@RequestMapping(value = "/user")
public class UserController {

  @Autowired
  private UserService userService;

  @RequestMapping(method = RequestMethod.GET, value = "/test")
  public User test() {
    return userService.findOne(1);
  }

  @RequestMapping(method = RequestMethod.POST, value = "/login")
  public String login() {
    return "success";
  }

  @RequestMapping(method = RequestMethod.GET, value = "/info")
  public Map info() {
    Object principal = SecurityUtils.getSubject().getPrincipal();
    Map<String, Object> map = new HashMap<>();
    map.put("user", principal);
    return map;
  }

  @RequestMapping(method = RequestMethod.GET, value = "/pwd")
  public JsonView changePwd() {

    return JsonView.success();
  }

  @RequestMapping(method = RequestMethod.GET, value = "/pwd/verify")
  public JsonView verifyPwd() {

    return JsonView.success();
  }
}
