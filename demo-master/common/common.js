var h = {};  
    h.get = function (url, data, ok, error) {  
        $.ajax({  
            url: url,  
            data: data,  
            dataType: 'json',  
            success: ok,  
            error: error  
        });  
    }  
    h.post = function (url, data, ok, error) {  
        $.ajax({  
            url: url,  
            data: data,  
            type: 'post',  
            dataType: 'json',  
            success: ok,  
            error: error  
        });  
    }  
    //��ȡurl����  
    h.url = function (url) {  
        if (!url) {  
            url = location.search.substring(1);  
        } else {  
            url = url.substr(url.indexOf('?') + 1);  
        }  
        var args = new Object();   // ��������ʼ��һ�� "��"  
        // ��õ�ַ(URL)"?"������ַ���.  
        var query = decodeURI(url);  
        var pairs = query.split("&");  // �ָ�URL(������'&'������������һ������)  
        for (var i = 0; i < pairs.length; i++) {  
            var pos = pairs[i].indexOf('=');  
            if (pos == -1) continue; // �������еȺŵ� ����[i]  
            var argname = pairs[i].substring(0, pos); // ��������  
            var value = pairs[i].substring(pos + 1);  // ����ֵ  
            // �Լ�ֵ�Ե���ʽ��ŵ�"args"������  
            args[argname] = decodeURI(value);  
        }  
        return args;  
    }  
      
    // �����ַ�����ʵ�ʳ���, һ��������2������   
    String.prototype.strlen = function () {  
        return this.replace(/[^\x00-\xff]/g, "**").length;  
    }  
    //�ַ�������ʡ��  
    String.prototype.cutstr = function (len) {  
        var restr = this;  
        var wlength = this.replace(/[^\x00-\xff]/g, "**").length;  
        if (wlength > len) {  
            for (var k = len / 2; k < this.length; k++) {  
                if (this.substr(0, k).replace(/[^\x00-\xff]/g, "**").length >= len) {  
                    restr = this.substr(0, k) + "...";  
                    break;  
                }  
            }  
        }  
        return restr;  
    }  
    //�滻ȫ��  
    String.prototype.replaceAll = function (s1, s2) {  
        return this.replace(new RegExp(s1, "gm"), s2)  
    }  
    //�ַ���ȥ�ո�  
    String.prototype.trim = function () {  
        return this.replace(/(^\s*)|(\s*$)/g, "");  
    }  
    String.prototype.trimAll = function () {  
        return this.replace(/\s+/g, "");  
    }  
    String.prototype.lTrim = function () {  
        return this.replace(/(^\s*)/g, "");  
    }  
    String.prototype.rTrim = function () {  
        return this.replace(/(\s*$)/g, "");  
    }  
    //�ж��Ƿ���ĳ���ַ�����ͷ  
    String.prototype.startWith = function (s) {  
        return this.indexOf(s) == 0  
    }  
    //�ж��Ƿ���ĳ���ַ�������  
    String.prototype.endWith = function (s) {  
        var d = this.length - s.length;  
        return (d >= 0 && this.lastIndexOf(s) == d)  
    }  
      
    //ɾ�������д����ظ���Ԫ��  
    function getUnique(someArray) {  
        tempArray = someArray.slice(0); //�������鵽��ʱ����  
        for (var i = 0; i < tempArray.length; i++) {  
            for (var j = i + 1; j < tempArray.length;) {  
                if (tempArray[j] == tempArray[i])  
                    //�����Ԫ�����ʹ��Ƚϵ���ͬ����ɾ����������  
                    //ɾ���󣬺����Ԫ�ػ��Զ���ǰ������ָ��j���ƶ�  
                {  
                    tempArray.splice(j, 1);  
                }  
                else {  
                    j++;  
                }  
                //��ͬ����ָ���ƶ�  
            }  
        }  
        return tempArray;  
    }  
    //�ж��������Ƿ�����ظ���Ԫ��  
    function confirmRepeat(someArray) {  
        tempArray = someArray.slice(0); //�������鵽��ʱ����  
        for (var i = 0; i < tempArray.length; i++) {  
            for (var j = i + 1; j < tempArray.length;) {  
                if (tempArray[j] == tempArray[i])  
                    //�����Ԫ�����ʹ��Ƚϵ���ͬ����ɾ����������  
                    //ɾ���󣬺����Ԫ�ػ��Զ���ǰ������ָ��j���ƶ�  
                {  
                    return true;  
                }  
                else {  
                    j++;  
                }  
                //��ͬ����ָ���ƶ�  
            }  
        }  
        return false;  
    }  
      
    //�ж�ĳ��ֵ�Ƿ���������  
    Array.prototype.in_array = function (e) {  
        for (i = 0; i < this.length; i++) {  
            if (this[i] == e)  
                return true;  
        }  
        return false;  
    }  
    //�ж�ĳ��ֵ�������е�λ��  
    Array.prototype.indexOf = function (e) {  
        for (i = 0; i < this.length; i++) {  
            if (this[i] == e)  
                return i;  
        }  
        return -1;  
    }  
      
    //ת��html��ǩ  
    function HtmlEncode(text) {  
        return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>')  
    }  
      
    //��ʽ������ DateFormat('yyyy_MM_dd hh:mm:ss:SS ����w ��q����')  
    function DateFormat(format, date) {  
        if (!date) {  
            date = new Date();  
        }  
        var Week = ['��', 'һ', '��', '��', '��', '��', '��'];  
        var o = {  
            "y+": date.getYear(), //year  
            "M+": date.getMonth() + 1, //month   
            "d+": date.getDate(), //day   
            "h+": date.getHours(), //hour   
            "H+": date.getHours(), //hour  
            "m+": date.getMinutes(), //minute   
            "s+": date.getSeconds(), //second   
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter   
            "S": date.getMilliseconds(), //millisecond   
            "w": Week[date.getDay()]  
        }  
        if (/(y+)/.test(format)) {  
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));  
        }  
        for (var k in o) {  
            if (new RegExp("(" + k + ")").test(format)) {  
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));  
            }  
        }  
        return format;  
    }  
      
    //����cookieֵ  
    function setCookie(name, value, Hours) {  
        var d = new Date();  
        var offset = 8;  
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);  
        var nd = utc + (3600000 * offset);  
        var exp = new Date(nd);  
        exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);  
        document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=360doc.com;"  
    }  
    //��ȡcookieֵ  
    function getCookie(name) {  
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));  
        if (arr != null) return unescape(arr[2]);  
        return null  
    }  
      
    //�����ղؼ�  
    function AddFavorite(sURL, sTitle) {  
        try {  
            window.external.addFavorite(sURL, sTitle)  
        } catch (e) {  
            try {  
                window.sidebar.addPanel(sTitle, sURL, "")  
            } catch (e) {  
                alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������")  
            }  
        }  
    }  
    //��Ϊ��ҳ  
    function setHomepage(homeurl) {  
        if (document.all) {  
            document.body.style.behavior = 'url(#default#homepage)';  
            document.body.setHomePage(homeurl)  
        } else if (window.sidebar) {  
            if (window.netscape) {  
                try {  
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")  
                } catch (e) {  
                    alert("�ò�����������ܾ�����������øù��ܣ����ڵ�ַ��������about:config,Ȼ���� signed.applets.codebase_principal_support ֵ��Ϊtrue");  
                }  
            }  
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);  
            prefs.setCharPref('browser.startup.homepage', homeurl)  
        }  
    }  
      
    //����������¼�  
    function addEventSamp(obj, evt, fn) {  
        if (!oTarget) { return; }  
        if (obj.addEventListener) {  
            obj.addEventListener(evt, fn, false);  
        } else if (obj.attachEvent) {  
            obj.attachEvent('on' + evt, fn);  
        } else {  
            oTarget["on" + sEvtType] = fn;  
        }  
    }  
    //�������ɾ���¼�  
    function delEvt(obj, evt, fn) {  
        if (!obj) { return; }  
        if (obj.addEventListener) {  
            obj.addEventListener(evt, fn, false);  
        } else if (oTarget.attachEvent) {  
            obj.attachEvent("on" + evt, fn);  
        } else {  
            obj["on" + evt] = fn;  
        }  
    }  
      
    //�ж��Ƿ��ƶ��豸����  
    function isMobileUserAgent() {  
        return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));  
    }  
      
    //�����ж��Ƿ�Ϊ��ַ  
    function IsURL(strUrl) {  
        var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i  
        if (regular.test(strUrl)) {  
            return true;  
        } else {  
            return false;  
        }  
    }  
      
    //��ȡҳ��߶�  
    function getPageHeight() {  
        var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat" ? a : g.documentElement;  
        return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);  
    }  
    //��ȡҳ����  
    function getPageWidth() {  
        var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat" ? a : g.documentElement;  
        return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);  
    }  
      
    //��ȡҳ����ӿ��  
    function getPageViewWidth() {  
        var d = document, a = d.compatMode == "BackCompat"  
                        ? d.body  
                        : d.documentElement;  
        return a.clientWidth;  
    }  
    //��ȡҳ����Ӹ߶�  
    function getPageViewHeight() {  
        var d = document, a = d.compatMode == "BackCompat"  
                        ? d.body  
                        : d.documentElement;  
        return a.clientHeight;  
    }  
      
    //��ȡҳ��scrollLeft  
    function getPageScrollLeft() {  
        var a = document;  
        return a.documentElement.scrollLeft || a.body.scrollLeft;  
    }  
    //��ȡҳ��scrollTop  
    function getPageScrollTop() {  
        var a = document;  
        return a.documentElement.scrollTop || a.body.scrollTop;  
    }  
    //��ȡ����ɼ���Χ�Ŀ����  
    function getViewSize() {  
        var de = document.documentElement;  
        var db = document.body;  
        var viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;  
        var viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;  
        return Array(viewW, viewH);  
    }  
    //�����ʱ���  
    function uniqueId() {  
        var a = Math.random, b = parseInt;  
        return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());  
    }  
      
    //��ȡ��ҳ����ȥ��λ��  
    function getScrollXY() {  
        return document.body.scrollTop ? {  
            x: document.body.scrollLeft,  
            y: document.body.scrollTop  
        } : {  
            x: document.documentElement.scrollLeft,  
            y: document.documentElement.scrollTop  
        }  
    }  
      
    //ƥ����ڵ绰����(0511-4405222 �� 021-87888822)   
    function istell(str) {  
        var result = str.match(/\d{3}-\d{8}|\d{4}-\d{7}/);  
        if (result == null) return false;  
        return true;  
    }  
    //ƥ�����֤(15λ��18λ)   
    function isidcard(str) {  
        var result = str.match(/\d{15}|\d{18}/);  
        if (result == null) return false;  
        return true;  
    }  
    //�ƶ��绰  
    function checkMobile(str) {  
        if (!(/^1[3|5|8][0-9]\d{4,8}$/.test(str))) {  
            return false;  
        }  
        return true;  
    }  
    // �ж������Ƿ���һ���� 0-9 / A-Z / a-z ��ɵ��ַ���   
    function isalphanumber(str) {  
        var result = str.match(/^[a-zA-Z0-9]+$/);  
        if (result == null) return false;  
        return true;  
    }  
    // �ж������Ƿ�����Ч�ĵ����ʼ�   
    function isemail(str) {  
        var result = str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);  
        if (result == null) return false;  
        return true;  
    }  
      
    //����дת������ transform('123431233132.23')  
    function transform(tranvalue) {  
        try {  
            var i = 1;  
            var dw2 = new Array("", "��", "��"); //��λ  
            var dw1 = new Array("ʰ", "��", "Ǫ"); //С��λ  
            var dw = new Array("��", "Ҽ", "��", "��", "��", "��", "½", "��", "��", "��"); //����������  
            //������Сдת���ɴ�д��ʾ�ںϼƴ�д���ı�����       
            //����������С��  
            var source = splits(tranvalue);  
            var num = source[0];  
            var dig = source[1];  
            //ת����������  
            var k1 = 0; //��С��λ  
            var k2 = 0; //�ƴ�λ  
            var sum = 0;  
            var str = "";  
            var len = source[0].length; //�����ĳ���  
            for (i = 1; i <= len; i++) {  
                var n = source[0].charAt(len - i); //ȡ��ĳ��λ���ϵ�����  
                var bn = 0;  
                if (len - i - 1 >= 0) {  
                    bn = source[0].charAt(len - i - 1); //ȡ��ĳ��λ��ǰһλ�ϵ�����  
                }  
                sum = sum + Number(n);  
                if (sum != 0) {  
                    str = dw[Number(n)].concat(str); //ȡ�ø����ֶ�Ӧ�Ĵ�д���֣������뵽str�ַ�����ǰ��  
                    if (n == '0') sum = 0;  
                }  
                if (len - i - 1 >= 0) { //�����ַ�Χ��  
                    if (k1 != 3) { //��С��λ  
                        if (bn != 0) {  
                            str = dw1[k1].concat(str);  
                        }  
                        k1++;  
                    } else { //����С��λ���Ӵ�λ  
                        k1 = 0;  
                        var temp = str.charAt(0);  
                        if (temp == "��" || temp == "��") //����λǰû����������ȥ��λ  
                            str = str.substr(1, str.length - 1);  
                        str = dw2[k2].concat(str);  
                        sum = 0;  
                    }  
                }  
                if (k1 == 3) { //С��λ��ǧ���λ��һ  
                    k2++;  
                }  
            }  
            //ת��С������  
            var strdig = "";  
            if (dig != "") {  
                var n = dig.charAt(0);  
                if (n != 0) {  
                    strdig += dw[Number(n)] + "��"; //������  
                }  
                var n = dig.charAt(1);  
                if (n != 0) {  
                    strdig += dw[Number(n)] + "��"; //������  
                }  
            }  
            str += "Ԫ" + strdig;  
        } catch (e) {  
            return "0Ԫ";  
        }  
        return str;  
    }  
    //���������С��  
    function splits(tranvalue) {  
        var value = new Array('', '');  
        temp = tranvalue.split(".");  
        for (var i = 0; i < temp.length; i++) {  
            value = temp;  
        }  
        return value;  
    }  
      
    //��ʽ������  
    function number_format(number, decimals, dec_point, thousands_sep) {  
        /* 
        * ����˵���� 
        * number��Ҫ��ʽ�������� 
        * decimals��������λС�� 
        * dec_point��С������� 
        * thousands_sep��ǧ��λ���� 
        * */  
        number = (number + '').replace(/[^0-9+-Ee.]/g, '');  
        var n = !isFinite(+number) ? 0 : +number,  
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),  
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,  
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,  
            s = '',  
            toFixedFix = function (n, prec) {  
                var k = Math.pow(10, prec);  
                return '' + Math.ceil(n * k) / k;  
            };  
      
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');  
        var re = /(-?\d+)(\d{3})/;  
        while (re.test(s[0])) {  
            s[0] = s[0].replace(re, "$1" + sep + "$2");  
        }  
      
        if ((s[1] || '').length < prec) {  
            s[1] = s[1] || '';  
            s[1] += new Array(prec - s[1].length + 1).join('0');  
        }  
        return s.join(dec);  
    }var h = {};  
    h.get = function (url, data, ok, error) {  
        $.ajax({  
            url: url,  
            data: data,  
            dataType: 'json',  
            success: ok,  
            error: error  
        });  
    }  
    h.post = function (url, data, ok, error) {  
        $.ajax({  
            url: url,  
            data: data,  
            type: 'post',  
            dataType: 'json',  
            success: ok,  
            error: error  
        });  
    }  
    //��ȡurl����  
    h.url = function (url) {  
        if (!url) {  
            url = location.search.substring(1);  
        } else {  
            url = url.substr(url.indexOf('?') + 1);  
        }  
        var args = new Object();   // ��������ʼ��һ�� "��"  
        // ��õ�ַ(URL)"?"������ַ���.  
        var query = decodeURI(url);  
        var pairs = query.split("&");  // �ָ�URL(������'&'������������һ������)  
        for (var i = 0; i < pairs.length; i++) {  
            var pos = pairs[i].indexOf('=');  
            if (pos == -1) continue; // �������еȺŵ� ����[i]  
            var argname = pairs[i].substring(0, pos); // ��������  
            var value = pairs[i].substring(pos + 1);  // ����ֵ  
            // �Լ�ֵ�Ե���ʽ��ŵ�"args"������  
            args[argname] = decodeURI(value);  
        }  
        return args;  
    }  
      
    // �����ַ�����ʵ�ʳ���, һ��������2������   
    String.prototype.strlen = function () {  
        return this.replace(/[^\x00-\xff]/g, "**").length;  
    }  
    //�ַ�������ʡ��  
    String.prototype.cutstr = function (len) {  
        var restr = this;  
        var wlength = this.replace(/[^\x00-\xff]/g, "**").length;  
        if (wlength > len) {  
            for (var k = len / 2; k < this.length; k++) {  
                if (this.substr(0, k).replace(/[^\x00-\xff]/g, "**").length >= len) {  
                    restr = this.substr(0, k) + "...";  
                    break;  
                }  
            }  
        }  
        return restr;  
    }  
    //�滻ȫ��  
    String.prototype.replaceAll = function (s1, s2) {  
        return this.replace(new RegExp(s1, "gm"), s2)  
    }  
    //�ַ���ȥ�ո�  
    String.prototype.trim = function () {  
        return this.replace(/(^\s*)|(\s*$)/g, "");  
    }  
    String.prototype.trimAll = function () {  
        return this.replace(/\s+/g, "");  
    }  
    String.prototype.lTrim = function () {  
        return this.replace(/(^\s*)/g, "");  
    }  
    String.prototype.rTrim = function () {  
        return this.replace(/(\s*$)/g, "");  
    }  
    //�ж��Ƿ���ĳ���ַ�����ͷ  
    String.prototype.startWith = function (s) {  
        return this.indexOf(s) == 0  
    }  
    //�ж��Ƿ���ĳ���ַ�������  
    String.prototype.endWith = function (s) {  
        var d = this.length - s.length;  
        return (d >= 0 && this.lastIndexOf(s) == d)  
    }  
      
    //ɾ�������д����ظ���Ԫ��  
    function getUnique(someArray) {  
        tempArray = someArray.slice(0); //�������鵽��ʱ����  
        for (var i = 0; i < tempArray.length; i++) {  
            for (var j = i + 1; j < tempArray.length;) {  
                if (tempArray[j] == tempArray[i])  
                    //�����Ԫ�����ʹ��Ƚϵ���ͬ����ɾ����������  
                    //ɾ���󣬺����Ԫ�ػ��Զ���ǰ������ָ��j���ƶ�  
                {  
                    tempArray.splice(j, 1);  
                }  
                else {  
                    j++;  
                }  
                //��ͬ����ָ���ƶ�  
            }  
        }  
        return tempArray;  
    }  
    //�ж��������Ƿ�����ظ���Ԫ��  
    function confirmRepeat(someArray) {  
        tempArray = someArray.slice(0); //�������鵽��ʱ����  
        for (var i = 0; i < tempArray.length; i++) {  
            for (var j = i + 1; j < tempArray.length;) {  
                if (tempArray[j] == tempArray[i])  
                    //�����Ԫ�����ʹ��Ƚϵ���ͬ����ɾ����������  
                    //ɾ���󣬺����Ԫ�ػ��Զ���ǰ������ָ��j���ƶ�  
                {  
                    return true;  
                }  
                else {  
                    j++;  
                }  
                //��ͬ����ָ���ƶ�  
            }  
        }  
        return false;  
    }  
      
    //�ж�ĳ��ֵ�Ƿ���������  
    Array.prototype.in_array = function (e) {  
        for (i = 0; i < this.length; i++) {  
            if (this[i] == e)  
                return true;  
        }  
        return false;  
    }  
    //�ж�ĳ��ֵ�������е�λ��  
    Array.prototype.indexOf = function (e) {  
        for (i = 0; i < this.length; i++) {  
            if (this[i] == e)  
                return i;  
        }  
        return -1;  
    }  
      
    //ת��html��ǩ  
    function HtmlEncode(text) {  
        return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>')  
    }  
      
    //��ʽ������ DateFormat('yyyy_MM_dd hh:mm:ss:SS ����w ��q����')  
    function DateFormat(format, date) {  
        if (!date) {  
            date = new Date();  
        }  
        var Week = ['��', 'һ', '��', '��', '��', '��', '��'];  
        var o = {  
            "y+": date.getYear(), //year  
            "M+": date.getMonth() + 1, //month   
            "d+": date.getDate(), //day   
            "h+": date.getHours(), //hour   
            "H+": date.getHours(), //hour  
            "m+": date.getMinutes(), //minute   
            "s+": date.getSeconds(), //second   
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter   
            "S": date.getMilliseconds(), //millisecond   
            "w": Week[date.getDay()]  
        }  
        if (/(y+)/.test(format)) {  
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));  
        }  
        for (var k in o) {  
            if (new RegExp("(" + k + ")").test(format)) {  
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));  
            }  
        }  
        return format;  
    }  
      
    //����cookieֵ  
    function setCookie(name, value, Hours) {  
        var d = new Date();  
        var offset = 8;  
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);  
        var nd = utc + (3600000 * offset);  
        var exp = new Date(nd);  
        exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);  
        document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=360doc.com;"  
    }  
    //��ȡcookieֵ  
    function getCookie(name) {  
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));  
        if (arr != null) return unescape(arr[2]);  
        return null  
    }  
      
    //�����ղؼ�  
    function AddFavorite(sURL, sTitle) {  
        try {  
            window.external.addFavorite(sURL, sTitle)  
        } catch (e) {  
            try {  
                window.sidebar.addPanel(sTitle, sURL, "")  
            } catch (e) {  
                alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������")  
            }  
        }  
    }  
    //��Ϊ��ҳ  
    function setHomepage(homeurl) {  
        if (document.all) {  
            document.body.style.behavior = 'url(#default#homepage)';  
            document.body.setHomePage(homeurl)  
        } else if (window.sidebar) {  
            if (window.netscape) {  
                try {  
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")  
                } catch (e) {  
                    alert("�ò�����������ܾ�����������øù��ܣ����ڵ�ַ��������about:config,Ȼ���� signed.applets.codebase_principal_support ֵ��Ϊtrue");  
                }  
            }  
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);  
            prefs.setCharPref('browser.startup.homepage', homeurl)  
        }  
    }  
      
    //����������¼�  
    function addEventSamp(obj, evt, fn) {  
        if (!oTarget) { return; }  
        if (obj.addEventListener) {  
            obj.addEventListener(evt, fn, false);  
        } else if (obj.attachEvent) {  
            obj.attachEvent('on' + evt, fn);  
        } else {  
            oTarget["on" + sEvtType] = fn;  
        }  
    }  
    //�������ɾ���¼�  
    function delEvt(obj, evt, fn) {  
        if (!obj) { return; }  
        if (obj.addEventListener) {  
            obj.addEventListener(evt, fn, false);  
        } else if (oTarget.attachEvent) {  
            obj.attachEvent("on" + evt, fn);  
        } else {  
            obj["on" + evt] = fn;  
        }  
    }  
      
    //�ж��Ƿ��ƶ��豸����  
    function isMobileUserAgent() {  
        return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));  
    }  
      
    //�����ж��Ƿ�Ϊ��ַ  
    function IsURL(strUrl) {  
        var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i  
        if (regular.test(strUrl)) {  
            return true;  
        } else {  
            return false;  
        }  
    }  
      
    //��ȡҳ��߶�  
    function getPageHeight() {  
        var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat" ? a : g.documentElement;  
        return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);  
    }  
    //��ȡҳ����  
    function getPageWidth() {  
        var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat" ? a : g.documentElement;  
        return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);  
    }  
      
    //��ȡҳ����ӿ��  
    function getPageViewWidth() {  
        var d = document, a = d.compatMode == "BackCompat"  
                        ? d.body  
                        : d.documentElement;  
        return a.clientWidth;  
    }  
    //��ȡҳ����Ӹ߶�  
    function getPageViewHeight() {  
        var d = document, a = d.compatMode == "BackCompat"  
                        ? d.body  
                        : d.documentElement;  
        return a.clientHeight;  
    }  
      
    //��ȡҳ��scrollLeft  
    function getPageScrollLeft() {  
        var a = document;  
        return a.documentElement.scrollLeft || a.body.scrollLeft;  
    }  
    //��ȡҳ��scrollTop  
    function getPageScrollTop() {  
        var a = document;  
        return a.documentElement.scrollTop || a.body.scrollTop;  
    }  
    //��ȡ����ɼ���Χ�Ŀ����  
    function getViewSize() {  
        var de = document.documentElement;  
        var db = document.body;  
        var viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;  
        var viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;  
        return Array(viewW, viewH);  
    }  
    //�����ʱ���  
    function uniqueId() {  
        var a = Math.random, b = parseInt;  
        return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());  
    }  
      
    //��ȡ��ҳ����ȥ��λ��  
    function getScrollXY() {  
        return document.body.scrollTop ? {  
            x: document.body.scrollLeft,  
            y: document.body.scrollTop  
        } : {  
            x: document.documentElement.scrollLeft,  
            y: document.documentElement.scrollTop  
        }  
    }  
      
    //ƥ����ڵ绰����(0511-4405222 �� 021-87888822)   
    function istell(str) {  
        var result = str.match(/\d{3}-\d{8}|\d{4}-\d{7}/);  
        if (result == null) return false;  
        return true;  
    }  
    //ƥ�����֤(15λ��18λ)   
    function isidcard(str) {  
        var result = str.match(/\d{15}|\d{18}/);  
        if (result == null) return false;  
        return true;  
    }  
    //�ƶ��绰  
    function checkMobile(str) {  
        if (!(/^1[3|5|8][0-9]\d{4,8}$/.test(str))) {  
            return false;  
        }  
        return true;  
    }  
    // �ж������Ƿ���һ���� 0-9 / A-Z / a-z ��ɵ��ַ���   
    function isalphanumber(str) {  
        var result = str.match(/^[a-zA-Z0-9]+$/);  
        if (result == null) return false;  
        return true;  
    }  
    // �ж������Ƿ�����Ч�ĵ����ʼ�   
    function isemail(str) {  
        var result = str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);  
        if (result == null) return false;  
        return true;  
    }  
      
    //����дת������ transform('123431233132.23')  
    function transform(tranvalue) {  
        try {  
            var i = 1;  
            var dw2 = new Array("", "��", "��"); //��λ  
            var dw1 = new Array("ʰ", "��", "Ǫ"); //С��λ  
            var dw = new Array("��", "Ҽ", "��", "��", "��", "��", "½", "��", "��", "��"); //����������  
            //������Сдת���ɴ�д��ʾ�ںϼƴ�д���ı�����       
            //����������С��  
            var source = splits(tranvalue);  
            var num = source[0];  
            var dig = source[1];  
            //ת����������  
            var k1 = 0; //��С��λ  
            var k2 = 0; //�ƴ�λ  
            var sum = 0;  
            var str = "";  
            var len = source[0].length; //�����ĳ���  
            for (i = 1; i <= len; i++) {  
                var n = source[0].charAt(len - i); //ȡ��ĳ��λ���ϵ�����  
                var bn = 0;  
                if (len - i - 1 >= 0) {  
                    bn = source[0].charAt(len - i - 1); //ȡ��ĳ��λ��ǰһλ�ϵ�����  
                }  
                sum = sum + Number(n);  
                if (sum != 0) {  
                    str = dw[Number(n)].concat(str); //ȡ�ø����ֶ�Ӧ�Ĵ�д���֣������뵽str�ַ�����ǰ��  
                    if (n == '0') sum = 0;  
                }  
                if (len - i - 1 >= 0) { //�����ַ�Χ��  
                    if (k1 != 3) { //��С��λ  
                        if (bn != 0) {  
                            str = dw1[k1].concat(str);  
                        }  
                        k1++;  
                    } else { //����С��λ���Ӵ�λ  
                        k1 = 0;  
                        var temp = str.charAt(0);  
                        if (temp == "��" || temp == "��") //����λǰû����������ȥ��λ  
                            str = str.substr(1, str.length - 1);  
                        str = dw2[k2].concat(str);  
                        sum = 0;  
                    }  
                }  
                if (k1 == 3) { //С��λ��ǧ���λ��һ  
                    k2++;  
                }  
            }  
            //ת��С������  
            var strdig = "";  
            if (dig != "") {  
                var n = dig.charAt(0);  
                if (n != 0) {  
                    strdig += dw[Number(n)] + "��"; //������  
                }  
                var n = dig.charAt(1);  
                if (n != 0) {  
                    strdig += dw[Number(n)] + "��"; //������  
                }  
            }  
            str += "Ԫ" + strdig;  
        } catch (e) {  
            return "0Ԫ";  
        }  
        return str;  
    }  
    //���������С��  
    function splits(tranvalue) {  
        var value = new Array('', '');  
        temp = tranvalue.split(".");  
        for (var i = 0; i < temp.length; i++) {  
            value = temp;  
        }  
        return value;  
    }  
      
    //��ʽ������  
    function number_format(number, decimals, dec_point, thousands_sep) {  
        /* 
        * ����˵���� 
        * number��Ҫ��ʽ�������� 
        * decimals��������λС�� 
        * dec_point��С������� 
        * thousands_sep��ǧ��λ���� 
        * */  
        number = (number + '').replace(/[^0-9+-Ee.]/g, '');  
        var n = !isFinite(+number) ? 0 : +number,  
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),  
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,  
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,  
            s = '',  
            toFixedFix = function (n, prec) {  
                var k = Math.pow(10, prec);  
                return '' + Math.ceil(n * k) / k;  
            };  
      
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');  
        var re = /(-?\d+)(\d{3})/;  
        while (re.test(s[0])) {  
            s[0] = s[0].replace(re, "$1" + sep + "$2");  
        }  
      
        if ((s[1] || '').length < prec) {  
            s[1] = s[1] || '';  
            s[1] += new Array(prec - s[1].length + 1).join('0');  
        }  
        return s.join(dec);  
    }
	
	/*�ж��Ƿ�Ϊ��*/
function isEmpty(value) {
	return /^\s*$/.test(value);
}

/*�ж��Ƿ�ΪEmail*/
function isEmail(value) {
	return /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/.test(value);
}

/*�ж��Ƿ�Ϊ�ֻ�����*/
function isPhone(value){
	return /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/.test(value);
}

/*�ж��Ƿ�Ϊ�̶��绰*/
function isTel(value){
    return /(^0\d{2,3}\-\d{7,8}$)/.test(value);
}

/**
 * �ж��Ƿ�Ϊurl
 */
function isURL(value) {
	return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );;
}

/**
 * �ж��Ƿ�ΪDate
 */
function isDate(value) {
	
	return !/Invalid|NaN/.test( new Date(value).toString());
}


/*�ж��Ƿ�Ϊ����*/
function isNumber(value) {
	
	return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/*�ж��Ƿ�Ϊ����*/
function isDigits(value) {
	
	return /^\d+$/.test(value);
}

/*�ж��û����Ƿ���ȷ,ֻ������ĸ�����»��ߣ���������ĸ��ͷ(5-16λ)*/
function checkUserName(value) {	
	return /^[a-zA-Z]\w{4,15}$/.test(value);
}

//��������У��
function isPostCode(value) {	
	return /^\d{6}$/.test(value);
}

//�������֤��������
function getBirthday(){
	var str=document.getElementById('idCard').value;//���֤���� 
	var birthday=document.getElementById('birthday');
	var len=str.length;//���֤���볤�� 
	if (len==18){ 
		birthday.value=str.substr(6,4)+'-'+str.substr(10,2)+'-'+str.substr(12,2); 	
	} 
	if (len==15){ 
		birthday.value="19"+str.substr(6,2)+'-'+str.substr(8,2)+'-'+str.substr(10,2); 	
	} 
}

/*
 *�ж��ַ������Ƿ�����������ַ�
 * ����false--����
 * ����true--������
*/
function existSpecialstr(str){
	
	var specialpatterns = new Array(':',',', '?', '!', '|', '>','<', '&','\\','\'','"','=','&','@',';','��','��','��','��','��','��','��','��','��','��','��','��');
    for(var i=0;i<specialpatterns.length;i++){
    	if(str.indexOf(specialpatterns[i])!=-1)
    		return false;
    }
    return true;
}


// У���ַ����Ƿ�Ϊ����
function isChineseChar(value){
    //���ֵΪ�գ�ͨ��У��
    if (value == "") {
    	return true;
    }
    var pattern = /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])*$/gi;
    return pattern.test(value);
}



/*
 * ���֤15λ�������dddddd yymmdd xx p
 * dddddd��6λ��������
 * yymmdd: ������(��λ��)���գ��磺910215
 * xx: ˳����룬ϵͳ�������޷�ȷ��
 * p: �Ա�����Ϊ�У�ż��ΪŮ
 * 
 * ���֤18λ�������dddddd yyyymmdd xxx y
 * dddddd��6λ��������
 * yyyymmdd: ������(��λ��)���գ��磺19910215
 * xxx��˳����룬ϵͳ�������޷�ȷ��������Ϊ�У�ż��ΪŮ
 * y: У���룬��λ��ֵ��ͨ��ǰ17λ������
 * 
 * ǰ17λ�����Ȩ����Ϊ Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
 * ��֤λ Y = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ]
 * �����֤��ǡ����10��Ϊ�˱�֤���֤��ʮ��λ����ô��ʮ��λ����X������
 * У��λ���㹫ʽ��Y_P = mod( ��(Ai��Wi),11 )
 * iΪ���֤����1...17 λ; Y_PΪУ����Y����У��������λ��
 */
function validateIdCard(idCard){
 	//15λ��18λ���֤�����������ʽ
	var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

 	//���ͨ������֤��˵�����֤��ʽ��ȷ����׼ȷ�Ի������
 	if(regIdCard.test(idCard)){
  		if(idCard.length==18){
   			var idCardWi=new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ); //��ǰ17λ��Ȩ���ӱ�����������
   			var idCardY=new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ); //���ǳ���11�󣬿��ܲ�����11λ��������֤�룬Ҳ���������
   			var idCardWiSum=0; //��������ǰ17λ���Թ��Լ�Ȩ���Ӻ���ܺ�
   			for(var i=0;i<17;i++){
    			idCardWiSum+=idCard.substring(i,i+1)*idCardWi[i];
  			}

		   	var idCardMod=idCardWiSum%11;//�����У�������������λ��
		   	var idCardLast=idCard.substring(17);//�õ����һλ���֤����

   			//�������2����˵��У������10�����֤�������һλӦ����X
   			if(idCardMod==2){
    			if(idCardLast=="X"||idCardLast=="x"){
     				//alert("��ϲͨ����֤����");
     				return true
	    		}else{
	     			//alert("���֤�������");
	     			return false;
	    		}
	   		}else{
	    		//�ü��������֤�������һλ���֤����ƥ�䣬���һ�£�˵��ͨ������������Ч�����֤����
	    		if(idCardLast==idCardY[idCardMod]){
	     			//alert("��ϲͨ����֤����");
	     			return true;
	    		}else{
	     			//alert("���֤�������");
	     			return false;
	    		}
	   		}
		} 
 	} else {
  		//alert("���֤��ʽ����ȷ!");
  		return false;
 	}
}



/*
* ��ȡurl����(getParameter)
*/
function getParameter(url) {
    if (!url) {
        url = location.search.substring(1);
    } else {
        url = url.substr(url.indexOf('?') + 1);
    }
    var args = new Object();   // ��������ʼ��һ�� "��"
    // ��õ�ַ(URL)"?"������ַ���.
    var query = decodeURI(url);
    var pairs = query.split("&");  // �ָ�URL(������'&'������������һ������)
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');
        if (pos == -1) continue; // �������еȺŵ� ����[i]
        var argname = pairs[i].substring(0, pos); // ��������
        var value = pairs[i].substring(pos + 1);  // ����ֵ
        // �Լ�ֵ�Ե���ʽ��ŵ�"args"������
        args[argname] = decodeURI(value);
    }
    return args;
};



/*
 * Cookie����
 * setCookie����Cookie
 * getCookie�õ�Cookie
 * removeCookieɾ��Cookie
 */
function  setCookie(name,value,time) {
    var exp = new Date();
    exp.setDate(exp.getDate()+time);
    document.cookie = name+'='+value+';expires='+exp;
}
//setCookie("userName","��",11);
//console.log(document.cookie);
function getCookie(name) {
    var arr = document.cookie.split(";");

    for(var i = 0;i<arr.length;i++){
        var arr1 = arr[i].split("=");

        if(arr1[0]==name){
            return arr1[1]
        }
    }
    return '' ;//��һ��û��cookieʱ
}

function removeCookie(name) {
    setCookie(name,1,-1)
}
//removeCookie("user1");
//alert(document.cookie);
//alert(getCookie("userName"))



/*
 * ��ȡҳ��scrollLeft��scrollTop
 */
function getPageScrollLeft() {
    var scrollLeft= window.pageXOffset  //�����ִ��������֧��
        || document.documentElement.scrollLeft //ָ����DTD(doctype),documentElementָhtml��ǩ
        || document.body.scrollLeft//δָ��DTD(doctype),bodyָbody��ǩ
        || 0;
    return scrollLeft
}

function getPageScrollTop() {
    var scrollTop = window.pageYOffset  //�����ִ��������֧��
        || document.documentElement.scrollTop //ָ����DTD(doctype),documentElementָhtml��ǩ
        || document.body.scrollTop //δָ��DTD(doctype),bodyָbody��ǩ
        || 0;
    return scrollTop
}


/*
 * localStorage����
 * setStore�洢localStorage
 * getStore��ȡlocalStorage
 * removeStoreɾ��localStorage
 */
function setStore(name, content) {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

function getStore(name) {
    if (!name) return;
    return window.localStorage.getItem(name);
}

function removeStore(name) {
    if (!name) return;
    window.localStorage.removeItem(name);
}






