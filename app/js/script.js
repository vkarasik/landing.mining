$(function(){
    
    $('.send').on('click', function(){
        $('.modal-form').fadeIn(500);    
        $('.overlay').fadeIn(400).click(function(){
            $(this).fadeOut();
            $('.modal-form').fadeOut();
        });    
    });// модальное окно
    
    $('.modal-form form').submit(function(e){
        e.preventDefault();// Отмена перезагрузки страницы при submit
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            success: function(response){
                $('.tel').val('').attr('placeholder', 'Ваш телефон');
                $('.name').val('').attr('placeholder', 'Ваше имя');
                $('.submit').val('Запрос отправлен');
                $('.modal-form').delay(1000).fadeOut(500);
                $('.overlay').delay(1000).fadeOut(500);
            },
            error: function(response){
                alert('Произошла ошибка! Пожалуйста повторите отправку!');
            }
        });
    });// обратный звонок
});

// Я зрабіў усё што змог, хто зможа, хай зробіць лепш!
