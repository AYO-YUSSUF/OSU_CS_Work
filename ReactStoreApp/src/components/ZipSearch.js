import React, { useState } from "react";

function ZipSearch() {

    const [zipCode, setZipCode] = useState('');

    return (

        <form action="" method="">
            <fieldset>
                <legend>Please enter your 5 digit zip code here:</legend>
                <label for="zip">Zip Code</label>
                <input type="number" required
                    value={zipCode}
                    id="zip"
                    name="zipCode"
                    placeholder="12345"
                    size="5"
                    maxLength="5"
                    min="5"
                    onChange={e => setZipCode(e.target.value)}
                />

                <label for="alert">
                    <button name="alert" id="alert" onClick={e => {
                        alert(`You entered ${zipCode}`);
                        e.preventDefault();
                        }}>Submit</button>
                </label>
            </fieldset>
        </form>

    );

}

export default ZipSearch;