package com.org.web.cmp.ifsp.orgweb.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class AbaixoAssinado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo;
    private String titulo;
    private String destinatario;
    private String descricao;
    private String assinaturas;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Usuario usuario;

    public AbaixoAssinado() {
    }

    public AbaixoAssinado(Long id, String tipo, String titulo, String destinatario, String descricao,
            String assinaturas, Usuario usuario) {
        this.id = id;
        this.tipo = tipo;
        this.titulo = titulo;
        this.destinatario = destinatario;
        this.descricao = descricao;
        this.assinaturas = assinaturas;
        this.usuario = usuario;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipo() {
        return this.tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDestinatario() {
        return this.destinatario;
    }

    public void setDestinatario(String destinatario) {
        this.destinatario = destinatario;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Usuario getUsuario() {
        return this.usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getAssinaturas() {
        return this.assinaturas;
    }

    public void setAssinaturas(String assinaturas) {
        this.assinaturas = assinaturas;
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", tipo='" + getTipo() + "'" + ", titulo='" + getTitulo() + "'"
                + ", destinatario='" + getDestinatario() + "'" + ", descricao='" + getDescricao() + "'"
                + ", assinaturas='" + getAssinaturas() + "'" + ", usuario='" + getUsuario() + "'" + "}";
    }

}
