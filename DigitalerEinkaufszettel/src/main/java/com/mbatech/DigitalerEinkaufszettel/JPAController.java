package com.mbatech.DigitalerEinkaufszettel;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin()
@RestController
public class JPAController {

    @Autowired
    private ShoppingListRepository shoppingListRepository;

    @GetMapping("/getShoppingList")
    public ResponseEntity<List<ShoppingListEntity>> getShoppingList(){
        List<ShoppingListEntity> shoppingList = shoppingListRepository.findAll();
        return new ResponseEntity<>(shoppingList, HttpStatus.OK);
    }    

    @PostMapping("/addShoppingListEntry/{article}")
	public ResponseEntity<ShoppingListEntity> addShoppingListEntry(@PathVariable String article){
        ShoppingListEntity shoppingListEntityToAdd = new ShoppingListEntity(article);
		shoppingListRepository.save(shoppingListEntityToAdd);
		return new ResponseEntity<>(shoppingListEntityToAdd, HttpStatus.OK);
	}

    @PutMapping("/updateShoppingListEntry/{oldShoppingListEntryId}/{newShoppingListEntry}")
	public ResponseEntity<ShoppingListEntity> updateString(@PathVariable int oldShoppingListEntryId, @PathVariable String newShoppingListEntry){
        ShoppingListEntity entryToUpdate = shoppingListRepository.findById(oldShoppingListEntryId).get();
        if(entryToUpdate != null){
            entryToUpdate.setArticle(newShoppingListEntry);
            shoppingListRepository.save(entryToUpdate);
        }
        return new ResponseEntity<>(entryToUpdate, HttpStatus.OK); 
	}

    @DeleteMapping("/deleteShoppingListEntry/{articleId}") 
	public ResponseEntity<ShoppingListEntity> deleteShoppingListEntry(@PathVariable int articleId){
        ShoppingListEntity  entryToRemove = shoppingListRepository.findById(articleId).get();
        if(entryToRemove != null){
            shoppingListRepository.delete(entryToRemove);
        }
		return new ResponseEntity<>(entryToRemove, HttpStatus.OK);
	}
}
