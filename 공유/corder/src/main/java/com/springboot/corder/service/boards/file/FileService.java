package com.springboot.corder.service.boards.file;

import com.springboot.corder.domain.FileUp;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileService {
    Long saveFile(long bid, MultipartFile files) throws IOException;
    FileUp view(long bid);
}