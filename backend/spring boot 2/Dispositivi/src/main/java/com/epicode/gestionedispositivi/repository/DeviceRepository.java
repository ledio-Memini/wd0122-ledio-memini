package com.epicode.gestionedispositivi.repository;


import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.epicode.gestionedispositivi.entity.Dispositivo;



@Transactional
public interface DeviceRepository extends JpaRepository<Dispositivo, Long> {
	
	public List<Dispositivo> findByDeviceTypeName(String deviceTypeName);
	
	public List<Dispositivo> findByDeviceTypeNameIgnoreCase(String deviceTypeName);
	
	public Page<Dispositivo> findByDeviceTypeName(String deviceTypeName, Pageable pageable);
	
	public Page<Dispositivo> findByDeviceTypeNameIgnoreCase(String deviceTypeName, Pageable pageable);
	
	public Optional<Dispositivo> findBySerialHw(String serialHw);
	
	public Optional<Dispositivo> findBySerialHwIgnoreCase(String serialHw);


	public void deleteBySerialHw(String serialHw);

}