package it.epicode.be.godfather;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ch.qos.logback.classic.Logger;
import it.epicode.be.godfather.model.Ordine;
import items.PizzaMargherita;
import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
@Slf4j
public class GodFatherPizzaApplication {

	public static void main(String[] args) {
		SpringApplication.run(GodFatherPizzaApplication.class, args);

		GestioneMenu stampa = new GestioneMenu();
		stampa.stampaMenu();
		stampa.stampaExtra();
		
		//CREARE ORDINE INDICANDO TAVOLO E N_COPERTI
		Ordine o1 = new Ordine(1, 3);
		
		//AGGIUNGERE PRODOTTI ALL'ORDINE
		o1.addItem(new PizzaMargherita(), 2, "");
		
		//VISUALIZZARE IN LOG L'ORDINE CREATO
		log.info(o1.getOrdine());
				

	}

}
