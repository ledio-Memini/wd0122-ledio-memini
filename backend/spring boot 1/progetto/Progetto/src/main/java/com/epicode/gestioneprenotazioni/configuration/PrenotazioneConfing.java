package com.epicode.gestioneprenotazioni.configuration;

import org.springframework.context.annotation.Bean;

import com.epicode.gestioneprenotazioni.entity.Postazione;
import com.epicode.gestioneprenotazioni.entity.Prenotazione;

public class PrenotazioneConfing {

	
	 Postazione postazione1;
	 
	 @Bean
	 public Prenotazione prenotazione1() {
		 
		 Prenotazione prenotazione = Prenotazione.builder()
				 					.postazione(postazione1)
				 					.build();
		 
		 return prenotazione;
	 }
}
