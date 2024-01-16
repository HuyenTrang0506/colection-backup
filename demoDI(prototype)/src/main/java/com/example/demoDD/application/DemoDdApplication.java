package com.example.demoDD.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(
		scanBasePackages = {
				"net.khdl",
				"com.example.demoDD.application",
				"com.example.demoDD.rest",
				"com.example.demoDD.service",

		}
)
public class DemoDdApplication {

	public static void main(String[] args) {

		SpringApplication.run(DemoDdApplication.class, args);
	}

}
