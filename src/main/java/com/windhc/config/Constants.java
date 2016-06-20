package com.windhc.config;

/**
 * Created by HC on 2016/6/19.
 */
public class Constants {

  public enum ArticleStatus {
    Draft("草稿"), Publish("发布");

    private String name;

    ArticleStatus(String name){
      this.name = name;
    }

    public String toString() {
      return name;
    }
  }
}
