
// showStudentAddModal();
function showStudentAddModal(){
    // Заполнение списка групп
    let groupList = $("#selGroupForNewStudent");
    
    for (let r = 0; r < Groups.length; r++) {
      $('<option value="' + Groups[r].id + '" >' + Groups[r].name + '</option>')
        .appendTo(groupList);
    }
    
    
    
      
      $("#modalFormStudent").modal('show');
    
    
    
    }
    
    
    function addStudent () {
    let age = $('#age').val();
    let name = $('#name').val();
    let groupID = $('#selGroupForNewStudent').val();
    
    if (name.length < 2) {
      alert('Имя студента не может быть короче 3-х символов.');
      return;
    }
    
    if (!$.isNumeric(age)) {
      alert('Введиче число в поле ввода возраста');
      return;
    } 
    
    
    let studId = Students.length + 1;
    Students[studId - 1] = new Student(studId, name, age, groupID); 
    
      for (var y = 0; y < Subjects.length; y++) {
    
        for (var q = 0; q < GroupsSubjects.length; q++) {
          if (GroupsSubjects[q].groupID == groupID &
          GroupsSubjects[q].subjectID == y+1) {
    
                 // losson fill - random from max in subject
                StudentsSubjects[j-1] = new StudentSubject(StudentSubject.length+1, studId, y+1, getRandomInt(10, Subjects[y].lessons_count),getRandomInt(50,99),getRandomInt(50,99));
          //      console.log(StudentsSubjects[j-1]);
                j++;
          }
        }
      }
    
    for (let x = 0; x < Students.length; x++) {
      console.log(Students[x]);
    }
    
    
    alert('Студент успешно добавлен');
    $("#modalFormStudent").modal('hide');
    
    fillTableResultBySubject(1);
    showGroupInfo(false);
    filterTableStudentsByGroup(groupID) ;
    }
    
    
    // 
    
    
        // showStudentInfoModal(1);
    function showStudentInfoModal(){
      var studID = $(this).attr("id");
     $('#exampleModalLongTitle').text(Students[studID-1].name)
     
    
    var modalBody = $('.modal-body');
    // modalBody.text('');
    // Возраст
    modalBody.find('#age')
    .text('Возраст: ' + Students[studID-1].age + " лет");
    // Группа
    modalBody.find('#group')
    .text('Група: ' + Groups[Students[studID-1].groupID -1].name);
    
    // .css("margin", "auto"); // центрует - почему ?? justify-content-right - неработает...
    // Требует - display: flex... проверить
    // Предмет. Оценки. Посещение...
    let studetnSubjectsInfo = $('#studetnSubjectsInfo');
    studetnSubjectsInfo.html('');
    
    for (let u = 0; u < StudentsSubjects.length; u++) {
    if (StudentsSubjects[u].studentID == studID) {
     let subjRow = $('<div class="row"></div>').appendTo(studetnSubjectsInfo);
      $('<div class="col-3"></div>')
    .text(Subjects[StudentsSubjects[u].subjectID-1].name + ': ').appendTo(subjRow);
    $('<div class="col"></div>')
    .text('Посещено - ' 
    + StudentsSubjects[u].lessons_fill + ' из ' + Subjects[StudentsSubjects[u].subjectID-1].lessons_count )
    .appendTo(subjRow);
      
    let subjRowMark = $('<div class="row"></div>').appendTo(studetnSubjectsInfo);
    $('<div class="col-3"></div>').appendTo(subjRowMark);
    $('<div class="col"></div>')
    .text('   Оценки: Средний бал ' + StudentsSubjects[u].losson_mark 
    + '; Экзамен ' + StudentsSubjects[u].exam_mark).appendTo(subjRowMark);
    // + ': Средний бал - ' 
    // + StudentsSubjects[u].losson_mark 
    // + '; "Экзаменационный бал - ' 
    // + StudentsSubjects[u].exam_mark
    
    
    }
      
    }
    
    // class StudentSubject
    // {
    //   constructor (id, studentID, subjectID, lessons_fill, avg_mark, exam_mark)
    //   {
    //     this.id = id;
    //     this.studentID = studentID;
    //     this.subjectID = subjectID;
    //     this.lessons_fill = lessons_fill;
    //     this.losson_mark = avg_mark;
    //     this.exam_mark = exam_mark;
    //   }
    // }
    
    $("#exampleModalCenter").modal('show');
    }
    
        