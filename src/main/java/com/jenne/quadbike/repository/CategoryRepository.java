package com.jenne.quadbike.repository;

import com.jenne.quadbike.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Jenn2
 */
public interface CategoryRepository extends JpaRepository<Category, Long>{
    
}
