package com.windhc.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.github.pagehelper.PageInfo;
import com.windhc.domain.Article;
import com.windhc.service.ArticleService;
import com.windhc.utils.JsonView;
import com.windhc.utils.PageRequest;

/**
 * Created by HC on 2016/6/19.
 */
@RestController
@RequestMapping(value = "/article")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @RequestMapping(method = RequestMethod.GET, value = {"/{id}", "/front/{id}"})
    public JsonView getById(@PathVariable long id) {
        Article article = articleService.findById(id);
        return JsonView.success(article);
    }

    @RequestMapping(method = RequestMethod.GET, value = {"", "/front"})
    public JsonView getAll(PageRequest pageRequest) {
        PageInfo pageInfo = articleService.findAll(pageRequest);
        return JsonView.success(pageInfo);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public JsonView delete(@PathVariable long id) {
        articleService.updateToDeleted(id);
        return JsonView.success();
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public JsonView save(@RequestBody Article article) {
        article.setCategoryId(article.getCategory().getId());
        articleService.save(article);
        return JsonView.success();
    }

    @RequestMapping(method = RequestMethod.PUT, value = "")
    public JsonView update(@RequestBody Article article) {
        articleService.update(article);
        return JsonView.success();
    }

}
