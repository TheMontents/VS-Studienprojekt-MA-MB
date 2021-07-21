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
@CrossOrigin(origins = "http://localhost:4200")
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
	public String addShoppingListEntry(@PathVariable String article){
		shoppingListRepository.save(new ShoppingListEntity(article));
		return article + " added to the ShoppingList";
	}

    @PutMapping("/updateShoppingListEntry/{oldShoppingListEntryId}/{newShoppingListEntry}")
	public String updateString(@PathVariable int oldShoppingListEntryId, @PathVariable String newShoppingListEntry){
        ShoppingListEntity entryToUpdate = shoppingListRepository.findById(oldShoppingListEntryId).get();
        if(entryToUpdate != null){
            entryToUpdate.setArticle(newShoppingListEntry);
            shoppingListRepository.save(entryToUpdate);
        }
        return entryToUpdate + " wurde aktualisiert"; 
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
