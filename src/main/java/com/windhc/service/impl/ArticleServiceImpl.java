package com.windhc.service.impl;

import com.windhc.domain.Article;
import com.windhc.mapper.ArticleMapper;
import com.windhc.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
