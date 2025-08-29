package com.piaget.escola.Service;

import com.piaget.escola.Interface.AlunoRepository;
import com.piaget.escola.Models.Aluno;

import java.util.List;

public class AlunoService {
    private final AlunoRepository repository;

    public AlunoService(AlunoRepository repository) {
        this.repository = repository;
    }

    public List<Aluno> bucarAluno(){
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
