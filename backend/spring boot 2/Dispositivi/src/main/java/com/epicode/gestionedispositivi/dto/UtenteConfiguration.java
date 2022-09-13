package com.epicode.gestionedispositivi.dto;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


import com.epicode.gestionedispositivi.security.auth.users.User;


@Configuration
public class UtenteConfiguration {

	@Bean
	public User nuovoUtente() {
		return new User();
	} 
}
