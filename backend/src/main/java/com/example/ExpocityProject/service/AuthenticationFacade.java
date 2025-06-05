package com.example.ExpocityProject.service;

import com.example.ExpocityProject.io.AuthenticationResponse;
import org.springframework.security.core.Authentication;

public interface AuthenticationFacade {

    Authentication getAuthentication();
}
