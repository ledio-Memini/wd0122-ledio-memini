package com.epicode.project.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.epicode.project.entity.macchina;

@Configuration
public class macchinaConfig {

	@Bean
	public macchina macchina1() {
		return macchina.builder()
				.marca("Rolls-Royce")
				.modello("Phantom")
				.colore("nero-verde")
				.prezzo("460.000")
				.garanzia(1)
				.alimentazione("benzina")
				.cilindrata(6749)
				.potenza(338)
				.cavalli(460)
				.trazione("posteriore")
				.cambio("automatico")
				.porte(2)
				.posti(4)
				.build();
	}
}
