package com.springboot.corder.controller.boards;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("notice")
public class NoticePageController {
    @GetMapping("")
    public String listAll(){

        return "/boards/notice/notice";
    }
    void pln(String str){
        System.out.println(str);
    }
}