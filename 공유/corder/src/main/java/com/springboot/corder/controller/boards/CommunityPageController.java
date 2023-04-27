package com.springboot.corder.controller.boards;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.JsonObject;
import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.BoardListResult;
import com.springboot.corder.dto.CommunityListResult;
import com.springboot.corder.service.boards.BoardService;
import com.springboot.corder.service.boards.community.CommunityService;
import com.springboot.corder.service.boards.file.FileService;
import com.springboot.corder.service.member.MemberFileService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;

import oracle.jdbc.proxy.annotation.Post;
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
@RequestMapping("community")
public class CommunityPageController {
    String cmain = "community";
    private final SessionControlService sessionControlService;
    private final MemberFileService memberFileService;
    private final CommunityService communityService;

    private final BoardService boardService;

    private final FileService fileService;

    @GetMapping("")
    public String listAll(@PageableDefault(size=20, sort="bid", direction = Sort.Direction.DESC) Pageable pageable,
                          Model model, HttpSession session, HttpServletRequest request){
        //CommunityListResult listResult = communityService.getCommunityListResult(communityService.getCommunityList(cmain, pageable), cmain, pageable);
        String keyword = request.getParameter("kw");
        String sort = request.getParameter("sort");
        CommunityListResult noticeList = communityService.getCommunityListResult(communityService.getCmainResultByBid("notice", pageable), "notice", pageable);
        System.out.println(noticeList);
        CommunityListResult listResult;
        if(keyword == null){ //검색어가 없을때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순
                case "vote": listResult = communityService.getCommunityListResult(communityService.getCmainResultByVote(cmain, pageable), cmain, pageable); break;
                case "lookup": listResult = communityService.getCommunityListResult(communityService.getCmainResultByLookup(cmain, pageable), cmain, pageable); break;
                //case "comment": communityService.getCommunityListResult(communityService.getCmainResultByComment(cmain, pageable), cmain, pageable); break;
                default: listResult = communityService.getCommunityListResult(communityService.getCmainResultByBid(cmain, pageable), cmain, pageable);
            }
        }else{ //검색어 있을 때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순
                case "vote": listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByVote(cmain, keyword, pageable), cmain, pageable); break;
                //case "comment": communityService.getCommunityListResult(communityService.getCmainSearchResultByComment(cmain, keyword, pageable), cmain, pageable); break;
                case "lookup": listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByLookup(cmain, keyword, pageable), cmain, pageable); break;
                default : listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByBid(cmain, keyword, pageable), cmain, pageable);
                    sort = ""; break;
            }
            model.addAttribute("kw", keyword);
        }
        try {
            Member loginOk = sessionControlService.getSessionInfo();
            //System.out.println("community-getSessionInfo: "+member);
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("member", loginOk);
                } else {
                    //System.out.println("notNull-listResult: " + listResult);
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("member", loginOk);
                }
            }
        }catch (Exception e){
            //System.out.println("community-listResult: "+listResult.getList());
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            model.addAttribute("cmain", cmain);
            model.addAttribute("sortBy", sort);
            return "/boards/community/community";
        }finally{
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            model.addAttribute("cmain", cmain);
            model.addAttribute("sortBy", sort);
            return "/boards/community/community";
        }
    }

    @GetMapping("/{ccode}")
    public String listLife(@PathVariable("ccode") String ccode, @PageableDefault(size=20, sort="bid", direction = Sort.Direction.DESC) Pageable pageable,
                           Model model, HttpSession session, HttpServletRequest request){
        switch(ccode){
            case "life": ccode = "사는얘기"; break;
            case "gathering": ccode = "모임/스터디"; break;
        }
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
            }
        }else{ //검색어 있을 때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순 , switch가 default로 널을 못잡아서 널처리해줘야함
                case "vote": listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByVote(ccode, keyword, pageable), ccode, pageable); break;
                case "lookup": listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByLookup(ccode, keyword, pageable), ccode, pageable); break;
                default : listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByBid(ccode, keyword, pageable), ccode, pageable);
                    sort = ""; break;
            }
            model.addAttribute("kw", keyword);
        }

        try {
            Member loginOk = sessionControlService.getSessionInfo();
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("member", loginOk);
                } else {
                    //System.out.println("notNull-listResult: " + listResult);
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("member", loginOk);
                }
            }
        }catch (Exception e){
            //System.out.println("community-listResult: "+listResult.getList());
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            return "/boards/community/community";
        }finally{
            model.addAttribute("ccode",ccode);
            model.addAttribute("cmain", cmain);
            model.addAttribute("sortBy", sort);
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            return "/boards/community/community";
        }
    }


    @GetMapping("new")
    public String write(Model model){
        Member loginOk = sessionControlService.getSessionInfo();
        if (loginOk.getOfname() != null) {
            model.addAttribute("userImage", loginOk);
            model.addAttribute("loginOk", loginOk);
            return "/boards/community/community";
        } else {
            model.addAttribute("nothing", "nothing");
            model.addAttribute("loginOk", loginOk);
            return "/boards/community/new";
        }
    }

    @PostMapping("input.do")
    public String write(@RequestParam long mid, Board board, @RequestParam("files") List<MultipartFile> files) throws IOException {
        Board board1 = boardService.write(mid, board);
        System.out.println("board : " + board1);
        if(files.isEmpty()){
            System.out.println("board 1");
            return "redirect:../community";
        }else{
            System.out.println("board 2");
            for (MultipartFile multipartFile : files) {
                fileService.saveFile(board1.getBid(), multipartFile);
            }
            System.out.println("board 3");
            return "redirect:../community";
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





    void pln(String str){
        System.out.println(str);
    }
}