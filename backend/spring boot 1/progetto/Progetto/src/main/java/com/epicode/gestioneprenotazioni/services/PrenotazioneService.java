package com.epicode.gestioneprenotazioni.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epicode.gestioneprenotazioni.entity.Prenotazione;
import com.epicode.gestioneprenotazioni.entity.Utente;
import com.epicode.gestioneprenotazioni.repository.UtenteRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class PrenotazioneService {

	@Autowired
	private Prenotazione prenotazione;
	
	public Prenotazione creaPrenotazione() {
		return prenotazione;
	}
	
	public void stampaPrenotazione() {
		
		Prenotazione prenotazione = creaPrenotazione();
		
		log.info("disponibilita" + prenotazione.getPostazione().getPostazioneDisponibilita());
	}
	

}
