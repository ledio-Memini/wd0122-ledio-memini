package it.epicode.logic;

public class Calculator {
	protected double accumulator;

	public Calculator() {
		accumulator = 0;
	}

	public Calculator(double initValue) {
		this();
		accumulator = initValue;
	}

	public double getAccumulator() {
		return accumulator;
	}

	public void sum(double value) {
		accumulator += value;
	}

	public void sub(double value) {
		accumulator -= value;
	}

	public void mul(double value) {
		accumulator *= value;
	}

	public void div(double value) {
		accumulator /= value;
	}

	public String toString() {
		return "Sono un calcolatore e il mio accumulatore vale " + accumulator;
	}

	public boolean equals(Object obj) {
		// confronta this con obj
		// controllo se obj è compatibile con un Calculator
		if (obj instanceof Calculator) {
			// se è compatibile confronto i due accumulatori
			// prendo obj e lo trasformo in Calculator
			Calculator calc = (Calculator) obj;
			// a questo punto posso controllare se this e c
			// hanno lo stesso valore dell'accumulatore
			if (this.accumulator == calc.accumulator)
				return true;
			else
				return false;
		}
		return super.equals(obj);
	}
}
