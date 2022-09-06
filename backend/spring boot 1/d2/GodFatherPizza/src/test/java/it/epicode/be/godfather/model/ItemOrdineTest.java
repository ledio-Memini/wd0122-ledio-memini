package it.epicode.be.godfather.model;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import items.PizzaMargherita;

class ItemOrdineTest {

	@Test
	void test() {
		Ordine o = new Ordine(1, 3);
		o.addItem(new PizzaMargherita(), 4, "awqwrwq");

		assertEquals(25.96, o.totale());
		assertEquals(26, o.totale());
	}

}
