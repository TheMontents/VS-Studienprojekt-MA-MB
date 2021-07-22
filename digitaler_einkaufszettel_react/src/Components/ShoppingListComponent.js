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
            this.setState({shoppingList: this.state.shoppingList.concat(response.data)});
            this.setState({newShoppingListEntry: ""});
        });
        event.preventDefault();
    }

    render (){
        return(
            <div>
                <div className="shadow card m-3">
                <h5 className="card-header text-white bg-secondary">Artikel hinzufügen</h5>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Einkaufszettel Eintrag" value={this.state.newShoppingListEntry} onChange={this.handleInputChange}/>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-secondary">Hinzufügen</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>  
                <div>
                    <div className="shadow card m-3">
                        <h5 className="card-header text-white bg-secondary">Einkaufszettel</h5>
                        <div className="card-body">
                        <table className = "table table-striped">
                        <tbody>
                            {
                                this.state.shoppingList.map(
                                    shoppingList => 
                                    <tr key = {shoppingList.articleId}>
                                        <td> {shoppingList.article}</td> 
                                        <td><button className="btn btn-secondary" onClick={() => this.deleteArticle(shoppingList.articleId)}>gekauft</button></td>     
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingListComponent;