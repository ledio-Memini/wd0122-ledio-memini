package com.epicode.gestionedispositivi.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.epicode.gestionedispositivi.entity.Disponibilita;
import com.epicode.gestionedispositivi.entity.Dispositivo;
import com.epicode.gestionedispositivi.entity.Tipo;


@Repository
public interface DispositivoRepository extends PagingAndSortingRepository<Dispositivo, String>{
	public Page<Dispositivo> findByTipo(Tipo tipo, Pageable pageable);
	public Page<Dispositivo> findByDisponibilita(Disponibilita disponibilita, Pageable pageable);
}
