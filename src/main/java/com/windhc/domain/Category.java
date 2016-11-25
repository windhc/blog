package com.windhc.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by HC on 2016/6/19.
 */
public class Category {

    @Id
    @GeneratedValue(generator = "JDBC")
    private long categoryId;
    private String categoryName;

    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
