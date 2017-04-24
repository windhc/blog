package com.windhc.mapper;

import com.piaoniu.pndao.annotations.DaoGen;
import com.windhc.domain.Category;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by HC on 2016/6/20.
 */
@Mapper
@DaoGen
public interface CategoryMapper {

    int insert(Category record);

    int insertSelective(Category record);

    int deleteById(long categoryid);

    int updateByIdSelective(Category record);

    int updateById(Category record);

    Category selectById(long categoryid);

    List<Category> selectAll();
}
