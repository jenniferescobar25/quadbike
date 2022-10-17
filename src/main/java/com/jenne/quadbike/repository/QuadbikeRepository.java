package com.jenne.quadbike.repository;


import com.jenne.quadbike.entity.Quadbike;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Jenn2
 */
public interface QuadbikeRepository extends JpaRepository<Quadbike, Long> {
}
