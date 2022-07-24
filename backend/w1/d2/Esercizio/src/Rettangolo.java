
public class Rettangolo {
	
	private double altezza;
	private double larghezza;
	
	public Rettangolo(double alt,double larg) {
		this.altezza = alt;
		this.larghezza = larg;
	}
	
	public double perimetro() {
		return (altezza + larghezza)*2;
	}
	
	public double area() {
		return altezza + larghezza;
	}
	
}
