package com.springboot.corder.service.email;

public interface EmailService {
    String sendSimpleMessage(String to)throws Exception;

    Boolean sendUrlMessage(String to)throws Exception;
}
