




const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');  

// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    e.target.style.backgroundColor = 'red'
    // i++;
    //  if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once:true});
});

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});


console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.firstElementChild);

console.log(document.querySelector('#current').parentNode.parentNode);
console.log(document.querySelector('#current').parentNode.parentElement);

console.log(document.querySelector('[data-current="3"]').previousSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName =='#text') {
        continue;
    }
    console.log(node);
}

function pow (x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
        // result = x * result;
    }

    return result;
}
function pow (x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}


pow(2, 1);
pow(2, 2);
pow(2, 3);
pow(2, 4);

let students = {
    js: [{
        name: 'John',
        progress : 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}


// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
       let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);









