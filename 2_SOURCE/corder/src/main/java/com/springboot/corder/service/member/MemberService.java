package com.springboot.corder.service.member;

import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.MemberUpdatePwdDto;

import java.util.Optional;

public interface MemberService {

    Member create(String email, String name, String nick, String password);

    Boolean checkEmail(String email);

    Boolean checkNick(String nick);

    Boolean checkCurrPwd(long mid, String password);

    Optional<Member> saveTempPwd(String email, String password);

    Optional<Member> updatePwd(String email, MemberUpdatePwdDto memberUpdatePwdDto);
}
