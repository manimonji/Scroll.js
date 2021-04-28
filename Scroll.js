function scrolltoelement(Selector,speed,callback){
    var sel_id = Selector.match("#");
    var sel_cl = "";
    if(sel_id == ""){
    var sel_cl = Selector.match(".");
    }
    var sel = sel_id + sel_cl;
    var sel_va = Selector.replace(sel,"");
    if (sel == ".") {
    var sel_el = document.getElementsByClassName(sel_va);
    }else if (sel == "#") {
    var sel_el = document.getElementById(sel_va);
    }else{
    var sel_el = document.getElementsByTagName(sel_va);
    }
    var el_top  =  sel_el.offsetTop;
    
    window.scrollTo(0, el_top);
 
}
