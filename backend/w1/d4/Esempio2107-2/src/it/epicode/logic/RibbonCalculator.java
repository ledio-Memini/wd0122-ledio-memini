package it.epicode.logic;

public class RibbonCalculator extends Calculator { // ereditarietà - inheritance

	public void changeSignum() {
		System.out.println("Dovrei cambiare il segno dell'accumulatore");
		// mul(-1);
		accumulator *= -1;
	}
	
	// overriding - sovrascrittura
	public void sum(double value) {
		// specializzo il metodo aggiungendo funzionalità
		System.out.println("Sto sommando " + value);
		// richiamo il vecchio metodo per fargli svolgere
		// il compito che aveva in precedenza
		super.sum(value);
	}
}
