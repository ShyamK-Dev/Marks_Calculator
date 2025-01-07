const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");

const calculateMarks = (event) => {
    const maxMarks = 400;
    event.preventDefault();
    const formData = new FormData(calculateFormEl);
    const data = {};

    formData.forEach((value, key) =>{
        data[key] = +value;
    });

    const totalMarks = data.maths + data.english + data.hindi + data.science;
    const percentage = (totalMarks / maxMarks) * 100;
    const roundPercentage = Math.round(percentage*100)/100;

    
    
    resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;
    
};

