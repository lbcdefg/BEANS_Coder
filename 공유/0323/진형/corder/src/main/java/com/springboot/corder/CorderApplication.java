package com.springboot.corder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing //위의 CommonEntity를 사용하기위해서 반드시 추가할 것!
public class CorderApplication {

	public static void main(String[] args) {
		SpringApplication.run(CorderApplication.class, args);
	}

}
