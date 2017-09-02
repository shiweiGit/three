var addHistory=function(num,id){
    stringCookie=getCookie('history');
    var stringHistory=""!=stringCookie?stringCookie:"{history:[]}";
    var json=new JSON(stringHistory);
    var e="{num:"+num+",id:"+id+"}";
    json['history'].push(e);//���һ���µļ�¼
    setCookie('history',json.toString(),30);
}
//��ʾ��ʷ��¼
var DisplayHistory=function(){
    var p_ele=document.getElementById('history');
     while (p_ele.firstChild) {
      p_ele.removeChild(p_ele.firstChild);
     }

    var historyJSON=getCookie('history');
    var json=new JSON(historyJSON);
    var displayNum=6;
	console.log(json['history']);
    for(i=json['history'].length-1;i>0;i--){
        addLi(json['history'][i]['num'],json['history'][i]['id'],"history");
        displayNum--;
        if(displayNum==0){break;}
    }
}
//���һ��liԪ��
var addLi=function(num,id,pid){
    var a=document.createElement('a');
    var href='product.action?pid='+id;
    a.setAttribute('href',href);
    var t=document.createTextNode(num);
    a.appendChild(t);
    var li=document.createElement('li');
    li.appendChild(a);
    document.getElementById(pid).appendChild(li);
}
//���cookie
var setCookie=function(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    cookieVal=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
//    alert(cookieVal);
    document.cookie=cookieVal;
}
//��ȡcookie
function getCookie(c_name)
{
    if (document.cookie.length>0)
      {
      c_start=document.cookie.indexOf(c_name + "=")
      if (c_start!=-1)
        { 
        c_start=c_start + c_name.length+1 
        c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
//        document.write(document.cookie.substring(c_start,c_end)+"<br>");
        return unescape(document.cookie.substring(c_start,c_end))
        } 
      }
    return ""
}