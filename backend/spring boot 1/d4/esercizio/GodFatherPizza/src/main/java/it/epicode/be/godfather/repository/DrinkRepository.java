package it.epicode.be.godfather.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import it.epicode.be.godfather.model.Drink;

public interface DrinkRepository extends JpaRepository<Drink, Long>{
	
	

}
