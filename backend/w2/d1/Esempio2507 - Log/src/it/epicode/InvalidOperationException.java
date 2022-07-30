package it.epicode;

public class InvalidOperationException extends CalculatorException {
	public final char invalidOperation;

	public InvalidOperationException(char invalidOperation) {
		super();
		this.invalidOperation = invalidOperation;
	}

}
