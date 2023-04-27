package com.springboot.corder.service.boards.file;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.FileUp;
import com.springboot.corder.repositpory.boards.BoardRepository;
import com.springboot.corder.repositpory.fileup.FileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class FileServiceImpl implements FileService{
    @Value("${file.dir}")
    private String fileDir;
    private final FileRepository fileRepository;

    private final BoardRepository repository;
    @Override
    public Long saveFile(long bid, MultipartFile files) throws IOException {
        if (files.isEmpty()) {
            return null;
        }
        Optional<Board> op= repository.findById(bid);
        if(!op.isEmpty()) {
            Board board = op.get();
            String origName = files.getOriginalFilename(); // 원래 파일 이름 추출
            String uuid = UUID.randomUUID().toString(); // 파일 이름으로 쓸 uuid 생성
            String extension = origName.substring(origName.lastIndexOf(".")); // 확장자 추출(ex : .png)
            String savedName = uuid + extension; // uuid와 확장자 결합
            String savedPath = fileDir + "/" + savedName; // 파일을 불러올 때 사용할 파일 경로
            System.out.println(savedPath);
            FileUp file = FileUp.builder()
                    .orgnm(origName)
                    .savednm(savedName)
                    .savedpath(savedPath)
                    .board(board)
                    .build();

            files.transferTo(new File(savedPath)); // 실제로 로컬에 uuid를 파일명으로 저장
            FileUp savedFile = fileRepository.save(file); // 데이터베이스에 파일 정보 저장
            return savedFile.getFid();
        } else {
            /* 없을 경우 리턴 처리 방법 */
            return null;
        }
    }

    @Override
    public FileUp view(long bid) {
        Optional<FileUp> op = fileRepository.findById(bid);
        if(!op.isEmpty()) {
            FileUp fileUp= op.get();
            return fileUp;
        } else {
            return null;
        }
    }
    @Override
    public FileUp getFileUp(long fid) {
        System.out.println("fid : "+fid);
        FileUp fileup = fileRepository.findById(fid).get();
        System.out.println("fileups!"+fileup);
        return fileup;
    }
    @Override
    public List<FileUp> getFileListByBoard(long bid){
        System.out.println("bid : "+bid);
        Board board = repository.findById(bid).get();
        List<FileUp> fileUpList = fileRepository.findByBoard(board);
        return fileUpList;
    }

    @Override
    public boolean remove(long fid) {
        fileRepository.deleteById(fid);
        return true;
    }
}
