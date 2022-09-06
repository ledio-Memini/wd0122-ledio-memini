package com.epicode.gestioneprenotazioni.configuration;

import org.springframework.context.annotation.Bean;

import com.epicode.gestioneprenotazioni.entity.Utente;

public class UtenteConfig {

	
	Utente utente;
	
	@Bean
	public Utente utente() {
		
		Utente utente = Utente.builder()
				.nome("giovanni")
				.username("rossi")
				.email("giovanniRossi@gmail.com")
				.build();
		
		return utente;
		
	}
}
