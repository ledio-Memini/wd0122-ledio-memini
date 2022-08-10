package titoliDiViaggio;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;


public class tessera {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)

	private long id;
	
	@Column(name = "dataEmissione")
	private LocalDate dataEmissione;
	
	@Column(name = "dataScadenza")
	private LocalDate dataScadenza;
	
	@ManyToMany(targetEntity = abbonamenti.class, cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
	private long codiceAbbonamento;
	
	

	
	
	public tessera(long id, LocalDate dataEmissione, LocalDate dataScadenza) {
		
		this.id = id;
		this.dataEmissione = dataEmissione;
		this.dataScadenza = dataScadenza;
	}

	public tessera() {
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public LocalDate getDataEmissione() {
		return dataEmissione;
	}

	public void setDataEmissione(LocalDate dataEmissione) {
		this.dataEmissione = dataEmissione;
	}

	public LocalDate getDataScadenza() {
		return dataScadenza;
	}

	public void setDataScadenza(LocalDate dataScadenza) {
		this.dataScadenza = dataScadenza;
	}
	
	
	
	
	
}
