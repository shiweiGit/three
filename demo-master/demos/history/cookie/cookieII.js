function setHistory(){
	var strUrl = window.location.href;
	 var arrUrl = strUrl.split("/");
	 var strPage = arrUrl[arrUrl.length - 1];
	
	 var art_title =document.title;
	 var art_url = strPage;
	 var history;
	 var json="[";
	 //json1�ǵ�һ��ע��cookie�Ժ�ĵ�һ��json��"��ʱ����������" �Ե����Ĵ���
	 var json1;
	 var canAdd= true;
	 //var json1=eval("({sitename:'dreamdu',sitedate:new Date(1980, 12, 17, 12, 0, 0)})");
	 
	 if(!$.cookie("history")){
	 //��һ�ε�ʱ����Ҫ��ʼ��
		history = $.cookie("history","{title:\""+art_title+"\""+",url:\""+art_url+"\"}");
	 }else {
		 //�Ѿ�����
		 history = $.cookie("history");
		 json1 = eval("("+history+")");
		 $(json1).each(function(){
		  if(this.title==art_title){
		  canAdd=false;
		  return false;
		  }
		 })
		 if(canAdd){
		  $(json1).each(function(){
		  json = json + "{\"title\":\""+this.title+"\",\"url\":\""+this.url+"\"},";
		  })
		  json = json + "{\"title\":\""+art_title+"\",\"url\":\""+art_url+"\"}]"; 
		  $.cookie("history",json,{expires:1});
		 }
		}
}
function getHistory(){
	if($.cookie("history")){
	 var json = eval("("+$.cookie("history")+")"); 
	 var list =""; 
	 $(json).each(function(){
	  list = list + "<li><a href="+this.url+">"+this.title+"</a></li>";
	 })
	 $("#history").html(list);;
	 } 
}