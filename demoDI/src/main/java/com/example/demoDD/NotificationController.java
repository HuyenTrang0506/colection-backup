package com.example.demoDD;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotificationController {
    @Autowired
    private MessageInterface email;
//    @Autowired
//    public NotificationController(EmailService email){
//        this.email=email;
//    }

//    @Autowired
//    public void setEmail(EmailService email){
//        this.email=email;
//    }
    @GetMapping("/send-email")
    public String sendEmail(){
        return this.email.sendMessage();
    }
}
