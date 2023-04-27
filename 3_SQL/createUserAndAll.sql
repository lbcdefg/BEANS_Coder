

alter session set "_oracle_script"=true;
create user coder identified by java;
grant connect, resource, unlimited tablespace to coder;
conn coder/java;
show user;


drop table FILEUP;
drop sequence FILEUP_SEQ;
drop table VOTE;
drop sequence VOTE_SEQ;
drop table COMMENTS;
drop sequence COMMENTS_SEQ;
drop table BOARD;
drop sequence BOARD_SEQ;

drop table MEMBER;
drop sequence MEMBER_SEQ;

drop table CATEGORY;
purge recyclebin;
select tname from tab;


create table MEMBER (
  MID number,
  EMAIL VARCHAR2(50),
  NAME VARCHAR2(15),
  NICK VARCHAR2(25),
  PASSWORD VARCHAR2(80) constraint MEMBER_NN NOT NULL,
  RDATE DATE,
  UDATE DATE,
  FNAME VARCHAR2(100),
  OFNAME VARCHAR2(100),
  SAVEDPATH VARCHAR2(100)
);
create sequence MEMBER_SEQ increment by 1 start with 1 nocache;
alter table MEMBER add constraint MEMBER_PK primary key(MID);
alter table MEMBER add constraint MEMBER_UQ1 unique(EMAIL);
alter table MEMBER add constraint MEMBER_UQ2 unique(NICK);

create table BOARD (
  BID number,
  TITLE VARCHAR2(100) constraint BOARD_NN1 NOT NULL,
  CONTENT VARCHAR2(4000) constraint BOARD_NN2 NOT NULL,
  LOOKUP NUMBER default 0,
  VOTE NUMBER default 0,
  RDATE DATE,
  UDATE DATE,
  MID NUMBER,
  CCODE VARCHAR2(30),
  CMAIN VARCHAR2(30)
);
create sequence BOARD_SEQ increment by 1 start with 1 nocache;
alter table BOARD add constraint BOARD_PK primary key(BID);
alter table BOARD add constraint BOARDE_FK1 foreign key(MID) references MEMBER on delete cascade;
desc BOARD;


create table FILEUP(
   FID number,
   FNAME varchar2(50), 
   OFNAME varchar2(50),
   SAVEDPATH varchar2(100),
   BID number
);
create sequence FILEUP_SEQ increment by 1 start with 1 nocache;
alter table FILEUP add constraint FILEUP_PK primary key(FID);
alter table FILEUP add constraint FILEUP_FK foreign key(BID) references BOARD on delete cascade;
desc FILEUP;


create table COMMENTS(
   CID number,
   MID number,
   BID number,
   CONTENT varchar2(200), 
   RDATE DATE,
   UDATE DATE
);
create sequence COMMENTS_SEQ increment by 1 start with 1 nocache;
alter table COMMENTS add constraint COMMENTP_PK primary key(CID);
alter table COMMENTS add constraint COMMENT_FK1 foreign key(MID) references MEMBER on delete cascade;
alter table COMMENTS add constraint COMMENT_FK2 foreign key(BID) references BOARD on delete cascade;


create table VOTE(
   VID number,
   MID number,
   BID number
);
create sequence VOTE_SEQ increment by 1 start with 1 nocache;
alter table VOTE add constraint VOTEP_PK primary key(VID);
alter table VOTE add constraint VOTE_FK1 foreign key(MID) references MEMBER on delete cascade;
alter table VOTE add constraint VOTE_FK2 foreign key(BID) references BOARD on delete cascade;

select tname from tab;


/*
spring.datasource.driver-class-name=oracle.jdbc.OracleDriver
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:JAVA
spring.datasource.username=coder
spring.datasource.password=java
*/


create table CATEGORY (
  CCODE VARCHAR2(30),		--카테고리 하위 구분 
  CMAIN VARCHAR2(30)	        --카테고리 상위 구분
);
alter table CATEGORY add constraint CATEGORY_PK primary key(CCODE);

insert into CATEGORY values('기술 questions', 'questions');
insert into CATEGORY values('커리어 questions', 'questions');
insert into CATEGORY values('기타 questions', 'questions');
insert into CATEGORY values('Tech/뉴스 knowledge', 'knowledge');
insert into CATEGORY values('팁 knowledge', 'knowledge');
insert into CATEGORY values('칼럼 knowledge', 'knowledge');
insert into CATEGORY values('리뷰 knowledge', 'knowledge');
insert into CATEGORY values('사는얘기 community', 'community');
insert into CATEGORY values('모임/스터디 community', 'community');
insert into CATEGORY values('IT/행사 events', 'events');
insert into CATEGORY values('홍보광고 events', 'events');
insert into CATEGORY values('구인계약직 jobs', 'jobs');
insert into CATEGORY values('구인정규직 jobs', 'jobs');
insert into CATEGORY values('구직 jobs', 'jobs');
insert into CATEGORY values('좋은회사/나쁜회사 jobs', 'jobs');
insert into CATEGORY values('공지사항 notice', 'notice');