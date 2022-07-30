package it.epicode;


import java.io.IOException;

import java.util.List;
import java.util.Map;





public class ArchiveMain {

;
	

	public static void main(String[] args) throws IOException {
		
	   Map<String, Catalog> mainCatalog = new Service().popolaLista() ;
	   
	   Search s = new SearchClass(mainCatalog);
	   WriteRead wR = new WriteReadClass(mainCatalog);

		System.out.println("CATALOGO INIZIALE COMPLETO:");
		mainCatalog.forEach((k, v) -> System.out.println(v));
		System.out.println("----------------------------");
		System.out.println("");

		
		System.out.println("RICERCA PER ANNO (2012):");
		Map<String, Catalog> filteredCatalog1 = s.searchForYear("2012", mainCatalog );
		Map<String, Catalog> filteredCatalog2 = s.searchForYearm("2012", mainCatalog );
		filteredCatalog1.forEach((k,v)->System.out.println(k + " " +v));
		filteredCatalog2.forEach((k,v)->System.out.println(k + " " +v));
		System.out.println("");
		System.out.println("");
		
		
		System.out.println("RICERCA PER ISBN (7034):");
		Map<String, Catalog> filteredCatalog3 = s.searchForIsbn("7034", mainCatalog );
		Map<String, Catalog> filteredCatalog4 = s.searchForIsbnma("7034", mainCatalog );
		filteredCatalog3.forEach((k,v)->System.out.println(k + " " +v));
		filteredCatalog4.forEach((k,v)->System.out.println(k + " " +v));
		System.out.println("");
		System.out.println("");
		
		
		System.out.println("RICERCA PER AUTORE (Autore 1):");
		Map<String, Catalog> filteredCatalog5 = s.searchForAuthor("Autore 1");
		filteredCatalog5.forEach((k,v)->System.out.println(k + " " +v));
		System.out.println("");
		
		
		wR.write();
		System.out.println("----------------------------");
		List<String> cioao= wR.read(); 
		cioao.forEach(System.out::println);

		
		System.out.println("");

		//saveOnDisk();

		System.out.println("LETTURA DOPO SCRITTURA SU DISCO");
		//loadFromDisk();

	}
}

