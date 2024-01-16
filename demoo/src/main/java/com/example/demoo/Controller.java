package com.example.demoo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class Controller {
    private Calculator cal;
    @Autowired
    public Controller(@Qualifier("getCalculator") Calculator myCal){
        this.cal=myCal;
    }
  @GetMapping("/canBacHai")
    public String tinhCanBacHai(@RequestParam("value") double x){
      return "Sqrt ("+x+"^2) ="+ cal.canBacHai(x);
  }
    @GetMapping("/binhPhuong")
    public String tinhBinhPhuong(@RequestParam("value") double x){
        return "Sqrt ("+x+"^2) ="+ cal.binhPhuong(x);
    }

}
