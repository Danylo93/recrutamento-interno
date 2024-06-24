package com.company.recruitment.service;

import com.company.recruitment.model.User;

public interface AuthService {
    String authenticate(String username, String password);
    User register(String username, String password, String role);
}
