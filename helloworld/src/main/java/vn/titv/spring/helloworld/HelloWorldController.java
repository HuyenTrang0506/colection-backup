package vn.titv.spring.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping("/")//thư mục gốc
    public String index(){
        return "Hello World!";
    }
    @GetMapping("/h2")
    public String index2(){
        return "Xin chào!";
    }
}
