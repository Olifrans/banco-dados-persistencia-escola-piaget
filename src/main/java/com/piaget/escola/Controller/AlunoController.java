package com.piaget.escola.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.piaget.escola.Models.Aluno;
import com.piaget.escola.Service.AlunoService;

@RestController
@RequestMapping("/aluno")
public class AlunoController {

    private final AlunoService service;

    public AlunoController(AlunoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Aluno> listarAlunos(){
        return  service.buscarAluno();
    }

    @PostMapping
    public Aluno criarAluno(@RequestBody Aluno aluno){
    return  service.salvarNovoAluno(aluno);
    }




}
