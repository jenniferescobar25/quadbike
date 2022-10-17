package com.jenne.quadbike.service;

import com.jenne.quadbike.entity.User;
import com.jenne.quadbike.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author jenn2
 */
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public List<User> getUser(){
        return userRepository.findAll();
    } 
   
    public User insertUser(User user){
        return userRepository.save(user);
    }
    
    //Metodo para consultar una registo x su id (Capa de servicios)
    public User getUserById(Integer id){
        return userRepository.findById(id).get();
    }
    
    //Metodo para eliminar (Capa de servicios)
    public void deleteUser(Integer id){
       userRepository.deleteById(id);               
    }
    
    //Metodo para actualizar (Capa de servicios)
    public User updateUser(User user){
        
        if (user.getId()!=null){
            Optional <User>opcional = userRepository.findById(user.getId());

            if (!opcional.isEmpty()){
                User userDB = opcional.get();

                userDB.setName(user.getName());

                return userRepository.save(userDB);
            }else{
                return user;
            }
        }else{
            return user;
        }
    }
    public List<User> findByGender(String gender){
        return userRepository.findByGender(gender);
    }
    
    public List<User> findByGenderJpql(String gender){
        return userRepository.findByGenderJpql(gender);
    }
    
    public List<User> findByGenderNative(String gender){
        return userRepository.findByGenderNative(gender);
    }
            
}
