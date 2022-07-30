package it.epicode;


import java.util.Map;

public interface Search {
	public Map<String, Catalog> searchForAuthor(String author) ;
	public Map<String, Catalog>searchForYear(String y, Map<String, Catalog> m) ;
	public Map<String, Catalog>searchForYearm(String y, Map<String, Catalog> m) ;
	public Map<String, Catalog> searchForIsbn(String i, Map<String, Catalog> m) ;
	public Map<String, Catalog> searchForIsbnma(String i, Map<String, Catalog> m) ;
}