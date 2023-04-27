package com.springboot.corder.service.email;

import com.springboot.corder.domain.Member;
import com.springboot.corder.repositpory.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Optional;
import java.util.Random;


@PropertySource("classpath:application.properties")
@Slf4j
@RequiredArgsConstructor
@Service
public class ResetPwdServiceImpl implements ResetPwdService{
    @Autowired
    JavaMailSender resetPwdSender;

    private final MemberRepository memberRepository;
    public static final String ePw = createKey();;



    private MimeMessage createMessage(String to, String nick)throws Exception{
        System.out.println("보내는 대상 : "+ to);
        MimeMessage  message = resetPwdSender.createMimeMessage();
        message.addRecipients(MimeMessage.RecipientType.TO, to);//보내는 대상
        message.setSubject("비밀번호 변경 테스트");//제목
        String msgg="";
        msgg+= "<div style='margin:20px;'>";
        msgg+= "<h1 style='background:navy; color:white;'> [Coder] </h1>";
        msgg+= "<br>";
        msgg+= "<p>닉네임: <span style='color:navy;'>" + nick + "</span></p>";
        msgg+= "<p>아래에 임시비밀번호가 발급되었습니다.</p>";
        msgg+= "<p>임시비밀번호로 로그인 후 비밀번호를 변경해주세요 </p>";
        msgg+= "<br>";
        msgg+= "<p>감사합니다.</p>";
        msgg+= "<br>";
        msgg+= "<br>";
        msgg+= "<div align='center' style='border:1px solid black; font-family:verdana';>";
        msgg+= "<div style='font-size:130%'>";
        msgg+= "임시비밀번호 : <strong>";
        msgg+= ePw+"</strong><div><br/> ";
        msgg+= "</div>";
        msgg+= "<br>";
        msgg+= "</div>";

        message.setText(msgg, "utf-8", "html");//내용
        message.setFrom(new InternetAddress("hwaniee413@gmail.com","Coder"));//보내는 사람
        return message;
    }
    public static String createKey() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for (int i = 0; i < 12; i++) { // 임시비번 12자리
            int index = rnd.nextInt(3); // 0~2 까지 랜덤
            switch (index) {
                case 0:
                    key.append((char) ((int) (rnd.nextInt(26)) + 97));
                    //  a~z  (ex. 1+97=98 => (char)98 = 'b')
                    break;
                case 1:
                    key.append((char) ((int) (rnd.nextInt(26)) + 65));
                    //  A~Z
                    break;
                case 2:
                    key.append((rnd.nextInt(10)));
                    // 0~9
                    break;
            }
        }
        return key.toString();
    }
    @Override
    public String sendTempPwdMessage(String to) throws Exception {
        Optional<Member> member = memberRepository.findByEmail(to);
        String nick = member.get().getNick();
        // TODO Auto-generated method stub
        MimeMessage message = createMessage(to, nick);
        try{//예외처리
            resetPwdSender.send(message);
        }catch(MailException es){
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
        return ePw;
    }

}
