import axios from 'axios'

const SHOPPINGLIST_REST_API_URL = "http://localhost:8080/getShoppingList";

class ShoppingListService{
  getShoppingList(){
    return axios.get(SHOPPINGLIST_REST_API_URL);
  }
}

export default new ShoppingListService();