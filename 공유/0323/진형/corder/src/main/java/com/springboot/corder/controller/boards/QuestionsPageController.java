package com.springboot.corder.controller.boards;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("questions")
public class QuestionsPageController {
    @GetMapping("")
    public String listAll(){

        return "/boards/questions/questions";
    }
    void pln(String str){
        System.out.println(str);
    }
}
