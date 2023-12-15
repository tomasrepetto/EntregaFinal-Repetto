import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context';



const CartWidgetComponent = () => {
    const { itemCount } = React.useContext(CartContext);

    const iconStyles = {
        fontSize: '1.3rem',
        paddingRight: '10px',
    }
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping} style={iconStyles} />
            <span style={{fontSize: '1.3rem'}}>{itemCount}</span>
        </div>
    )
}

export default CartWidgetComponent;