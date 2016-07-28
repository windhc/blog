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

  public static String md5(String str) {
    try {
      java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
      byte[] array = md.digest(str.getBytes());
      StringBuilder sb = new StringBuilder();
      for (byte anArray : array) {
        sb.append(Integer.toHexString((anArray & 0xFF) | 0x100).substring(1, 3));
      }
      return sb.toString();
    } catch (java.security.NoSuchAlgorithmException e) {
    }
    return null;
  }
}
