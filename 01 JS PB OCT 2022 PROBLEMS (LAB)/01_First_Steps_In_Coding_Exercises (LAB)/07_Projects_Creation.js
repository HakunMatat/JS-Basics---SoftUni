function projectsCreaton(i) {
    let architectsName = i[0]
    let architectsProjectCount = i[1]
    let timePerProject = architectsProjectCount * 3

    console.log(`The architect ${architectsName} will need ${timePerProject} hours to complete ${architectsProjectCount} project/s.`)
    
}

projectsCreaton(["George", "4"])

// The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s.