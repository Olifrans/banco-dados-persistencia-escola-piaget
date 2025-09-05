package com.piaget.escola.Interface;

import com.piaget.escola.Models.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}
