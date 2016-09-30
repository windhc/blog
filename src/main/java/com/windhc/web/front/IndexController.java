package com.windhc.web.front;

import com.github.pagehelper.PageInfo;
import com.windhc.domain.Article;
import com.windhc.domain.Category;
import com.windhc.service.ArticleService;
import com.windhc.service.CategoryService;
import com.windhc.utils.PageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * Created by HC on 2016/6/19.
 */
@Controller
@RequestMapping(value = "/")
public class IndexController {

  @Autowired
  private ArticleService articleService;

  @Autowired
  private CategoryService categoryService;

  @RequestMapping(method = RequestMethod.GET, value = {"/"})
  public String index(ModelMap model) {
    PageRequest pageRequest = new PageRequest(1, 8);
    PageInfo pageInfo = articleService.findAll(pageRequest);
    model.put("articles", pageInfo.getList());
    return "index";
  }

  @RequestMapping(method = RequestMethod.GET, value = {"/front/category"})
  public String getAllCategory(ModelMap model) {
    List<Category> categories = categoryService.findAll();
    model.put("categories", categories);
    return "category";
  }

  @RequestMapping(method = RequestMethod.GET, value = {"/front/category/{categoryId}"})
  public String getAllByCategoryId(@PathVariable long categoryId, ModelMap model) {
    List<Article> articles = articleService.findAllByCategoryId(categoryId);
    model.put("articles", articles);
    model.put("category", categoryService.findById(categoryId));
    return "category-article";
  }

  @RequestMapping(method = RequestMethod.GET, value = {"/archives"})
  public String getAllArticle(@RequestParam(name = "pageNum", required = false, defaultValue = "1") int pageNum, @RequestParam(name = "pageSize", required = false, defaultValue = "10") int pageSize, ModelMap model) {
    PageRequest pageRequest = new PageRequest(pageNum, pageSize);
    PageInfo pageInfo = articleService.findAll(pageRequest);
    model.put("articles", pageInfo);
    return "archive";
  }

  @RequestMapping(method = RequestMethod.GET, value = {"/front/article/{id}"})
  public String detail(Model model, @PathVariable long id) {
    Article article = articleService.findById(id);
    model.addAttribute(article);
    return "detail";
  }

  @RequestMapping(method = RequestMethod.GET, value = {"/about"})
  public String about() {
    return "about";
  }

}
