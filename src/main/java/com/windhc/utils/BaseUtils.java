package com.windhc.utils;

import com.windhc.domain.User;
import org.apache.shiro.SecurityUtils;

/**
 * Created by HC on 2016/7/4.
 */
public class BaseUtils {

  public static User currentUser() {
    return (User) SecurityUtils.getSubject().getPrincipal();
  }
}
