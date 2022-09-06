package com.epicode.gestionelibri.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;

import com.epicode.gestionelibri.entity.Libro;

import lombok.extern.slf4j.Slf4j;
import lombok.extern.slf4j.XSlf4j;

@SpringBootTest
public class LibroRepositoryTest {
	@Autowired
	LibroRepository libroRepository;
	@Autowired 
	@Qualifier("TestBean")
	ObjectProvider<Libro> libroPr;
	@Test
	public void findByTitoloSuccess() {
		Libro l = libroPr.getObject();
		
		libroRepository.save(l);
		
		
		Libro libroDaCercare = libroRepository.findByTitolo(l.getTitolo()  );
		
		assertThat(libroDaCercare).isNotNull();
		assertThat(     libroDaCercare.getId() ).isEqualTo(  l.getId()  );
		 
		
	}
	
	@Test
	public void existsByTitoloSuccess() {
		log.info("--- existsByTitoloSuccess");
	}
	@Test
	public void findByTitoloAndAutore() {
		log.info("--- findByTitoloAndAutore");
	}
	
	
}
