package it.epicode.fiscalcode.data;

public class Person {
	private String firstName;
	private String lastName;
	private Date birthday;
	private String birthCity;
	private char gender;
	
	public Person(String firstName, String lastName, char gender, Date birthday, String birthCity) {
		this.firstName = firstName;
		this.lastName = lastName;
		if (gender == 'f' || gender == 'F')
			this.gender = 'F';
		else
			this.gender = 'M';
		this.birthday = birthday;
		this.birthCity = birthCity;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public String getBirthCity() {
		return birthCity;
	}
	public void setBirthCity(String birthCity) {
		this.birthCity = birthCity;
	}
	public char getGender() {
		return gender;
	}
	public void setGender(char gender) {
		if (gender == 'f' || gender == 'F')
			this.gender = 'F';
		else
			this.gender = 'M';
	}
	
	
}
