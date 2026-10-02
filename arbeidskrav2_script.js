
const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];



    const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
]

//1.Skriver ut antall studenter i arrayen.
    document.getElementById("studentCount").innerHTML = students.length;

//2.Skriver ut gjennomsnittskarakter som bokstavkarakter
    let sumKarakter = 0 
    for (let student of students) {
        sumKarakter += Number(student.grade)
    }

    let snittKarakter = sumKarakter / students.length

    let bokstav = ""

    if (snittKarakter>= 5.5){
        bokstav = "A"
    } else if (snittKarakter >= 4.5){
        bokstav = "B"
    } else if (snittKarakter >= 3.5){
        bokstav = "C"
    } else if (snittKarakter >= 2.5){
        bokstav = "D"   
    } else if (snittKarakter >= 1.5){
        bokstav = "E"
    }else {
        bokstav = "F"
    }
    document.getElementById("averageGrade").innerHTML = bokstav

    


//3.Teller og skriver ut antall av hver karakter til #gradeA, #grade B osv.
//https://gemini.google.com/app/04dbfd71c77aa956?hl=no hentet noe herfra som veiledning.

    let antallA = 0;
    let antallB = 0;
    let antallC = 0;
    let antallD = 0;
    let antallE = 0;
    let antallF = 0;

    for (let student of students){
        let karakter = student.grade


    if (karakter === "5") {
        antallA++;
        } else if (karakter === "4") {
        antallB++;
        } else if (karakter === "3") {
        antallC++;
        } else if (karakter === "2") {
        antallD++;
        } else if (karakter === "1") {
        antallE++;
        } else if (karakter === "0") {
        antallF++;
        }
    }
    


     document.getElementById("gradeA").textContent= antallA; 
     document.getElementById("gradeB").textContent= antallB; 
     document.getElementById("gradeC").textContent= antallC;  
     document.getElementById("gradeD").textContent= antallD; 
     document.getElementById("gradeE").textContent= antallE; 
     document.getElementById("gradeF").textContent= antallF; 




//4.Beregner og skriver ut gjennomsnittsalder(runder av til to desimaler)
//https://gemini.google.com/app/13dc9f63403faa19?hl=no Her har jeg brukt Math.round som hjelp
// Fant ikke ut noen annen måte å gjøre det på.

let sumAlder= 0

for (let student of students) {
    sumAlder += student.age;
}
let snittAlder = sumAlder / students.length;
let avrundetSnitt = Math.round(snittAlder*100)/100

document.getElementById("averageAge").innerHTML = avrundetSnitt



//.5 Teller og skriver ut antall studenter som kommer rett fra videregående
const VGS = students.filter(student => student.age === 19).length;
document.getElementById("highSchool").innerHTML = VGS;

//.6 Teller og skriver ut antall studenter som har yrkeserfaring.
let antallMedErfaring = 0

for (let teller = 0; teller < students.length; teller++ ) {
    if (students [teller].workexperience >= 1) {
    antallMedErfaring++
    }
}
document.getElementById("workExperience").innerHTML = antallMedErfaring
    


