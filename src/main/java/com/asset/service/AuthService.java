package com.asset.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asset.dao.UserRepository;
import com.asset.model.User;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public User authenticateUser(String username, String password) {
        // Implement logic to fetch user from the database based on the provided username
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user; // User authenticated successfully
        }
        return null; // Authentication failed
    }
}
