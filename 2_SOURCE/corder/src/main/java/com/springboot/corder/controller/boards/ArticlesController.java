package com.springboot.corder.controller.boards;


import com.google.gson.JsonObject;
import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Comments;
import com.springboot.corder.domain.FileUp;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.BoardUpdateDto;
import com.springboot.corder.dto.CommentListResult;
import com.springboot.corder.dto.MemberBoardDto;
import com.springboot.corder.service.boards.BoardService;
import com.springboot.corder.service.boards.community.CommunityService;
import com.springboot.corder.service.boards.comments.CommentService;
import com.springboot.corder.service.boards.file.FileService;
import com.springboot.corder.service.member.MemberFileService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FileUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@Controller
@RequestMapping("articles")
public class ArticlesController {
    private final SessionControlService sessionControlService;
    private final MemberFileService memberFileService;
    private final CommunityService communityService;
    private final CommentService commentService;
    private final BoardService boardService;
    private final FileService fileService;

    @GetMapping("/{bid}")
    public String getArticle(@PathVariable long bid, Model model, Pageable pageable){
        long lookUpCount =0;
        lookUpCount++;
        boardService.plusLookUpCount(bid,lookUpCount);
        Optional<MemberBoardDto> contents = communityService.getArticle(bid);
        CommentListResult commentsList  = commentService.getCommentList(bid, pageable);
        List<FileUp> fileup = fileService.getFileListByBoard(bid);
        Board board = boardService.findById(bid);
        String cmain = board.getCmain();
        String ccode = board.getCcode();

        try {
            Member loginOk = sessionControlService.getSessionInfo();
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("loginOk", loginOk);

                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("loginOk", loginOk);
                }
            } else {
                model.addAttribute("nothing", "nothing");
            }
        }catch (Exception e){
            model.addAttribute("noComments", "noComments");
            model.addAttribute("commentsList",commentsList);
            model.addAttribute("contents",contents.get());
            model.addAttribute("cmain", cmain);
            model.addAttribute("ccode", ccode);
            return "/boards/details";
        } finally {
            model.addAttribute("contents",contents.get());
            model.addAttribute("commentsList",commentsList);
            model.addAttribute("fileup",fileup);
            model.addAttribute("cmain", cmain);
            model.addAttribute("ccode", ccode);
            return "/boards/details";
        }
    }

    static String translateToKor(String target){
        if(target != null) {
            switch (target) {
                case "tech" : return "기술";
                case "career" : return "커리어";
                case "etc" : return "기타";
                case "news" : return "Tech뉴스";
                case "tips" : return "팁";
                case "columns" : return "컬럼";
                case "review" : return "리뷰";
                case "life" : return "사는얘기";
                case "gathering" : return "모임&스터디";
                case "it" : return "IT행사";
                case "promote" : return "홍보&광고";
                case "contract" : return "구인계약직";
                case "fulltime" : return "구인정규직";
                case "resumes" : return "구직";
                case "evalcom" : return "좋은회사&나쁜회사";
                case "questions" : return "Q&A";
                case "knowledge" : return "지식";
                case "community" : return "커뮤니티";
                case "events" : return "이벤트";
                case "jobs" : return "JOBS";
                case "notice" : return "공지사항";
                default: return null;
            }
        }else{
            return null;
        }
    }

    //댓글작성
    @PostMapping("commentOk")
    public String write(long mid, long bid, Comments comments){
        commentService.insert(mid, bid, comments);
        return "redirect:/articles/" +bid;
    }

    @GetMapping("plusVoteCount")
    @ResponseBody
    public long plusVoteCount(@RequestParam long bid, @RequestParam long mid){
        long voteCount = 1;
        return boardService.plusVoteCount(bid, mid, voteCount);
    }
    @GetMapping("minusVoteCount")
    @ResponseBody
    public long minusVoteCount(@RequestParam long bid, @RequestParam long mid){
        long voteCount = 1;
        return boardService.minusVoteCount(bid, mid, voteCount);
    }


    @GetMapping("del.do/{bid}/{cid}")   //details.html 댓글삭제에 파라미터값으로 삭제되게 넘겨줌
    public String delete(@PathVariable long cid, @PathVariable long bid){
        System.out.println("delete - in: " + cid); //코멘트시퀀스가 넘어가는지 찍어봄
        System.out.println("delete - bid: " + bid); //보드시퀀스가 넘어가는지 찍어줌
        commentService.delete(cid);
        System.out.println("delete - success");
        return "redirect:../../" +bid;
    }


    @GetMapping("{bid}/del.do")
    public String deleteArticle(@PathVariable long bid){
        System.out.println("deleteArticle in: " + bid);
        boolean flag = boardService.deleteArticle(bid);
        System.out.println("삭제성공?: " +flag);
        return "redirect:/community";

    }
    @PostMapping(value="update/uploadSummernoteImageFile", produces = "application/json; charset=utf8")
    @ResponseBody
    public String uploadSummernoteImageFile(@RequestParam("file") MultipartFile multipartFile, HttpServletRequest request )  {
        System.out.println("upload ??");
        /*
         * String fileRoot = "C:\\summernote_image\\"; // 외부경로로 저장을 희망할때.
         */
        JsonObject jsonObject = new JsonObject();
        // 내부경로로 저장
        String contextRoot = new HttpServletRequestWrapper(request).getRealPath("/");
        //String fileRoot = contextRoot+"resources/fileupload/";
        String fileRoot = "C:\\summernote_image\\";
        String originalFileName = multipartFile.getOriginalFilename();	//오리지날 파일명
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));	//파일 확장자
        String savedFileName = UUID.randomUUID() + extension;	//저장될 파일 명

        File targetFile = new File(fileRoot + savedFileName);

        try {
            InputStream fileStream = multipartFile.getInputStream();
            FileUtils.copyInputStreamToFile(fileStream, targetFile);	//파일 저장
            jsonObject.addProperty("url", "/summernote/"+savedFileName); // contextroot + resources + 저장할 내부 폴더명
            jsonObject.addProperty("responseCode", "success");

        } catch (IOException e) {
            FileUtils.deleteQuietly(targetFile);	//저장된 파일 삭제
            jsonObject.addProperty("responseCode", "error");
            e.printStackTrace();
        }
        String a = jsonObject.toString();
        System.out.println("imgUp: " + a);
        return a;
    }

    //(03/30) 수한 추가 업로드한 파일 다운할 수 있게 추가2

    @GetMapping("/attach/{fid}")
    public ResponseEntity<Resource> downloadAttach(@PathVariable long fid) throws MalformedURLException {
        FileUp fileup = fileService.getFileUp(fid);
        System.out.println("fileup!!!!!!!!!!!"+fileup);
        UrlResource resource = new UrlResource("file:" + fileup.getSavedpath());
        String encodedFileName = org.springframework.web.util.UriUtils.encode(fileup.getFname(), StandardCharsets.UTF_8);

        // 파일 다운로드 대화상자가 뜨도록 하는 헤더를 설정해주는 것
        // Content-Disposition 헤더에 attachment; filename="업로드 파일명" 값을 준다.
        String contentDisposition = "attachment; filename=\"" + encodedFileName + "\"";

        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,contentDisposition).body(resource);
    }




}
