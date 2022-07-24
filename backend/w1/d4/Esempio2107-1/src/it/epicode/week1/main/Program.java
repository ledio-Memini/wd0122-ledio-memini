package it.epicode.week1.main;

import it.epicode.week1.code.My;
import it.epicode.week1.code.MyFriend;

public class Program {

//	void print() {
//		System.out.println("Ciao");
//	}
	// static String test;

	static String print(String test) {
		System.out.println(test);
		return test + "!";
	}

	public static void main(String[] args) {
		String t = "Ciao";
		t = print(t);
		System.out.println(t);
//		My my = new My();
//		my.pblInt = 10;
////		my.pvtInt = 10; // non c'è visibilità per un membro private
////		my.pckInt = 10; // non c'è visibilità per un membro package friendly
//		
//		MyFriend mf = new MyFriend();
//		System.out.println(mf.getMy());
//		
//		My other = new My();
//		other.stInt = 100;
//		
//		System.out.println(my.stInt);
//		
//		My.stInt = 120;
//		System.out.println(my.stInt + " " + other.stInt + " " + My.stInt);
		My.stInt = 1000;
		System.out.println(My.stInt);

	}

}
