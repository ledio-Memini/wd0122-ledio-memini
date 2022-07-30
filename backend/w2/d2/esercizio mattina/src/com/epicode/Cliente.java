package com.epicode;

import java.util.Objects;

public class Cliente {

	private String nome;
	private String cognome;
	private String codiceUnivoco;
	private String regioneAppartenenza;

	public Cliente(String nome, String cognome, String codiceUnivoco, String regioneAppartenenza) {

		this.nome = nome;
		this.cognome = cognome;
		this.codiceUnivoco = codiceUnivoco;
		this.regioneAppartenenza = regioneAppartenenza;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getCodiceUnivoco() {
		return codiceUnivoco;
	}

	public void setCodiceUnivoco(String codiceUnivoco) {
		this.codiceUnivoco = codiceUnivoco;
	}

	public String getRegioneAppartenenza() {
		return regioneAppartenenza;
	}

	public void setRegioneAppartenenza(String regioneAppartenenza) {
		this.regioneAppartenenza = regioneAppartenenza;
	}

	@Override
	public boolean equals(Object obj) {
		// due clienti sono uguali quanto il codice e uguale

		if (obj instanceof Cliente) {
			Cliente c = (Cliente) obj;
			//per confrontare sringhe usare equals
			if (c.codiceUnivoco.equals(this.codiceUnivoco)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}

	}
	
	@Override
	public int hashCode() {
		
		return Objects.hash(codiceUnivoco);
	}
	
	@Override
	public String toString() {

		return super.toString();
	}

}
