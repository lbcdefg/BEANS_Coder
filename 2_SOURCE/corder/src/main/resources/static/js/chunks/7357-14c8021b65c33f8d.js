"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7357],{96329:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return BoardSearchBar}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52322),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(36874),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2784),_use_board_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(89278);function BoardSearchBar(param){let{placeholder="검색",keyword,onFocus=!1}=param,{moveToParams}=(0,_use_board_router__WEBPACK_IMPORTED_MODULE_2__.d)(),[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),buttonRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)(),inputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)(),handleInputChange=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{setValue(e.target.value)},[]),handleClickSearch=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{var ref,ref1;if(!value){null===(ref1=buttonRef.current)||void 0===ref1||ref1.blur();return}moveToParams({keyword:value.trim(),page:1}),null===(ref=buttonRef.current)||void 0===ref||ref.blur()},[value,buttonRef,moveToParams]),handleSearchByPressEnter=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{let{code,key,currentTarget}=e;if("enter"===key.toLocaleLowerCase()||"enter"===code.toLocaleLowerCase()){var ref;moveToParams({keyword:currentTarget.value.trim(),page:1}),null===(ref=inputRef.current)||void 0===ref||ref.blur()}},[moveToParams,inputRef]);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{onFocus&&inputRef.current&&inputRef.current.focus()},[inputRef,onFocus]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex h-8 items-center rounded-[43px] border border-gray-300 py-0 transition-colors focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-700 dark:bg-gray-700",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{ref:buttonRef,onClick:handleClickSearch,className:"-my-0.5 -mr-1.5 flex h-8 w-8 flex-shrink-0 items-center justify-center transition duration-300",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Search Bar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Z,{className:"h-3.5 w-3.5 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-200"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{ref:inputRef,className:"w-full border-none bg-transparent p-0 pr-2 text-sm font-normal placeholder-gray-500/80 focus:border-gray-500 focus:outline-none focus:ring-0",onChange:handleInputChange,onKeyPress:handleSearchByPressEnter,type:"text",placeholder:placeholder,defaultValue:keyword})]})}},56792:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ZP:function(){return QuestionBoardProvider},iX:function(){return useQuestionBoardContext}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52322),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2784);let QuestionBoardStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);function reducer(state,action){switch(action.type){case"SET_TOPIC":return{topic:action.payload,page:1,tag:state.tag};case"SET_SORT":return{...state,sort:action.payload};case"SET_KEYWORD":return{...state,keyword:action.payload};case"SET_TAG":return{...state,tag:action.payload};case"SET_PAGE":return{...state,page:action.payload};case"SET_FILTER":return{...state,filter:action.payload};default:return state}}function QuestionBoardProvider(param){let{initialState,children}=param,{topic,sort,page,keyword,tag="",filter}=initialState,[state,dispatch]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer,initialState),value=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({state,dispatch}),[state]);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{topic!==state.topic&&dispatch({type:"SET_TOPIC",payload:topic})},[topic,state.topic,tag]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{sort&&dispatch({type:"SET_SORT",payload:sort})},[sort]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{keyword&&dispatch({type:"SET_KEYWORD",payload:keyword})},[keyword]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{tag&&dispatch({type:"SET_TAG",payload:tag})},[tag]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{"number"==typeof page&&page>=1&&dispatch({type:"SET_PAGE",payload:page})},[page]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{dispatch({type:"SET_FILTER",payload:filter})},[filter]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QuestionBoardStateContext.Provider,{value:value,children:children})}function useQuestionBoardContext(){let context=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(QuestionBoardStateContext);if(void 0===context)throw Error("useQuestionBoardContext must be used within a QuestionBoardProvider");return context}},39611:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return FilterButtons},g:function(){return getFilterOption}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52322),_headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(97002),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(46895),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2784),_libs_fn_string__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(86922);let FILTER_OPTION_MAP=new Map([[void 0,"전체"],["NO_ANSWER","답변 없음"]]),FILTER_OPTIONS=Array.from(FILTER_OPTION_MAP).map(param=>{let[key,value]=param;return{key,value}});function getFilterOption(){let key=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return{key,value:FILTER_OPTION_MAP.get(key)}}function FilterButtons(param){let{selectedTab=FILTER_OPTIONS[0],onChange}=param,fnClickHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(option=>()=>{onChange(option)},[onChange]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.v,{as:"div",className:"relative inline-block text-left",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.v.Button,{className:"inline-flex h-9 items-center justify-center space-x-0.5 rounded-l-md border border-gray-500/30 bg-white py-2 px-3.5 text-gray-700 shadow-sm hover:border-gray-500/70 dark:bg-gray-700 dark:text-gray-300 sm:px-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-sm font-medium",children:selectedTab.value})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.u,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.v.Items,{className:"absolute right-0 mt-2 w-[152px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border dark:border-gray-700 dark:bg-gray-800 md:mt-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"py-1",children:FILTER_OPTIONS.map(param=>{let{key,value}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.v.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:fnClickHandler({key,value}),className:(0,_libs_fn_string__WEBPACK_IMPORTED_MODULE_4__.z)(value===selectedTab.value?"text-blue-500":"text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-200","block px-4 py-2 text-sm"),children:value})},key)})})})})]})}},58913:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return PaginationOnListTop}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52322),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39987),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(76644),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2784),_libs_fn_string__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(86922),_use_board_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(89278);function PaginationOnListTop(param){let{currentPage=0,pagination}=param,{moveToParams}=(0,_use_board_router__WEBPACK_IMPORTED_MODULE_2__.d)(),isLastPage=pagination.last,isFirstPage=pagination.first,handleClickNextPage=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(currPage=>{moveToParams({page:currPage+1})},[moveToParams]),handleClickPrevPage=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(currPage=>{moveToParams({page:currPage-1})},[moveToParams]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-x-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"text-sm font-normal text-gray-600 dark:text-gray-400",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-gray-900 dark:text-gray-100",children:currentPage})," ","/ ",pagination.totalPages," 페이지"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center space-x-4 text-gray-600 dark:text-gray-400",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Z,{onClick:()=>!isFirstPage&&handleClickPrevPage(currentPage),className:(0,_libs_fn_string__WEBPACK_IMPORTED_MODULE_4__.z)(isFirstPage?"text-gray-300 dark:text-gray-700":"hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-200","h-4 w-4")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.Z,{onClick:()=>!isLastPage&&handleClickNextPage(currentPage),className:(0,_libs_fn_string__WEBPACK_IMPORTED_MODULE_4__.z)(isLastPage?"text-gray-300 dark:text-gray-700":"hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-200","h-4 w-4")})]})]})}},20378:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return QuestionItems}});var jsx_runtime=__webpack_require__(52322),context=__webpack_require__(56792),EyeIcon=__webpack_require__(65632),ChevronUpDownIcon=__webpack_require__(80408),CheckBadgeIcon=__webpack_require__(87128),LockClosedIcon=__webpack_require__(15030),next_link=__webpack_require__(41664),link_default=__webpack_require__.n(next_link),concat=__webpack_require__(86922),use_board_router=__webpack_require__(89278),bolt=__webpack_require__(42773),image_avatar=__webpack_require__(89746);function QuestionItem(param){let{data}=param,{isAllCategoryBoard}=(0,use_board_router.d)(),{id,title,displayViewCount,displayVoteCount,displayAnswerCount,displayAuthor,existsSelectedAnswer,displayCreatedAt,displayTags,displayContent,category,categoryUrl,hasAnswers}=data;return(0,jsx_runtime.jsxs)("div",{className:"flex gap-x-4",children:[(0,jsx_runtime.jsxs)("div",{className:"hidden flex-col items-center sm:flex sm:-space-y-2.5",children:[(0,jsx_runtime.jsxs)("div",{className:(0,concat.z)(existsSelectedAnswer?"border-blue-500":hasAnswers?"border-gray-500 dark:border-gray-300":"border-gray-300 dark:border-gray-500","h-16 w-16 shrink-0 space-y-1 rounded-md border pt-4 text-center text-sm leading-4"),children:[(0,jsx_runtime.jsx)("span",{className:"text-gray-500 dark:text-gray-400",children:"답변"}),(0,jsx_runtime.jsx)("div",{className:(0,concat.z)(existsSelectedAnswer?"text-blue-500":hasAnswers?"":"text-gray-300 dark:text-gray-500","font-medium"),children:displayAnswerCount})]}),existsSelectedAnswer&&(0,jsx_runtime.jsx)(CheckBadgeIcon.Z,{className:"h-6 w-6 text-blue-500"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex w-full flex-col",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-1 shrink-0 items-center gap-x-1",children:[displayAuthor.isWithdrawnUser?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(image_avatar.Z,{className:"h-5 w-5 rounded-full",src:displayAuthor.displayImage,alt:"프로필 사진"})}),(0,jsx_runtime.jsx)("span",{className:"truncate pl-1 text-xs font-normal text-gray-700 dark:text-gray-300 sm:text-sm",children:displayAuthor.nickname}),(0,jsx_runtime.jsx)(LockClosedIcon.Z,{className:"h-3 w-3"})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(link_default(),{href:"/users/".concat(displayAuthor.id),children:(0,jsx_runtime.jsx)(image_avatar.Z,{className:"h-5 w-5 rounded-full",src:displayAuthor.displayImage,alt:"프로필 사진"})}),(0,jsx_runtime.jsx)(link_default(),{href:"/users/".concat(displayAuthor.id),className:"truncate pl-1 text-xs font-normal text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-200 sm:text-sm",children:displayAuthor.nickname})]}),(0,jsx_runtime.jsxs)("span",{className:"inline-flex items-center font-normal text-gray-700 dark:text-gray-300",children:[(0,jsx_runtime.jsx)("span",{className:"mx-0.5 text-xs sm:text-sm",children:"\xb7"}),(0,jsx_runtime.jsx)(bolt.Z,{className:"h-2.5 w-2.5 sm:h-3 sm:w-3"}),(0,jsx_runtime.jsx)("span",{className:"text-xs sm:text-sm",children:displayAuthor.abbreviatedPoint})]}),(0,jsx_runtime.jsx)("span",{className:"text-xs text-gray-700 dark:text-gray-300 sm:text-sm",children:"\xb7"}),(0,jsx_runtime.jsxs)("span",{className:"text-xs text-gray-700 dark:text-gray-300 sm:text-sm",children:[displayCreatedAt," 전"]})]}),(0,jsx_runtime.jsxs)("div",{className:"relative flex items-center -space-x-2.5 sm:hidden",children:[existsSelectedAnswer&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"absolute top-[3px] -left-5 z-0 h-5 w-5 rounded-full bg-white"}),(0,jsx_runtime.jsx)(CheckBadgeIcon.Z,{className:"absolute top-[3px] -left-5 z-10 h-5 w-5 text-blue-500"})]}),(0,jsx_runtime.jsxs)("div",{className:(0,concat.z)(existsSelectedAnswer?"border-blue-500 pl-3":hasAnswers?"border-gray-500 dark:border-gray-300":"border-gray-300 dark:border-gray-500","shrink-0 space-x-0.5 rounded-md border p-1.5 text-center text-xs leading-3"),children:[(0,jsx_runtime.jsx)("span",{className:"text-gray-500 dark:text-gray-400",children:"답변"}),(0,jsx_runtime.jsx)("span",{className:(0,concat.z)(existsSelectedAnswer?"text-blue-500":hasAnswers?"":"text-gray-300 dark:text-gray-500","font-medium"),children:displayAnswerCount})]})]})]}),(0,jsx_runtime.jsx)("div",{className:"my-2",children:(0,jsx_runtime.jsx)(link_default(),{href:"/questions/".concat(id),className:"line-clamp-1 w-fit truncate whitespace-normal break-all text-sm font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 sm:text-lg",children:title})}),(0,jsx_runtime.jsx)("div",{className:"mb-4",children:(0,jsx_runtime.jsx)(link_default(),{href:"/questions/".concat(id),className:"line-clamp-2 w-fit truncate whitespace-normal break-all text-xs font-normal text-gray-500 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 sm:text-sm",children:displayContent})}),(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-1 items-center gap-x-3",children:[isAllCategoryBoard&&(0,jsx_runtime.jsx)(link_default(),{href:categoryUrl,className:"shrink-0 rounded bg-blue-50 py-0.5 px-2.5 text-xs font-medium text-blue-500 hover:text-blue-300 dark:bg-gray-500 dark:text-gray-100 dark:hover:text-blue-200",children:category.defaultLabel}),(0,jsx_runtime.jsx)("div",{className:"flex items-center gap-x-1 sm:gap-x-2",children:displayTags.map(param=>{let{name="",uniqueTagKey}=param;return(0,jsx_runtime.jsxs)(link_default(),{href:"/questions/tagged/".concat(encodeURIComponent(name)),className:"line-clamp-1 text-xs font-normal leading-5 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-200 sm:text-sm",children:["#",name]},uniqueTagKey)})})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-x-2 text-gray-700 dark:text-gray-300",children:[(0,jsx_runtime.jsxs)("div",{className:"inline-flex items-center space-x-0.5 text-xs sm:text-sm",children:[(0,jsx_runtime.jsx)(EyeIcon.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"font-medium",children:displayViewCount}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"views"})]}),(0,jsx_runtime.jsxs)("div",{className:"inline-flex items-center -space-x-0.5 text-xs sm:text-sm",children:[(0,jsx_runtime.jsx)(ChevronUpDownIcon.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"font-medium",children:displayVoteCount}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"likes"})]})]})]})]})]})}var OL2=__webpack_require__(84473),notices=__webpack_require__(88425);function QuestionItems(param){let{data:questions}=param,{state:{topic,page}}=(0,context.iX)(),hasAd=questions.length>5;return(0,jsx_runtime.jsx)("div",{className:"overflow-hidden",children:(0,jsx_runtime.jsxs)("ul",{className:"divide-y divide-gray-500/30 dark:divide-gray-500/70",children:[(0,jsx_runtime.jsx)(notices.Z,{topic:topic,page:page}),questions.slice(0,5).map(question=>(0,jsx_runtime.jsx)("li",{className:"py-3.5 sm:py-4",children:(0,jsx_runtime.jsx)(QuestionItem,{data:question})},question.id)),hasAd&&(0,jsx_runtime.jsx)("li",{className:"my-4 divide-gray-500/30 border-t dark:divide-gray-500/70 lg:hidden",children:(0,jsx_runtime.jsx)(OL2.C,{})}),questions.slice(5,questions.length).map(question=>(0,jsx_runtime.jsx)("li",{className:"py-3.5 sm:py-4",children:(0,jsx_runtime.jsx)(QuestionItem,{data:question})},question.id))]})})}},8189:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R:function(){return getOption},Z:function(){return SortButtons}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52322),_headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(97002),_headlessui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(46895),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(93539),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2784),_libs_fn_string__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(86922);let SORT_OPTION_MAP=new Map([["ID","최신순"],["VOTE_COUNT","추천순"],["ANSWER_COUNT","답변순"],["SCRAP_COUNT","스크랩순"],["VIEW_COUNT","조회순"]]),SORT_OPTIONS=Array.from(SORT_OPTION_MAP).map(param=>{let[key,value]=param;return{key,value}});function getOption(){let key=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ID";return{key,value:SORT_OPTION_MAP.get(key)}}function SortButtons(param){let{selectedTab=SORT_OPTIONS[0],onChange}=param,fnClickHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(option=>()=>{onChange(option)},[onChange]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.v,{as:"div",className:"relative inline-block text-left",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.v.Button,{className:"inline-flex h-9 items-center justify-center space-x-0.5 rounded-r-md border border-gray-500/30 bg-white py-2 px-3.5 text-gray-700 shadow-sm hover:border-gray-500/70 dark:bg-gray-700 dark:text-gray-300 sm:px-3 sm:pr-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"hidden text-sm font-medium sm:inline",children:selectedTab.value})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.u,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.v.Items,{className:"absolute right-0 mt-2 w-[152px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border dark:border-gray-700 dark:bg-gray-800 md:mt-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"py-1",children:SORT_OPTIONS.map(param=>{let{key,value}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.v.Item,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:fnClickHandler({key,value}),className:(0,_libs_fn_string__WEBPACK_IMPORTED_MODULE_5__.z)(value===selectedTab.value?"text-blue-500":"text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-200","block px-4 py-2 text-sm"),children:value})},key)})})})})]})}},89278:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:function(){return useBoardRouter}});var next_router__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11163),qs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19126),qs__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2784),_libs_fn_get_category_default_label__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11469),_libs_okky_categories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(37545);function useBoardRouter(){let{query,pathname,asPath,...router}=(0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)(),fnRouter=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(){let pathname=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.pathname,base=arguments.length>1?arguments[1]:void 0;return params=>{let newQueryString=qs__WEBPACK_IMPORTED_MODULE_1___default().stringify({...base,...params}),hasSearch=newQueryString.length>0,url=hasSearch?"".concat(pathname,"?").concat(newQueryString):pathname;router.push(url)}},[router]),currentCategoryLabel=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{let splitedPath=asPath.split("?")[0].split("/"),categoryCode=splitedPath[splitedPath.length-1];return(0,_libs_fn_get_category_default_label__WEBPACK_IMPORTED_MODULE_4__.p)(_libs_okky_categories__WEBPACK_IMPORTED_MODULE_3__.b,categoryCode)},[asPath]),splittedUrl=asPath.split("?")[0],isAllCategoryBoard=splittedUrl.endsWith("/questions");return{asPath,moveToParams:fnRouter(pathname,query),currentCategoryLabel,isAllCategoryBoard}}},94880:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useQuestionBoardsDetail}});var okky_web=__webpack_require__(26697),dist=__webpack_require__(36282),react=__webpack_require__(2784),lib=__webpack_require__(69111),date=__webpack_require__(61915),filter_undefined_object_value=__webpack_require__(55861),get_category_url=__webpack_require__(30150),okky_categories=__webpack_require__(37545),picture=__webpack_require__(22018),context=__webpack_require__(56792);function refine(items){return items.map((param,index)=>{let{scrapCount,tags=[],id,dateCreated,displayAuthor,category,viewCount,voteCount,noteCount,answerCount,summary}=param;return{_raw:items[index],...items[index],bookmarkCount:scrapCount,displayTags:tags.slice(0,4).map(tag=>({...tag,uniqueTagKey:"".concat(tag.name,"+").concat(id)})),displayCreatedAt:(0,date.no)(dateCreated),displayAuthor:{_raw:displayAuthor,...displayAuthor,displayImage:(0,picture.Z)(displayAuthor.pictureType,displayAuthor.picture,96),isWithdrawnUser:displayAuthor.withdraw,abbreviatedPoint:(0,dist.abbreviateNumber)(displayAuthor.activityPoint,1)},displayViewCount:(0,dist.abbreviateNumber)(viewCount,1),displayVoteCount:(0,dist.abbreviateNumber)(voteCount,1),displayNoteCount:(0,dist.abbreviateNumber)(noteCount,1),displayAnswerCount:(0,dist.abbreviateNumber)(answerCount,1),displayContent:(0,lib.decode)(summary),categoryUrl:(0,get_category_url.Q)(okky_categories.b,category.code),hasAnswers:answerCount>0}})}function useQuestionBoardsDetail(props){let{state:filters}=(0,context.iX)(),[fetching,setFetching]=(0,react.useState)(!1),[pagination,setPagination]=(0,react.useState)({}),[questions,setQuestions]=(0,react.useState)([]),hasPagination=void 0!==pagination.totalPages&&pagination.totalPages>1,fetchQuestionList=(0,react.useCallback)(async()=>{setFetching(!0);let{topic="",page=1,tag="",size=20,...params}=filters,baseQuery={...params,categoryCode:topic,size,page:page-1,tag},{result}=await (0,okky_web.getQuestionList)((0,filter_undefined_object_value.S)(baseQuery));if(!result)return setFetching(!1),!1;{let{content,...rest}=result;return setQuestions(refine(content||[])),setPagination(rest),setFetching(!1),!0}},[filters]);return(0,react.useEffect)(()=>{let{content=[],...rest}=props;setQuestions(refine(content)),setPagination(rest)},[props]),{filters,pagination,hasPagination,questions,fetching,fetchQuestionList}}},87469:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useTrackBoardEvents}});var _ebrain_lab_ga4__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65446),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2784),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(56792);function useTrackBoardEvents(){let{state:{topic}}=(0,_context__WEBPACK_IMPORTED_MODULE_2__.iX)(),trackOrderBy=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(orderBy=>{(0,_ebrain_lab_ga4__WEBPACK_IMPORTED_MODULE_0__.event)("게시판_정렬",{topic,orderBy})},[topic]);return{trackOrderBy}}},55861:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{S:function(){return filterUndefinedObjectValue}});function filterUndefinedObjectValue(object){return Object.keys(object).forEach(key=>void 0===object[key]?delete object[key]:{}),object}}}]);