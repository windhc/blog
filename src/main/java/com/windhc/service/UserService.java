package com.windhc.service;

import com.windhc.domain.User;

/**
 * Created by HC on 2016/6/17.
 */
public interface UserService {

  User findOne(long id);

  User findByUsername(String username);

  int save(User user);

  int update(User user);
}
