package com.example.demoDD.rest;

import com.example.demoDD.service.EmailService;
import com.example.demoDD.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Notification2Controller {

    private MessageService service;
    private MessageService service2;

    @Autowired
    public Notification2Controller(@Qualifier("emailService") MessageService service,
                                   @Qualifier("emailService") MessageService service2
    ) {
        this.service = service;
        this.service2 = service2;
    }

    @GetMapping("/email")
    public String sendEmail() {
        return this.service.sendMessage();
    }
    @GetMapping("/check")
    public String check(){
        return "Ktra "+(service==service2);
    }
    @GetMapping("/check2")
    public String check2(){
       if(service==service2){
           return "SINGLETON";
       }else{
           return "PROTOTYPE";
       }
    }



}
