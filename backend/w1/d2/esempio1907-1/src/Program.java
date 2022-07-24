
public class Program {

	public static void main(String[] args) {
		Automobile bmwi4;
		bmwi4 = new Automobile("AA 000 ZZ");
		bmwi4.setMarca("BMW");
		//bmwi4.modello = "i4";
		//bmwi4.targa = "AA 000 ZZ";
		bmwi4.setCilindrata(250);
		
		Automobile jeep;
		jeep = new Automobile("ZZ 000 AA");
		jeep.setMarca("FCA");
		//jeep.modello = "jeep";
		//jeep.targa = "ZZ 000 AA";
		jeep.setCilindrata(-50);
		
		System.out.println(bmwi4.getMarca());
		System.out.println(jeep.getMarca());
		System.out.println(jeep.getCilindrata());
		
		int a = 0; //scope di blocco
		{
			int b = 1;//scope di blocco
			System.out.println(a);
		}//qui muore "b"
		//System.out.println(b); // errore: b non esiste
		

	}//qui muore "a"

}
