package it.epicode.be.godfather.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ItemOrdine {
	MenuItem item;
	Integer qnt;
	String note;
	
	String getOrdineItemLine() {
		return "\n" + this.item.getMenuItemLine() + " - Qnt: " + this.qnt + " - Note: " + this.note;
	}
	
	Double getPrice() {
		return this.item.getPrice() * this.qnt;
	}
}
