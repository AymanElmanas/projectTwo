$(document).ready(function(){
    
    // var JobTitle = $("#JobTitle").val();
    // var FullName = $("#FullName").val();
    // var Email = $("#Email").val();
    // var Phone = $("#Phone").val();
    // var textarea = $("#textarea").val();

    // var Job_Title1 = $("#Job_Title1").val();
    // var Experience = $("#textareaExperience").val();
     
    // var DescriptionEdu = $("#DescriptionEdu").val();
    
    // var skill = $("#skill").val();
    // var DescriptionSkill = $("#DescriptionSkill").val();

    // var Technical = $("#Technical").val();


    // var Language = $("#Language").val();
    // var Level = $("#Level").val();
    

    
    // var data = {
    //     PersonalDetails: {
    //         JobTitle: $("#JobTitle").val(),
    //         FirstName: FullName,
    //         Email: Email,
    //         Phone: Phone,
    //     },
    //     ProfessionalSummary: {
    //         profile: profile
    //                },
    //     EmploymentHistory: {
    //         JobTitle1: Job_Title1,
    //         Experience: textareaExperience,
    //     },
    //     Education: {
        
    //         DescriptionEdu: DescriptionEdu
    //     },
    //     skill:{
    //         skill: skill,
    //         DescriptionSkill: DescriptionSkill
    //     },
    //     Technicals: {
    //         Technical: Technical,
            
    //     },
    //   Languages:{
    //       Language: Language,
    //       Level: Level
    //    }
    // };
    var acc =0;
    $('#PersonalDetailsBtn').click(function(){
             
        $('#PersonalDetailsF  ').append("<h1>" + $("#FullName").val()+"</h1>");
        $('#PersonalDetailsF ').append("<h2>" + $("#JobTitle").val() + "</h2>");
        $('#PersonalDetailsF1  ').append("<h3>" + $("#Email").val() + "</h3>");
        $('#PersonalDetailsF1 ').append("<h3>" + $("#Phone").val() + "</h3>");
        $('#ft').append("<p>" + $("#FullName").val() + "   " + $("#Email").val() + "   " + $("#Phone").val()+"</p>")

    
    });
    $('#profileBtn').click(function () {
        
        $('#profileF').append("<p>" + $("#textareProfile").val() + "</p>")
    });
    $('#ExperienceBtn').click(function () {
    
        $('#ExperienceF ').append("<h2>" + $("#Job_Title1").val() + "</h2>");
        $('#ExperienceF ').append("<p>" + $("#textareaExperience").val() + "</p>");
       
       
    });
    $('#EducationBtn').click(function () {
           $('#EducationF').append("<p>" + $("#DescriptionEdu").val() + "</p1>");
             });
        
    $('#LanguagesBtn').click(function () {
        $('#LanguagesF').append($("#LevelSelect").val());
        $('#LanguagesF').append("<h2>" + $('#Language').val() + "</h2>");
            });
    $('#skillBtn').click(function () {
        $('#SkillsF ').append("<h2>" + $("#skill").val() + "</h2>");
        $('#SkillsF ').append("<p>" + $("#DescriptionSkill").val() + "</p>");
    });
    $('#TechnicalBtn').click(function () {
        $('#TechnicalF ').append("<h2>" + $("#Technical").val() + "</2>");

    });
    $('#printCv').click(function () {
        
        $('#doc2').printThis({
            debug: false,               // show the iframe for debugging
            importCSS: true,            // import parent page css
            importStyle: false,         // import style tags
            printContainer: true,       // print outer container/$.selector
            loadCSS: "file:///C:/Users/-/Desktop/projectTwo/resume.css",                // path to additional css file - use an array [] for multiple
            pageTitle: "",              // add title to print page
            removeInline: false,        // remove inline styles from print elements
            removeInlineSelector: "*",  // custom selectors to filter inline styles. removeInline must be true
            printDelay: 333,            // variable print delay
            header: null,               // prefix to html
            footer: null,               // postfix to html
            base: false,                // preserve the BASE tag or accept a string for the URL
            formValues: true,           // preserve input/form values
            canvas: false,              // copy canvas content
            doctypeString: '<!DOCTYPE html>', // enter a different doctype for older markup
            removeScripts: false,       // remove script tags from print content
            copyTagClasses: false,      // copy classes from the html & body tag
            beforePrintEvent: null,     // callback function for printEvent in iframe
            beforePrint: null,          // function called before iframe is filled
            afterPrint: null            // function called before iframe is removed
        });
    })

    });


