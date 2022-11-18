function insert(num){
    document.form1.textview.value = document.form1.textview.value + num
}
function equal(){
    var expression = document.form1.textview.value;
    if (expression){
        document.form1.textview.value = eval(expression)
    }
}
function backspace() {
    var expression = document.form1.textview.value
    document.form1.textview.value = expression.substring(0, expression.length -1)
}