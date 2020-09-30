package com.yurencloud.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * @author 
 */
@Data
@JsonIgnoreProperties({"handler"})//只要有配置正确的roles才会生成正确的authorities
public class Article implements Serializable {
    private Integer id;

    private String title;

    private String catalogId;

    private String image;

    /**
     * 0 不置顶 1 置顶
     */
    private Byte top;

    /**
     * 0 不推荐 1 推荐
     */
    private Byte recommend;

    /**
     * 浏览量
     */
    private Integer view;

    /**
     * 点赞量
     */
    private Integer good;

    private Date createdAt;

    private Date updatedAt;

    /**
     * 文章字数
     */
    private Integer words;

    private String content;

    private Catalog catalog;


}