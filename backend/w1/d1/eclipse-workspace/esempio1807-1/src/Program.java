import java.io.IOException;

public class Program {

	public static void main1(String[] args) {

		System.out.println("Hello, World!");
		System.out.println("Second Line!");
		
		final int a = 3;
		double b = 4.7;
		int c = 3;
		System.out.println("La variabile a vale " + a);
		System.out.println("La variabile a vale " + b);
		
		b = c ;
		System.out.println("b dopo l assegnazione a c, vale " + b);
		
		double d = 5.123;
		c = (int) d;
		System.out.println("la variabile c, dopo l assegnazione di d,vale " + c);
		
		double n = 3;
		int m = 5;
		System.out.println(n / m);
		System.out.println(n == m);
		System.out.println(n != m);
		System.out.println(n > m);
		System.out.println(n >= m);
		System.out.println(n < m);
		System.out.println(n <= m);
		
		int num = 65;
		char ch = 'A';
		System.out.println(num == ch);
		System.out.println(ch + 32);
		
		System.out.println((char)(ch + 20));
		
		boolean b1 = n > m || n == m;// OR l'uno o l'altro
		boolean b2 = n > m && n == m;// AND l'uno e l'altro
		boolean b3 = !true;// NOT invert un'espressione
		
		int x = 0;
		x = x + 2;
		x += 2;//abbreviazione della riga 44
		
		x += 1;
		x++;//incremento
		++x;
		
		x -= 1;
		x--;//decremeneto
		--x;
		
		int n1 = 1;
		int n2 = 1;
		System.out.println(n1++);
		System.out.println(++n2);
	}
	
	static void funzione() {
		System.out.println("prima istruzione");
		System.out.println("seconda istruzione");
	}
	static int quattro(){
		return 4;
	}
	static int somma(int a, int b) {
		return a + b;
	}
	
	public static void main2(String[] args) {
		//singola istruzione
		System.out.println("Questa è un istruzione");
		//blocco di codice
		{
			System.out.println("prima istruzione");
			System.out.println("seconda istruzione");
		}
		funzione();
		System.out.println("Ho eseguito la funzione");
		int q = quattro();
		System.out.println(q);
		int s = somma(3, 2);
		System.out.println(s);
		
		int a = 0;
		
		{
			int b = 1;
			System.out.println(a);
			System.out.println(b);
		}
		//System.out.println(b); //b è out of scope
	}
	
	public static void main(String[] args)  {
		int a = 10;
		if (a < 10) {
			System.out.println("A è minore di 10");
		}
		else {
			System.out.println("A non è minore di 10");
		}
		
		System.out.println("ciclo while");
		while (a > 0) {
			System.out.println(a);
			a--;
		}
		
		System.out.println("ciclo do-while");
		do {
			System.out.println(a);
			if(a % 2 == 0)
				System.out.println("pari");
			else
				System.out.println("dispari");
			a++;
		}while (a < 10);
		
		System.out.println("ciclo for");
		for (int x = 0; x < 10; x += 2) {
			System.out.println(x);
		}
		
		for (int i = 0, j = 10; i < j; i++, j--)
			System.out.println(" " + i + " " + j);
		System.out.println("ciclo infinito");
		//for(;;) {
			//System.out.println("ciao");
		//}
		
		System.out.println("for avanzato");
		int n[] = {12342,2344231,134,1234,12341 };
		for (int numero : n) {
			System.out.println(numero);
		}
	}
	
	
}
