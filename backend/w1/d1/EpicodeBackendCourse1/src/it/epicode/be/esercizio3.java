package it.epicode.be;
import java.util.Scanner;
public class esercizio3 {

	public static double perimetroRettangolo(double a, double b) {
		return a * b;
	}
	public static int pariDispari(int c) {
		int d = 2;
		return c = c % d;

	}
	public static double perimetroTriangalo(double e, double f) {
		return e * f / 2;
	}
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("primo lato");
		double a = scanner.nextDouble();
		System.out.println("secondo lato");
		double b = scanner.nextDouble();
		
		System.out.println("perimetro rettangolo:");
		
		System.out.println(perimetroRettangolo(a,b));
		
		System.out.println("inserisci numero intero");
		int c = scanner.nextInt();
		System.out.println("il numero e:");
		if(pariDispari(c) == 0) {
			System.out.println("pari");
		}
		else {
			System.out.println("dispari");
		}
		
		System.out.println("primo lato");
		double e = scanner.nextDouble();
		System.out.println("secondo lato");
		double f = scanner.nextDouble();
		System.out.println("perimetro triangolo:");
		System.out.println(perimetroTriangalo(e,f));
	}

}
