package com.example.ExpocityProject.repository;

import com.example.ExpocityProject.entity.OrderEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends MongoRepository<OrderEntity, String> {
    List<OrderEntity> findByUserid(String userid);
    Optional<OrderEntity> findByRazorpayOrderId(String razorpayOrderId);

}
