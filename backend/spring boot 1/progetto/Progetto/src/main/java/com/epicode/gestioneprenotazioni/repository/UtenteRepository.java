package com.epicode.gestioneprenotazioni.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.epicode.gestioneprenotazioni.entity.Utente;

@Repository
public interface UtenteRepository extends CrudRepository<Utente, Long> {

}
