package com.windhc.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by HC on 2016/6/20.
 */
@Controller
@RequestMapping(value = "/")
public class HomeController {

  @RequestMapping(method = RequestMethod.GET)
  public String home() {
    return "/front/article/index.html";
  }

  @RequestMapping(method = RequestMethod.GET, value = "/front/archives/{id}")
  public String detail() {
    return "/front/article/detail.html";
  }

  @RequestMapping(method = RequestMethod.GET, value = "/front/category")
  public String category() {
    return "/front/article/category.html";
  }

  @RequestMapping(method = RequestMethod.GET, value = "/front/archives")
  public String archives() {
    return "/front/article/archive.html";
  }

  @RequestMapping(method = RequestMethod.GET, value = "/front/about")
  public String about() {
    return "/front/article/about.html";
  }


  @RequestMapping(method = RequestMethod.GET, value = "/login")
  public String login() {
    return "/admin/login.html";
  }

  @RequestMapping(method = RequestMethod.POST, value = "/login")
  public String sign(HttpServletRequest request) {
    String errorClassName = (String) request.getAttribute("shiroLoginFailure");
    System.out.println(errorClassName);
    return "redirect:/login";
  }

  @RequestMapping(method = RequestMethod.GET, value = "/admin")
  public String admin() {
    return "/admin/main.html";
  }

  @ResponseBody
  @RequestMapping(method = RequestMethod.GET, value = "/forbidden")
  public String forbidden() {
    return "forbidden";
  }

}
