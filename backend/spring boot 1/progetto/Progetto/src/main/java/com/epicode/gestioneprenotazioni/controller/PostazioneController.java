package com.epicode.gestioneprenotazioni.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.epicode.gestioneprenotazioni.entity.Edificio;
import com.epicode.gestioneprenotazioni.entity.Postazione;
import com.epicode.gestioneprenotazioni.entity.Tipo;
import com.epicode.gestioneprenotazioni.entity.Utente;
import com.epicode.gestioneprenotazioni.services.PostazioneService;
import com.epicode.gestioneprenotazioni.services.UtenteService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;


@RestController
@RequestMapping("/postazione")
public class PostazioneController {

	
	@Autowired
	private PostazioneService postazioneService;
	
	@GetMapping
	public List<Postazione> trovaTutti(){
		return postazioneService.trovaTutti();
	}
	
	@GetMapping
	public Tipo trovaPerTipo(@RequestBody Tipo tipo) {
		return postazioneService.trovaPerTipo(tipo);
	}
	
	@GetMapping
	public Edificio trovaPerCitta(@RequestBody Edificio edificio) {
		return postazioneService.trovaPerCitta(edificio);
	}
	
	@GetMapping("/{id}")
	public Postazione trovaPerId(@PathVariable Long id) {
		return postazioneService.trovaPerId(id);
	}
	
	@DeleteMapping
	public void cancella(@PathVariable Long id) {
		postazioneService.cancella(id);
	}
	
	@PostMapping
	public void crea(@RequestBody Postazione postazione) {
		postazioneService.crea(postazione);
	}
	
	@PutMapping
	public void modifica(@RequestBody Postazione postazione) {
		postazioneService.modifica(postazione);
	}
}
