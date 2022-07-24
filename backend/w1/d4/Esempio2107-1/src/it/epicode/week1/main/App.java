package it.epicode.week1.main;

import it.epicode.week1.code.MultiConstructor;

public class App {

	public static void main(String[] args) {
		MultiConstructor m1 = new MultiConstructor();
		MultiConstructor m2 = new MultiConstructor(10);
		MultiConstructor m3 = new MultiConstructor(10, 20);
		
		System.out.println(m1.getAccumulator());
		System.out.println(m2.getAccumulator());
		System.out.println(m3.getAccumulator());

	}

}
