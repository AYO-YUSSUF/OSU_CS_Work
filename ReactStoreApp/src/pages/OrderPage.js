import React from 'react';
import GroceryTable from '../components/GroceryTable';


function OrderPage({ items }) {

    return (

        <> {/* Tag for making a React fragment */}

        <article className="App-article">

            <h2>Please select which snacks you would like to buy.</h2>
            <p>You may order no more than 10 of each item.</p>

            <GroceryTable items={items}/>

        </article>

        </>

    );

}

export default OrderPage;