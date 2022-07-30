package esercizio.datamodel;

import java.util.Objects;

public class City {

	private int code;
	private String name;
	private boolean capital;
	private String cadastralcode;
	private Provincia provincia;
	public City(int code, String name, boolean capital, String cadastralcode, Provincia provincia) {
		
		this.code = code;
		this.name = name;
		this.capital = capital;
		this.cadastralcode = cadastralcode;
		this.provincia = provincia;
	}
	public City() {
		
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isCapital() {
		return capital;
	}
	public void setCapital(boolean capital) {
		this.capital = capital;
	}
	public String getCadastralcode() {
		return cadastralcode;
	}
	public void setCadastralcode(String cadastralcode) {
		this.cadastralcode = cadastralcode;
	}
	public Provincia getProvincia() {
		return provincia;
	}
	public void setProvincia(Provincia provincia) {
		this.provincia = provincia;
	}
	
	@Override
	public boolean equals(Object obj) {
		return obj instanceof City && this.hashCode() == obj.hashCode();
	}
	@Override
	public int hashCode() {
		return Objects.hash(code);
	}
	@Override
	public String toString() {
		return "City [code=" + code + ", name=" + name + ", capital=" + capital + ", cadastralcode=" + cadastralcode
				+ ", provincia=" + provincia + "]";
	}
	
	
	
	
	
	
	
}
