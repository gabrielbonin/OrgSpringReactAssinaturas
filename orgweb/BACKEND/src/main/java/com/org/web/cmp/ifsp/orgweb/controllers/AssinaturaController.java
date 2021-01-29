package com.org.web.cmp.ifsp.orgweb.controllers;

import java.util.List;

import java.util.Optional;

import com.org.web.cmp.ifsp.orgweb.models.Assinatura;
import com.org.web.cmp.ifsp.orgweb.repositories.AssinaturaRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/orgweb/")
public class AssinaturaController {

    @Autowired
    private AssinaturaRepository uRepository;

    // getAll
    @GetMapping("/assinatura")
    public List<Assinatura> getAllAssinaturas() {
        return uRepository.findAll();
    }

    // new assinatura
    @PostMapping("/assinatura/new-assinatura")
    public Assinatura newAssinatura(@RequestBody Assinatura assinatura) {
        return uRepository.save(assinatura);
    }

    // fingById
    @GetMapping("/assinatura/{id}")
    public Optional<Assinatura> getAssinaturaById(@PathVariable Long id) {
        return uRepository.findById(id);
    }

    // UpdateUser
    // @PutMapping("/assinatura/update-assinatura/{id}")
    // public ResponseEntity<Assinatura> updateUser(@PathVariable long id,
    // @RequestBody Assinatura assinaturaDetail) {
    // Assinatura assinatura = uRepository.findById(id).orElseThrow();
    // assinatura.setNome(assinaturaDetail.getNome());
    // assinatura.setSobrenome(assinaturaDetail.getSobrenome());
    // assinatura.setEmail(assinaturaDetail.getEmail());
    // Assinatura updtUser = uRepository.save(assinatura);
    // return ResponseEntity.ok(updtUser);
    // }

    // DeleteUser
    // @DeleteMapping("/assinatura/delete-user/{id}")
    // public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable long id)
    // {
    // Assinatura assinatura = uRepository.findById(id).orElseThrow();
    // uRepository.delete(assinatura);
    // Map<String, Boolean> response = new HashMap<>();
    // return ResponseEntity.ok(response);
    // }
}
