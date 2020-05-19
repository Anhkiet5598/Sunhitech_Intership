var roleR = 1;
var roleC = 2;
var roleE = 4;
var roleF = 8;

function $get(elm) {
    return document.getElementById(elm);
}
function myTrim(el) {
    return el.replace(/^\s+|\s+$/gm, '');
}
String.prototype.trimEx = function (ch) {
    if (this != null && this != undefined) {
        //console.log(this);
        if (ch == ' ') {
            //var reg = new RegExp("\\"+ch+"+|\\"+ch+"+$", "gm");
            //var val=this.replace(reg,'');
            return this.replace(/^\s+|\s+$/gm, '');
        } else if (ch == ',') {
            return this.replace(/^\,+|\,+$/gm, '');
        } else if (ch == ';') {
            return this.replace(/^\;+|\;+$/gm, '');
        } else if (ch == ':') {
            return this.replace(/^\:+|\:+$/gm, '');
        } else if (ch == '/') {
            return this.replace(/^\/+|\/+$/gm, '');
        } else {
            return this.replace(/^\s+|\s+$/gm, '');
        }
    }
    else {
        return '';
    }
};
function noSign(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    //str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");  
    /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
    //str= str.replace(/-+-/g,"-"); //thay thế 2- thành 1-  
    str = str.replace(/^\-+|\-+$/g, "");
    //cắt bỏ ký tự - ở đầu và cuối chuỗi 
    str = str.toUpperCase();
    return str;
}
function UnicodeToAlias(strAlias) {
    if (strAlias == '' || strAlias == null) return "";
    var str = noSign(strAlias).replace(/\ /g, "-").replace(/\'/g, "").replace(/\\/g, "").replace(/\,/g, "-").replace(/\./g, "-").replace(/\?/g, "-").replace(/\!/g, "-").replace(/\:/g, "-").replace(/\;/g, "-").replace(/\`/g, "").replace(/\\/g, "-").replace(/\[/g, "-").replace(/\]/g, "-").replace(/\</g, "-").replace(/\>/g, "-").replace(/\(/g, "-").replace(/\)/g, "-").replace(/\|/g, "-").replace(/\&/g, "-").replace(/\*/g, "-").replace(/\+/g, "-").replace(/\%/g, "-").replace(/\^/g, "-").replace(/\$/g, "-").replace(/\#/g, "-").replace(/\@/g, "-").replace(/\~/g, "-");
    return str.replace(/\--/g, "-").replace(/\---/g, "-").replace(/\----/g, "-").replace(/\-----/g, "-").replace(/\------/g, "-").replace(/\-------/g, "-").replace(/\--------/g, "-").replace(/\---------/g, "-").replace(/\----------/g, "-").ToLower();
}
function onDisplayIntrotext(stt, dvTitle, linkTitle) {
    /*try{
        for (var i = 1; i <= 5; i++) {
            $get('dvTitle' + i).classList.remove('title_link');
            $get('link_title' + i).style.removeProperty('color');
        }
    }catch(ex){}
    $get(dvTitle).classList.add('title_link');
    $get(linkTitle).style.color = 'Red';

    $get('dvIntrotext').innerHTML = $get('dvIntrotextNone' + stt).innerHTML;*/
}
function onSetTime() {
    setInterval(function () { alert("Hello") }, 1000);
}
function message() {
    var s = $get('ms');
    //var i = $get('img-success');
    if (s.innerHTML != null && s.innerHTML.trim() != '') {
        s.setAttribute('class', 'alert alert-success');
        //i.setAttribute('class', 'img-success');
    }
    else {
        s.removeAttribute('class');
        //i.removeAttribute('class');
    }
}
function err() {
    var s = $get('er');
    if (s != null && s.innerHTML.trim() != '') {
        s.setAttribute('class', 'alert alert-block alert-error fade in');
    }
    else {
        s.removeAttribute('class');
    }
}
function confirmDelete() {
    var result = confirm("Bạn có chắc muốn xóa?");
    if (result) {
        return true;
    }
    return false;
}
function disableContent() {
    $get('TITLE').setAttribute('readonly', 'true');
    $get('ALIAS').setAttribute('readonly', 'true');
    $get('CAT_ID').disabled = true;//.setAttribute('readonly', 'true');
    $get('PUBLISH').disabled = true;
    $get('file').disabled = true;
    $get('LANGUAGE').disabled = true;
    $get('AUTHOR').disabled = true;
    $get('DATE_PUBLISH').setAttribute('readonly', 'true');
    $get('INTROTEXT').setAttribute('readonly', 'true');
    //$get('cke_FULLTEXT').setAttribute('readonly', 'true');
    // $get('dvSave').style.display= 'none';
}
function overlay() {
    el = $get("dvOverlay");
    if (el.style.visibility == "visible") {
        el.style.visibility = "hidden";
    }
    else {
        el.style.visibility = "visible";
    }
}
function selUser(uId, uName) {
    $get('USER_ID').value = uId;
    $get('FULL_NAME').value = uName;
    overlay();
}
function onChecked_000(el) {
    if (el == 'EDIT' && $get(el).checked == true) {
        $get('WRITE').checked = true;
    }
    else if (el == 'WRITE' && $get(el).checked == false)
        $get('EDIT').checked = false;
}
function onChecked(el) {
    if (el.checked == true && el.id=='FULL') {
        $get('CREATE').checked = true;
        $get('EDIT').checked = true;
    }
}

function addUser() {
    alert('i am here');
    var hdfListUser = $get('hdfListUser').value;
    var uId = $get('USER_ID').value;
    var uName = $get('FULL_NAME').value;
    if (hdfListUser.indexOf(uId) == -1) {
        var checked2 = '';
        var checked1 = '';
        var checked3 = '';
        if (uId != '') {
            var role = roleR;
            if ($get('FULL').checked == true) {
                checked1 = ' checked = "checked" ';
                checked2 = ' checked = "checked" ';
                checked3 = ' checked = "checked" ';
                role = roleF;
            }
            if ($get('CREATE').checked == true) {
                checked1 = ' checked = "checked" ';
                //role = role + ',' + roleC;
                role = roleC;
            }
            if ($get('EDIT').checked == true) {
                checked1 = ' checked = "checked" ';
                //role = role + ',' + roleE;
                role = roleE;
            }
            $get('hdfListUser').value += uId + '|' + uName + '|' + role + ';';
            var tblUser = $get('tblUser');
            //tblUser.innerHTML = th;
            var row = tblUser.insertRow(tblUser.rows.length);
            row.innerHTML = '<td>' + uId + '</td><td>' + uName + '</td>'
                + '<td><input type="checkbox" checked="true" disabled="disabled" onclick="onChangeRole(' + roleR + ',' + (tblUser.rows.length - 1) + ')" id="chk_' + uId + '_'+roleR+'" /></td>'
                + '<td class="txtc"><input type="checkbox" ' + checked1 + '  onclick="onChangeRole(' + roleC + ',' + (tblUser.rows.length - 1) + ')" id="chk_' + uId + '_' + roleC + '"/></td>'
                + '<td class="txtc"><input type="checkbox" ' + checked2 + '  onclick="onChangeRole(' + roleE + ',' + (tblUser.rows.length - 1) + ')" id="chk_' + uId + '_' + roleE + '"/></td>'
                + '<td class="txtc"><input type="checkbox" ' + checked3 + '  onclick="onChangeRole(' + roleF + ',' + (tblUser.rows.length - 1) + ')" id="chk_' + uId + '_' + roleF + '"/></td>'
                + '<td><a href="#" onclick = "removeUser(' + (tblUser.rows.length - 1) + ')">Remove </a></td>';
            alert(row.innerHTML);
            $get('USER_ID').value = '';
            $get('FULL_NAME').value = '';
            $get('CREATE').checked = false;
            $get('EDIT').checked = false;
            $get('FULL').checked = false;
        }
    }
}
function onChangeRole(newRole, index) {    
    var arr = $get('hdfListUser').value.split(';');
    if (arr != null && arr.length >= index - 1) {
        var arr1 = arr[index - 1].split('|');
        var el = $get('chk_' + arr1[0] + '_' + newRole);
        if (el.checked == true) {
            if (newRole == 1) {
                $get('chk_' + arr1[0] + '_2').checked = true;
            }
        } else {
            if (newRole == 1) {
                $get('chk_' + arr1[0] + '_2').checked = false;
            } else {
                $get('chk_' + arr1[0] + '_1').checked = false;
            }
        }

    }
}
function removeUser(index) {
    if (index < 1) return;
    var result = confirm("Bạn có chắc muốn xóa?");
    if (result) {

        var arr = $get('hdfListUser').value.split(';');
        //var uInfo = $get('tblUser').rows[index].cells.item(0).innerHTML + $get('tblUser').rows[index].cells.item(0).innerHTML + $get('tblUser').rows[index].cells.item(0).innerHTML;
        var hdfListUser = $get('hdfListUser').value;
        hdfListUser = (';' + hdfListUser).replace(';' + arr[index - 1] + ';', ';');
        $get('hdfListUser').value = hdfListUser.substring(1, hdfListUser.length);
        //alert($get('hdfListUser').value);
        if ($get('hdfListUser').value.length < 5) {
            $get('hdfListUser').value = '';
        }
        //alert($get('hdfListUser').value);
        reloadTable();
        return true;
    }
    return false;

}

function reloadTable() {
    var arr = $get('hdfListUser').value.split(';');
    if (arr.length > 0) {
        var tblUser = $get('tblUser');
        //var th = "<th>User</th><th>Full Name</th><th>Read</th><th>Change</th><th>Full</th><th></th>";
        tblUser.innerHTML = th;
        var checked2 = '';
        var checked1 = '';
        var disabled2 = '';
        checked1 = ' checked = true ';
        checked2 = ' checked = true ';

        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i].length > 5) {
                var arr1 = arr[i].split('|');
                var uId = arr1[0];
                var uName = arr1[1];
                var row = tblUser.insertRow(tblUser.rows.length);
                var ii = i + 1;
                row.innerHTML = '<td>' + uId + '</td><td>' + uName
                    + '</td><td><input type="checkbox" checked="true" disabled="disabled" onclick="onChangeRole(' + 4 + ',' + ii + ')" id="chk_' + uId + '_4" /></td>'
                    + '<td class="txtc"><input type="checkbox" ' + checked2 + '  onclick="onChangeRole(' + 2 + ',' + ii + ')" id="chk_' + uId + '_2"/></td>'
                    + '<td class="txtc"><input type="checkbox" ' + checked1 + '  onclick="onChangeRole(' + 1 + ',' + ii + ')" id="chk_' + uId + '_1"/></td>'
                    + '<td><a href="#" onclick = "removeUser(' + ii + ')">Remove </a></td>';
            }
        }
    }
}

function addCategory() {
    var arrId = $get('hdfCatIdTmp').value.substring(0, $get('hdfCatIdTmp').value.length - 1).split(';');
    var arrName = $get('hdfCatNameTmp').value.substring(0, $get('hdfCatNameTmp').value.length - 1).split(';');
    for (var i = 0; i < arrId.length; i++) {
        if (arrId[i] != ';' && arrId[i] != '' && $get('hdfCatIdTo').value.indexOf(arrId[i]) == -1) {
            alert('xxx');
            $get(arrId[i]).remove();
            $get(arrId[i].replace('chk_', '')).remove();
            $get('hdfCatId').value = $get('hdfCatId').value.replace(arrId[i] + ';', '');
            $get('hdfCatName').value = $get('hdfCatName').value.replace(arrName[i] + ';', '');
            $get('hdfCatIdTo').value += arrId[i] + ';';
            $get('hdfCatNameTo').value += arrName[i] + ';';
            $get('lstCatTo').innerHTML += '<div style="margin: 5px;">'
                                          + '<span><input type="checkbox" id="' + arrId[i] + '" style="margin-bottom: 6px;margin-right:3px;" onclick="onChangeCategoryBack(this)" /></span>'
                                          + '<span id="' + arrId[i].replace('chk_', '') + '">' + arrName[i] + '</span>'
                                          + '</div>'
        }
    }
    $get('hdfCatIdTmp').value = '';
    $get('hdfCatNameTmp').value = '';
}
function subCategory() {
    var arrId = $get('hdfCatIdTmp').value.substring(0, $get('hdfCatIdTmp').value.length - 1).split(';');
    var arrName = $get('hdfCatNameTmp').value.substring(0, $get('hdfCatNameTmp').value.length - 1).split(';');
    for (var i = 0; i < arrId.length; i++) {
        if (arrId[i] != ';' && arrId[i] != '') {
            $get(arrId[i]).remove();
            $get(arrId[i].replace('chk_', '')).remove();
            $get('hdfCatIdTo').value = $get('hdfCatIdTo').value.replace(arrId[i] + ';', '');
            $get('hdfCatNameTo').value = $get('hdfCatNameTo').value.replace(arrName[i] + ';', '');
            $get('hdfCatId').value += arrId[i] + ';';
            $get('hdfCatName').value += arrName[i] + ';';
            $get('lstCat').innerHTML += '<div style="margin: 5px;">'
                                          + '<span><input type="checkbox" id="chk_' + arrId[i] + '" style="margin-bottom: 6px;margin-right:3px;" onclick="onChangeCategoryBack(this)" /></span>'
                                          + '<span id="' + arrId[i] + '">' + arrName[i] + '</span>'
                                          + '</div>'
        }
    }
    $get('hdfCatIdTmp').value = '';
    $get('hdfCatNameTmp').value = '';
}
function onChangeCategory(el) {
    //var hdfCatId = $get('hdfCatId').value;
    //var hdfCatName = $get('hdfCatName').value;
    var catName = $get(el.id.replace('chk_', '')).innerHTML;
    if ($get(el.id).checked == true) {
        $get('hdfCatIdTmp').value = $get('hdfCatIdTmp').value + el.id + ";";
        $get('hdfCatNameTmp').value = $get('hdfCatNameTmp').value + catName + ";";
    }
    else {
        $get('hdfCatIdTmp').value = $get('hdfCatIdTmp').value.replace(el.id + ';', '');
        $get('hdfCatNameTmp').value = $get('hdfCatNameTmp').value.replace(catName + ';', '');
    }
}
function onChangeCategoryBack(el) {
    //var hdfCatId = $get('hdfCatIdTo').value;
    //var hdfCatName = $get('hdfCatNameTo').value;
    var catName = $get(el.id.replace('chk_', '')).innerHTML;
    if ($get(el.id).checked == true) {
        $get('hdfCatIdTmp').value = $get('hdfCatIdTmp').value + el.id + ";";
        $get('hdfCatNameTmp').value = $get('hdfCatNameTmp').value + catName + ";";
    }
    else {
        $get('hdfCatIdTmp').value = $get('hdfCatIdTmp').value.replace(el.id + ';', '');
        $get('hdfCatNameTmp').value = $get('hdfCatNameTmp').value.replace(catName + ';', '');
    }
}
function onGroupNameChange(el) {
    if ((";" + strGroupName).indexOf(";" + myTrim(noSign(el.value)) + ";") > -1) {
        $get('errExistName').innerHTML = msgExistName;
    }
    else
        $get('errExistName').innerHTML = '';
}
function slideContent(sp, dv) {
    $(document).ready(function () {
        $('#' + sp).click(function () {
            $('#dv_0').hide();
            $('#dv_1').hide();
            $('#dv_2').hide();
            $('#dv_3').hide();
            $('#' + dv).slideDown();
        });
    });
}
function changeSlide(el) {
    if (nCountCat > 0) {
        //for (var i = 1; i <= nCountCat; i++)
        //{
        //    $('#dvContentSlide_'+i).hide();
        //}
        //$('#dvContentSlide_1'+el.id).slideDown();
        $get('dvContentSlide_1').innerHTML = $get('test1').innerHTML;
    }
}
if (/*@cc_on!@*/false) {
    document.documentElement.className += ' ie10';
}

jQuery.fn.setdrpText = function (idText) {
    $(this).on('change', function () {
        if ($(this).val() == '') {
            idText.val('');
        }
        else {
            idText.val($(this).find(':selected').text());
        }
    });
};

function onFormatDecimal(el, evt) {

    // skip for arrow keys
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode >= 37 && charCode <= 40) {
        return;
    }
    el.value = formatDecimal(el.value);
    $(this).val(function (index, value) {
        return value
          .replace(/\D/g, "")
          .replace(/([0-9])([0-9]{2})$/, '$1.$2')
          .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",")
        ;
    });
};

function formatDecimal(val) {
    return val
     .replace(/\D/g, "")
     .replace(/([0-9])([0-9]{2})$/, '$1.$2')
     .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",")
    ;
    //.replace(/\,/g,'\.');
}

function validateNumber(el) {
    if (el) {
        if (el.value == '') {
            el.value = '0';
            return false;
        }
        var result = isNumeric(el.value.replace(/\./g, ''));
        setClassName(el, result, 'invalid', 'invalid0');
    } else {
        return false;
    }
}
function onFormatNumber(el, evt, language) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (language == undefined || language == '') { language = 'vi'; }
    if (language == 'vi' || language == 'fr') {//44: comma
        if (charCode != 44 && (charCode > 36 && charCode < 41))
            return;
    } else {//46: dot
        if (charCode != 46 && (charCode > 36 && charCode < 41))
            return;
    }
    el.value = formatNumber0(el.value, language);
}
function isNumberKey(evt, language) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (language == undefined || language == '') { language = 'vi'; }
    if (language == 'vi' || language == 'fr') {//44: comma
        if (charCode == 8 || charCode == 44 || (charCode > 47 && charCode < 58))// || (charCode > 95 && charCode < 106) )
            return true;
    } else {//46: dot
        if (charCode == 8 || charCode == 46 || (charCode > 47 && charCode < 58))// || (charCode > 95 && charCode < 106) )
            return true;
    }
    return false;
}
function delZero(el) {
    if (el) {
        if (el.value == '0') {
            el.value = '';
        }
    }
}
function formatNumber(val, language) {
    if (val == '' || val == undefined) return '';
    if (language == undefined || language == '') { language = 'vi'; }
    var sp1;
    var sp2;
    if (language == 'vi' || language == 'fr') {
        sp1 = '.';
        sp2 = ','
    } else {
        sp1 = ',';
        sp2 = '.';
    }
    var tmp = (val + '').replace(/\,/g, '');
    tmp = tmp.replace(/\./g, '');
    if (Number(tmp) == NaN) tmp = '';
    tmp = (Number(tmp) + sp2 + '0').replace('NaN', '');
    tmp = tmp.replace('Infinity', '');
    if (sp1 == '.') {
        tmp = tmp.replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    } else {
        tmp = tmp.replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }
    return tmp.split(sp2)[0];
    //.replace(/\,/g,'\.');
}

function formatNumber0(number, language) {
    //number = number.toFixed(2) + '';
    if (language == undefined || language == '') { language = 'vi'; }
    var sp1;
    var sp2;
    if (language == 'vi' || language == 'fr') {
        sp1 = '.';
        sp2 = ','
    } else {
        sp1 = ',';
        sp2 = '.';
    }
    /*x = number.split(sp2);
    x1 = x[0].replace(sp1, '');
    x2 = x.length > 1 ? sp2 + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + sp1 + '$2');
    }*/
    /*
    x = number.split(',');
    x1 = x[0].replace('.', '');
    x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
    */
    x = number.split(sp2);
    /*x1 = x[0].replace('.', '');
    x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }*/
    x1 = formatNumber(x[0], language);
    x2 = x.length > 1 ? sp2 + x[1] : '';
    return x1 + x2;
}
function isNumeric(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
}

function setClassName(el, result, clsname, clsname0) {
    var cls = '' + clsname + '';
    var cls0 = ' ' + clsname0 + ' ';
    el.className = el.className.replace(cls0, '');
    el.className = el.className.replace(' ' + cls + ' ', '');
    el.className = el.className.replace(cls, '');
    if (result == false) {
        el.className = el.className + ' ' + cls + cls0;

    } /*else {
        el.className = el.className.replace(cls, '');
    }*/
}
function CheckValidate(el) {
    var $form = $('#' + el),
        $inputs = $form.find('input:text');
    var validators = {
        id: {
            regex: /^[0-9-a-zA-Z_\-]+$/
        },
        name: {
            regex: /^[A-Za-z]{3,}$/
        },
        pass: {
            regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
        },
        email: {
            regex: /^[\w\-\.\+]+\@@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
        },
        phone: {
            regex: /(?=^[0-9-)(]+$)(?=.*[1-9].*)/,
        },
        datetimeformat: {
            regex: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        },
        onlynumber: {
            regex: /[0-9]/,
        },

    };
    var validate = function (klass, value) {
        var isValid = true,
            error = '';
        if (!value && /required/.test(klass)) {
            error = 'This field is required';
            isValid = false;
        } else {
            klass = klass.split(/\s/);
            $.each(klass, function (i, k) {
                if (validators[k]) {
                    if (value && !validators[k].regex.test(value)) {
                        isValid = false;
                        error = validators[k].error;
                    }
                }
            });
        }
        return {
            isValid: isValid,
            error: error
        }
    };
    var showError = function ($input) {
        var klass = $input.attr('class'),
            value = $input.val(),
            test = validate(klass, value);

        $input.removeClass('errorinputR');
        $('#form-error').addClass('hide');
        if (!test.isValid) {
            $input.attr("placeholder", $input.attr("data-content"));
            $input.addClass('errorinputR');

            if (typeof $input.data("shown") == "undefined" || $input.data("shown") == false) {

                // $input.popover('show');
            }

        }
        else {
            $input.removeClass('errorinputR');
        }
    };

    $inputs.keyup(function () {
        showError($(this));
    });

    $inputs.on('shown.bs.popover', function () {
        $(this).data("shown", true);
    });
    $inputs.on('hidden.bs.popover', function () {
        $(this).data("shown", false);
    });
    $form.submit(function (e) {

        $inputs.each(function () { /* test each input */
            if ($(this).is('.required') || $(this).hasClass('errorinputR')) {
                showError($(this));
            }
        });
        if ($form.find('input.errorinputR').length) { /* form is not valid */

            e.preventDefault();

            $('#form-error').toggleClass('hide');
        }
    });
    return this;
}

function initNumberFormat(language) {
    $(document).ready(function () {
        $(".DECIMAL2").focus(function () {
            delZero(this);
        });
        $(".DECIMAL2").blur(function () {
            validateNumber(this);
        });
        $(".DECIMAL2").keypress(function (event) {
            return isNumberKey(event, language);
        });
        $(".DECIMAL2").keyup(function (event) {
            onFormatNumber(this, event, language);
        });
        $('.DECIMAL2').bind("cut paste", function (e) {//cut copy 
            e.preventDefault();
        });
    });
}
$.fn.select2Ajax = function (url, options, placeholder, lang, width, textindex,optionsSelect2) {
    lang = lang || "vi";
    width = width || "100%";
    placeholder || "Chọn";
    textindex = textindex || 0
    options2 = {
        language: lang,
        allowClear: true,
        placeholder: placeholder,
        templateSelection: function (DATA) {
            if (DATA.text != '') {
                var arr = DATA.text.split("|");
                if (arr.length > textindex) {
                    return arr[textindex].trimEx();
                } else {
                    return arr[0].trimEx();
                }
            } else {
                return DATA.text;
            }
        },
        width: width,
        dropdownAutoWidth: true,
        ajax: {
            url: url,
            dataType: 'json',
            delay: 250,
            data: function (params) {
                var options1 = {};
                for (key in options) {
                    if (options.hasOwnProperty(key)) {
                        var value = options[key] + '';
                        if (key == 'param' || key == 'param1') {
                            options1[key] = params.term;
                        } else if (value.indexOf('#') == 0 || value.indexOf('.') == 0) {
                            options1[key] = $(value).val();
                        } else {
                            options1[key] = options[key];
                        }
                    }
                }
                return options1;
            },
            processResults: function (data, params) {
                return {
                    results: data.items,
                };
            },
        }
    };
    if (optionsSelect2 != null && optionsSelect2 != undefined) {
        for (key2 in optionsSelect2) {
            if (optionsSelect2.hasOwnProperty(key2)) {
                options2[key2] = optionsSelect2[key];
            }
        }
    }
    this.select2(options2);
    /*this.select2({
        language: lang,
        allowClear: true,
        placeholder: placeholder,
        templateSelection: function (DATA) {
            if (DATA.text != '') {
                var arr = DATA.text.split("|");
                if (arr.length > textindex) {
                    return arr[textindex].trimEx();
                } else {
                    return arr[0].trimEx();
                }
            } else {
                return DATA.text;
            }
        },
        width: width,
        dropdownAutoWidth: true,
        ajax: {
            url: url,
            dataType: 'json',
            delay: 250,
            data: function (params) {
                var options1 = {};
                for (key in options) {
                    if (options.hasOwnProperty(key)) {
                        var value = options[key] + '';
                        if (key == 'param' || key == 'param1') {
                            options1[key] = params.term;
                        } else if (value.indexOf('#') == 0 || value.indexOf('.') == 0) {
                            options1[key] = $(value).val();
                        } else {
                            options1[key] = options[key];
                        }
                    }
                }
                return options1;
            },
            processResults: function (data, params) {
                return {
                    results: data.items,
                };
            },
        }
    });*/
}
$.fn.showModal = function (type, url, updateTargetId, options) {
    type = type || "POST";
    var this0 = this;
    $.ajax({
        type: type,
        url: url,
        data: options,
        success: function (data) {
            $('#' + updateTargetId).html(data);
            this0.modal('show');
        }
    });
}
jQuery.fn.setdrpText = function (idText) {
    $(this).on('change', function () {
        if ($(this).val() == '') {
            idText.val('');
        }
        else {
            idText.val($(this).find(':selected').text());
        }
    });
};

jQuery.fn.setdrpTextEx = function (idText) {
    if ($(this).val() != '') {
        idText.val($(this).find(':selected').text());
    }
};

jQuery.fn.setdrpTextExAll = function (idText) {
    if ($(this).val() != '' && $(this).val() != 0) {
        idText.val($(this).find(':selected').text());
    }
    $(this).on('change', function () {
        if ($(this).val() == '' || $(this).val() == 0) {
            idText.val('');
        }
        else {
            idText.val($(this).find(':selected').text());
        }
    });
};
//$.fn.select2phone = function () {

//    this.
//}
function readonly_select(objs, action) {
    if (action === true) {
        objs.addClass('readonly-select');
    }
    else
        objs.removeClass('readonly-select');
}

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


//function onclick Check box
function checkfullbox(objs, el) {
    var ischeck = objs.prop('checked');
    if (ischeck) {
        objs.prop('checked', false);
    }
    else
        objs.prop('checked', true);
    objs.trigger('change');
}
function checkboxOnClick(checkId) {
    if (checkId == null || checkId == undefined || checkId == '') return;
    if ($('#' + checkId).length == 0) return;
    var ischeck = $('#' + checkId).prop('checked');
    if (ischeck) {
        $('#' + checkId).prop('checked', false)
    }
    else {
        $('#' + checkId).prop('checked', true)
    }
}
function setSession(name, value) {
    $.ajax({
        type: 'POST',
        url: '/administrator/json/aj.aspx',
        data: { act: 'SetSession', sessionName: name, sessionVal: value },
        success: function (data) {
            if (data != null) {
                ;//return success or error;
            }
        }
    })
}
