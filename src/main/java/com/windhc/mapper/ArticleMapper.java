package com.windhc.mapper;

import com.piaoniu.pndao.annotations.DaoGen;
import com.windhc.domain.Article;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by HC on 2016/6/18.
 */
@Mapper
@DaoGen
public interface ArticleMapper {

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
