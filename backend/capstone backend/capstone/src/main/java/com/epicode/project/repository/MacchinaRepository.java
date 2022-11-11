package com.epicode.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.epicode.project.entity.macchina;

@Repository
public interface MacchinaRepository extends CrudRepository<macchina, Long> {

}
