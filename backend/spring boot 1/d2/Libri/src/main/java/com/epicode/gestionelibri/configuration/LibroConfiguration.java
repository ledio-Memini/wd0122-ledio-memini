package com.epicode.gestionelibri.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.epicode.gestionelibri.entity.Libro;
import com.github.javafaker.Faker;

@Configuration
public class LibroConfiguration {

	@Bean("TestBean")
	@Scope("prototype")
	public Libro newTestLibro() {
		
		Libro l = new Libro();
		l.setTitolo( Faker.instance().book().title()   );
		l.setAutore(  Faker.instance().book().author()  );
		l.setCasaEditrice(Faker.instance().book().publisher());
		
		return l;
		
	}
	
	
	@Bean("NewBean")
	@Scope("prototype")
	public Libro libroVuoto() {
		Libro l = new Libro();
		return l;
	}
	

	
}
