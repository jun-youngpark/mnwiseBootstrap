$(document).ready(function () {
    chekFnc();
    treeViewFnc();
    tableReset();
    calendarFnc();

  
  
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

/*트리 뷰 함수*/
function treeViewFnc(){
    $("#tree").treeview({
        collapsed: true,
        animated: "medium",
        control:"#sidetreecontrol",
        persist: "location"
    });
}

/**/
function calendarFnc(){
    $('.calendar').calendar();
}


/* 데이터테이블 플러그인 리셋 함수 */
function tableReset(){
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