package com.mbatech.DigitalerEinkaufszettel;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ShoppingListEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int articleId;
    private String article;
    private boolean status;

    public ShoppingListEntity(){}

    public ShoppingListEntity(String article){
        this.article = article;
    }

    public int getArticleId(){
        return this.articleId;
    }

    public String getArticle(){
        return this.article;
    }

    public void setArticle(String article){
        this.article = article;
    }

    public Boolean getStatus(){
        return this.status;
    }

    public void setArticle(Boolean status){
        this.status = status;
    }

    @Override
    public String toString(){
        return this.articleId + ": " + this.article;
    }
}
