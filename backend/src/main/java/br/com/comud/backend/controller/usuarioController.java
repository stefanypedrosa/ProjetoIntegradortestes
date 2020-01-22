package br.com.comud.backend.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.comud.backend.model.usuario;
import br.com.comud.backend.security.autenticacao;
import br.com.comud.backend.security.token;

@RestController
@CrossOrigin("*")
public class usuarioController {
	ArrayList<usuario> lista = new ArrayList<usuario>();
	int id = 0;
	
	@PostMapping("/login")
	public ResponseEntity<token> autentica(@RequestBody usuario usuario) {
		if (usuario.getEmail().equals("usuario@usuario.com") && usuario.getSenha().equals("123456789@")) {
			usuario.setIdUsuario(10);
			usuario.setNome("Usuario");
			String tk = autenticacao.generateToken(usuario);
			token token = new token();
			token.setToken(tk);
			return ResponseEntity.ok(token);
		} else {
			return ResponseEntity.status(403).build();
		}
	}

	@PostMapping("/usuario/new")
	public ResponseEntity<usuario> newUser(@RequestBody usuario u) {
		if (lista.size() == 0) {
			u.setIdUsuario(id++);
			lista.add(u);
			return ResponseEntity.ok(u);
		} 
		else {
			for (int i = 0; i < lista.size(); i++) {
				if (u.getEmail().equals(null)) {
					lista.add(u);
					return ResponseEntity.ok(u);
				}
			}
		}
		return ResponseEntity.status(403).build();
	}
}