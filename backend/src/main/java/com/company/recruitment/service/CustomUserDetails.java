package com.company.recruitment.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.company.recruitment.model.User;
import java.util.Collection;
import java.util.Set;

public class CustomUserDetails extends User implements UserDetails {
    private Set<? extends GrantedAuthority> authorities;

    public CustomUserDetails(User user, Set<? extends GrantedAuthority> authorities) {
        super(user.getId(), user.getUsername(), user.getPassword(), user.getRoles());
        this.authorities = authorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
