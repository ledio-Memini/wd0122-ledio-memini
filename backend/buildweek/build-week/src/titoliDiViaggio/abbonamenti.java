package titoliDiViaggio;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = " abbonamenti")
public class abbonamenti {

	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	@ManyToMany(targetEntity = tessera.class, mappedBy = "codiceAbbonamenti")
	private long id;
	@Column(name = "nome")
	private String nome;
	@Column(name = "abbonamento")
	private durata abbonamento;

	
	
	
	public abbonamenti(long id, String nome, durata abbonamento) {
		
		this.id = id;
		this.nome = nome;
		this.abbonamento = abbonamento;
	}
	
	
	public abbonamenti() {
		
	}


	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public durata getAbbonamento() {
		return abbonamento;
	}
	public void setAbbonamento(durata abbonamento) {
		this.abbonamento = abbonamento;
	}
	
	

	
}
