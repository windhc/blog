package com.windhc.domain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;
import java.time.Instant;

/**
 * 评论
 * Created by HC on 2016/6/18.
 */
public class Comment {

    @Id
    @GeneratedValue(generator = "JDBC")
    private long commentId;
    @Column(name = "commentContent")
    private String content;
    private String ip;
    private String username;
    private String email;
    @Column(name = "commentCreateTime")
    private long createTime = Instant.now().toEpochMilli();
    @Column(name = "commentDeleted")
    private boolean deleted = false;

    @Transient
    private Article article;

    public long getCommentId() {
        return commentId;
    }

    public void setCommentId(long commentId) {
        this.commentId = commentId;
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

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
