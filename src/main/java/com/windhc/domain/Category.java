package com.windhc.domain;

/**
 * Created by HC on 2016/6/19.
 */
public class Category extends BaseEntity {

    private String categoryName;

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
