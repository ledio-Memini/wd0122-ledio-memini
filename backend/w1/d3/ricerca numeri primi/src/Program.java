/*
 * scrivere un programma che chieda all'utente un numero e scriva se si tratta di un numero primo
 */
public class Program {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(numeroPrimo(20));
		System.out.println(numeroPrimo(19));
	}
	
	//scrivere un metodo che controlli se il numero e primo
	//il metodo ricevera in input un intero e restituira un booleano che indica se il numero e primo
	public static boolean numeroPrimo(int num) {
		//dobbiamo contare da 2 fino a num -1
		boolean primo = true;
		for(int i = 2; i < num;i++) {
		//se troviamo un divisore il numero non e primo
			if(num % i == 0) {
				primo = false;
			}
		}
		return primo;
		//arrivati a num -1 se non abbiamo trovato divisori il numero e primo
	}

}
