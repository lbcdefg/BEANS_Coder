"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9818],{76995:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2784);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))});__webpack_exports__.Z=ForwardRef},3086:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2784);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"}))});__webpack_exports__.Z=ForwardRef},88425:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return NoticeArticleItem}});var jsx_runtime=__webpack_require__(52322),LockClosedIcon=__webpack_require__(15775),EyeIcon=__webpack_require__(65632),ChatBubbleLeftEllipsisIcon=__webpack_require__(92397),ChevronUpDownIcon=__webpack_require__(80408),next_link=__webpack_require__(41664),link_default=__webpack_require__.n(next_link),bolt=__webpack_require__(42773),image_avatar=__webpack_require__(89746);function Skeleton(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:[0,1].map(index=>(0,jsx_runtime.jsxs)("li",{className:"flex h-28 animate-pulse flex-col bg-blue-50 py-4 px-2 dark:bg-gray-800 sm:px-2.5",children:[(0,jsx_runtime.jsxs)("div",{className:"flex shrink-0 items-center gap-x-2",children:[(0,jsx_runtime.jsx)("div",{className:"h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-700"}),(0,jsx_runtime.jsx)("div",{className:"h-3 w-40 rounded-md bg-gray-300 dark:bg-gray-700"})]}),(0,jsx_runtime.jsx)("div",{className:"my-3 h-5 w-1/2 rounded-md bg-gray-300 dark:bg-gray-700"}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between",children:[(0,jsx_runtime.jsxs)("div",{className:"flex gap-x-2",children:[(0,jsx_runtime.jsx)("div",{className:"h-3 w-8 rounded-md bg-gray-300 dark:bg-gray-700"}),(0,jsx_runtime.jsx)("div",{className:"h-3 w-12 rounded-md bg-gray-300 dark:bg-gray-700"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex gap-x-2",children:[(0,jsx_runtime.jsx)("div",{className:"h-3 w-6 rounded-md bg-gray-300 dark:bg-gray-700"}),(0,jsx_runtime.jsx)("div",{className:"h-3 w-6 rounded-md bg-gray-300 dark:bg-gray-700"}),(0,jsx_runtime.jsx)("div",{className:"h-3 w-6 rounded-md bg-gray-300 dark:bg-gray-700"})]})]})]},index))})}var okky_web=__webpack_require__(26697),react=__webpack_require__(2784),use_boards_detail=__webpack_require__(44015);function NoticeArticleItem(param){let{topic,page}=param,{notices,fetching}=function(topic){let page=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[fetching,setFetching]=(0,react.useState)(!1),[notices,setNotices]=(0,react.useState)([]),isFirstPage=1>=Number(page);return(0,react.useEffect)(()=>{async function f(){setFetching(!0);let{result}=await (0,okky_web.getArticleNoticeList)({categoryCode:topic});return result?(setNotices((0,use_boards_detail.l)(result)),setFetching(!1),!0):(setFetching(!1),!1)}isFirstPage?f():setNotices([])},[topic,isFirstPage]),{fetching,notices}}(topic,page);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:fetching?(0,jsx_runtime.jsx)(Skeleton,{}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:notices.map(param=>{let{displayAuthor,displayCreatedAt,id,title,tags=[],displayViewCount,displayVoteCount,displayNoteCount}=param;return(0,jsx_runtime.jsxs)("li",{className:"flex flex-col bg-blue-50 py-4 px-2 dark:bg-gray-700 sm:px-2.5",children:[(0,jsx_runtime.jsxs)("div",{className:"flex shrink-0 items-center gap-x-1",children:[displayAuthor.isWithdrawnUser?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(image_avatar.Z,{className:"h-5 w-5 rounded-full",src:displayAuthor.displayImage,alt:"프로필 사진"})}),(0,jsx_runtime.jsx)("span",{className:"truncate pl-1 text-xs font-normal text-gray-700 dark:text-gray-300 sm:text-sm",children:displayAuthor.nickname}),(0,jsx_runtime.jsx)(LockClosedIcon.Z,{className:"h-3 w-3"})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(link_default(),{href:"/users/".concat(displayAuthor.id),children:(0,jsx_runtime.jsx)(image_avatar.Z,{className:"h-5 w-5 rounded-full",src:displayAuthor.displayImage,alt:"프로필 사진"})}),(0,jsx_runtime.jsx)(link_default(),{href:"/users/".concat(displayAuthor.id),className:"truncate pl-1 text-xs font-normal text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-200 sm:text-sm",children:displayAuthor.nickname})]}),(0,jsx_runtime.jsxs)("div",{className:"inline-flex items-center font-normal text-gray-700 dark:text-gray-300",children:[(0,jsx_runtime.jsx)("span",{className:"mx-0.5 text-xs sm:text-sm",children:"\xb7"}),(0,jsx_runtime.jsx)(bolt.Z,{className:"h-2.5 w-2.5 sm:h-3 sm:w-3"}),(0,jsx_runtime.jsx)("span",{className:"text-xs sm:text-sm",children:displayAuthor.abbreviatedPoint})]}),(0,jsx_runtime.jsx)("span",{className:"text-xs text-gray-700 dark:text-gray-300 sm:text-sm",children:"\xb7"}),(0,jsx_runtime.jsxs)("span",{className:"text-xs text-gray-700 dark:text-gray-300 sm:text-sm",children:[displayCreatedAt," 전"]})]}),(0,jsx_runtime.jsx)("div",{className:"my-2",children:(0,jsx_runtime.jsx)(link_default(),{href:"/articles/".concat(id),className:"line-clamp-1 w-fit truncate whitespace-normal break-all text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 sm:text-base",children:title})}),(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-1 items-center gap-x-3",children:[(0,jsx_runtime.jsx)(link_default(),{href:"/notice/info",className:"shrink-0 rounded border border-gray-500/30 bg-white py-0.5 px-2.5 text-xs font-medium text-blue-500 hover:text-blue-300 dark:border-gray-500/70 dark:bg-gray-600 dark:text-gray-100 dark:hover:text-blue-200",children:"공지사항"}),(0,jsx_runtime.jsx)("div",{className:"flex items-center gap-x-1 sm:gap-x-2",children:tags.slice(0,4).map(param=>{let{name,uniqueTagKey}=param;return(0,jsx_runtime.jsxs)(link_default(),{href:"/articles/tagged/".concat(encodeURIComponent(name)),className:"line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-200 sm:text-sm",children:["#",name]},uniqueTagKey)})})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-x-2 text-gray-700 dark:text-gray-300",children:[(0,jsx_runtime.jsxs)("div",{className:"inline-flex items-center space-x-0.5 text-xs sm:text-sm",children:[(0,jsx_runtime.jsx)(EyeIcon.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"font-medium",children:displayViewCount}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"views"})]}),(0,jsx_runtime.jsxs)("div",{className:"inline-flex items-center space-x-0.5 text-xs sm:text-sm",children:[(0,jsx_runtime.jsx)(ChatBubbleLeftEllipsisIcon.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"font-medium",children:displayNoteCount}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"comments"})]}),(0,jsx_runtime.jsxs)("div",{className:"inline-flex items-center -space-x-0.5 text-xs sm:text-sm",children:[(0,jsx_runtime.jsx)(ChevronUpDownIcon.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"font-medium",children:displayVoteCount}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"likes"})]})]})]})]},id)})})})}},90277:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useCategoryDescription}});var _libs_number_rand__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(78720),_components_auth_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11712);let CATEGORY_DESCRIPTION={QUESTIONS:["좋은 질문과 답변으로 동료의 시간을 아껴주세요."],TECH:["기술적인 질문을 하고 답변을 얻는 공간입니다."],CAREER:["커리어와 관련된 질문을 하고 답변을 얻는 공간입니다."],"QNA-ETC":["기술, 커리어 이외의 질문을 하고 답변을 얻는 공간입니다."],KNOWLEDGE:["지식을 공유하고 새로운 아이디어를 얻어보세요."],NEWS:["새로운 기술 소식 및 동향을 공유하는 공간입니다."],TIPS:["오늘 내가 알게 된 기술 팁을 공유하는 공간입니다.","왠지 나만 알 것 같은 개발 관련 팁을 공유하는 공간입니다.","짤막하지만 유용한 개발 팁을 공유하는 공간입니다."],COLUMNS:["IT 전반의 다양한 의견과 통찰있는 글을 나누는 공간입니다."],REVIEW:["제품, 도서, 강의 등 후기를 공유하는 공간입니다."],COMMUNITY:["다양한 사람을 만나고 생각의 폭을 넓혀보세요."],LIFE:["개발자의 삶과 애환에 관한 다양한 이야기를 나누는 공간입니다."],GATHERING:["개발과 관련된 공통 주제나 관심사로 이벤트를 만드는 공간입니다."],EVENTS:["기술 관련 행사와 네트워킹 이벤트 정보를 함께 해요."],IT:["세미나, 컨퍼런스 등 기술 행사 정보를 공유하는 공간입니다."],PROMOTE:["개발자에게 도움이 되는 제품을 홍보하는 공간입니다.","개발자에게 도움이 되는 컨텐츠를 홍보하는 공간입니다.","내가 직접 만든 오픈소스를 홍보하는 공간입니다.","내가 직접 만든 컨텐츠나 제품을 홍보하는 공간입니다.","흥미로운 개발자를 위한 툴을 홍보하는 공간입니다."],CONTRACT:["내게 맞는 프리랜서 채용 포지션 정보를 찾는 공간입니다.","약 13만명의 회원들에게 프리랜서 채용 포지션을 홍보하는 공간입니다."],FULLTIME:["내게 맞는 채용 포지션을 정보를 찾는 공간입니다.","약 13만명의 회원들에게 정규직 채용 포지션을 홍보하는 공간입니다."],RESUMES:["프로필을 등록하고 채용의 기회를 만드는 공간입니다."],EVALCOM:["회사에 대한 경험을 공유하는 공간입니다."],INFO:["OKKY의 새소식, 이벤트, 행사 정보를 공유하는 공간입니다."],ARCHIVE:["OKKY가 주최한 행사, 이벤트를 통해 만들어진 컨텐츠를 공유하는 공간입니다."]},SHORTEN_CATEGORY_DESCRIPTION={QUESTIONS:["개발자 질문 및 답변"],TECH:["기술 관련 질문과 답변"],CAREER:["커리어 관련 질문과 답변"],"QNA-ETC":["기술, 커리어 이외의 질문과 답변"],KNOWLEDGE:["지식과 새로운 아이디어를 얻는 공간"],NEWS:["새로운 기술 소식과 동향"],TIPS:["기술과 개발 관련 유용한 팁"],COLUMNS:["IT 전반의 의견 및 통찰"],REVIEW:["제품, 도서, 강의 등 후기"],COMMUNITY:["다양한 사람과 만나는 소통의 장"],LIFE:["개발자의 삶과 애환에 관한 이야기"],GATHERING:["개발 관련 모임과 스터디"],EVENTS:["기술 관련 행사 및 네트워킹 정보"],IT:["세미나, 컨퍼런스 등 기술 행사 정보"],PROMOTE:["개발자에 의한, 개발자를 위한 홍보"],CONTRACT:["프리랜서 채용 포지션 정보","프리랜서 채용 포지션"],FULLTIME:["채용 포지션 정보","정규직 채용 포지션"],RESUMES:["채용의 기회를 만드는 공간"],EVALCOM:["회사 경험을 공유하는 공간"],INFO:["OKKY 새소식, 행사, 이벤트 정보"],ARCHIVE:["OKKY 주최 행사, 이벤트 컨텐츠"]};function useCategoryDescription(category){let{state:{isCompany}}=(0,_components_auth_context__WEBPACK_IMPORTED_MODULE_0__.k)(),descriptionArray=CATEGORY_DESCRIPTION[category.toUpperCase()],shortDescriptionArray=SHORTEN_CATEGORY_DESCRIPTION[category.toUpperCase()];if("CONTRACT"===category||"FULLTIME"===category)return isCompany?{description:descriptionArray[1],shortDescription:shortDescriptionArray[1]}:{description:descriptionArray[0],shortDescription:shortDescriptionArray[0]};let randomIndex=(0,_libs_number_rand__WEBPACK_IMPORTED_MODULE_1__.Z)(0,descriptionArray.length-1);return{description:descriptionArray[randomIndex],shortDescription:shortDescriptionArray[0]}}}}]);