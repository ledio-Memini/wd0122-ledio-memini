package mezzietratte;

import java.lang.reflect.Array;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import utenti.utenti;
import titoliDiViaggio.*;

import distributori.funzione;
import jakarta.persistence.Embedded;

@Entity
public class mezzo implements metodiMezzi {

	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long id;
	
	@Column(name = "capienza")
	private utenti[] capienza;
	
	@Column(name = "inFunzione")
	private funzione inFunzione;
	
	@Column(name = "tratta")
	@Embedded
	private tratta tratta;
	
	private Set<biglietto> listaBiglietti;
	
	public mezzo(long id, utenti[] capienza, funzione inFunzione, mezzietratte.tratta tratta) {
		
		this.id = id;
		this.capienza = capienza;
		this.inFunzione = inFunzione;
		this.tratta = tratta;
	}

	public mezzo() {
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public utenti[] getCapienza() {
		return capienza;
	}

	public void setCapienza(utenti[] capienza) {
		this.capienza = capienza;
	}

	public funzione getInFunzione() {
		return inFunzione;
	}

	public void setInFunzione(funzione inFunzione) {
		this.inFunzione = inFunzione;
	}

	public tratta getTratta() {
		return tratta;
	}

	public void setTratta(tratta tratta) {
		this.tratta = tratta;
	}
	
	
	public Set<biglietto> getListaBiglietti() {
		return listaBiglietti;
	}

	public void setListaBiglietti(Set<biglietto> listaBiglietti) {
		this.listaBiglietti = listaBiglietti;
	}

	
	
	
	
	@Override
	public void convalida(utenti u) {
		
		Set<biglietto> listaBiglietti = u.getBiglietto();
		biglietto b = (biglietto) listaBiglietti.stream().filter(r -> r.getConvalida().equals(null));
		LocalDate c = LocalDate.now();
		b.setConvalida(c);
		
	}

	@Override
	public void totBiglietti() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void tempoEffettivo() {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public void validazioneAbbonamento() {
		// TODO Auto-generated method stub
		
	}


}
