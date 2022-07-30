package com.epicode;

import java.util.HashSet;
import java.util.Set;

public class Main {

	public static void main(String[] args) {
		
		Set<Cliente> clienti = new HashSet<>();
		clienti.add(new Cliente("ledio", "memini", "100", "marche"));
		clienti.add(new Cliente("ledi", "memin", "100", "lazio"));
		clienti.add(new Cliente("led", "memi", "102", "abruzzo"));
		for(Cliente cliente : clienti) {
			System.out.println(cliente);
			//se il codice univoco e uguale stampera solo uno
		}
		
	}

}
