package com.springboot.corder.controller.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Member;
import com.springboot.corder.service.boards.BoardService;
import com.springboot.corder.service.member.MemberFileService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequiredArgsConstructor
@Controller
@RequestMapping("knowledge")
public class KnowledgePageController {

    private final SessionControlService sessionControlService;
    private final MemberFileService memberFileService;

    private final BoardService boardService;
    @GetMapping("")
    public String listAll(Model model){
        try {
            Member loginOk = sessionControlService.getSessionInfo();
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    System.out.println("main userImage: " + loginOk);

                    model.addAttribute("loginOk", loginOk);
                    return "/boards/knowledge/knowledge";
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("loginOk", loginOk);
                    return "/boards/knowledge/knowledge";
                }
            } else {
                return "/boards/knowledge/knowledge";
            }
        }catch (Exception e){
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
    @PostMapping("/input.do")
    public String write(@RequestParam long mid, Board board){
        boardService.write(mid, board);
        return "redirect:../knowledge";
    }



    void pln(String str){
        System.out.println(str);
    }

}