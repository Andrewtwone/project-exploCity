package com.example.ExpocityProject.repository;

import com.example.ExpocityProject.entity.CartEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface CartRepository extends MongoRepository<CartEntity, String>
{


   Optional<CartEntity> findByUserid(String userId);
    void deleteByUserid(String userId );
}



