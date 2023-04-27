package com.springboot.corder.controller.boards;

import com.google.gson.JsonObject;
import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.FileUp;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.BoardUpdateDto;
import com.springboot.corder.dto.CommentListResult;
import com.springboot.corder.dto.CommunityListResult;
import com.springboot.corder.dto.MemberBoardDto;
import com.springboot.corder.service.boards.BoardService;
import com.springboot.corder.service.boards.comments.CommentService;
import com.springboot.corder.service.boards.community.CommunityService;
import com.springboot.corder.service.boards.file.FileService;
import com.springboot.corder.service.member.MemberFileService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FileUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@Controller
@RequestMapping("knowledge")
public class KnowledgePageController {
    String cmain = "knowledge";
    private final SessionControlService sessionControlService;
    private final MemberFileService memberFileService;
    private final CommunityService communityService;
    private final CommentService commentService;
    private final BoardService boardService;
    private final FileService fileService;
    @GetMapping("")
    public String listAll(@PageableDefault(size=20, sort="bid", direction = Sort.Direction.DESC) Pageable pageable,
                          Model model, HttpSession session, HttpServletRequest request){
        String keyword = request.getParameter("kw");
        String sort = request.getParameter("sort");
        CommunityListResult noticeList = communityService.getCommunityListResult(communityService.getCmainResultByBid("notice", pageable), "notice", pageable);
        CommunityListResult listResult;
        if(keyword == null){ //검색어가 없을때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순
                case "vote": listResult = communityService.getCommunityListResult(communityService.getCmainResultByVote(cmain, pageable), cmain, pageable); break;
                case "lookup": listResult = communityService.getCommunityListResult(communityService.getCmainResultByLookup(cmain, pageable), cmain, pageable); break;
                default: listResult = communityService.getCommunityListResult(communityService.getCmainResultByBid(cmain, pageable), cmain, pageable);
                    sort = "udate"; break;
            }
        }else{ //검색어 있을 때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순
                case "vote": listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByVote(cmain, keyword, pageable), cmain, pageable); break;
                case "lookup": listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByLookup(cmain, keyword, pageable), cmain, pageable); break;
                default : listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByBid(cmain, keyword, pageable), cmain, pageable);
                    sort = "udate"; break;
            }
            model.addAttribute("kw", keyword);
        }

        try {
            Member loginOk = sessionControlService.getSessionInfo();
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    System.out.println("main userImage: " + loginOk);
                    model.addAttribute("loginOk", loginOk);
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("loginOk", loginOk);
                }
            }
        }catch (Exception e){
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            model.addAttribute("cmain", cmain);
            model.addAttribute("sort", sort);
            return "/boards/knowledge/knowledge";
        }finally{
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            model.addAttribute("cmain", cmain);
            model.addAttribute("cmainKor", translateToKor(cmain));
            model.addAttribute("sort", sort);
            return "/boards/knowledge/knowledge";
        }
    }
    @GetMapping("/{ccode}")
    public String listSubCategory(@PathVariable("ccode") String ccode, @PageableDefault(size=20, sort="bid", direction = Sort.Direction.DESC) Pageable pageable,
                                  Model model, HttpSession session, HttpServletRequest request){

        String keyword = request.getParameter("kw");
        String sort = request.getParameter("sort");
        CommunityListResult noticeList = communityService.getCommunityListResult(communityService.getCmainResultByBid("notice", pageable), "notice", pageable);
        CommunityListResult listResult;
        System.out.println(noticeList);

        if(keyword == null){ //검색어가 없을때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순, switch가 default로 널을 못잡아서 널처리해줘야함
                case "vote": listResult = communityService.getCommunitySubListResult(communityService.getCcodeResultByVote(ccode, pageable), ccode, pageable); break;
                case "lookup": listResult = communityService.getCommunitySubListResult(communityService.getCcodeResultByLookup(ccode, pageable), ccode, pageable); break;
                default: listResult = communityService.getCommunitySubListResult(communityService.getCcodeResultByBid(ccode, pageable), ccode, pageable);
                    sort = "udate"; break;
            }
        }else{ //검색어 있을 때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순 , switch가 default로 널을 못잡아서 널처리해줘야함
                case "vote": listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByVote(ccode, keyword, pageable), ccode, pageable); break;
                case "lookup": listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByLookup(ccode, keyword, pageable), ccode, pageable); break;
                default : listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByBid(ccode, keyword, pageable), ccode, pageable);
                    sort = "udate"; break;
            }
            model.addAttribute("kw", keyword);
        }

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
            }
        }catch (Exception e){
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            return "/boards/knowledge/knowledge";
        }finally{
            model.addAttribute("ccode",ccode);
            model.addAttribute("cmain", cmain);
            model.addAttribute("ccodeKor",translateToKor(ccode));
            model.addAttribute("cmainKor", translateToKor(cmain));
            model.addAttribute("sort", sort);
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            return "/boards/knowledge/knowledge";
        }
    }

    @GetMapping("/new")
    public String write(Model model){
        try {
            Member loginOk= sessionControlService.getSessionInfo();
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("loginOk", loginOk);
                    return "/boards/knowledge/new";
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("loginOk", loginOk);
                    return "/boards/knowledge/new";
                }
            } else {
                return "/boards/knowledge/new";
            }
        }catch (Exception e){
            return "/boards/knowledge/new";
        }
    }
    @PostMapping("input.do")
    public String write(@RequestParam long mid, Board board, @RequestParam("files") List<MultipartFile> files) throws IOException {
        Board board1 = boardService.write(mid, board);
        System.out.println("board : " + board1);
        if(files.isEmpty()){
            System.out.println("board 1");
            return "redirect:../knowledge";
        }else{
            System.out.println("board 2");
            for (MultipartFile multipartFile : files) {
                fileService.saveFile(board1.getBid(), multipartFile);
            }
            System.out.println("board 3");
            return "redirect:../knowledge";
        }
    }
    @PostMapping(value="/uploadSummernoteImageFile", produces = "application/json; charset=utf8")
    @ResponseBody
    public String uploadSummernoteImageFile(@RequestParam("file") MultipartFile multipartFile, HttpServletRequest request )  {
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
    static String translateToKor(String target){
        if(target != null) {
            switch (target) {
                case "tech" : return "기술";
                case "career" : return "커리어";
                case "qna-etc" : return "기타";
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

    @GetMapping("/update/{bid}")
    public String update(@PathVariable long bid, Model model, Pageable pageable){
        Optional<MemberBoardDto> contents = communityService.getArticle(bid);
        CommentListResult commentsList  = commentService.getCommentList(bid, pageable);
        List<FileUp> fileup = fileService.getFileListByBoard(bid);
        try {
            Member loginOk = sessionControlService.getSessionInfo();
            System.out.println("loginOk: " +loginOk);
            System.out.println("commentsList: " +commentsList);
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("loginOk", loginOk);
                    model.addAttribute("contents",contents.get());
                    model.addAttribute("commentsList",commentsList);
                    model.addAttribute("fileup",fileup);
                    return "/boards/knowledge/update";
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("loginOk", loginOk);
                    model.addAttribute("contents",contents.get());
                    System.out.println("contents!"+contents);
                    System.out.println("contents.get()!"+contents.get());
                    model.addAttribute("commentsList",commentsList);
                    model.addAttribute("fileup",fileup);
                    return "/boards/knowledge/update";
                }
            } else {
                System.out.println("여기?");
                model.addAttribute("contents",contents.get());
                model.addAttribute("noComments", "noComments");
                model.addAttribute("commentsList",commentsList);
                return "/boards/knowledge/update";
            }
        }catch (Exception e){
            System.out.println("예외?");
            model.addAttribute("noComments", "noComments");
            model.addAttribute("commentsList",commentsList);
            model.addAttribute("contents",contents.get());
            return "/boards/knowledge/update";
        }
    }

    @PostMapping("update/updateOk.do")
    public String update(long mid, long bid, BoardUpdateDto boardUpdateDto, @RequestParam("files") List<MultipartFile> files)
            throws IOException {
        System.out.println("boardUpdateDto: "+boardUpdateDto);
        Optional<Board> boardOpt =boardService.update(mid, bid, boardUpdateDto);
        if(files.isEmpty()){
            return "redirect:/articles/" +bid;
        }else {
            System.out.println("update() - !files.isEmpty()");
            for (MultipartFile multipartFile : files) {
                fileService.saveFile(boardOpt.get().getBid(), multipartFile);
            }
            return "redirect:/articles/" +bid;
        }
    }

    //(03/30) 수한 추가 수정창에서 업로드한 파일 삭제기능 추가
    @GetMapping("update/{bid}/del.do/{fid}")
    public String deleteFile(@PathVariable long bid, @PathVariable long fid){
        System.out.println("deleteFile in?" + bid + ", " + fid);
        boolean flag = fileService.remove(fid);
        System.out.println("파일 제거?: " +flag);
        return "redirect:../../" + bid;
    }

    void pln(String str){
        System.out.println(str);
    }

}