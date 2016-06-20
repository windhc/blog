package com.windhc.mapper;

import com.windhc.domain.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by HC on 2016/6/17.
 */
@Mapper
public interface UserMapper {

  User findById(long id);

  User findUserAndRole(long id);

}
