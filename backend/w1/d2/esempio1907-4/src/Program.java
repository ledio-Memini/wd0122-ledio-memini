//vogliamo gestire la possibilita di calcolare
//la media ei [voti] ottenuti da uno [studente] (max 5 voti)



public class Program {

	public static void main(String[] args) {
		Studente pico = new Studente("Pico", "depi","1234");
		System.out.println(pico.nome);
		pico.registraVoto(7);
		System.out.println(pico.getMedia());
		pico.registraVoto(8);
		System.out.println(pico.getMedia());
		pico.registraVoto(5);
		System.out.println(pico.getMedia());

	}

}
