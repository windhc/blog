package com.windhc.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.windhc.domain.Category;
import com.windhc.mapper.CategoryMapper;
import com.windhc.service.CategoryService;
import com.windhc.utils.PageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by HC on 2016/6/20.
 */
@Service
public class CategoryServiceImpl implements CategoryService {

  @Autowired
  private CategoryMapper categoryMapper;

  @Override
  public Category findById(long id) {
    return categoryMapper.selectById(id);
  }

  @Override
  public PageInfo findAll(PageRequest pageRequest) {
    PageHelper.startPage(pageRequest.getPageNum(), pageRequest.getPageSize());
    List<Category> articles = categoryMapper.selectAll();
    return new PageInfo(articles);
  }

  @Override
  public List<Category> findAll() {
    return categoryMapper.selectAll();
  }

  @Override
  public int save(Category category) {
    return categoryMapper.insert(category);
  }

  @Override
  public int delete(long id) {
    return categoryMapper.deleteById(id);
  }

  @Override
  public int update(Category category) {
    return categoryMapper.updateByIdSelective(category);
  }

  @Override
  public Category getOne(long id) {
    return categoryMapper.selectById(id);
  }
}
