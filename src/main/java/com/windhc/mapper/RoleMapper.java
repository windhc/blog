package com.windhc.mapper;

import com.windhc.domain.Role;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by HC on 2016/6/19.
 */
@Mapper
public interface RoleMapper {

  Role findById(long id);
}
