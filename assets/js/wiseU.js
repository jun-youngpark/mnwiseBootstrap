$(document).ready(function () {
    chekFnc();
    tableReset();
    calendarFnc();
    inputFileFnc();
    countTextFnc();
    countTextQuillFnc();

});


/*올체크 함수*/
function chekFnc() {
    $(".all-check").click(function () {
        var chk = $(this).is(":checked"); //.attr('checked');
        if (chk) {
            $(".custom-control-input").prop('checked', true);;
        } else {
            $(".custom-control-input").prop('checked', false);
        };
    });
}
 

/**/
function calendarFnc() {
    $('.calendar').calendar();
}


/* 데이터테이블 플러그인 리셋 함수 */
function tableReset() {
    $("#datatable-basic").dataTable().fnDestroy();
    var table = $("#datatable-basic").dataTable({
        "bFilter": false,
        "dom": 'tip',
        language: {
            "searchPlaceholder": "Search...",
            "search": " ",
            /*검색 : */
            //"info" : "_START_ 부터 _END_ 중 _TOTAL_ 페이지",
            "info": "",
            //"lengthMenu" : "Show _MENU_ entries",
            "lengthMenu": " ",
            "paginate": {
                "next": "<i class='fas fa-angle-right'></i>",
                "previous": "<i class='fas fa-angle-left'></i>"
            },
        },
    });
}
/*input file 라벨에 파일이름 추가 */
function inputFileFnc() {
    $('input[type=file]').on('change', function () {
      
        if (window.Filereder) { // modern browser
            var filename = $(this)[0].files[0].name;
        } else { // oldIE
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $('.custom-file-label').text(filename);
    })
}


   /* textarea 글자수 카운트 한글 2 / 영문+숫자 1  */
function countTextFnc() {
    $(".textarea").bind({"keyup": function () { 
         var dom = $(this),
                textDom = $('.count-text'),
                str = dom.val(),
                _byte = 0,
                charStr = ''
            if (str.length <= 0) {
                textDom.text(str.length);
                return;
            }
            for (var i = 0; i < str.length;  i++) {
                charStr = str.charAt(i);
                if (escape(charStr).length > 4) {
                    _byte += 2;
                } else {
                    _byte++;
                }
            }
            textDom.text(_byte);
        }
    });
}

   /* Quill 글자수 카운트 한글 2 / 영문+숫자 1  */
function countTextQuillFnc() {
    $(".ql-editor").bind({"keyup": function () { 
         var dom = $(this),
                textDom = $('.quill-count-text'),
                strT = dom.text(),
                _byte = 0,
                charStr = ''
            if (strT.length <= 0) {
                textDom.text(strT.length);
                return;
            }
            for (var i = 0; i < strT.length;  i++) {
                charStr = strT.charAt(i);
                if (escape(charStr).length > 4) {
                    _byte += 2;
                } else {
                    _byte++;
                }
            }
            textDom.text(_byte);
        }
    });
}



/*
 삭제 -------- textarea 글자수 카운트 
function countTextFnc(){
    $('.textarea').keyup(function (e){
        var content = $(this).val();
        $('.count-text').html(content.length );
    });
    $('.count-text').keyup();
    }
*/

/*고객이력 > 다시보기 팝업*/
function openPreviousPop() {
    NewWin = window.open('../resend/previous_template.html',"LargeImage","resizable=yes,scrollbars=auto,status=no,width=800, height=460, top=100, left=100");
  
}


