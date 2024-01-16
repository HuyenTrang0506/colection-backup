package com.example.demoDD.service;

import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;


@Component
public class EmailService implements MessageService {
    public EmailService(){
        System.out.println("Constructor cua lop: "+getClass().getSimpleName());
    }
    @Override
    public String sendMessage() {
        return "Email Sending ..... ";
    }
}
