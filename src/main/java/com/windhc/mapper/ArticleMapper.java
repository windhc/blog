package com.windhc.mapper;

import com.windhc.domain.Article;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by HC on 2016/6/18.
 */
@Mapper
public interface ArticleMapper {

  int insert(Article record);

  int insertSelective(Article record);

  int deleteById(long articleid);

  int updateByIdSelective(Article record);

  int updateByIdWithBLOBs(Article record);

  int updateById(Article record);

  Article selectById(long id);

  List<Article> selectAll();
}
