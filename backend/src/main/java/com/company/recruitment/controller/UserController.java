package com.company.recruitment.controller;

import com.company.recruitment.model.User;
import com.company.recruitment.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/roles")
    public List<String> getUserRoles() {
        return userService.getAllUserRoles();
    }
    
    @GetMapping("/users/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
