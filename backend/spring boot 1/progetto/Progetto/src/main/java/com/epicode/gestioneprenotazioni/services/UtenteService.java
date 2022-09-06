package com.epicode.gestioneprenotazioni.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epicode.gestioneprenotazioni.entity.Utente;
import com.epicode.gestioneprenotazioni.repository.UtenteRepository;

@Service
public class UtenteService {

	@Autowired
	private UtenteRepository repo;
	
	public List<Utente> trovaTutti(){
		return (List<Utente>) repo.findAll();
	}
	
	public Utente trovaPerId(Long id) {
		return repo.findById(id).get();
	}
	
	public void cancella(Long id) {
		repo.deleteById(id);
	}
	
	public void crea(Utente utente) {
		repo.save(utente);
	}
	
	public void modifica(Utente utente) {
		repo.save(utente);
	}
}
