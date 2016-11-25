package com.windhc.mapper;

import com.windhc.config.CommonMapper;
import com.windhc.domain.Article;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by HC on 2016/6/18.
 */
@Mapper
public interface ArticleMapper extends CommonMapper<Article> {

    int insert(Article record);

    int insertSelective(Article record);

    int deleteById(long articleid);

    int updateByIdSelective(Article record);

    int updateByIdWithBLOBs(Article record);

    int updateById(Article record);

    Article selectById(long id);

    List<Article> selectAllByDeleted(boolean deleted);

    List<Article> selectAllByCategoryAndDeleted(@Param(value = "categoryId") long categoryId, @Param(value = "deleted") boolean deleted);
}
