package it.epicode;

import java.util.Scanner;
public class Program {
	
	public static Scanner scanner = new Scanner(System.in);
	public static int readInt() {
		return scanner.nextInt();
	}
	
	public static String readString() {
		return scanner.nextLine();
	}
	public static void main(String[] args) {
		System.out.println("inserisci una string:");
		String line = readString();
		System.out.println("inserisci un intero:");
		int number = readInt();
		
		System.out.println("string: " + line);
		System.out.println("numero: " + number);

	}

}
