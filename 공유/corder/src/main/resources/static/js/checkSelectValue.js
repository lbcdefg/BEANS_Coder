function check() {
    var kw = f.kw.value;
    kw = kw.trim();
    if (kw.length == 0) {
        alert("검색어를 입력해주세요");
        f.kw.focus();
        return false;
    } else {
        f.action="search.do";
        f.submit();
    }
}
function enterCheck(elm){
    if(event.keyCode == 13){
        if(elm == f.kw){
           check();
        }
    }
}
function getOptionValue() {
    var value = selcForm.size.value;
    selcForm.submit();
}

