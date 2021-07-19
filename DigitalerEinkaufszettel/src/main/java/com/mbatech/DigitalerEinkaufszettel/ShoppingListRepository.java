package com.mbatech.DigitalerEinkaufszettel;

import org.springframework.data.repository.CrudRepository;

public interface ShoppingListRepository extends CrudRepository<ShoppingListEntity, String> {
    
}
