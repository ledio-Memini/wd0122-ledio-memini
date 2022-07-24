package it.epicode.be;

public class Helloworld {

	public static int moltiplica(int x, int y) {
		return x * y;
	}
	public static String concatena(int a, String b) {
		return a + b;
	}
	public static String[] inserisciInArray(String[] inputArray, String stringa) {
		System.out.println("Lunghezza array: " + inputArray.length);
		// Crea un nuovo array di dimensione 6
		String[] risultato = new String[6];
		
		System.out.println("Terzo elemento array di partenza: " + inputArray[2]);

		
		risultato[0] = inputArray[0];
		risultato[1] = inputArray[1];
		risultato[2] = stringa;
		risultato[3] = inputArray[2];
		risultato[4] = inputArray[3];
		risultato[5] = inputArray[4];
		
		System.out.println("Terzo elemento array di arrivo: " + risultato[2]);


		return risultato;
		
	}
	public static void main (String[] args)
			{
			// Stampa a console  la frase
			System.out.println("This is my first Epicode Java Project!");
			System.out.println("Hello");
			
			
			System.out.println(moltiplica(2,5));
			System.out.println(concatena(10," ciao"));
			
			String[] nuovoArray = inserisciInArray(new String[]{"A", "B","C", "D", "E"},"X");
			System.out.println("Terzo elemento array di arrivo: " + nuovoArray[2]);
			System.out.println("Sesto elemento array di arrivo: " + nuovoArray[5]);
			}
}



