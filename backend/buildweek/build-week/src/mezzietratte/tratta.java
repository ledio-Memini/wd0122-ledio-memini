package mezzietratte;

import jakarta.persistence.Embeddable;

@Embeddable
public class tratta {

	
	private String partenza;
	private String capolinea;
	private int tempoMedio;
	private int tempoEffettivo;
	
	
	
	public tratta(String partenza, String capolinea, int tempoMedio) {
		this.partenza = partenza;
		this.capolinea = capolinea;
		this.tempoMedio = tempoMedio;
	}
	
	
	
	public tratta() {
		
	}



	public String getPartenza() {
		return partenza;
	}
	public void setPartenza(String partenza) {
		this.partenza = partenza;
	}
	public String getCapolinea() {
		return capolinea;
	}
	public void setCapolinea(String capolinea) {
		this.capolinea = capolinea;
	}
	public int getTempoMedio() {
		return tempoMedio;
	}
	public void setTempoMedio(int tempoMedio) {
		this.tempoMedio = tempoMedio;
	}
	public int getTempoEffettivo() {
		return tempoEffettivo;
	}
	public void setTempoEffettivo(int tempoEffettivo) {
		this.tempoEffettivo = tempoEffettivo;
	}
	
	
	
}
