"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5316],{65446:function(module,__unused_webpack_exports,__webpack_require__){var mod,target,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},src_exports={};function config({targetId,params}){window.gtag("config",targetId,params)}function get({targetId,key}){return window.gtag("get",targetId,key)}function set(params={}){window.gtag("set",params)}function event(action,params){window.gtag("event",action,params)}function consent(){}function fnEvent(action){return (params={})=>event(action,params)}((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(src_exports,{ScriptGoogleTagManager:()=>ScriptGoogleTagManager,addPaymentInfo:()=>addPaymentInfo,addToCart:()=>addToCart,addToWishlist:()=>addToWishlist,beginCheckout:()=>beginCheckout,checkoutProcess:()=>checkoutProcess,config:()=>config,consent:()=>consent,event:()=>event,generateLead:()=>generateLead,get:()=>get,login:()=>login,pageview:()=>pageview,purchase:()=>purchase,refund:()=>refund,removeFromCart:()=>removeFromCart,search:()=>search,selectedContent:()=>selectedContent,set:()=>set,setCheckoutOption:()=>setCheckoutOption,share:()=>share,signUp:()=>signUp,viewItem:()=>viewItem,viewItemList:()=>viewItemList,viewPromotion:()=>viewPromotion,viewSearchResults:()=>viewSearchResults}),module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),src_exports);var pageview=fnEvent("page_view"),addPaymentInfo=fnEvent("add_payment_info"),addToCart=fnEvent("add_to_cart"),addToWishlist=fnEvent("add_to_wishlist"),beginCheckout=fnEvent("begin_checkout"),checkoutProcess=fnEvent("checkout_progress"),generateLead=fnEvent("generate_lead"),login=fnEvent("login"),purchase=fnEvent("purchase"),refund=fnEvent("refund"),removeFromCart=fnEvent("remove_from_cart"),search=fnEvent("search"),selectedContent=fnEvent("select_content"),setCheckoutOption=fnEvent("set_checkout_option"),share=fnEvent("share"),signUp=fnEvent("sign_up"),viewItem=fnEvent("view_item"),viewItemList=fnEvent("view_item_list"),viewPromotion=fnEvent("view_promotion"),viewSearchResults=fnEvent("view_search_results"),React=(target=null!=(mod=__webpack_require__(2784))?__create(__getProtoOf(mod)):{},__copyProps(mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod));function ScriptGoogleTagManager({id}){if(!id)throw Error("ScriptGoogleTagManager must be used with NEXT_PUBLIC_GOOGLE_ANALYTICS environment variable");return React.createElement(React.Fragment,null,React.createElement("script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${id}`}),React.createElement("script",{dangerouslySetInnerHTML:{__html:`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          w.gtag=function(){dataLayer.push(arguments)};
          })(window,document,'script','dataLayer','${id}');
          `}}))}},38696:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{s:function(){return OL1Desktop},u:function(){return OL1Mobile}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52322),react_use__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6917),_components_banner_google_adsense__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(63099),_components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16075),_banner_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(98986),_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(22199);function OL1Desktop(){let{banners:{CONTENT_TOP}}=(0,_context__WEBPACK_IMPORTED_MODULE_4__.nn)(),isDesktop=(0,react_use__WEBPACK_IMPORTED_MODULE_5__.Z)("(min-width: 1024px)"),{trackImpressBanner}=(0,_components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_2__.Z)("OL1");return void 0===CONTENT_TOP?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_banner_google_adsense__WEBPACK_IMPORTED_MODULE_1__._,{desktopStyle:_banner_styles__WEBPACK_IMPORTED_MODULE_3__.HS,mobileStyle:_banner_styles__WEBPACK_IMPORTED_MODULE_3__.if}):isDesktop?(trackImpressBanner(CONTENT_TOP),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden items-center lg:flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"min-w-0 flex-1 sm:flex",href:null==CONTENT_TOP?void 0:CONTENT_TOP.targetUrl,target:"_blank",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-[140px] w-full",src:null==CONTENT_TOP?void 0:CONTENT_TOP.image,alt:""})})})):null}function OL1Mobile(){let{banners:{CONTENT_TOP}}=(0,_context__WEBPACK_IMPORTED_MODULE_4__.nn)(),isDesktop=(0,react_use__WEBPACK_IMPORTED_MODULE_5__.Z)("(min-width: 1024px)"),{trackImpressBanner}=(0,_components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_2__.Z)("OL1");return void 0===CONTENT_TOP?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_banner_google_adsense__WEBPACK_IMPORTED_MODULE_1__._,{desktopStyle:_banner_styles__WEBPACK_IMPORTED_MODULE_3__.HS,mobileStyle:_banner_styles__WEBPACK_IMPORTED_MODULE_3__.if}):isDesktop?null:(trackImpressBanner(CONTENT_TOP),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"flex items-center justify-center",href:null==CONTENT_TOP?void 0:CONTENT_TOP.targetUrl,target:"_blank",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"min-w-0 max-w-[640px]",src:null==CONTENT_TOP?void 0:CONTENT_TOP.mobileImage,alt:""})}))}},3348:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ZP:function(){return BoardProvider},gr:function(){return useBoardContext}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52322),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2784);let BoardStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);function reducer(state,action){switch(action.type){case"SET_TOPIC":return{topic:action.payload,page:1,tag:state.tag};case"SET_SORT":return{...state,sort:action.payload};case"SET_KEYWORD":return{...state,keyword:action.payload};case"SET_TAG":return{...state,tag:action.payload};case"SET_PAGE":return{...state,page:action.payload};default:return state}}function BoardProvider(param){let{initialState,children}=param,{topic,sort,page,keyword,tag=""}=initialState,[state,dispatch]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer,initialState),value=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({state,dispatch}),[state]);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{topic!==state.topic&&dispatch({type:"SET_TOPIC",payload:topic})},[topic,state.topic,tag]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{sort&&dispatch({type:"SET_SORT",payload:sort})},[sort]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{keyword&&dispatch({type:"SET_KEYWORD",payload:keyword})},[keyword]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{tag&&dispatch({type:"SET_TAG",payload:tag})},[tag]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{"number"==typeof page&&page>=1&&dispatch({type:"SET_PAGE",payload:page})},[page]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BoardStateContext.Provider,{value:value,children:children})}function useBoardContext(){let context=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(BoardStateContext);if(void 0===context)throw Error("useBoardContext must be used within a BoardProvider");return context}},31929:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return PaginationOnListTop}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52322),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39987),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(76644),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2784),_libs_fn_string__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(86922),_components_boards_use_board_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(64719);function PaginationOnListTop(param){let{currentPage=0,pagination}=param,{moveToParams}=(0,_components_boards_use_board_router__WEBPACK_IMPORTED_MODULE_2__.d)(),isLastPage=pagination.last,isFirstPage=pagination.first,handleClickNextPage=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(currPage=>{moveToParams({page:currPage+1})},[moveToParams]),handleClickPrevPage=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(currPage=>{moveToParams({page:currPage-1})},[moveToParams]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-x-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"text-sm font-normal text-gray-600 dark:text-gray-400",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-gray-900 dark:text-gray-100",children:currentPage})," ","/ ",pagination.totalPages," 페이지"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center space-x-4 text-gray-600 dark:text-gray-400",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Z,{onClick:()=>!isFirstPage&&handleClickPrevPage(currentPage),className:(0,_libs_fn_string__WEBPACK_IMPORTED_MODULE_4__.z)(isFirstPage?"text-gray-300 dark:text-gray-700":"hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-200","h-4 w-4")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.Z,{onClick:()=>!isLastPage&&handleClickNextPage(currentPage),className:(0,_libs_fn_string__WEBPACK_IMPORTED_MODULE_4__.z)(isLastPage?"text-gray-300 dark:text-gray-700":"hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-200","h-4 w-4")})]})]})}},50143:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Skeleton}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52322);function Skeleton(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"divide-y divide-gray-500/30 dark:divide-gray-500/70",children:[1,2,3,4,5,6,7,8].map(i=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mx-auto h-24 px-4 py-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex h-full animate-pulse flex-row items-center justify-center space-x-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-700"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-1 flex-col space-y-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-6 w-full rounded-md bg-gray-300 dark:bg-gray-700"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-3 w-full rounded-md bg-gray-300 dark:bg-gray-700"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-3 w-4/5 rounded-md bg-gray-300 dark:bg-gray-700"})]})]})})},i))})})}},64719:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:function(){return useBoardRouter}});var next_router__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11163),qs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19126),qs__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2784),_libs_fn_get_category_default_label__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11469),_libs_okky_categories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(37545);function useBoardRouter(){let{query,pathname,asPath,...router}=(0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)(),fnRouter=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(){let pathname=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.pathname,base=arguments.length>1?arguments[1]:void 0;return params=>{let newQueryString=qs__WEBPACK_IMPORTED_MODULE_1___default().stringify({...base,...params}),hasSearch=newQueryString.length>0,url=hasSearch?"".concat(pathname,"?").concat(newQueryString):pathname;router.push(url)}},[router]),currentBoard=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>asPath.startsWith("/community")?"community":asPath.startsWith("/knowledge")?"knowledge":asPath.startsWith("/events")?"events":asPath.startsWith("/jobs")?"jobs":"notice",[asPath]),currentCategoryLabel=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{let splitedPath=asPath.split("?")[0].split("/"),categoryCode=splitedPath[splitedPath.length-1];return(0,_libs_fn_get_category_default_label__WEBPACK_IMPORTED_MODULE_4__.p)(_libs_okky_categories__WEBPACK_IMPORTED_MODULE_3__.b,categoryCode)},[asPath]),splittedUrl=asPath.split("?")[0],isAllCategoryBoard=splittedUrl.endsWith("/community")||splittedUrl.endsWith("/notice")||splittedUrl.endsWith("/knowledge")||splittedUrl.endsWith("/events");return{asPath,moveToParams:fnRouter(pathname,query),currentBoard,currentCategoryLabel,isNotWritableBoard:"notice"===currentBoard,isAllCategoryBoard}}},44015:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useBoardsDetail},l:function(){return refine}});var _ebrain_lab_api_okky_web__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(26697),js_abbreviation_number__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(36282),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2784),_libs_fn_date__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(61915),_libs_fn_get_category_url__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(30150),_libs_okky_categories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(37545),_libs_picture__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(22018),_context__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3348);function refine(items){return items.map((param,index)=>{let{scrapCount,tags=[],id,dateCreated,displayAuthor,category,viewCount,voteCount,noteCount}=param;return{_raw:items[index],...items[index],bookmarkCount:scrapCount,displayTags:tags.slice(0,4).map(tag=>({...tag,uniqueTagKey:"".concat(tag.name,"+").concat(id)})),displayCreatedAt:(0,_libs_fn_date__WEBPACK_IMPORTED_MODULE_3__.no)(dateCreated),displayAuthor:{_raw:displayAuthor,...displayAuthor,displayImage:(0,_libs_picture__WEBPACK_IMPORTED_MODULE_6__.Z)(displayAuthor.pictureType,displayAuthor.picture,96),isWithdrawnUser:displayAuthor.withdraw,abbreviatedPoint:(0,js_abbreviation_number__WEBPACK_IMPORTED_MODULE_1__.abbreviateNumber)(displayAuthor.activityPoint,1)},displayViewCount:(0,js_abbreviation_number__WEBPACK_IMPORTED_MODULE_1__.abbreviateNumber)(viewCount,1),displayVoteCount:(0,js_abbreviation_number__WEBPACK_IMPORTED_MODULE_1__.abbreviateNumber)(voteCount,1),displayNoteCount:(0,js_abbreviation_number__WEBPACK_IMPORTED_MODULE_1__.abbreviateNumber)(noteCount,1),categoryUrl:(0,_libs_fn_get_category_url__WEBPACK_IMPORTED_MODULE_7__.Q)(_libs_okky_categories__WEBPACK_IMPORTED_MODULE_4__.b,category.code)}})}function useBoardsDetail(props){let{state:filters}=(0,_context__WEBPACK_IMPORTED_MODULE_5__.gr)(),[fetching,setFetching]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),[pagination,setPagination]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),[articles,setArticles]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),hasPagination=void 0!==pagination.totalPages&&pagination.totalPages>1,fetchArticleList=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async()=>{setFetching(!0);let{topic="",page=1,tag="",size=20,...params}=filters,{result}=await (0,_ebrain_lab_api_okky_web__WEBPACK_IMPORTED_MODULE_0__.getArticleList)({...params,categoryCode:topic,size,page:page-1,tag});if(!result)return setFetching(!1),!1;{let{content,...rest}=result;return setArticles(refine(content||[])),setPagination(rest),setFetching(!1),!0}},[filters]);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{let{content=[],...rest}=props;setArticles(refine(content)),setPagination(rest)},[props]),{filters,pagination,hasPagination,articles,fetching,fetchArticleList}}},42773:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return BoltIcon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52322);function BoltIcon(param){let{className}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{className:className,width:"9",height:"12",viewBox:"0 1 9 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:"bolt icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.21535 0.575533C5.4443 0.647704 5.6 0.86003 5.6 1.10009V3.85009L7.8 3.85009C8.00508 3.85009 8.19313 3.96419 8.28783 4.14609C8.38254 4.328 8.36818 4.54748 8.25057 4.71549L4.40057 10.2155C4.26291 10.4122 4.0136 10.4968 3.78464 10.4246C3.55569 10.3525 3.4 10.1401 3.4 9.90009L3.4 7.15009H1.2C0.994914 7.15009 0.806866 7.03599 0.712157 6.85408C0.617448 6.67218 0.631811 6.45269 0.749418 6.28468L4.59942 0.784684C4.73708 0.588021 4.98639 0.503362 5.21535 0.575533Z",fill:"currentColor"})]})}},11469:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:function(){return function getCategoryDefaultLabel(categories,categoryCode){for(let i=0;i<categories.length;i++){if(categories[i].code===categoryCode)return categories[i].defaultLabel;if(categories[i].children){let ifFoundDefaultLabel=getCategoryDefaultLabel(categories[i].children,categoryCode);if(ifFoundDefaultLabel&&"undefined"!==ifFoundDefaultLabel)return ifFoundDefaultLabel}}return"undefined"}}})},30150:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:function(){return function getCategoryUrl(categories,categoryCode){for(let i=0;i<categories.length;i++){if(categories[i].code===categoryCode)return categories[i].url;if(categories[i].children){let ifFoundUrl=getCategoryUrl(categories[i].children,categoryCode);if(ifFoundUrl&&"/undefined"!==ifFoundUrl)return ifFoundUrl}}return"/undefined"}}})}}]);