package com.windhc.mapper;

import com.windhc.domain.Article;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by HC on 2016/6/18.
 */
@Mapper
public interface ArticleMapper {

  Article findById(long id);

}
