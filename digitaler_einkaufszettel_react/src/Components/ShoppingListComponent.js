import React from "react";
import ShoppingListService from "../Services/ShoppingListService";

class ShoppingListComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            shoppingList:[]
        }
    }


    componentDidMount(){
        ShoppingListService.getShoppingList().then((response) => {
            this.setState({ shoppingList: response.data})
        });
    }

    deleteArticle(articleId){
       ShoppingListService.deleteShoppingListEntry(articleId).then((response) =>{
           if(response.data != null){
            this.setState({
                shoppingList: this.state.shoppingList.filter(shoppingListEntry => shoppingListEntry.articleId !== articleId)
               });
           }
       });
    }

    render (){
        return(
            <div>
                <div>
                    <h1 className = "text-center"> Einkaufszettel</h1>
                    <table className = "table table-striped">
                        <thead>
                            <tr>
                                <td>Artikel</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.shoppingList.map(
                                    shoppingList => 
                                    <tr key = {shoppingList.articleId}>
                                        <td> {shoppingList.article}</td> 
                                        <td><button onClick={() => this.deleteArticle(shoppingList.articleId)}>gekauft</button></td>     
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ShoppingListComponent;