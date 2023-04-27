package com.springboot.corder.service.email;

public interface ResetPwdService {
    String sendTempPwdMessage(String to)throws Exception;
}
