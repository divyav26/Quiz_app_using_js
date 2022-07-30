const question =[
    {
        'que': 'which of the following is a markup language',
        'a': 'Html',
        'b': 'css',
        'c': 'javascript',
        'd': 'php',
        'corret': 'a'
    },

    {
        'que': 'what yar was javascript launched',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'corret': 'b'
    },

    {
        'que': 'what does css stands for',
        'a': 'Hypertext markup language',
        'b': 'cascading style sheet',
        'c': 'jason object notation',
        'd': 'Helicopters terminals',
        'corret': 'b'
    }
]

let index = 0;
let total=question.length;
let right = 0;
let wrong = 0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll(".options")
const loadque = () =>
{
    if(index === total)
    {
        return endQuiz()
    }
    reset();
    const data = question[index]
    // console.log(data)
    quesBox.innerText = `${index+1} ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz=() =>
{
    const ans = getAnswer()
    const data = question[index]
    if(ans === data.corret){
        right++
    }else{
        wrong++
    }
    index++;
    loadque()
    return;
}

const getAnswer = () =>
{
    let answer;
    optionInputs.forEach((input) =>
    {
        if(input.checked)
        {
            answer = input.value;
            
        }
    })
    return answer;
}

const reset = () =>
{
    optionInputs.forEach((input)=>
    {
        input.checked = false
    })
}


const endQuiz =()=>
{
    document.getElementById("box").innerHTML =`
    <div style="text-align:center">
    <h3>Thank you for playing Quiz</h3>
    <h2>${right} / ${total} are correct </h2>
    </div>
    `
}
loadque()