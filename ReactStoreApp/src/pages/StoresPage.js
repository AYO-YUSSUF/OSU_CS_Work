import React from 'react';
import StoreTable from '../components/StoreTable';
import ZipSearch from '../components/ZipSearch';


function StoresPage({ stores }) {

    return (

        <> {/* Tag for making a React fragment */}

        <article className="App-article">

            <h2>Locate one of our fine establishments in your neighborhood.</h2>
            <StoreTable stores={stores} />
            <ZipSearch />

        </article>

        </>

    );

}

export default StoresPage;