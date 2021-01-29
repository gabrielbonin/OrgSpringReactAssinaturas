package com.org.web.cmp.ifsp.orgweb.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import com.org.web.cmp.ifsp.orgweb.models.AbaixoAssinado;
import com.org.web.cmp.ifsp.orgweb.repositories.AbaixoAssinadoRepository;
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
public class AbaixoAssinadoController {

    @Autowired
    private AbaixoAssinadoRepository aRepository;

    // getAllAbx
    @GetMapping("/abaixo-assinados")
    public List<AbaixoAssinado> getAllUsers() {
        return aRepository.findAll();
    }

    // new Abx
    @PostMapping("/abaixo-assinados/new-abx")
    public AbaixoAssinado newUser(@RequestBody AbaixoAssinado abx) {
        return aRepository.save(abx);
    }

    // findById
    @GetMapping("/abaixo-assinados/{id}")
    public Optional<AbaixoAssinado> getUserById(@PathVariable Long id) {
        return aRepository.findById(id);
    }

    // UpdateAbx
    @PutMapping("/abaixo-assinados/{id}")
    public ResponseEntity<AbaixoAssinado> updateUser(@PathVariable long id, @RequestBody AbaixoAssinado abxDetail) {
        AbaixoAssinado abx = aRepository.findById(id).orElseThrow();
        abx.setTipo(abxDetail.getTipo());
        abx.setTitulo(abxDetail.getTitulo());
        abx.setDestinatario(abxDetail.getDestinatario());
        abx.setDescricao(abxDetail.getDescricao());
        AbaixoAssinado updtAbx = aRepository.save(abx);
        return ResponseEntity.ok(updtAbx);
    }

    // DeleteAbx
    @DeleteMapping("/abaixo-assinados/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable long id) {
        AbaixoAssinado abx = aRepository.findById(id).orElseThrow();
        aRepository.delete(abx);
        Map<String, Boolean> response = new HashMap<>();
        return ResponseEntity.ok(response);
    }

}
