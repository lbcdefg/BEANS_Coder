package com.springboot.corder.service.member;

import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.MemberFileUpDto;
import com.springboot.corder.repositpory.member.MemberFileRepository;
import com.springboot.corder.repositpory.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.codehaus.groovy.tools.shell.IO;
import org.imgscalr.Scalr;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class MemberFileServiceImpl implements MemberFileService {
    @Value("${file.dir}")
    private String fileDir;

    private final MemberFileRepository memberFileRepository;
    private final MemberRepository memberRepository;
    @Override
    public Long saveFile(MultipartFile file) throws IOException {
        return null;
    }

    @Override

    public Optional<Member> udateImageFile(long mid, MultipartFile file)  {


        if (file.isEmpty()) {
            return null;
        }
        Optional<Member> entity = this.memberRepository.findById(mid);
        entity.ifPresent(t -> {
            MemberFileUpDto memberFileUpDto = new MemberFileUpDto();
            String origName = file.getOriginalFilename(); // 원래 파일 이름 추출
            String uuid = UUID.randomUUID().toString(); // 파일 이름으로 쓸 uuid 생성
            String extension = origName.substring(origName.lastIndexOf(".")); // 확장자 추출(ex : .png)
            String savedName = uuid + extension; // uuid와 확장자 결합
            String savedPath = fileDir + savedName; // 파일을 불러올 때 사용할 파일 경로
            //-------------- 이미지 사이즈??

            //-------------
            // 내용이 널이 아니라면 엔티티의 객체를 바꿔준다.
            t.setFname(savedName);
            t.setOfname(origName);
            t.setSavedpath(savedPath);

            // 이걸 실행하면 seq 때문에 update가 실행된다.
            try {
                file.transferTo(new File(savedPath));
            }catch (IOException ie) {
                System.out.println(ie.toString());
            }
            this.memberRepository.save(t);

        });
        return entity;

    }

    @Override
    public Member getMemberImage(String fname) {
        Member member = memberRepository.findByFname(fname);
        if(member != null){
            return member;
        } else {
            return null;
        }

    }
}
