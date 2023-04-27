package com.springboot.corder.service.member;

import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.MemberFileUpDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

public interface MemberFileService {
    Long saveFile(MultipartFile file) throws IOException;

    Optional<Member> udateImageFile(long mid, MultipartFile file);
    Member getMemberImage(String fname);

}
