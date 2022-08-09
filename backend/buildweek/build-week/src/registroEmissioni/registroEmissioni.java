package registroEmissioni;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "registroEmissioni")
public class registroEmissioni {

	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private long id;
	@Column(name = " codiceRivenditore")
	private long codiceRivenditore;
	@Column(name = " codiceTitoloDiViaggio")
	private long codiceTitoloDiViaggio;
	@Column(name = " dataDiEmissione")
	private LocalDate dataDiEmissione;
	@Column(name = " dataDiValidazione")
	private LocalDate dataDiValidazione;





	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public long getCodiceRivenditore() {
		return codiceRivenditore;
	}


	public void setCodiceRivenditore(long codiceRivenditore) {
		this.codiceRivenditore = codiceRivenditore;
	}


	public long getCodiceTitoloDiViaggio() {
		return codiceTitoloDiViaggio;
	}


	public void setCodiceTitoloDiViaggio(long codiceTitoloDiViaggio) {
		this.codiceTitoloDiViaggio = codiceTitoloDiViaggio;
	}


	public LocalDate getDataDiEmissione() {
		return dataDiEmissione;
	}


	public void setDataDiEmissione(LocalDate dataDiEmissione) {
		this.dataDiEmissione = dataDiEmissione;
	}



	
	
	
	
	
	
	
	
	
}
