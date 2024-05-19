package com.tarun.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tarun.example.model.User;
import com.tarun.example.repository.UserRepository;

import dto.UserDto;

@Component
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(UserDto userDto) {
		
		User userObj = new User(userDto);
		
		return userRepository.save(userObj);
	}
	
	public List<User> getUserList() {
		return userRepository.findAll();
	}
}
