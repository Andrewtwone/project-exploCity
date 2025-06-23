package com.example.ExpocityProject.controller;

import com.example.ExpocityProject.entity.UserEntity;
import com.example.ExpocityProject.io.UserRequest;
import com.example.ExpocityProject.io.UserResponse;
import com.example.ExpocityProject.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://main-frontend:80"})
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse register(@RequestBody UserRequest request){
        return userService.registerUser(request);
    }

    @GetMapping("/users/me")
    public ResponseEntity<UserResponse> getCurrentUser() {
        return ResponseEntity.ok(userService.getCurrentUser());
    }
}
