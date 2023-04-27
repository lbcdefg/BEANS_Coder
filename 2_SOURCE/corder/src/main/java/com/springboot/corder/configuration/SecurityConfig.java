package com.springboot.corder.configuration;


import com.springboot.corder.service.member.MemberSecurityService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final MemberSecurityService memberSecurityService;
    @Override
    public void configure(WebSecurity web) { // 4
        web.ignoring().antMatchers("/css/**", "/js/**", "/img/**");
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.authorizeRequests() // 6
                    .antMatchers("/admin").hasRole("ADMIN") // ADMIN만 접근 가능
                    .antMatchers("/knowledge/new").hasRole("USER")
                    .antMatchers("/community/new").hasRole("USER")
                    .antMatchers("/events/new").hasRole("USER")
                    .antMatchers("/questions/new").hasRole("USER")
                    .antMatchers("/jobs/new").hasRole("USER")
                    .antMatchers("/**").permitAll()
                    //.anyRequest().authenticated() // 나머지 요청들은 권한의 종류에 상관 없이 권한이 있어야 접근 가능
                .and()
                    .headers()
                    .addHeaderWriter(
                            new XFrameOptionsHeaderWriter(
                                    XFrameOptionsHeaderWriter.XFrameOptionsMode.SAMEORIGIN))
                .and()
                .formLogin()
                    .loginPage("/accounts/login.do")
                    .defaultSuccessUrl("/") // 로그인 성공 후 리다이렉트 주소
                .and()
                    .logout()
                    .logoutUrl("/accounts/logout.do")
                    .logoutSuccessUrl("/accounts/login.do") // 로그아웃 성공시 리다이렉트 주소
                    .invalidateHttpSession(true); // 세션 날리기
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    /*
    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception { // 9
        auth.userDetailsService(userSecurityService)
                // 해당 서비스(userService)에서는 UserDetailsService를 implements해서
                // loadUserByUsername() 구현해야함 (서비스 참고)
                .passwordEncoder(new BCryptPasswordEncoder());
    }

     */
}