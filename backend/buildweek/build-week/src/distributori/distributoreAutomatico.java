package distributori;

import javax.persistence.Column;
import javax.persistence.Entity;

import org.jboss.logging.Logger;

@Entity
public class distributoreAutomatico extends rivenditore {
	
	@Column(name = "attivita")
	private funzione attivita;
	
	private Logger log = Logger.getLogger(distributoreAutomatico.class.getName());
	
	@Override
	public void creaBiglietto() {
		if(attivita == attivita.ATTIVO) {
			
		}else{
			log.info("distributore automatico fuori servizio");
		}
	}
}
