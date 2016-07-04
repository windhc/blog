package com.windhc.mapper;

import com.windhc.domain.Comment;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by HC on 2016/6/20.
 */
@Mapper
public interface CommentMapper {

  int deleteById(long commentid);

  int insert(Comment record);

  int insertSelective(Comment record);

  Comment selectById(long commentid);

  int updateByIdSelective(Comment record);

  int updateByIdWithBLOBs(Comment record);

  int updateById(Comment record);
}
