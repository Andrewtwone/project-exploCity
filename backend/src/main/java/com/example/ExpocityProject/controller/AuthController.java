package com.example.ExpocityProject.controller;

import com.example.ExpocityProject.io.AuthenticationRequest;
import com.example.ExpocityProject.io.AuthenticationResponse;
import com.example.ExpocityProject.service.AppUserDetailsService;
import com.example.ExpocityProject.util.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class AuthController {
    private final JwtUtil jwtUtil;


    private final AuthenticationManager authenticationManager;
    private final AppUserDetailsService userDetailsService;
    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody AuthenticationRequest request) throws Exception {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        final String jwtToken =  jwtUtil.generateToken(userDetails);
        return new AuthenticationResponse(request.getEmail(), jwtToken);
    }
}
