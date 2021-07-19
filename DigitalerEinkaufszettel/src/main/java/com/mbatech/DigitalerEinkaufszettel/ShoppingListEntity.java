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

    public String getShoppingListEntry(){
        return this.article + " " + this.amount + " " + this.unit;
    }
}
