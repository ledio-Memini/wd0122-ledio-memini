package com.epicode.gestionedispositivi.security.auth.login;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginRequest {
	private String userName;
	private String password;
}
