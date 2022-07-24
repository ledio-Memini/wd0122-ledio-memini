package it.epicode.fiscalcode.data;

public class Date {
	// su questi campi esiston dei vincoli di validita!!
	private int year;
	private int month;
	private int day;
	
	//a partire dalla data corrente
	//sposta la data ad un determinato intervallo di giorni
	public void after(int days) {
		int[] md = {31,28,31,30,31,30,31,31,30,31,30,31};
		//e se l'anno bisestile? febbraio ha 29 giorni
		if(isLeapYear(year))
			md[1] = 29;
		// fino a che non ho raggiunto i giorni richiesti
		for (int counter = 0; counter < days; ++counter) {
		//aumento il vaore del giorno
			day++;
		//se ho superato il numero di giorni del mese
			if(day > md[month - 1]) {
		//metto a 1 il giorno a aumento il mese
				day = 1;
		//se il mese e oltre il 12
				month++;
		//metto a 1 il mese
				if(month > 12) {
					month = 1;
		//e aumento l'anno
					year++;
				}
					
			}
		}
	}
	
	private boolean isLeapYear(int year) {
		// un anno e bisistile se e divisibile per 400
		if(year % 400 == 0)
			return true;
		//oppure se e divisibile per 4 ma non per 100
		else if(year % 4 == 0 && year % 100 != 0)
			return true;
		else
			return false;
	}
	private boolean canBeValidDate(int year, int month, int day) {
		boolean result = true;
		//deve controllare 
		//1: il mese deve essere tra 1 e 12
		if(month < 1 || month > 12)
			result = false;
		else // se invece e tra 1 e 12
		
		//2: il giorno deve essere tra 1 e il max dei gg del mese
		{
			int[] days = {31,28,31,30,31,30,31,31,30,31,30,31};
			//e se l'anno bisestile? febbraio ha 29 giorni
			if(isLeapYear(year))
				days[1] = 29; //febbraio ha 29 giorni
		if (day < 1 || day > days[month -1])
			return result = false;
		
		}
		
		return result;
	}
	//costruttore
	public Date(int year,int month, int day) {
		if (canBeValidDate(year, month, day)) {
		this.year = year;
		this.month = month;
		this.day = day;
		}else {
			this.year = 1900;
			this.month = 1;
			this.day = 1;
		}
	}
	
	//accesso in lettura agli attributi della classe
	// anno mese e giorno sono dipendenti uno dall altro quindi e meglio non avere i setter
	public int getYear() {
		return year;
	}
	public int getMonth() {
		return month;
	}
	public int getDay() {
		return day;
	}
	//accesso in scrittura agli attributi della classe
	public void setYear(int year) {
		this.year = year;
	}
	public void setMonth(int month) {
		this.month = month;
	}
	public void setDay(int day) {
		this.day = day;
	}
	
}
