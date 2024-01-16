package com.example.demoDD.service;

import org.springframework.stereotype.Component;

@Component
public class SmsService implements MessageService{
    @Override
    public String sendMessage() {
        return "SMS sending ....";
    }
}
