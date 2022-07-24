package it.epicode.week1.code;

public class MyFriend {

	public int getMy() {
		My my = new My();
		// pck è package friendly in My 
		// e quindi è accessibile qui
		// perché MyFriend sta nello stesso
		// package
		my.pckInt = 10;
		return my.pckInt;
	}
}
