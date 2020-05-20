$(document).ready(function(){
    
    var JobTitle = $("JobTitle").val();
    var FirstName = $("FirstName").val();
    var Last_Name = $("Last_Name").val();
    var Email = $("Email").val();
    var Phone = $("Phone").val();

    var JobTitle1 = $("JobTitle1").val();
    var Description = $("Description").val();

    var school = $("school").val();
    var Degree = $("Degree").val();
    var Star = $("Star").val();
    var End = $("End").val();
    var DescriptionS = $("DescriptionS").val();
    
    var label = $("label").val();
    var link = $("link").val();

    var skill = $("skill").val();

    var Course = $("Course").val();
    var Star2 = $("Star2").val();
    var Data2 = $("Data2").val();

    var Language = $("Language").val();
    var Level = $("Level").val();
    

    
    var data = {
        PersonalDetails: {
            JobTitle: JobTitle,
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Phone: Phone,
        },
        ProfessionalSummary: {
            experience: experience
                   },
        EmploymentHistory: {
            JobTitle1: JobTitle1,
            Description: Description,
        },
        Education: {
            school: school,
            Degree: Degree,
            StarDate: Star,
            EndDate: End,
            DescriptionS: DescriptionS
        },
        WebSites: {
            label: label,
            FirstName: link,
        },
        skill:{
            skill: skill
        },
        Courses: {
            Course: Course,
            StarDateC: Star2,
            EndDateC: Data2,
        },
      Languages:{
          Language: Language,
          Level: Level
       }
    };


    });


