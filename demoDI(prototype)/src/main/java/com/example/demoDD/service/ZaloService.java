package com.example.demoDD.service;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component

public class ZaloService implements MessageService{
    public ZaloService(){
        System.out.println("Constructor cua lop: "+getClass().getSimpleName());
    }
    @Override
    public String sendMessage() {
        return "Zalo Sending .....";
    }
}
