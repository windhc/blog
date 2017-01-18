package com.windhc.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.windhc.config.Constants;
import com.windhc.domain.Article;
import com.windhc.mapper.ArticleMapper;
import com.windhc.service.ArticleService;
import com.windhc.utils.BaseUtils;
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
        Page<Article> page = PageHelper.startPage(pageRequest.getPageNum(), pageRequest.getPageSize())
                .doSelectPage(()-> articleMapper.selectAllByDeleted(false));

        //用PageInfo对结果进行包装
        return page.toPageInfo();
    }

    @Override
    public int save(Article article) {
        int length = article.getContent().length() > 200 ? 200 : article.getContent().length();
        article.setSummary(article.getContent().substring(0, length));
        article.setStatus(Constants.ArticleStatus.Publish);
        article.setUser(BaseUtils.currentUser());
        return articleMapper.insert(article);
    }

    @Override
    public int updateToDeleted(long id) {
        Article article = articleMapper.selectById(id);
        article.setDeleted(true);
        return articleMapper.updateById(article);
    }

    @Override
    public int update(Article article) {
        int length = article.getContent().length() > 200 ? 200 : article.getContent().length();
        article.setSummary(article.getContent().substring(0, length));
        return articleMapper.updateByIdSelective(article);
    }

    @Override
    public List<Article> findAllByCategoryId(long categoryId) {
        return articleMapper.selectAllByCategoryAndDeleted(categoryId, false);
    }
}
