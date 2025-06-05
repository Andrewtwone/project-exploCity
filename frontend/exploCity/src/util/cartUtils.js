export const calculateCartTotals = (cartItems, quantities) => {
    //calculation
    const subtotal = cartItems.reduce((acc, event) => acc + event.price * quantities[event.id], 0);
    // const shipping = subtotal === 0 ? 0.0 : 10;
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    return { subtotal, tax, total };
}