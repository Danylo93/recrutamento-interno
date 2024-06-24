package com.company.recruitment.config;

import com.company.recruitment.model.Role;
import com.company.recruitment.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        if (roleRepository.findAll().isEmpty()) {
            Role userRole = new Role();
            userRole.setName("USER");
            Role adminRole = new Role();
            adminRole.setName("ADMIN");
            roleRepository.saveAll(Arrays.asList(userRole, adminRole));
        }
    }
}
