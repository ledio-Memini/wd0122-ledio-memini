
public class Program {
	static void print(String s) {
		System.out.println(s);
	}
	//overloading - sovraccaricamento
	static void print(String s,int n) {
		for (int i = 0; i < n; ++i);
	}
	static void print(int i) {
		System.out.println("sto stampando il numero" +i);
	}
	public static void mainOverloading (String[] args) {
		print("Ciao");
		print("CIAO",3 );
		print(14);
	}
}
