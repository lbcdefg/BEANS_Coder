package com.springboot.corder.service.member;

import com.springboot.corder.domain.Member;

import java.util.Optional;

public interface MemberService {

    Member create(String email, String name, String nick, String password);

    Boolean checkEmail(String email);

    Boolean checkNick(String nick);
}
