let operation = ""
let operand
$(document).ready(function(){
    $('#operations-form')[0].reset()
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
        if ($("#state").val()==="evaluated")
            $(".computing-display").html(intt)
        else
            $(".computing-display").html(content+intt)
    }


    if ($("#operand").val()!=="" && $("#operator").val()!==""){
        if ($("#operand-2")!==""){
            var before = $("#operand-2").val()
            $("#operand-2").val(before+intt)
        }else{
            $("#operand-2").val(intt)
        }
        
    }
    else{
        $("#operand").val($(".computing-display").html())
        operand = $("#operand").val()
    }
    
    $("#state").val("")
   
}

function appendOperator(operator){
    var content = $(".computing-display").html()
    
    if (content=="0"){

    }else{
        
        var sign
        
        switch (operator){
            case 'mul':
                sign = "x"
                break
            case 'min':
                sign = "-"
                break
            case 'sum':
                sign = "+"
                break
            case 'div':
                sign = "&#247;"
                break
        }
        
        if (operator==="eval"){
            var operatr = $("#operator").val()
            var op1 = parseInt($("#operand").val())
            var op2 = parseInt($("#operand-2").val())

            var result

            switch ($("#operator").val()){
                case 'mul':
                    result = op1*op2
                    break
                case 'min':
                    result = op1-op2
                    break
                case 'sum':
                    result = op1+op2
                    break
                case 'div':
                    result = op1/op2
                    break
            }
            $(".computing-display").html(result)
            // make result op1
            $("#operand").val(result)
            // clean out other fields
            $("#operand-2").val("")
            $("#operator").val("")

            $("#state").val("evaluated")

        }else{
            $("#operator").val(operator)
            $(".computing-display").html(content+sign)
            $("#state").val("")
        }

        if (operator==="clear"){
            $(".computing-display").html("0")
            $('#operations-form')[0].reset()
        }
            
    }
    
}

function calculate(){

}