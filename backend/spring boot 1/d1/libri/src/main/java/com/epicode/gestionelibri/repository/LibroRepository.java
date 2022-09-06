package com.epicode.gestionelibri.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.epicode.gestionelibri.entity.libro;
@Repository
public interface LibroRepository extends CrudRepository<libro, Long> {

}
