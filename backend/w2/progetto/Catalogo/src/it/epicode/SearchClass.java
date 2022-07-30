package it.epicode;


import java.util.Map;
import java.util.stream.Collectors;

public class SearchClass implements Search {

	public Map<String, Catalog> mainCatalog;

	public SearchClass(Map<String, Catalog> mainCatalog) {

		this.mainCatalog = mainCatalog;
	}

	@Override
	//metodo ricerca per autore
	public Map<String, Catalog> searchForAuthor(String author) {
		return mainCatalog.values().stream()
				.filter(e -> e instanceof Book && ((Book) e).getAuthor().equals(author))
				.collect(Collectors.toMap(c -> c.getISBNcode(), c -> c));

	}



	@Override
	//metodo ricerca per anno pubblicazione
	public Map<String, Catalog> searchForYear(String y, Map<String, Catalog> m) {
		return mainCatalog.values().stream()
				.filter(e -> e instanceof Book && ((Book) e).getPublicationYear().equals(y))
				.collect(Collectors.toMap(c -> c.getISBNcode(), c -> c));
	}
	@Override
	public Map<String, Catalog> searchForYearm(String y, Map<String, Catalog> m) {
		return mainCatalog.values().stream()
				.filter(e -> e instanceof Magazine && ((Magazine) e).getPublicationYear().equals(y))
				.collect(Collectors.toMap(c -> c.getISBNcode(), c -> c));
	}


	
	
	@Override
	//metodo ricerca per codice 
	public Map<String, Catalog> searchForIsbn(String i, Map<String, Catalog> m) {
		return mainCatalog.values().stream()
				.filter(e -> e instanceof Book && ((Book) e).getISBNcode().equals(i))
				.collect(Collectors.toMap(c -> c.getISBNcode(), c -> c));
	}
	@Override 
	public Map<String, Catalog> searchForIsbnma(String i, Map<String, Catalog> m) {
		return mainCatalog.values().stream()
				.filter(e -> e instanceof Magazine && ((Magazine) e).getISBNcode().equals(i))
				.collect(Collectors.toMap(c -> c.getISBNcode(), c -> c));
	}

}
