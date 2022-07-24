
public class Studente {

		String nome;
		String cognome;
		String matricola;
		int[] voti =new int[5];
		
		public Studente(String nome, String cognome, String matricola) {
			this.nome = nome;
			this.cognome = cognome;
			this.matricola = matricola;
			
		}
		
		public String getNome() {
			return nome;
		}
		
		public String getCognome() {
			return cognome;
		}
		
		public String getMatricola() {
			return matricola;
		}
		
		private int votiOttenutiFinora = 0;
		void registraVoto(int nuovoVoto) {
			if(votiOttenutiFinora < 5)
			voti[votiOttenutiFinora++] =nuovoVoto;
		}
		
		float getMedia() {
			float somma = 0;
			for (int i = 0; i < votiOttenutiFinora; ++i)
				somma += voti[i];
			return somma / votiOttenutiFinora;
		}
	
}


