package it.epicode;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Program {
	static final Logger log = LoggerFactory.getLogger(Program.class);

	public static void main(String[] args) {
		Calculator c = new Calculator();
		try {
			c.execute('+', 10);
			c.execute('*', 20);
			c.execute('/', 30);
			c.execute('-', 40);
			//c.execute('/', 0);
			c.execute('^', 2);
		} catch (DivideByZeroException e) {
			log.warn("Attenzione, hai tentato di dividere per 0");
		} catch (CalculatorException e) {
			log.warn("Attenzione, si è verificato un problema nel calcolatore");
		} catch (Exception e) {
			log.warn("Attenzione, si è verificato un problema");
		}
		log.info("{}", c.getAccumulator());
	}

}
