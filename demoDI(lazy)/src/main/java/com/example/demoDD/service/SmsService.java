package com.example.demoDD.service;

import org.springframework.stereotype.Component;

@Component
public class SmsService implements MessageService{
    public SmsService(){
        System.out.println("Constructor cua lop: "+getClass().getSimpleName());
    }
    @Override
    public String sendMessage() {
        return "SMS sending ....";
    }
}
