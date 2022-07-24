package it.epicode.fiscalcode;

import it.epicode.fiscalcode.data.Date;

import it.epicode.fiscalcode.data.Person;

public class Program {
 
	public static void print(Date d) {
		System.out.println(d.getDay()+ "/" + d.getMonth() + "/" + d.getYear());
	}
	public static void print(Person p) {
		System.out.println(p.getFirstName() + " " + p.getLastName());
		System.out.println(" sesso: " + p.getGender());
		System.out.println(" nato a: " + p.getBirthCity());
		System.out.print(" il: ");
		print(p.getBirthday());
		
	}
	public static void main(String[] args) {
		
		Date d = new Date(2020, 2, 29);
		System.out.println(d.getDay()+ "/" + d.getMonth() + "/" + d.getYear());

		Date d1 = new Date(2022, 7, 20);
		System.out.println(d1.getDay()+ "/" + d1.getMonth() + "/" + d1.getYear());
		
		d1.after(10000);
		System.out.println(d1.getDay()+ "/" + d1.getMonth() + "/" + d1.getYear());
		
		Person paperino = new Person("paperino","paolino", 'm', new Date(1970,1,1), "paperopoli");
		
		print(paperino);


	}

}
