
function getCookie(objName){//��ȡָ�����Ƶ�cookie��ֵ

    var arrStr = document.cookie.split("; ");

    for(var i = 0;i < arrStr.length;i ++){

        var temp = arrStr[i].split("=");

        if(temp[0] == objName) return unescape(temp[1]);

   } 

}

 

function addCookie(objName,objValue,objHours){      //���cookie

    var str = objName + "=" + escape(objValue);

    if(objHours > 0){                               //Ϊʱ���趨����ʱ�䣬������ر�ʱcookie�Զ���ʧ

        var date = new Date();

        var ms = objHours*3600*1000;

        date.setTime(date.getTime() + ms);

        str += "; expires=" + date.toGMTString();

   }

   document.cookie = str;

}
