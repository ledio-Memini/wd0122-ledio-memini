package esercizio.datamodel;

import java.util.Objects;

public class Area {
	
	private int code;
	private String name;
	
	public Area(int code, String name) {
		
		this.code = code;
		this.name = name;
	}
	public Area() {
		
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
	public void setNome(String name) {
		this.name = name;
	}
	
	@Override
	public boolean equals(Object obj) {
		return obj instanceof Area && this.hashCode() == obj.hashCode();
	}
	@Override
	public int hashCode() {
		return Objects.hash(code);
	}
	@Override
	public String toString() {
		return String.format("Area{code: %s, name: %s}",code,name);
	}
	
	
	

}
