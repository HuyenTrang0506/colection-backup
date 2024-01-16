package com.example.demoDD.rest;

import com.example.demoDD.service.EmailService;
import com.example.demoDD.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotificationController {

    private MessageService service;

    @Autowired
    public NotificationController(@Qualifier("smsService") MessageService service) {
        this.service = service;
    }

    @GetMapping("/send-email")
    public String sendEmail() {
        return this.service.sendMessage();
    }
}
