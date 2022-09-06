package com.epicode.gestionelibri.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epicode.gestionelibri.entity.libro;
import com.epicode.gestionelibri.repository.LibroRepository;

@Service
public class LibroService {
	
	@Autowired
	private LibroRepository repo;

	public List<libro> trovaTutti() {
		return (List<libro>) repo.findAll();
	}
	
	public libro trovaPerId(Long id) {
		return repo.findById(id).get();
	}
	
	public void cancella(Long id) {
		
		repo.deleteById(id);
	}
	
	public void  crea(libro libro) {
		repo.save(libro);
	}
	
	public void modifica(libro libro) {
		repo.save(libro);
	}
}
