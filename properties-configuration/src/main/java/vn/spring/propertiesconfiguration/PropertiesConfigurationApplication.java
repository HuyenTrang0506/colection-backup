package vn.spring.propertiesconfiguration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class PropertiesConfigurationApplication {
	@Value("${khoahoc.ten}")
	private String ten;
	@Value("${khoahoc.huongdan}")
	private String huongdan;
	@Value(("${khoahoc.website}"))
	private String website;

	public static void main(String[] args) {
		SpringApplication.run(PropertiesConfigurationApplication.class, args);
	}
	@GetMapping("/")
	public String index(){
		return "Xin chao Huyen Trang";
	}
	@GetMapping("/info")
	public String info(){
		return "Ten: "+ten+"<br/>"+
				"Huong dan: "+huongdan+"<br/>"+
				"Website: "+website+"<br/>";
	}
}
