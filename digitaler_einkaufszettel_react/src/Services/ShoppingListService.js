import axios from 'axios'

const GET_SHOPPINGLIST_REST_API_URL = "http://localhost:8080/getShoppingList";
const DELETE_SHOPPINGLISTENTRY_REST_API_URL = "http://localhost:8080/deleteShoppingListEntry/"

class ShoppingListService{
  getShoppingList(){
    return axios.get(GET_SHOPPINGLIST_REST_API_URL);
  };

  deleteShoppingListEntry = (articleId) => {
    return axios.delete(DELETE_SHOPPINGLISTENTRY_REST_API_URL + articleId);
  };

  postShoppingListEntry = (article) => {
    
  }
}

export default new ShoppingListService();