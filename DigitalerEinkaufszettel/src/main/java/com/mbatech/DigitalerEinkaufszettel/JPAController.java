package com.mbatech.DigitalerEinkaufszettel;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JPAController {

    @Autowired
    private ShoppingListRepository shoppingListRepository;

    @GetMapping("/getShoppingList")
    public ResponseEntity<List<ShoppingListEntity>> getShoppingList(){
        List<ShoppingListEntity> shoppingList = (List<ShoppingListEntity>) shoppingListRepository.findAll();
        return new ResponseEntity<>(shoppingList, HttpStatus.OK);
    }    

    @PostMapping("/addShoppingListEntry/{article}/{amount}/{unit}")
	public String addShoppingListEntry(@PathVariable String article, @PathVariable int amount, @PathVariable String unit){
		shoppingListRepository.save(new ShoppingListEntity(article, amount, unit));
		return article + " added to the ShoppingList";
	}

    @DeleteMapping("/deleteShoppingListEntry/{article}") 
	public String deleteShoppingListEntry(@PathVariable String article){
        ShoppingListEntity  entryToRemove = shoppingListRepository.findById(article).get();
        if(entryToRemove != null){
            shoppingListRepository.delete(entryToRemove);
        }
		return article + " was deleted";
	}
}
