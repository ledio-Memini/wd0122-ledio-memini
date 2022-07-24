
public class references {

	static void incrementa(int n) {
		System.out.println("All'ingresso in incrementa(int), x vale " + n);
		++n;
		System.out.println("All'uscita in incrementa(int), x vale " + n);
		
	}
	
	static void incrementa(int[] x) {
		System.out.println("All'ingresso in incrementa(int[]), x[0] vale " + x[0]);
		++x[0];
		System.out.println("All'uscita in incrementa(int), x vale " + x[0]);
		
	}
	static class My{
		int i;
	}
	
	static void incrementa(My m) {
		m.i++;
	}
	
	
	public static void main(String[] args) {
		int n = 0;
		System.out.println("Dentro il main, n vale " + n );
		incrementa(n);
		System.out.println("Dopo la chiamata ad incrementa(int), n vale " + n);
		int[] a = {0};
		System.out.println("Dentro il main, a[0] vale " + a[0] );
		incrementa(a);
		System.out.println("Dopo la chiamata ad incrementa(int[]), a[0]  vale " + a[0]);
		
		My my = new My();
		my.i = 1;
		incrementa(my);
		System.out.println(my.i);

	}

}
