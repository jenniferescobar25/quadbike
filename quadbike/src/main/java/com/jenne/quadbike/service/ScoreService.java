package com.jenne.quadbike.service;

import com.jenne.quadbike.entity.Score;
import com.jenne.quadbike.repository.ScoreRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author jenn2
 */
@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public List<Score> getScore() {
        return scoreRepository.findAll();
    }

    public Score getScoreById(Long idScore) {
        return scoreRepository.findById(idScore).get();
    }

    public Score saveScore(Score score) {
        return scoreRepository.save(score);
    }
}
