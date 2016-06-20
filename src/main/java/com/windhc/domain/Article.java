package com.windhc.domain;

import com.windhc.config.Constants;

import java.time.Instant;
import java.util.List;

/**
 * Created by HC on 2016/6/18.
 */
public class Article {

  private long id;
  private String title;
  private String content;
  private Constants.ArticleStatus articleStatus;
  private long createTime = Instant.now().toEpochMilli();
  private boolean deleted = false;

  private Category category;
  private User user;
  private List<Comment> comments;

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public long getCreateTime() {
    return createTime;
  }

  public void setCreateTime(long createTime) {
    this.createTime = createTime;
  }

  public boolean isDeleted() {
    return deleted;
  }

  public void setDeleted(boolean deleted) {
    this.deleted = deleted;
  }

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public List<Comment> getComments() {
    return comments;
  }

  public void setComments(List<Comment> comments) {
    this.comments = comments;
  }
}
