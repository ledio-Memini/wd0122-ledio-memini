package titoliDiViaggio;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import registroEmissioni.registroEmissioni;

@Entity
public class biglietto {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	@Column(name = "codiceTessera")
	@ManyToMany(targetEntity = registroEmissioni.class, mappedBy = "codiceBiglietto")
	private long id;
	
	@Column(name = "dataEmissione")
	private LocalDate dataEmissione;
	
	@Column(name = "tratta")
	private String tratta;
	
	@Column(name = "convalida")
	private String convalida;

	public biglietto(long id, LocalDate dataEmissione, String tratta, String convalida) {
		
		this.id = id;
		this.dataEmissione = dataEmissione;
		this.tratta = tratta;
		this.convalida = convalida;
	}

	public biglietto() {

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

	public String getTratta() {
		return tratta;
	}

	public void setTratta(String tratta) {
		this.tratta = tratta;
	}

	public String getConvalida() {
		return convalida;
	}

	public void setConvalida(String convalida) {
		this.convalida = convalida;
	}
	
	
	
	

}
