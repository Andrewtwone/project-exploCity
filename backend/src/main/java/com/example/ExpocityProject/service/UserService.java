package com.example.ExpocityProject.service;

import com.example.ExpocityProject.io.UserRequest;
import com.example.ExpocityProject.io.UserResponse;

public interface UserService {

    UserResponse registerUser(UserRequest request);
    UserResponse getCurrentUser();
    String findByUserId();

}
