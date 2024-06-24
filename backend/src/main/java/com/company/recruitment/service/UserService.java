package com.company.recruitment.service;

import com.company.recruitment.model.Role;
import com.company.recruitment.model.User;
import com.company.recruitment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<String> getAllUserRoles() {
        return userRepository.findAll().stream()
                .flatMap(user -> user.getRoles().stream())
                .map(Role::getName) // Mapear cada Role para seu nome
                .distinct()
                .collect(Collectors.toList());
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
