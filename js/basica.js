let operation = ""
let operand
$(document).ready(function(){
    var start_width = $(".number").width()
    $(".number").css("height", start_width+"px")
    //alert(start_width)

    $(".number").on("click", function(){
        var vali = $(this).attr("value")
        if ($(this).hasClass("operator")){
            appendOperator(vali)
        }
        else
            appendDisplay(vali)
    })

    $(".number.operator").on("click", function(){
        
    })
})

function appendDisplay(intt){
    var content = $(".computing-display").html()
    if (content=="0"){
        $(".computing-display").html(intt)  
    }
    else{
        $(".computing-display").html(content+intt)
    }
    
    $("#operand").val($(".computing-display").html())
    operand = $("#operand").val()
    var result

    if (operand!=="" && operation!==""){ // operate
        if (operation==="mul")
            result = +operand*+content

        alert(operand)
    }
}

function appendOperator(operator){
    var content = $(".computing-display").html()
    
    if (content=="0"){

    }else{
        
        var sign
        if (operator==="mul"){
            sign = "x"
            operation = operator
            operand = $("#operand").val()
            $("#operand").val("")
        }
        alert(operand)
            
        $(".computing-display").html(content+sign)
    }

    
}


