const mytext = document.getElementById("mytext")
const Check = document.getElementById ("Check")
const result = document.getElementById ("result")
let age

Check.onclick = function () {
    age=mytext.value
    age=Number(age)
    if (age>=100) {
        result.textContent = 'you are too old to enter this site'

    } else if (age ==0) {
       result.textContent = 'You can not enter this age. You were just born'

    } else if (age >= 18) {
        result.textContent = 'you are old enough to enter this site'

    }else if (age < 0) {
        result.textContent = 'Your age can not be bellow 0'

    } else {
        result.textContent = 'you must be 18+ to be entered this site'

    }

}



