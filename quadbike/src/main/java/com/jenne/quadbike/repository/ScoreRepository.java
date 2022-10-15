package com.jenne.quadbike.repository;

import com.jenne.quadbike.entity.Score;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author jenn2
 */
public interface ScoreRepository extends JpaRepository<Score, Long>{
    
}
