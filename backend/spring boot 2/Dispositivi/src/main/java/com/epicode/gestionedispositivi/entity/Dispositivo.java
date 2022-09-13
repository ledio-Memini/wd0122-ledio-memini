package com.epicode.gestionedispositivi.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="dispositivi")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Dispositivo {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	Long id;
	
	@OneToOne
	private Tipo tipo;
	@OneToOne
	private Disponibilita disponibilita;
}
