
//слайдер

$(function() {
	$('.review').slick({ 
  infinite: true,
  dots: true
	});

});

// document.getElementById("here").scrollIntoView();

//плавная прокрутка

$(document).ready(function() {
    $('.arrow').click(function(){
        $(this).addClass('active');
       $('html, body').animate({scrollTop:$('#here').position().top - 90}, 1500);
    });
});



document.getElementById("trigger").onclick = function() {open()};

function open() {
    document.getElementById("menu").classList.toggle("show");
};

//Отправка формы без перезагрузки

$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
});


function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url: "action_ajax_form.php", //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
 	});
}

// $(function sendAjaxForm(result_form, ajax_form, url) {
//     $.ajax({
//         url:'/php/action_ajax_form.php', //url страницы (action_ajax_form.php)
//         type:     "POST", //метод отправки
//         dataType: "html", //формат данных
//         data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
//         success: function(response) { //Данные отправлены успешно
//         	result = $.parseJSON(response);
//         	$('#result_form').html('Имя: '+result.name+ '<br>E-mail:'+result.email'<br>Телефон: '+result.phonenumber);
//     	},
//     	error: function(response) { // Данные не отправлены
//             $('#result_form').html('Ошибка. Данные не отправлены.');
//     	}
//  	});
// });