package com.piaget.escola.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.piaget.escola.Interface.AlunoRepository;
import com.piaget.escola.Models.Aluno;

@Service
public class AlunoService {
    private final AlunoRepository repository;

    public AlunoService(AlunoRepository repository) {
        this.repository = repository;
    }

    public List<Aluno> buscarAluno(){
        return repository.findAll();
    }

    public Aluno salvarNovoAluno(Aluno aluno){
        return repository.save(aluno);
    }

    public void deletarAluno(Long id){
        repository.deleteById(id);
    }

    public Aluno buscarAlunoId(Long id){
        return repository.findById(id).orElse(null);
    }

}
