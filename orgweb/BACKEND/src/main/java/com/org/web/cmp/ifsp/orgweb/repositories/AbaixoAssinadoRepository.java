package com.org.web.cmp.ifsp.orgweb.repositories;

import com.org.web.cmp.ifsp.orgweb.models.AbaixoAssinado;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AbaixoAssinadoRepository extends JpaRepository<AbaixoAssinado, Long> {

    // @Query("SELECT abx.id as id, abx.descricao as descricao, abx.destinatario as
    // destinatario, abx.tipo as tipo, abx.titulo as titulo, abx.usuario as usuario,
    // COUNT(ass.abaixo_assinado) as assinaturas from AbaixoAssinado abx left join
    // Assinatura ass on abx.id = ass.abaixo_assinado group by abx.id")
    // Collection<AbaixoAssinado> getAllAbaixoAssinadosWithAssinaturas();

}
