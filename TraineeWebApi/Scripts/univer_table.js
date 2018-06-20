$(document).ready(function () {
  $(document).on("click", "div#groupDropDownList a", selectGroup);
    $(document).on("click", "#subjectsBtnListByGroup button", selectSubject);
    $(document).on("click", "#groupsLink", selectGroupInfo);
    $(document).on("click", "#groupsSubjectLink", selectGroupSubjectInfo);
    $(document).on("click", "#tableResultByGroup tr", showStudentInfoModal);
    $(document).on("click", "#addStudentSaveBtn", addStudent);
    $('#addStudentButton').click(showStudentAddModal);
    
    fillTableResultDefault();
});

//, selectGroup($("div#groupDropDownList a").attr("id"))






// Заполнение списка групп (Выпадающий список..)
var groupDropDownList = $("#groupDropDownList");

for (let r = 0; r < Groups.length; r++) {
    $(' <a class="dropdown-item" id="' + Groups[r].id + '" href="#">' + Groups[r].name + '</a>')
    .appendTo(groupDropDownList);
}



function fillTableResultDefault() {
    GetAllStudentSubject(1);
  /*fillTableResultBySubject(1)*/
}

function fillTableResultDefaultApi(studentSubjects) {
  // Это заполнение таблици всеми студентами с данными только по 1-му предмету...

    //alert("studentSubject.length = " + studentSubjects.length);

  ////   var subjId = 1;
  //// var groupID = 1;

  var table = $('#tableResultByGroup');
  table.find('tr').remove();

    let i = 1;

    $.each(studentSubjects, function (index, studentSubject) {
        var row = $("<tr></tr>").appendTo(table);
        row.attr("id", studentSubject.StudentID)
        row.append("<td name='sNumber'>" + (i++) + "</td>");
        row.append("<td name='sName'>" + studentSubject.Name + "</td>");

        row.append("<td name='slosson_mark'>" + studentSubject.LessonMark + "</td>");
        row.append("<td name='slessons_count'>" + studentSubject.LessonCount + "</td>");
        row.append("<td name='slessons_fill'>" + studentSubject.LessonsFill + "</td>");
        row.append("<td name='sexam_mark'>" + studentSubject.ExamMark + "</td>");
        row.append("<td name='sfull_count'>" + (Number(studentSubject.ExamMark) + Number(studentSubject.LessonMark)) + "</td>");
        row.append("<td name='groupID' style='display: none'>" + studentSubject.GroupId + "</td>")

    })






}

function getStudSubjectInfo(studId, subjID) {
  for (let j = 0; j < StudentsSubjects.length; j++) {
    if (StudentsSubjects[j].studentID == studId & StudentsSubjects[j].subjectID == subjID) {
      return StudentsSubjects[j];
    }
  }
}






// Выбор определенной группы
function selectGroup(event) {
  selectPageStudentsInGroupSubjectInfo();
  //(event.target).html()
  var grID = $(this).attr("id");
  // Получить список предметов у группы
  var grSubjectsId = getListSubjectIdForGroup(grID);
  showListSubjectIdForGroup(grSubjectsId);
  // Заполнить таблицу резальтатами по 1-му предмету
  selectSubjectByID(grSubjectsId[0]);

  $("#studentsInGroupWithSubject").text("Результаты студентов " + Groups[grID - 1].name); //+ " по предмету ''"
  filterTableStudentsByGroup(grID);

}

// Фильтр студентов в таблице по группе
function filterTableStudentsByGroup(groupID) {
  let index = 1;
  for (var i = 0; i < Students.length; i++) {
    let currRow = $('#tableResultByGroup tr#' + Students[i].id);
    //var currRow = ;
    let groupIDinRow = $('#tableResultByGroup tr#' + Students[i].id + ' td[name="groupID"]').text();
    if (groupIDinRow == groupID) {
      currRow.find('[name="sNumber"]').text(index++);
      currRow.css("display", "table-row");
    } else {
      currRow.css("display", "none");
    }
    //  console.log(currRow.text());
  }
}

// Получить список [] предметов по []ID
function showListSubjectIdForGroup(grSubjectsId) {
  $('#subjectsBtnListByGroup').empty();
  for (var i = 0; i < grSubjectsId.length; i++) {
    Subjects[grSubjectsId[i] - 1]
    //subjectsBtnListByGroup
    var btn = $('<button type="button" class="btn btn btn-primary disabled"></button>');
    //id="'+Groups[i].id+'"
    //alert(grSubjectsId[i]);
    btn.attr('id', grSubjectsId[i]);
    btn.text(Subjects[grSubjectsId[i] - 1].name);
    btn.css("margin", 2)
    $('#subjectsBtnListByGroup').append(btn);
  }
}

// Выбор предмета // Метод вызаваемый при нажатии на кнопку 
function selectSubject(event) {
  var subjID = $(this).attr("id");

  $('#divTable').show().slideUp(400, function () {
    selectSubjectByID(subjID);
  }); //.eq(0)

  setTimeout(function () {
    // Ваш скрипт
    $('#divTable').slideDown(1000, function () {
      console.log("Отображен!");
    });
  }, 400); // время в мс
}

// Выбор предмета
function selectSubjectByID(subjID) {
  $('#subjectsBtnListByGroup button').attr("class", "btn btn btn-primary disabled");
  $('#subjectsBtnListByGroup button#' + subjID).attr("class", "btn btn btn-primary active");
  updateTableResultBySubject(subjID);
}



function updateTableResultBySubject(subjId) {

  var table = $('#tableResultByGroup tr');

  //  console.log(table[1]);

  $.each(table, function (index, row) {
    //Получить id студента  //  
    if (row.id > 0) {

      var stSubjInfo = getStudSubjectInfo(row.id, subjId)
      // row.find('#slosson_mark').text("test");
      //$('#slosson_mark', row)
      if (stSubjInfo != null) {


        $('#slosson_mark', row).text(stSubjInfo.losson_mark);
        $('#slessons_count', row).text(Subjects[subjId - 1].lessons_count);
        $('#slessons_fill', row).text(stSubjInfo.lessons_fill);
        $('#sexam_mark', row).text(stSubjInfo.exam_mark);
        $('#sfull_count', row).text((Number(stSubjInfo.exam_mark) + Number(stSubjInfo.losson_mark)));
        //    console.log($('#slosson_mark', row).text());
      }
    }


  });

}




function showGroupInfo(isSubject){
  // var isSubject = true;

    GetAllGroups(isSubject);
    
  
    }


//// вывод полученных данных на экран
function ShowGroupInfoApi(groups, isSubject){

    //alert(groups.length);
    //var isSubject = false;

    $("#pageGroupInfo").html("");
    if (isSubject) {
        $('<div class="row justify-content-center"></div>')
            .append('<div class="h1">Предметы изучаемые в групах</div>').appendTo('#pageGroupInfo');
    } else {
        $('<div class="row justify-content-center"></div>')
            .append('<div class="h1">Распределение студентов по группам</div>').appendTo('#pageGroupInfo');

    }



    $('<br/> <br/>').appendTo('#pageGroupInfo');
    var newGroupRow = $('<div class="row justify-content-center"></div>');
    newGroupRow.appendTo('#pageGroupInfo');


    $.each(groups, function (index, group) {
        // Show next group

        var newGroupCol = $(' <div class="col-sm-4 col-lg-3"><div class="h3">Група ' + group.Name + ' </div></div>');

        var studentList = $('<ul></ul>');
        studentList.appendTo(newGroupCol);

        if (isSubject) {

            $.each(group.Subjects, function (index, subject) {
                $('<li>' + subject.Name + '</li>').appendTo(studentList);
            })

        } else {

            $.each(group.Students, function (index, student) {
                $('<li>' + student.Name + '</li>').appendTo(studentList);
            })

        }
        newGroupRow.append(newGroupCol);

        //strResult += "<tr><td>" + book.Id + "</td><td> " + book.Name + "</td><td>" +
        //    book.Author + "</td><td>" + book.Year +
        //    "</td><td><a id='editItem' data-item='" + book.Id + "' onclick='EditItem(this);' >Редактировать</a></td>" +
        //    "<td><a id='delItem' data-item='" + book.Id + "' onclick='DeleteItem(this);' >Удалить</a></td></tr>";
    });


}