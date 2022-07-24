
public class Persona {
	
	public Persona(String nome, String cognome, String codiceFiscale) {
		this.nome = nome;
		this.cognome = cognome;
		this.codiceFiscale = codiceFiscale;
	}
	//tutti gli attributi sono privati
	private String nome;
	private String cognome;
	private String codiceFiscale;
	
	//si accede tramite getter e setter
	public String getNome() {
		return nome;
		}
	public String getCognome() {
		return cognome;
	}
	public String getCodiceFiscale() {
		return codiceFiscale;
	}
	
	public void setNome(String nome) {
		//qui devo controllare che ci siano solo lettere!
		//altrimenti il nome non e valido!!!
		this.nome = nome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public void setCodiceFiscale(String codiceFiscale) {
		this.codiceFiscale = codiceFiscale;
	}
	
}
