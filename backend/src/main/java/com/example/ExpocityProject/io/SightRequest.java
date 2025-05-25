package com.example.ExpocityProject.io;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SightRequest {
    private String name;
    private String description;
    private double price;
    private String category;

}
