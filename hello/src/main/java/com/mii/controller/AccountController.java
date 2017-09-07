/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mii.controller;

import com.mii.dto.LoginObject;
import com.mii.entity.Account;
import com.mii.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Hendro Steven
 */
@RestController
@RequestMapping("/api/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public Account register(@RequestBody Account account) throws Exception {
        return accountService.register(account);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public Account login(@RequestBody LoginObject login) throws Exception {
        return accountService.login(login.getUsername(), login.getPassword());
    }

}
