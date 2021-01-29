package com.org.web.cmp.ifsp.orgweb.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import com.org.web.cmp.ifsp.orgweb.models.Usuario;
import com.org.web.cmp.ifsp.orgweb.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/orgweb/")
public class UsuarioController {

    @Autowired
    private UsuarioRepository uRepository;

    // getAll
    @GetMapping("/users")
    public List<Usuario> getAllUsers() {
        return uRepository.findAll();
    }

    // new user
    @PostMapping("/users/new-user")
    public Usuario newUser(@RequestBody Usuario usuario) {
        return uRepository.save(usuario);
    }

    // fingById
    @GetMapping("/users/{id}")
    public Optional<Usuario> getUserById(@PathVariable Long id) {
        return uRepository.findById(id);
    }

    // UpdateUser
    @PutMapping("/users/update-user/{id}")
    public ResponseEntity<Usuario> updateUser(@PathVariable long id, @RequestBody Usuario usuarioDetail) {
        Usuario usuario = uRepository.findById(id).orElseThrow();
        usuario.setNome(usuarioDetail.getNome());
        usuario.setSobrenome(usuarioDetail.getSobrenome());
        usuario.setEmail(usuarioDetail.getEmail());
        Usuario updtUser = uRepository.save(usuario);
        return ResponseEntity.ok(updtUser);
    }

    // DeleteUser
    @DeleteMapping("/users/delete-user/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable long id) {
        Usuario usuario = uRepository.findById(id).orElseThrow();
        uRepository.delete(usuario);
        Map<String, Boolean> response = new HashMap<>();
        return ResponseEntity.ok(response);
    }
}
