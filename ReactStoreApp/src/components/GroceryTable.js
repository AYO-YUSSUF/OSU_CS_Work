import React from "react";
import GroceryRow from './GroceryRow';

function GroceryTable({ items, quantity }) {

    return (

        <table id="grocerylist" class="center">

            <caption>Snacks For Sale</caption>

            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Choose Quantity</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, i) => <GroceryRow item={item} key={i} />)}
            </tbody>

            <tfoot>

            </tfoot>

        </table>

    );

}

export default GroceryTable;