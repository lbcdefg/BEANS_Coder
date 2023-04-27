package com.springboot.corder.repositpory.fileup;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.FileUp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FileRepository extends JpaRepository<FileUp, Long> {
    List<FileUp> findByBoard(Board board);
}
