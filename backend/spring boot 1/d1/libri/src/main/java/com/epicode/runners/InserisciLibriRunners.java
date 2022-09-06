package com.epicode.runners;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.epicode.gestionelibri.entity.libro;
import com.epicode.gestionelibri.services.LibroService;
import com.github.javafaker.Faker;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class InserisciLibriRunners implements ApplicationRunner {

	@Autowired
	private LibroService libroService;
	@Override
	public void run(ApplicationArguments args) throws Exception {
		
		log.info("---------- runner partito");

	
		
		
		for (int i = 0; i < 20; i++) {
			libro l = new libro();
			l.setTitolo(Faker.instance().book().title());
			l.setAutore(Faker.instance().book().author());
			l.setCasaEditrice(Faker.instance().book().publisher());
			
			libroService.crea(l);
		}
		System.out.println(libroService.trovaTutti());
		
	}

}
