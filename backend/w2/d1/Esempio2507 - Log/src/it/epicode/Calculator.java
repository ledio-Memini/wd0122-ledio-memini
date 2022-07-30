package it.epicode;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Calculator {
	// otteniamo il gestore di log
	static final Logger log = LoggerFactory.getLogger(Calculator.class);

	private double accumulator;

	/**
	 * @return the accumulator
	 */
	public double getAccumulator() {
		return accumulator;
	}

	public void execute(char operator, double operand) {
//		log.info("Sto eseguendo l'operazione " + operator + " con " + operand
//				+ " Attualmente l'accumulatore vale " + accumulator);
		log.info("Sto eseguendo l'operazione {} con {} Attualmente l'accumulatore vale {}" //
				, operator, operand, accumulator);
		switch (operator) {
		case '+':
			accumulator += operand;
			log.debug("Ho appena eseguito l'addizione...");
			break;
		case '-':
			accumulator -= operand;
			break;
		case '*':
			accumulator *= operand;
			break;
		case '/':
			if (operand == 0)
				throw new DivideByZeroException();
			accumulator /= operand;
			break;
		default:
			log.error("Hai specificato un'operazione non ammessa ({})", operator);
			throw new InvalidOperationException(operator);
		}
		log.debug("Dopo l'operazione l'accumulatore vale {}", accumulator);
	}
}
