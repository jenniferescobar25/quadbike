package com.jenne.quadbike.repository;

import com.jenne.quadbike.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Jenn2
 */
public interface ClientRepository extends JpaRepository<Client, Long>{
    
}
