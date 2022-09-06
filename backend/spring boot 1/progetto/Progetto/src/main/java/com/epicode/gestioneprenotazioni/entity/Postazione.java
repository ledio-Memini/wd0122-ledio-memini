package com.epicode.gestioneprenotazioni.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Postazione {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codiceUnivoco;
	
	private Tipo tipo;
	
	private int maxOccupanti;
	
	@ManyToOne
	private Edificio edificio;
	
	private postazioneDisponibilita postazioneDisponibilita;


	
}
