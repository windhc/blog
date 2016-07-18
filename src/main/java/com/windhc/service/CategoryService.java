package com.windhc.service;

import com.github.pagehelper.PageInfo;
import com.windhc.domain.Category;
import com.windhc.utils.PageRequest;

import java.util.List;

/**
 * Created by HC on 2016/6/20.
 */
public interface CategoryService {

  Category findById(long id);

  PageInfo findAll(PageRequest pageRequest);

  List<Category> findAll();

  int save(Category category);

  int delete(long id);

  int update(Category category);

  Category getOne(long id);
}
