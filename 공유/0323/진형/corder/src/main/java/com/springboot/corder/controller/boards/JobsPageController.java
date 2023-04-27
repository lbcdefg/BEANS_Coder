package com.springboot.corder.controller.boards;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("jobs")
public class JobsPageController {
    @GetMapping("")
    public String listAll(){

        return "/boards/jobs/jobs";
    }
    void pln(String str){
        System.out.println(str);
    }
}