package com.springboot.corder.controller.company;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequiredArgsConstructor
@Controller
@RequestMapping("info")
public class InfoController {
    @GetMapping("/intro")
    public String intro(){
        return "/info/intro";
    }
}
