package com.epicode.gestioneprenotazioni.configuration;

import org.springframework.context.annotation.Configuration;


import com.epicode.gestioneprenotazioni.entity.Edificio;
import com.epicode.gestioneprenotazioni.entity.Postazione;
import com.epicode.gestioneprenotazioni.entity.Tipo;
import com.epicode.gestioneprenotazioni.entity.postazioneDisponibilita;

@Configuration
public class PostazioneConfig {
	
	public Postazione postazione1() {
		
		return Postazione.builder()
				.maxOccupanti(1)
				.tipo(Tipo.OPENSPACE)
				.postazioneDisponibilita(postazioneDisponibilita.LIBERO)
				.build();
					
	}
	


	public Postazione postazione2() {
		
		return Postazione.builder()
				.maxOccupanti(1)
				.tipo(Tipo.PRIVATO)
				.postazioneDisponibilita(postazioneDisponibilita.LIBERO)
				.build();
					
	}
	
	public Postazione postazione3() {
		
		return Postazione.builder()
				.maxOccupanti(1)
				.tipo(Tipo.SALA_RIUNIONI)
				.postazioneDisponibilita(postazioneDisponibilita.OCCUPATO)
				.build();
					
	}
}
