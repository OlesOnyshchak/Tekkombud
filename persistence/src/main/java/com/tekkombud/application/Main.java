package com.tekkombud.application;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Main {
    public static void main(String[] args) {
        System.out.println("hello");
        BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
        String encrypted=passwordEncoder.encode("user");
        System.out.println(encrypted);
    }
}
