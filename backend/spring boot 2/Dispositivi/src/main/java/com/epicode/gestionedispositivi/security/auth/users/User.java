package com.epicode.gestionedispositivi.security.auth.users;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.epicode.gestionedispositivi.entity.Dispositivo;
import com.epicode.gestionedispositivi.security.auth.roles.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 20)
	private String username;

	@Column(length = 40, nullable = false)
	private String nome;
	
	@Column(length = 40, nullable = false)
	private String cognome;
	
	@Column(length = 40, nullable = false)
	private String email;

	@NotBlank
	@Size(max = 120)
	private String password;
	
	@OneToOne
	private Dispositivo dispositivo;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<Role>();
	
	public User(Long id, @NotBlank @Size(max = 20) String username, @NotBlank @Size(max = 120) String password) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
	}

}
