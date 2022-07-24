package it.epicode;

public class Program {

	/*
	 * Abbiamo la necessità di gestire gli [animali] presenti in uno zoo, dando ad
	 * ognuno la possibilità di <emettere il proprio verso>.
	 * 
	 * Animale emettiVerso();
	 */

	public static void gestisciZoo(Animale[] animali) {
		for (int i = 0; i < animali.length; ++i) {
			animali[i].emettiVerso();
		}
	}

	public static void main(String[] args) {
		Animale leone = new Leone();
		Animale elefante = new Elefante();
		Tigre tigre = new Tigre();
		Animale[] zoo = new Animale[] { leone, elefante, tigre };
		gestisciZoo(zoo);
	}

}
