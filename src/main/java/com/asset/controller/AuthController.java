package com.asset.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asset.model.LoginForm;
import com.asset.model.User;
import com.asset.service.AuthService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/authenticate")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginForm loginForm) {
        String username = loginForm.getUsername();
        String password = loginForm.getPassword();
        User authenticatedUser = authService.authenticateUser(username, password);
        if (authenticatedUser != null) {
            // User authenticated successfully; return a token or a success message
            // You can use JWT or a custom token mechanism here
            String token = generateToken(authenticatedUser);
            return ResponseEntity.ok(token);
        } else {
            // Authentication failed; return an error response
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
        }
    }

    private String generateToken(User user) {
        // Implement token generation logic here (e.g., using JWT)
        // Return a token that can be used for future requests
        return "your-generated-token";
    }
}
