package com.windhc.service;

import com.github.pagehelper.PageInfo;
import com.windhc.domain.Article;
import com.windhc.utils.PageRequest;

/**
 * Created by HC on 2016/6/19.
 */
public interface ArticleService {

  Article findById(long id);

  PageInfo findAll(PageRequest pageRequest);

  int save(Article article);

  int updateToDeleted(long id);
}
