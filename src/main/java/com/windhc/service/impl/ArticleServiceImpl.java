package com.windhc.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.windhc.domain.Article;
import com.windhc.mapper.ArticleMapper;
import com.windhc.service.ArticleService;
import com.windhc.utils.PageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by HC on 2016/6/19.
 */
@Service
public class ArticleServiceImpl implements ArticleService {

  @Autowired
  ArticleMapper articleMapper;

  @Override
  public Article findById(long id) {
    return articleMapper.selectById(id);
  }

  @Override
  public PageInfo findAll(PageRequest pageRequest) {
    PageHelper.startPage(pageRequest.getPageNum(), pageRequest.getPageSize());
    List<Article> articles = articleMapper.selectAll();
    //用PageInfo对结果进行包装
    return new PageInfo(articles);
  }
}
