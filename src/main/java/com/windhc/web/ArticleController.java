package com.windhc.web;

import com.github.pagehelper.PageInfo;
import com.windhc.domain.Article;
import com.windhc.service.ArticleService;
import com.windhc.utils.JsonView;
import com.windhc.utils.PageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by HC on 2016/6/19.
 */
@RestController
@RequestMapping(value = "/article")
public class ArticleController {

  @Autowired
  ArticleService articleService;

  @RequestMapping(method = RequestMethod.GET, value = "/{id}")
  public JsonView getById(@PathVariable long id) {
    Article article = articleService.findById(id);
    return JsonView.success(article);
  }

  @RequestMapping(method = RequestMethod.GET, value = "")
  public JsonView getAll(PageRequest pageRequest) {
    PageInfo pageInfo = articleService.findAll(pageRequest);
    return JsonView.success(pageInfo);
  }

  @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
  public JsonView delete(@PathVariable long id) {

    return JsonView.success();
  }

}
