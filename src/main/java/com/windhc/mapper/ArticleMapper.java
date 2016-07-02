package com.windhc.mapper;

import com.windhc.domain.Article;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by HC on 2016/6/18.
 */
@Mapper
public interface ArticleMapper {

  Article selectById(long id);

  List<Article> selectAll();

}
