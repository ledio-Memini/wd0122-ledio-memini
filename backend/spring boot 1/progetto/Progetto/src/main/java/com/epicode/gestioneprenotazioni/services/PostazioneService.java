package com.epicode.gestioneprenotazioni.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epicode.gestioneprenotazioni.entity.Edificio;
import com.epicode.gestioneprenotazioni.entity.Postazione;
import com.epicode.gestioneprenotazioni.entity.Tipo;
import com.epicode.gestioneprenotazioni.entity.Utente;
import com.epicode.gestioneprenotazioni.repository.PostazioneRepository;
import com.epicode.gestioneprenotazioni.repository.UtenteRepository;

@Service
public class PostazioneService {

	
	private Tipo trovaTipo;
	private Edificio trovaCitta;
	
	@Autowired
	private PostazioneRepository repo;
	
	public List<Postazione> trovaTutti(){
		return (List<Postazione>) repo.findAll();
	}
	
	public Postazione trovaPerId(Long id) {
		return repo.findById(id).get();
	}
	
	public Tipo trovaPerTipo(Tipo tipo) {
		return trovaTipo = tipo;
	}
	
	public Edificio trovaPerCitta(Edificio edificio) {
		return trovaCitta = edificio;
	}
	
	public void cancella(Long id) {
		repo.deleteById(id);
	}
	
	public void crea(Postazione postazione) {
		repo.save(postazione);
	}
	
	public void modifica(Postazione postazione) {
		repo.save(postazione);
	}
}
