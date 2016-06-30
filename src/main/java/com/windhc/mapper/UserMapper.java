package com.windhc.mapper;

import com.windhc.domain.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by HC on 2016/6/17.
 */
@Mapper
public interface UserMapper {

  int deleteByPrimaryKey(Integer userid);

  int insert(User record);

  int insertSelective(User record);

  User selectByPrimaryKey(Integer userid);

  int updateByPrimaryKeySelective(User record);

  int updateByPrimaryKey(User record);

  User findUserAndRole(long id);

  User findByUsername(String username);
}
