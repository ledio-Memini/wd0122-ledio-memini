package utenti;

import java.util.Set;

import titoliDiViaggio.abbonamenti;
import titoliDiViaggio.biglietto;
import titoliDiViaggio.tessera;

public class utenti {

	private String nome;
	private tessera tessera;
	private abbonamenti abbonamenti;
	private Set<biglietto> biglietto;
	
	
	public utenti(String nome, titoliDiViaggio.tessera tessera, titoliDiViaggio.abbonamenti abbonamenti,
			Set<titoliDiViaggio.biglietto> biglietto) {
		
		this.nome = nome;
		this.tessera = tessera;
		this.abbonamenti = abbonamenti;
		this.biglietto = biglietto;
	}

	
	
	
	public utenti() {
		
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public tessera getTessera() {
		return tessera;
	}


	public void setTessera(tessera tessera) {
		this.tessera = tessera;
	}


	public abbonamenti getAbbonamenti() {
		return abbonamenti;
	}


	public void setAbbonamenti(abbonamenti abbonamenti) {
		this.abbonamenti = abbonamenti;
	}


	public Set<biglietto> getBiglietto() {
		return biglietto;
	}


	public void setBiglietto(Set<biglietto> biglietto) {
		this.biglietto = biglietto;
	}
	
	
	
	
	
	
	
}
