package com.tarun.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tarun.example.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
}
