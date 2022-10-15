package com.jenne.quadbike.repository;

import com.jenne.quadbike.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Jenn2
 */
public interface ReservationRepository extends JpaRepository<Reservation, Long>{
    
}
