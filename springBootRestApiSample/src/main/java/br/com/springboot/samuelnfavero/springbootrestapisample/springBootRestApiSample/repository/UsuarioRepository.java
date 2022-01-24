package br.com.springboot.samuelnfavero.springbootrestapisample.springBootRestApiSample.repository;

import br.com.springboot.samuelnfavero.springbootrestapisample.springBootRestApiSample.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Query(value = "select u from Usuario u where LOWER(TRIM(u.name)) like %?1%")
    List<Usuario> findByName(String name);
}
