package esercizio.datamodel;

import java.util.Objects;

public class Region {
	
	private int code;
	private String name;
	private Area area;
	
	public Region(int code, String name, Area area) {
		super();
		this.code = code;
		this.name = name;
		this.area = area;
	}
	
	public Region() {
		
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

	public Area getArea() {
		return area;
	}

	public void setArea(Area area) {
		this.area = area;
	}
	
	@Override
	public boolean equals(Object obj) {
		return obj instanceof Region && this.hashCode() == obj.hashCode();
	}
	@Override
	public int hashCode() {
		return Objects.hash(code);
	}

	@Override
	public String toString() {
		return "Region [code=" + code + ", name=" + name + ", area=" + area + "]";
	}
	
	
	
	
	
	
	
	
}
