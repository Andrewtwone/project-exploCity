package com.example.ExpocityProject.service;

import com.example.ExpocityProject.io.CartRequest;
import com.example.ExpocityProject.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    void clearCart();

    CartResponse removeFromCart(CartRequest cartRequest);
}
