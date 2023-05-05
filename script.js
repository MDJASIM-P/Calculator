function button_click(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val
}
function clear_display()
{
    document.getElementById("screen").value=""
}
function result_click()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result

}