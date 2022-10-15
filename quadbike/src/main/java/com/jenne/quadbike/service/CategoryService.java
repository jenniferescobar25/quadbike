package com.jenne.quadbike.service;

import com.jenne.quadbike.entity.Category;
import com.jenne.quadbike.entity.Quadbike;
import com.jenne.quadbike.repository.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

/**
 *
 * @author Jenn2
 */
@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getCategory() {
        return categoryRepository.findAll();
    }

    public Category getCategoryById(Long idCat) {
        return categoryRepository.findById(idCat).get();
    }

    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    //Metodo para eliminar (Capa de servicios)
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    public Category updateCategory(Category category) {
        //valido si viene un id en la información de la peticion
        //si no viene retorno la entidad recibida como parametro
        if (category.getId() != null) {
            //valido si el id existe en la base de datos
            Optional<Category> opcional = categoryRepository.findById(category.getId());

            if (!opcional.isEmpty()) {
                //logica
                Category categoryBD = opcional.get();

                categoryBD.setName(category.getName());
                categoryBD.setDescription(category.getDescription());
                return categoryRepository.save(categoryBD);
            } else {
                return category;
            }
        }
        return category;
    }
}
