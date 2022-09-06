package com.epicode.gestionelibri.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.epicode.gestionelibri.entity.libro;
import com.epicode.gestionelibri.services.LibroService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/libri")
public class LibroController {
	
	@Autowired
	private LibroService libroService;

	@GetMapping
	public List<libro> trovaTutti() {
		return libroService.trovaTutti();
	}
	@GetMapping("/{id}")
	public libro trovaPerId(@PathVariable Long id) {
		return libroService.trovaPerId(id);
	}
	@DeleteMapping("/{id}")
	public void cancella(@PathVariable Long id) {
		
		libroService.cancella(id);
	}
	@PostMapping
	public void  crea(@RequestBody libro libro) {
		libroService.crea(libro);
	}
	@PutMapping
	public void modifica(@RequestBody libro libro) {
		libroService.modifica(libro);
	}
}
