package com.asset.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asset.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Define custom query methods here if needed
    User findByUsername(String username);
}
