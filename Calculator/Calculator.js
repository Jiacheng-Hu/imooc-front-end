var p1;     //该参数为执行四则运算前的第一个参数
var calParameter;       //该参数为四则运算符号
function init() {
    var display = document.getElementById("display");
    display.value = 0;
    display.disabled = "disabled";
    var oButton = document.getElementsByTagName("input");
    for(var i=0; i<oButton.length; i++) {
        oButton[i].onclick = function() {
            if(!isNaN(this.value)) {
                if(display.value == "0" || display.value.length == 0) {
                    display.value = this.value;
                } else {
                    display.value = display.value + this.value;
                }
            } else {
                switch(this.value) {
                    case "+": 
                        addSecondParameter("+");
                        break;
                    case "-":
                        addSecondParameter("-");
                        break;
                    case "×":
                        addSecondParameter("×");
                        break;
                    case "÷":
                        addSecondParameter("÷");
                        break;
                    case "=":
                        switch(calParameter) {
                            case "+":
                                display.value = p1 + Number(display.value);
                                break;
                            case "-":
                                display.value = p1 - Number(display.value);
                                break;
                            case "×":
                                display.value = p1 * Number(display.value);
                                break;
                            case "÷":
                                if(Number(display.value) == 0) {
                                    display.value = 0;
                                    alert("除数不能为0");
                                } else {
                                    display.value = p1 / Number(display.value);
                                }
                                break;
                        }
                        break;
                    case "c":
                        display.value = 0;
                        break;
                    case ".":
                        display.value = decimalArithmeticFunc(display.value);
                        break;
                    case "←":
                        display.value = back(display.value);
                        break;
                    case "+/-":
                        display.value = sign(display.value);
                        break;
                    case "m":
                        window.location.href = "http://www.apple.com.cn";
                        break;
                }
            }
        }
    }
}
function addSecondParameter(n) {
    p1 = Number(display.value);
    display.value = 0;
    calParameter = n;
}
function decimalArithmeticFunc(n) {
    if(n.indexOf(".") == -1) {
        n = n + "."
    }
    return n;
}
function back(n) {
    n = n.substr(0,n.length-1);
    if(n == "0" || n.length == 0) {
        n = 0;
    }
    return n;
}
function sign(n) {
    return Number(n) * -1;
}