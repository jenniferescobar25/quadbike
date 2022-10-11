package com.jenne.quadbike.service;

import com.jenne.quadbike.entity.Quadbike;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jenne.quadbike.repository.QuadbikeRepository;

/**
 *
 * @author Jenn2
 */
@Service
public class QuadbikeService {
    @Autowired
    private QuadbikeRepository quadbikeRepository;
     
    public List<Quadbike> getQuadbikeList(){
        return quadbikeRepository.findAll();
    }
    
    public Quadbike getQuadbike(Long id){
        return quadbikeRepository.findById(id).get();
    }
    
    public Quadbike saveQuadbike(Quadbike quadbike){
        return quadbikeRepository.save(quadbike);
    }
    
//    public Quadbike updateQuadbike(Quadbike quadbike){
//        return quadbikeRepository.save(quadbike);
//    }
    
    public Quadbike updateQuadbike(Quadbike quadbike){
        //valido si viene un id en la información de la peticion
        //si no viene retorno la entidad recibida como parametro
        if (quadbike.getId()!=null){
            //valido si el id existe en la base de datos
            Optional<Quadbike> opcional = quadbikeRepository.findById(quadbike.getId());
            
            if (!opcional.isEmpty()){
                //logica
                Quadbike quadbikeBD = opcional.get();
                
                quadbikeBD.setName(quadbike.getName());
                quadbikeBD.setCategory(quadbike.getCategory());
                quadbikeBD.setDescription(quadbike.getDescription());
                quadbikeBD.setBrand(quadbike.getBrand());
                quadbikeBD.setYear(quadbike.getYear());
                return quadbikeRepository.save(quadbikeBD);
            }else{
                return quadbike;
            }
        }
        return quadbike;
        
    }
    
    public void deleteQuadbike(Long id){
        quadbikeRepository.deleteById(id);
    }
}
