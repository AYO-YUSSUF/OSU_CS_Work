import React, { useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';


function SelectQuantity() {

    const [quantity, setQuantity] = useState(0);

    const increment = () => setQuantity(quantity === 10 ? quantity : quantity + 1);
    const decrement = () => setQuantity(quantity === 0 ? 0 : quantity - 1);

    return (

        <div>

            <BsCaretDownFill onClick={decrement} class="pointer" />

            <span class="qv">{quantity}</span>

            <BsCaretUpFill onClick={increment} class="pointer" />

        </div>

    );

}

export default SelectQuantity;