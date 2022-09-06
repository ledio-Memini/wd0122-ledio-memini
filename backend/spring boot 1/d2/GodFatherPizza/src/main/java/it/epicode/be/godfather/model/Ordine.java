package it.epicode.be.godfather.model;

import java.util.ArrayList;
import java.util.List;

public class Ordine {
	
	Integer id;
	Integer tavolo;
	Integer coperti;
	StatoOrdine stato = StatoOrdine.IN_CORSO;
	final Double prezzoCoperto = 2d;
	List<ItemOrdine> items = new ArrayList<>();
	
	public Ordine(Integer t, Integer c) {
		this.id = 1;
		this.tavolo = t;
		this.coperti = c;
	}
	
	public void addItem(MenuItem i, Integer q, String note) {
		ItemOrdine item = new ItemOrdine(i, q, note);
		this.items.add(item);
	}
	
	public String getOrdine() {
		String res = "****** ORDINE ******";
		res += getDatiOrdine();
		res += getProdottiOrdine();
		res += getTotale();
		return res;
	}
	
	String getDatiOrdine() {
		return "\nNumero ordine: " + this.id + "\nNumero coperti: " + this.coperti + "\nNumero Tavolo: " + this.tavolo + "\nStato Ordine: " + this.stato;
	}
	
	String getProdottiOrdine() {
		StringBuilder res = new StringBuilder(255);
		res.append("\nProdotti:");
		for(ItemOrdine el : this.items) {
			res.append(el.getOrdineItemLine());
		}
		
		return res.toString();
	}
	
	String getTotale() {
		return "\nTotale: " + this.totale();
	}
	
	Double totale() {
		Double tot = this.prezzoCoperto * this.coperti;
		
		for(ItemOrdine el : this.items) {
			tot += el.getPrice();
		}
		
		return tot;
	}

}
