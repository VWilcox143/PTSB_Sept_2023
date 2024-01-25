let grades = {
    midterm: {
      grade: 3.3, 
      weight: 1
    },
    project: {
      grade: 4.0, 
      weight: 1
      
    },
    final: {
      grade: 3.2,
      weight: 2
    }
  }
  
  function gpa(object) {
    
    let gradesToWeight = Object.keys(object);
    let gradeSum = 0;
    let weightSum = 0;
    let weightedGrade = 0;

    gradesToWeight.forEach(function(key) {
    gradeSum += object[key].grade * object[key].weight;
    weightSum += object[key].weight;
    weightedGrade = gradeSum / weightSum;
    
    console.log(
    'The final GPA is ' + weightedGrade
    );
  });


    
}

(gpa(grades));