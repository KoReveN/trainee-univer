// #pageStudentsInGroupSubjectInfo

function selectPageStudentsInGroupSubjectInfo() {
    $('#pageGroupInfo').slideUp(400);
    $('#pageStudentsInGroupSubjectInfo').slideUp(400);
    
      setTimeout(function () {
        $('#pageStudentsInGroupSubjectInfo').slideDown(1000);
      }, 400); // время в мс

    // $("#pageGroupInfo").hide();
    // $("#pageStudentsInGroupSubjectInfo").show(100);
    $('#groupsLink').css('color', '#fff');
    $('#groupsSubjectLink').removeClass("disabled").addClass("active");
}


function selectGroupInfo() {
    $('#pageGroupInfo').slideUp(400);
    $('#pageStudentsInGroupSubjectInfo').slideUp(400);
    
    showGroupInfo(false);
      setTimeout(function () {
        $('#pageGroupInfo').slideDown(700);
      }, 400); // время в мс


    // $("#pageStudentsInGroupSubjectInfo").hide();
    // $("#pageGroupInfo").show(100);
    // showGroupInfo(false);

    $('#groupsSubjectLink').removeClass("disabled");
    $('#groupsLink').addClass("disabled");
    $('#dropdown01').removeClass("disabled");
  //    <a class="nav-link" id="" href="#">Расписание*</a>
      // <a class="navbar-brand" id="groupsLink" href="#">Групы</a>
      // <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Група</a>
  
  
      $('#groupsSubjectLink').removeClass("disabled").addClass("active");
      $('#groupsLink').css('color', '#6c757d');
      $('#dropdown01').removeClass("disabled").addClass("active");
}


function selectGroupSubjectInfo() {
    $('#pageGroupInfo').slideUp(400);
    $('#pageStudentsInGroupSubjectInfo').slideUp(400);
    
    showGroupInfo(true);
      setTimeout(function () {
        $('#pageGroupInfo').slideDown(700);
      }, 400); // время в мс

    // $("#pageStudentsInGroupSubjectInfo").hide();
    // $("#pageGroupInfo").show(100);
    // showGroupInfo(true);

    
    $('#groupsSubjectLink').addClass("disabled").removeClass("active");
    $('#groupsLink').css('color', '#fff');
    $('#dropdown01').removeClass("disabled").addClass("active");
  //    <a class="nav-link" id="" href="#">Расписание*</a>
      // <a class="navbar-brand" id="groupsLink" href="#">Групы</a>
      // <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Група</a>
  


}