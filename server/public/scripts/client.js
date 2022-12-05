console.log('client working');
$(document).ready(onReady);

let holdArray = [];

function onReady(){
    console.log("in onReady");
    $('#equalBtn').on('click', submitNumbers)
    $('.oppBtn[data-operator]').on('click', oppFunction)
}

function oppFunction(){
    holdArray.length = 0;
    let operator = $(this).data('operator');
    holdArray.push(operator);
}

function submitNumbers(){
    console.log('equalBtn clicked, inside submitNumbers');
    $.ajax({
        method: "POST",
        url: "/calculations",
        data: {
            equation: $('#input1').val() + holdArray[0] + $('#input2').val(),
        }
    }).then(function(response){
        getNumbers();
    })
}

function getNumbers(){
    $.ajax({
        method: "GET",
        url: "/calculations",
    }).then(function(response){
    appendToDom(response)   
    console.log(response); 
    })
}

function appendToDom(equationsArray){
    // $('#displayTotal').empty();
    // $('#displayTotal').append();
    $('#runningHistory').empty();
    for(i=0; i<equationsArray.length; i++){
        $('#runningHistory').append(`<li>${equationsArray[i]}</li>`);
    }
}