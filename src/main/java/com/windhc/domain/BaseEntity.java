package com.windhc.domain;

import java.time.Instant;

/**
 * Created by wind on 2017/4/24.
 */
public abstract class BaseEntity {

    private Long id;

    private long createTime = Instant.now().toEpochMilli();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getCreateTime() {
        return createTime;
    }

    public void setCreateTime(long createTime) {
        this.createTime = createTime;
    }
}
