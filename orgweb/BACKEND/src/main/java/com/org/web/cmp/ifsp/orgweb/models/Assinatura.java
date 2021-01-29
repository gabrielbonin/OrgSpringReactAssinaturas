package com.org.web.cmp.ifsp.orgweb.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Assinatura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String rg;

    @OneToOne
    @JoinColumn(name = "abaixo_assinado")
    private AbaixoAssinado abaixo_assinado;

    public Assinatura() {
    }

    public Assinatura(Long id, String nome, String rg, AbaixoAssinado abaixo_assinado) {
        this.id = id;
        this.nome = nome;
        this.rg = rg;
        this.abaixo_assinado = abaixo_assinado;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getRg() {
        return this.rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public AbaixoAssinado getAbaixo_assinado() {
        return this.abaixo_assinado;
    }

    public void setAbaixo_assinado(AbaixoAssinado abaixo_assinado) {
        this.abaixo_assinado = abaixo_assinado;
    }

    @Override
    public String toString() {
        return "{" + " id='" + id + "'" + ", nome='" + nome + "'" + ", rg='" + rg + "'" + ", abaixo_assinado='"
                + abaixo_assinado + "'" + "}";
    }

}
