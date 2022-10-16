package com.jenne.quadbike.repository;

import com.jenne.quadbike.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Jenn2
 */
public interface MessageRepository extends JpaRepository<Message, Long>{
    
}
