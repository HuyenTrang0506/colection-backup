package com.example.demoDD;

import org.springframework.stereotype.Component;

@Component
public class EmailService implements MessageInterface{
    @Override
    public String sendMessage() {
        return "Email Sending ..... ";
    }
}
