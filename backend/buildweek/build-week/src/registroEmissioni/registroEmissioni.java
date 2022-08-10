package registroEmissioni;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import distributori.rivenditore;
import titoliDiViaggio.abbonamenti;
import titoliDiViaggio.biglietto;

@Entity
@Table(name = "registroEmissioni")
public class registroEmissioni {

	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = " codiceRivenditore")
	@ManyToMany(targetEntity = rivenditore.class, cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
	private Set codiceRivenditore;
	
	@Column(name = " codiceTitoloDiViaggio")
	@ManyToMany(targetEntity = biglietto.class, cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
	private Set codiceBiglietto;
	
	@Column(name = " dataDiEmissione")
	private LocalDate dataDiEmissione;
	
	@Column(name = " dataDiValidazione")
	private LocalDate dataDiValidazione;
	
	@ManyToMany(targetEntity = abbonamenti.class, cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
	private Set codiceAbbonamento;
	

		
	


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public Set getCodiceRivenditore() {
		return codiceRivenditore;
	}


	public void setCodiceRivenditore(Set codiceRivenditore) {
		this.codiceRivenditore = codiceRivenditore;
	}






	public Set getCodiceBiglietto() {
		return codiceBiglietto;
	}


	public void setCodiceBiglietto(Set codiceBiglietto) {
		this.codiceBiglietto = codiceBiglietto;
	}


	public LocalDate getDataDiValidazione() {
		return dataDiValidazione;
	}


	public void setDataDiValidazione(LocalDate dataDiValidazione) {
		this.dataDiValidazione = dataDiValidazione;
	}


	public Set getCodiceAbbonamento() {
		return codiceAbbonamento;
	}


	public void setCodiceAbbonamento(Set codiceAbbonamento) {
		this.codiceAbbonamento = codiceAbbonamento;
	}


	public LocalDate getDataDiEmissione() {
		return dataDiEmissione;
	}


	public void setDataDiEmissione(LocalDate dataDiEmissione) {
		this.dataDiEmissione = dataDiEmissione;
	}



	
	
	
	
	
	
	
	
	
}
