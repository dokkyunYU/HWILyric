package com.holorok.hwilyric.note.keyword.repository;

import com.holorok.hwilyric.note.keyword.domain.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeywordRepository extends JpaRepository<Keyword, Long>, CustomKeywordRepository {
}
