const addItemToCart = ( cartItems, cartItemToAdd ) => {

    console.log(cartItems);
    const isExist = cartItems.find( item => item.id == cartItemToAdd.id );

    if( isExist ) {
       return cartItems.map( item =>  
            item.id === cartItemToAdd.id ? 
            { ...item, qunatity: item.qunatity + 1  } : item )
    } 

    return [ ...cartItems, {...cartItemToAdd, qunatity:1 } ]
}
export default addItemToCart;