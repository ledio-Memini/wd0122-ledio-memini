package com.epicode.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table
public class macchina {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private long id;
	
	@Column
	private String marca;
	
	@Column
	private String modello;
	
	@Column
	private String colore;
	
	@Column
	private String prezzo;
	
	@Column
	private int garanzia;
	
	@Column
	private String alimentazione;
	
	@Column
	private int cilindrata;
	
	@Column
	private int potenza;
	
	@Column
	private int cavalli;
	
	@Column
	private String trazione;
	
	@Column
	private String cambio;
	
	@Column
	private int porte;
	
	@Column
	private int posti;
	
	
	
	

}
