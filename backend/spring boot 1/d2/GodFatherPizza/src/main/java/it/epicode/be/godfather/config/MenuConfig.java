package it.epicode.be.godfather.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;

import it.epicode.be.godfather.model.Drink;
import it.epicode.be.godfather.model.Franchise;
import it.epicode.be.godfather.model.Menu;
import it.epicode.be.godfather.model.Pizza;
import items.DrinkAranciata;
import items.DrinkLemonade;
import items.FranchiseMug;
import items.PizzaFamilySize;
import items.PizzaHawaiian;
import items.PizzaMargherita;
import items.PizzaSalami;
import items.ToppingCheese;
import items.ToppingHam;

@Configuration
public class MenuConfig {

	//CONFIGURAZIONE MENU (aggiunta prodotti da visualizzare)
	@Bean
	public Menu menu() {

		Menu menu = new Menu();

		menu.getMenuPizza().add(pizzaMargherita());
		menu.getMenuPizza().add(pizzaHawaiian());
		menu.getMenuPizza().add(pizzaSalami());


		menu.getMenuDrink().add(drinkLemonade());
		menu.getMenuDrink().add(drinkAranciata());
		
		menu.getMenuFranchise().add(new FranchiseMug());
		

		menu.getMenuTopping().add(new ToppingCheese(null));
		menu.getMenuTopping().add(new ToppingHam(null));
		

		return menu;

	}

	@Bean
	public PizzaMargherita pizzaMargherita() {
		return new PizzaMargherita();
	}

	@Bean
	public PizzaHawaiian pizzaHawaiian() {
		return new PizzaHawaiian();
	}

	@Bean
	public PizzaSalami pizzaSalami() {
		return new PizzaSalami();
	}

	@Bean
	public Drink drinkLemonade() {
		return new DrinkLemonade();
	}
	
	@Bean
	public Drink drinkAranciata() {
		return new DrinkAranciata();
	}
	
	@Bean
	public Franchise franchiseMug() {
		return new FranchiseMug();
	}
}
