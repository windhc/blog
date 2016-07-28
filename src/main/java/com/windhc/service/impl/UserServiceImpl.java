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
  public User findOne(long id) {
    return userMapper.findUserAndRole(id);
  }

  @Override
  public User findByUsername(String username) {
    return userMapper.findByUsername(username);
  }

  @Override
  public int save(User user) {
    return userMapper.insertSelective(user);
  }

  @Override
  public int update(User user) {
    return userMapper.updateByIdSelective(user);
  }
}
