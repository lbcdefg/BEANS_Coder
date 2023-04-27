package com.springboot.corder.controller.boards;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("events")
public class EventsPageController {
    @GetMapping("")
    public String listAll(){

        return "/boards/events/events";
    }
    void pln(String str){
        System.out.println(str);
    }
}