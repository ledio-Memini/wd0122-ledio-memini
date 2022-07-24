package it.epicode;

import it.epicode.logic.Calculator;
import it.epicode.logic.RibbonCalculator;

public class Program {

	/*
	 * Una calcolatrice dispone di un accumulatore usato per eseguire le 4
	 * operazioni aritmetiche fondamentali.
	 */
	public static void operate(Calculator c) {
		c.sum(1);
		c.sub(2);
		c.mul(3);
		c.div(4);
		System.out.println(c.getAccumulator());
	}

	public static void main(String[] args) {
		Calculator c = new Calculator();
		System.out.println("Operazioni con un calcolatore semplice");
		operate(c);
		RibbonCalculator rc = new RibbonCalculator();
//		rc.sub(10);
//		System.out.println(rc.getAccumulator());
//		rc.changeSignum();
//		System.out.println(rc.getAccumulator());
		System.out.println("Operazioni con un calcolatore avanzato");
		operate(rc);

		System.out.println("Ereditarietà da Object");
		System.out.println("Esempio di toString: " + c);

		if (c == rc)
			System.out.println("Ci posso scrivere ciò che voglio, tanto l'operatore == non dà un risultato corretto");

		if (c.equals(rc))
			System.out.println("Le due istanze possono essere considerate uguali");
		else
			System.out.println("Le due istanze non possono essere considerate uguali");
	}

}
