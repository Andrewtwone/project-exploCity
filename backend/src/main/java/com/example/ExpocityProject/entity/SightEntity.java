package com.example.ExpocityProject.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "sights")
public class SightEntity {
    @Id
    private String id;
    private String name;
    private String description;
    private double price;
    private String category;
    private String imageUrl;  // we are getting this Url from SightServiceImpl class
    //  method: public String uploadFile(MultipartFile file)
}
