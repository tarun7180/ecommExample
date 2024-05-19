package com.tarun.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tarun.example.model.User;
import com.tarun.example.service.UserService;

import dto.UserDto;

@SpringBootApplication
@RestController
@RequestMapping(value = "/user", consumes = "application/json", produces = "application/json")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping(path = "/process")
	public User saveUser(@RequestBody UserDto userDto) {
		return userService.saveUser(userDto);
	}
	
	@GetMapping(path = "/users")
	public List<User> getAllUsers(){
		return userService.getUserList();
	}
}
