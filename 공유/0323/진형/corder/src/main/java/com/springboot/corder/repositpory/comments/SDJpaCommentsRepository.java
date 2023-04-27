package com.springboot.corder.repositpory.comments;

import com.springboot.corder.domain.Comments;
import com.springboot.corder.dto.MemberBoardCommentsDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SDJpaCommentsRepository extends JpaRepository<Comments, Long> {
//    Comments findByBid(long bid);

}
