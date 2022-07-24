package it.epicode.week1.code;

public class MultiConstructor {
	private int accumulator;
	
	public int getAccumulator() {return accumulator;}

	public MultiConstructor() {
		accumulator = 1;
	}
	
	public MultiConstructor(int value) {
		this(); // cross calling
		accumulator += value*2;
	}
	
	public MultiConstructor(int value1, int value2) {
		this(value1); // cross calling
		accumulator += value2;
	}
}
