



// Получение всех студентов + предмет(1) по ajax-запросу
    function GetAllStudentSubject(subjID) {
    $.ajax({
        url: '/api/StudentSubjects/' + subjID,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            fillTableResultDefaultApi(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
    }


//Получение всех груп по ajax - запросу
    function GetAllGroups(isSubject) {
    $.ajax({
        url: '/api/Groups',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            ShowGroupInfoApi(data, isSubject);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
    }