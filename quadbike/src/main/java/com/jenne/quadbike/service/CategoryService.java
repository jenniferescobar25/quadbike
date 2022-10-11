package com.jenne.quadbike.service;

import com.jenne.quadbike.entity.Category;
import com.jenne.quadbike.entity.Quadbike;
import com.jenne.quadbike.repository.CategoryRepository;
import java.util.List;
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
    
    public List<Category> getCategory(){
        return categoryRepository.findAll();
    }
    
    public Category getCategoryById(Long idCat){
        return categoryRepository.findById(idCat).get();
    }
    
    public List<Quadbike> getQuadbikeByCategory(Long idCat){
        Category category = categoryRepository.findById(idCat).get();
        return category.getQuadbike();
    }
    
    public Category saveCategory(Category category){
        return categoryRepository.save(category);
    }
}
