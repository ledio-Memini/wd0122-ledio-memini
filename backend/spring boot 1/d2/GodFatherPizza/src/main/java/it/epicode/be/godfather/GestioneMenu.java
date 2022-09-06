package it.epicode.be.godfather;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import it.epicode.be.godfather.config.MenuConfig;
import it.epicode.be.godfather.model.Menu;
import items.PizzaFamilySize;
import items.PizzaMargherita;
import items.ToppingCheese;
import items.ToppingHam;

public class GestioneMenu {

	//Creazione oggetto Menu -> oggetto con array prodotti
	private Menu menu;
	private AnnotationConfigApplicationContext ctx;

	public GestioneMenu() {
		//Creazione oggetto context di MenuConfig -> associa all'oggetto menu di questa classe il menu configurato in MenuConfig
		ctx = new AnnotationConfigApplicationContext(MenuConfig.class);
		menu = (Menu) ctx.getBean("menu");

	}

	public void stampaMenu() {
		System.out.println("******* Menu *******");
		System.out.println("PIZZE");
		menu.getMenuPizza().forEach(p -> System.out.println(p.getMenuItemLine()));
		System.out.println();

		System.out.println("DRINKS");
		menu.getMenuDrink().forEach(p -> System.out.println(p.getMenuItemLine()));
		System.out.println();


		System.out.println("TOPPINGS");
		menu.getMenuTopping().forEach(p -> System.out.println(p.getMenuItemLine()));
		System.out.println();

		System.out.println();

		System.out.println("FRANCHISE");
		menu.getMenuFranchise().forEach(p -> System.out.println(p.getMenuItemLine()));
		System.out.println();

	}

	public void stampaExtra() {
		//Questo metodo crea gli extra e li visualizza (non vengono aggiunti a MenuConfig)
		System.out.println("EXTRA");
		PizzaMargherita pizza = ctx.getBean(PizzaMargherita.class);
		
		
		ToppingCheese extra1 = new ToppingCheese(pizza);

		System.out.println(extra1.getName());
		
		ToppingHam extra2 = new ToppingHam(extra1);

		System.out.println(extra2.getName());
		
		PizzaFamilySize extra3 = new PizzaFamilySize(extra2);
		System.out.println(extra3.getName()+ "-" + extra3.getPrice());


		
	}

}
