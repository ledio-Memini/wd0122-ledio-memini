package com.epicode.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epicode.project.entity.macchina;
import com.epicode.project.repository.MacchinaRepository;
@Service
public class macchinaService {

	@Autowired
	private MacchinaRepository repo;
	
	public List<macchina> trovaTutti(){
		return (List<macchina>) repo.findAll();
	}
	
	public macchina trovaPerId(Long id) {
		return repo.findById(id).get();
	}
	
	

	
	public void cancella(Long id) {
		repo.deleteById(id);
	}
	
	public void crea(macchina macchina) {
		repo.save(macchina);
	}
	
	public void modifica(macchina macchina) {
		repo.save(macchina);
	}
}
