package com.example.ExpocityProject.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection =  "users")
@Builder
public class UserEntity {
    @Id
    public String id;
    private String name;
    private String email;
    private String password;
}
