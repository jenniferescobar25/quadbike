package com.jenne.quadbike.controller;

import com.jenne.quadbike.entity.Quadbike;
import com.jenne.quadbike.service.QuadbikeService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Jenn2
 */
@RestController
@RequestMapping("/Quadbike")
public class QuadbikeController {
    @Autowired
    private QuadbikeService quadbikeService;

    @GetMapping("/all")
    public List<Quadbike> getQuadbikeList() {
        return quadbikeService.getQuadbikeList();
    }

    @GetMapping("/{id}")
    public Quadbike getQuadbike(@PathVariable("id") Long id) {
        return quadbikeService.getQuadbike(id);
    }
    
    @PostMapping("/save")
    public ResponseEntity saveQuadbike(@RequestBody Quadbike quadbike){
        quadbikeService.saveQuadbike(quadbike);
        return ResponseEntity.status(201).build();
    }
    
//    @PutMapping("/update")
//    public ResponseEntity updateQuadbike(@RequestBody Quadbike quadbike){
//        quadbikeService.updateQuadbike(quadbike);
//        return ResponseEntity.status(201).build();
//    } 
    
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Quadbike updateQuadbike(@RequestBody Quadbike quadbike){
        return quadbikeService.updateQuadbike(quadbike);        
    }
    
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteQuadbike(@PathVariable("id") Long id){
       quadbikeService.deleteQuadbike(id);
       return ResponseEntity.status(204).build();
    }
}
