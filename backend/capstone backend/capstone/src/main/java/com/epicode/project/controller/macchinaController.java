package com.epicode.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.epicode.project.entity.macchina;
import com.epicode.project.services.macchinaService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@Controller
public class macchinaController {

	
	@Autowired
	private macchinaService macchinaService;
	
	@GetMapping
	public List<macchina> trovaTutti(){
		return macchinaService.trovaTutti();
	}
	

	
	@GetMapping("/{id}")
	public macchina trovaPerId(@PathVariable Long id) {
		return macchinaService.trovaPerId(id);
	}
	
	@DeleteMapping
	public void cancella(@PathVariable Long id) {
		macchinaService.cancella(id);
	}
	
	@PostMapping
	public void crea(@RequestBody macchina macchina) {
		macchinaService.crea(macchina);
	}
	
	@PutMapping
	public void modifica(@RequestBody macchina macchina) {
		macchinaService.modifica(macchina);
	}
}
