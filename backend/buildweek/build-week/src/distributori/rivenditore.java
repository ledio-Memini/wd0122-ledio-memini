package distributori;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import registroEmissioni.registroEmissioni;
import titoliDiViaggio.tessera;

@Entity
@Table (name = "rivenditori")
public class rivenditore {

	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	@ManyToMany(targetEntity = registroEmissioni.class, mappedBy = "codiceRivenditore")
	private long id;
	
	public void creaBiglietto(){
		
	}
	
	public void creaAbbonamneto(){
		
		//prevedere un if una volta ottenuto il numero di tessera
		
	}
	
}
