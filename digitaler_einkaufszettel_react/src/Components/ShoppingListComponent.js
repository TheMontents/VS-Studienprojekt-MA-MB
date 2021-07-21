import React from "react";
import ShoppingListService from "../Services/ShoppingListService";

class ShoppingListComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            shoppingList:[],
            newShoppingListEntry: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
        ShoppingListService.getShoppingList().then((response) => {
            this.setState({ shoppingList: response.data})
        });
    }

    deleteArticle(articleId){
        ShoppingListService.deleteShoppingListEntry(articleId).then((response) => {
           if(response.data != null){
                this.setState({
                shoppingList: this.state.shoppingList.filter(shoppingListEntry => shoppingListEntry.articleId !== articleId)
                });
            } 
        });
    }

    handleInputChange(event){
        this.setState({newShoppingListEntry: event.target.value});
    }

    handleSubmit(event){
        ShoppingListService.postShoppingListEntry(this.state.newShoppingListEntry).then((response) => {
            console.log(response.data);
            this.setState({shoppingList: this.state.shoppingList.concat(response.data)});
        });
        event.preventDefault();
    }

    render (){
        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Einkaufszettel Eintrag" value={this.state.newShoppingListEntry} onChange={this.handleInputChange}/>
                        <button type="submit" >Hinzufügen</button>
                    </form>
                </div>  
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