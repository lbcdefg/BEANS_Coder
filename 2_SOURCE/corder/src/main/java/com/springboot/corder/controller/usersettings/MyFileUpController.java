package com.springboot.corder.controller.usersettings;


import com.springboot.corder.domain.Member;
import com.springboot.corder.service.member.MemberFileService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RequiredArgsConstructor
@RequestMapping("myinfo")
@Controller
public class MyFileUpController {
    private final MemberFileService memberFileService;


    @PostMapping("fileUpload.do")
    public String dragNDrop(@RequestParam(required = false) long mid, @RequestParam("file") MultipartFile file) throws IOException {
        System.out.println("dragNDrop - mid: " + mid);
        memberFileService.udateImageFile(mid, file);
        System.out.println("dragNDrop success??");
        return "redirect:../settings/profile";
    }
    @GetMapping("/images/{fname}")
    @ResponseBody
    public org.springframework.core.io.Resource downloadImage(@PathVariable("fname") String fname, Model model)
            throws IOException{
        Member member = memberFileService.getMemberImage(fname);
        System.out.println("downloadImage: " + member);
        return new UrlResource("file:" + member.getSavedpath());
    }

}
