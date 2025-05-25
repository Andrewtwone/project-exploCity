package com.example.ExpocityProject.repository;

import com.example.ExpocityProject.entity.SightEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SightRepository extends MongoRepository<SightEntity, String> {

}
