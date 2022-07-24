
public class Automobile {
	//incapsulamento
	
	//TUTTI GLI ATTTRIBUTI SONO INACCESSIBILI
	private String marca;
	private String modello;
	private String targa;
	private int cilindrata;
	
	//costruttore
	public Automobile(String targa) {
		System.out.println("sto immatricolando l'auto");
		this.targa = targa;
	}
	
	//GETTERS E SETTERS: Metodi di accesso
	
	public String getMarca() {
		return marca;
	}
	public void setMarca(String m) {
		this.marca = m;
	}
	
	public int getCilindrata() {
		return cilindrata;
	}
	public void setCilindrata(int c) {
		if (c > 0)
			cilindrata = c;
		else
			System.out.println("wtf");
	}
}
