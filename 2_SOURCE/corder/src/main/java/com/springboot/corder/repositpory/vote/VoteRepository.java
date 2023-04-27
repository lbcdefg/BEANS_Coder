package com.springboot.corder.repositpory.vote;

import com.springboot.corder.domain.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoteRepository extends JpaRepository<Vote, Long> {
}
