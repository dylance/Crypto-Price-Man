
var obj = {
  a:1,
  b:2,
  c:{
    a:{
      f:{
        g:6
      }
    }
  }
}


function main(str, str2){

  //this.a = function() { return 4 }
  return str + str2
}

main.prototype.a = function() { return 3 }
var exec = main('qwerty', 'uiop')
console.log(exec)
//console.log(exec.a())
