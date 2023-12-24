
$(document).ready(function() {
    $(document).on('click','#btnMenu',function(){
        $("#sideBar").addClass("showSideBar");
    })
    $(document).on('click','#hideSideBtn',function(){
        $("#sideBar").removeClass("showSideBar");
    })
})