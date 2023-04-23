
function template(id,data){
  var str=document.getElementById(id).innerHTML
  var pattern=/{{(\s*[a-zA-Z]+)\s*}}/
  var result=null
  while (result=pattern.exec(str)) {
    str=str.replace(result[0],data[result[1]])
  }
  return str
}


// function template(id, data) {
//   var str = document.getElementById(id).innerHTML
//   var pattern = /{{\s*([a-zA-Z]+)\s*}}/

//   var pattResult = null
//   while (pattResult = pattern.exec(str)) {
//     str = str.replace(pattResult[0], data[pattResult[1]])
//   }

//   return str
// }