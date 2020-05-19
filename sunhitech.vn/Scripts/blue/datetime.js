function tS(){ x=new Date(); x.setTime(x.getTime()); return x; } 
function lZ(x){ return (x>9)?x:'0'+x; }
function tHVI(x) { ap = (x > 11) ? ' CH' : ' SA'; if (x == 0) { x = 12; } return (x > 12) ? x -= 12 : x; }
function tH(x) { ap = (x > 11) ? ' PM' : ' AM'; if (x == 0) { x = 12; } return (x > 12) ? x -= 12 : x; }
function fY(x){ return (x<500)?x+1900:x; } 

function dT(){ if(fr==0){ fr=1; document.write('<style="font-size: 8pt; font-family: Tahoma"><span id="tP">'+eval(oT)+'</span></font>'); } tP.innerText=eval(oT); setTimeout('dT()',1000); } 
var dN=new Array('Chủ Nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy'),mN=new Array('/1','/2','/3','/4','/5','/6','/7','/8','/9','/10','/11','/12'),ap,fr=0,oT="dN[tS().getDay()]+' - '+'Ngày' +' '+tS().getDate()+mN[tS().getMonth()]+'/'+fY(tS().getYear())+' '+'-'+' '+tHVI(tS().getHours())+':'+lZ(tS().getMinutes())+':'+lZ(tS().getSeconds())+ap";

function dTENG(){ if(frENG==0){ frENG=1; document.write('<style="font-size: 8pt; font-family: Tahoma"><span id="tP">'+eval(oTENG)+'</span></font>'); } tP.innerText=eval(oTENG); setTimeout('dTENG()',1000); } 
var dNENG=new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat'),mNENG=new Array('/1','/2','/3','/4','/5','/6','/7','/8','/9','/10','/11','/12'),ap,frENG=0,oTENG="dNENG[tS().getDay()]+' - '+'Date' +' '+tS().getDate()+mNENG[tS().getMonth()]+'/'+fY(tS().getYear())+' '+'-'+' '+tH(tS().getHours())+':'+lZ(tS().getMinutes())+':'+lZ(tS().getSeconds())+ap";

function dTJA(){ if(frJA==0){ frJA=1; document.write('<style="font-size: 8pt; font-family: Tahoma"><span id="tP">'+eval(oTJA)+'</span></font>'); } tP.innerText=eval(oTJA); setTimeout('dTJA()',1000); } 
var dNJA = new Array('日曜日', '月曜日', '火曜日', '水曜日', '木曜', '金曜日', '土曜日'), mNJA = new Array('/1', '/2', '/3', '/4', '/5', '/6', '/7', '/8', '/9', '/10', '/11', '/12'), ap, frJA = 0, oTJA = "dNJA[tS().getDay()]+' - '+'日付' +' '+tS().getDate()+mNJA[tS().getMonth()]+'/'+fY(tS().getYear())+' '+'-'+' '+tH(tS().getHours())+':'+lZ(tS().getMinutes())+':'+lZ(tS().getSeconds())+ap";

function showDateTime() {
    if (typeof (currentLanguage) != "undefined" && currentLanguage != null) {
        switch (currentLanguage) {
            case 'vi':
                dT();
                break;
            case 'en':
                dTENG()
                break;
            case 'ja':
                dTJA();
                break;
            case 'ko':
                break;
            case 'zh':
                break;
            default:
                dT();
        }
    }else{
        dT();
    }    
}