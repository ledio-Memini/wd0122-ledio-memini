package esercizio.datamodel;

import java.util.Objects;

public class Provincia {

	private int code;
	private String name;
	private String acronym;
	private Region region;
	public Provincia(int code, String name, String acronym, Region region) {
		
		this.code = code;
		this.name = name;
		this.acronym = acronym;
		this.region = region;
	}
	public Provincia() {
		
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
	public String getAcronym() {
		return acronym;
	}
	public void setAcronym(String acronym) {
		this.acronym = acronym;
	}
	public Region getRegion() {
		return region;
	}
	public void setRegion(Region region) {
		this.region = region;
	}
	
	@Override
	public boolean equals(Object obj) {
		return obj instanceof Provincia && this.hashCode() == obj.hashCode();
	}
	@Override
	public int hashCode() {
		return Objects.hash(code);
	}
	@Override
	public String toString() {
		return "Provincia [code=" + code + ", name=" + name + ", acronym=" + acronym + ", region=" + region + "]";
	}
	
	
}
