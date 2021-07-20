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

    render (){
        return(
            <div>
                <h1 className = "text-center"> Einkaufszettel</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td>Artikel</td>
                            <td>Menge</td>
                            <td>Einheit</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.shoppingList.map(
                                shoppingList => 
                                <tr key = {shoppingList.article}>
                                     <td> {shoppingList.article}</td>   
                                     <td> {shoppingList.amount}</td>   
                                     <td> {shoppingList.unit}</td>     
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShoppingListComponent;