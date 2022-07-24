package esercizio1;
import java.util.Scanner;
public class EsercizioFor {
	public static void main(String[] args) {

		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Inserire un numero intero seguito dal tasto Invio");
		int numero = scanner.nextInt();
		
		System.out.println("Conto alla rovescia da " + numero + " a 0");

		for (int i=numero;i>=0;i--) {
			System.out.println(i);
			
		}
	}
}
