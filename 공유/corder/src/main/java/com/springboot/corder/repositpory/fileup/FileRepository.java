package com.springboot.corder.repositpory.fileup;

import com.springboot.corder.domain.FileUp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<FileUp, Long> {

}
