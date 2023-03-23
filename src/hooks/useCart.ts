import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

export default function UseCart() {
    const context = useContext(CartContext);
    return context;
}