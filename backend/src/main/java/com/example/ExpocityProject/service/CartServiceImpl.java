package com.example.ExpocityProject.service;

import com.example.ExpocityProject.entity.CartEntity;
import com.example.ExpocityProject.io.CartRequest;
import com.example.ExpocityProject.io.CartResponse;
import com.example.ExpocityProject.repository.CartRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.OptionalInt;

@Service
@AllArgsConstructor

public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final UserService userService;
    @Override
    public CartResponse addToCart(CartRequest request) {
        String loggedInUserId = userService.findByUserId();
        Optional<CartEntity> carOptional = cartRepository.findByUserid(loggedInUserId);
        CartEntity cart = carOptional.orElseGet(()-> new CartEntity(loggedInUserId, new HashMap<>()));
       Map<String, Integer> cartItems =  cart.getItems();
        cartItems.put(request.getSightid(), cartItems.getOrDefault(request.getSightid(), 0)+1);
        cart.setItems(cartItems);
        cart = cartRepository.save(cart);
       return convertToResponse(cart);
    }

    @Override
    public CartResponse getCart() {
        String loggedInUserId = userService.findByUserId();
        CartEntity entity = cartRepository.findByUserid(loggedInUserId)
                .orElse(new CartEntity(null, loggedInUserId, new HashMap<>()));
        return  convertToResponse(entity);
    }

    @Override
    public void clearCart() {
        String loggedInUserId = userService.findByUserId();
        cartRepository.deleteByUserid(loggedInUserId);
    }

    @Override
    public CartResponse removeFromCart(CartRequest cartRequest) {
        String loggedInUserId = userService.findByUserId();
       CartEntity entity = cartRepository.findByUserid(loggedInUserId).orElseThrow(()-> new RuntimeException("Cart is not found"));
          Map<String, Integer> cartItems = entity.getItems();
          if (cartItems.containsKey(cartRequest.getSightid())){
              int currentQty = cartItems.get(cartRequest.getSightid());
              if (currentQty>0){
                  cartItems.put(cartRequest.getSightid(), currentQty-1);
              }
              else {
                  cartItems.remove(cartRequest.getSightid());
              }
              entity = cartRepository.save(entity);
          }
      return  convertToResponse(entity);

    }


    private CartResponse convertToResponse(CartEntity cartEntity){
       return CartResponse.builder()
                .id(cartEntity.getId())
                .userid(cartEntity.getUserid())
                .items(cartEntity.getItems())
                .build();
    }




}
