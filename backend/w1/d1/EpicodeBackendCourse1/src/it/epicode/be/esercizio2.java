package it.epicode.be;

import java.util.Scanner;

public class esercizio2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String[] stringhe = new String[3];
		
		System.out.println("Inserire ogni stringa seguita dal tasto Invio");
		System.out.println("prima stringa: ");
		stringhe[0] = scanner.nextLine();
		System.out.println("seconda stringa: ");
		stringhe[1] = scanner.nextLine();
		System.out.println("terza stringa: ");
		stringhe[2] = scanner.nextLine();
		
		System.out.println("Stringhe in ordine: ");
		System.out.println(stringhe[0] + " - " + stringhe[1] + " - " + stringhe[2]);
		
		System.out.println("Stringhe in ordine inverso: ");
		System.out.println(stringhe[2] + " - " + stringhe[1] + " - " + stringhe[0]);
		
	}

}
