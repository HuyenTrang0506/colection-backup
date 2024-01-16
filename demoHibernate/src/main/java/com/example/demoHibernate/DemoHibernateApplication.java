package com.example.demoHibernate;

import jakarta.persistence.EntityManager;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoHibernateApplication {

    public static void main(String[] args) {

        SpringApplication.run(DemoHibernateApplication.class, args);
        //EntityManager
    }

}
