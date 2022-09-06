package com.epicode.gestioneprenotazioni.runners;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.epicode.gestioneprenotazioni.services.PrenotazioneService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
@Order
@AllArgsConstructor
public class PrenotazioniRunner implements ApplicationRunner {

	private PrenotazioneService prenotazioneService;
	@Override
	public void run(ApplicationArguments args) throws Exception {

		prenotazioneService.stampaPrenotazione();
	}

}
