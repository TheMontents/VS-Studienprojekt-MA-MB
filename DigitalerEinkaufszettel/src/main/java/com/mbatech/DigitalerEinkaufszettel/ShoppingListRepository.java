package com.mbatech.DigitalerEinkaufszettel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingListRepository extends JpaRepository<ShoppingListEntity, String> {
    
}
