package com.windhc.service.impl;

import com.windhc.domain.User;
import com.windhc.mapper.UserMapper;
import com.windhc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by HC on 2016/6/17.
 */
@Service
public class UserServiceImpl implements UserService {

  @Autowired
  UserMapper userMapper;

  @Override
  public User getOne(long id) {
    return userMapper.findUserAndRole(id);
  }
}
