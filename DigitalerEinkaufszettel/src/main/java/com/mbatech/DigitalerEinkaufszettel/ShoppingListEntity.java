package com.mbatech.DigitalerEinkaufszettel;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ShoppingListEntity {
    @Id
    private String article;
    private int amount;
    private String unit;

    public ShoppingListEntity(){}

    public ShoppingListEntity(String article, int amount, String unit){
        this.article = article;
        this.amount = amount;
        this.unit = unit;
    }

    public String getArticle(){
        return this.article;
    }

    public int getAmount(){
        return this.amount;
    }

    public String getUnit(){
        return this.unit;
    }

    @Override
    public String toString(){
        return this.article + " " + this.amount + " " + this.unit;
    }
}
