package com.windhc.mapper;

import com.windhc.domain.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by HC on 2016/6/17.
 */
@Mapper
public interface UserMapper {

  int deleteById(Integer userid);

  int insert(User record);

  int insertSelective(User record);

  User selectById(Integer userid);

  int updateByIdSelective(User record);

  int updateById(User record);

  User findUserAndRole(long id);

  User findByUsername(String username);
}
