var bio = {
  "name" : "Kezia Wineberg",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "(504) 491-2917",
    "email" : "keziaw@gmail.com",
    "github" : "Ksan8",
    "twitter" : "@SituateEditor",
    "location" : "Portland, OR"
  },
  "welcomeMessage" : "Life-long learner who is hard-working, creative, detail-oriented, and an intuitive problem-solver.",
  "skills" : [
    "HTML, CSS, JavaScript, jQuery, Bootstrap", "attention to detail", "good communication"
  ],
  "biopic" : "images/kezia-150.jpg"
};

// holding the display function inside the bio object (= encapsulation)
bio.display = function () {
  var formattedName = HTMLheaderName.replace("%data%",
  bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",
  bio.role);
  var formattedMobile = HTMLmobile.replace("%data%",
  bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",
  bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%",
  bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%",
  bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%",
  bio.contacts.location);

  var formattedPic = HTMLbioPic.replace("%data%",
  bio.biopic);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%",
  bio.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedTwitter);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);

  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedLocation);

  $("#header").append(formattedPic);
  $("#header").append(formattedWelcome);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (skill = 0; skill < bio.skills.length; skill++) {
      var formattedSkill = HTMLskills.replace("%data%",
      bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};

bio.display();

var work = {
  "jobs" : [
    {
      "employer" : "Situate Magazine, LLC",
      "title" : "Founder, Publisher and Editorial Director",
      "location" : "Portland, OR",
      "dates" : "11/15 - current",
      "description" : "Manage and publish nomadic online magazine that specializes in bringing forth the uncommon voices filling out a place."
    },
    {
      "employer" : "UC Davis, Saron Lab",
      "title" : "Junior Specialist",
      "location" : "Davis, CA",
      "dates" : "1/14 - 6/16",
      "description" : "Engaged in processing and analysis of EEG data, developed protocols, trained RAs in preprocessing of EEG data, organized and maintained a questionnaire database, assisted with lab management, and assisted with editing and publication of papers."
    },
    {
      "employer" : "Tulane University, Molix Lab",
      "title" : "Volunteer Research Assistant; Independent Study",
      "location" : "New Orleans, LA",
      "dates" : "1/13 - 12/13",
      "description" : "Assisted with orientation of participants, preparation of materials, data collection, and data entry in study tracking markers of well-being in local community members."
    },
    {
      "employer" : "Tulane University, Schrader Lab",
      "title" : "Independent Study; Summer Neuroscience Research Program",
      "location" : "New Orleans, LA",
      "dates" : "1/12 - 12/12",
      "description" : "Assisted in a chronic variable stress project by doing protein assays and Western blotting, and investigated possible protein interactions with BK channels in the mouse hippocampus using synaptosomal preparations, Western blotting, and Coomassie staining."
    },
    {
      "employer" : "Bodhi Japanese Acupuncture",
      "title" : "Owner, Acupuncturist",
      "location" : "Victoria, BC, Canada",
      "dates" : "5/09 - 2/10",
      "description" : "Served a wide range of clients using Japanese-style acupuncture, Traditional Chinese Medicine, and informal counseling; treated musculoskeletal disorders, injuries, insomnia, anxiety, depression, gynecological issues, digestive disturbances, fibromyalgia, chronic fatigue, chemical sensitivities, and stress-related problems."
    },
    {
      "employer" : "Alembic Healing Arts Centre",
      "title" : "Acupuncturist",
      "location" : "Victoria, BC, Canada",
      "dates" : "6/07 - 5/09",
      "description" : "Worked with clients using Chinese and Japanese acupuncture; treated musculoskeletal disorders, injuries, emotional and sleep disturbances, gynecological issues, digestive problems, and stress."
    },
    {
      "employer" : "Pacific Rim College",
      "title" : "Chief Administrator, Admissions Director",
      "location" : "Victoria, BC, Canada",
      "dates" : "7/06 - 7/09",
      "description" : "Supervised daily operations of the school and clinic, processed tuition and client payments, drafted documents for the president, edited the PRC newsletter, contacted potential/current students, and resolved issues between students and PRC; maintained and developed relationships with 500+ potential students."
    },
    {
      "employer" : "Pacific Rim College",
      "title" : "Clinical Supervisor, Qi Gong Instructor",
      "location" : "Victoria, BC, Canada",
      "dates" : "1/07 - 12/09",
      "description" : "Provided oversight of student diagnosis and treatment; introduced acupuncture students to standing and walking movements, breath work, and meditation."
    }
  ]
};

work.display = function() {
  for (job = 0; job < work.jobs.length; job++) {

    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",
    work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",
    work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%",
    work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%",
    work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",
    work.jobs[job].description);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
};

work.display();

var education = {
  "schools" : [
    {
      "school" : "Tulane University",
      "location" : "New Orleans, LA",
      "degree" : "BS",
      "majors" : ["Psychology"],
      "dates" : "2011-2013",
      "url" : "http://tulane.edu/"
    },
    {
      "school" : "Pacific Rim College",
      "location" : "Victoria, BC, Canada",
      "degree" : "Certificate",
      "majors" : ["Japanese Style Acupuncture"],
      "dates" : "2008",
      "url" : "https://www.pacificrimcollege.com/"
    },
    {
      "school" : "International College of Traditional Chinese Medicine",
      "location" : "Victoria, BC, Canada",
      "degree" : "3-year Certificate",
      "majors" : ["Traditional Chinese Medicine"],
      "dates" : "2003-2005",
      "url" : "http://www.askedu.net/school_info/b_International_College_of_Traditional_Chinese_Medicine.htm#.V76DGZMrJE4"
    },
    {
      "school" : "Macalester College",
      "location" : "St. Paul, MN",
      "degree" : "BA; incomplete",
      "majors" : ["International Studies"],
      "dates" : "N/A",
      "url" : "http://macalester.edu/"
    }
  ],
  "onlineCourses" : [
    {
      "school" : "Udacity",
      "title" : "Front-End Web Developer Nanodegree",
      "dates" : "2016",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "school" : "Udacity",
      "title" : "How to Use Git and GitHub: Version Control for Code",
      "dates" : "2016",
      "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
      "school" : "Coursera (University of London & Goldsmiths)",
      "title" : "Responsive Website Basics: Code with HTML, CSS, and JavaScript",
      "dates" : "2016",
      "url" : "https://www.coursera.org/learn/website-coding"
    },
    {
      "school" : "Coursera (Vanderbilt University)",
      "title" : "Introduction to Programming with MATLAB",
      "dates" : "2015",
      "url" : "https://www.coursera.org/learn/matlab"
    }
  ]
};

education.display = function() {
  for (edu = 0; edu < education.schools.length; edu++) {

    $("#education").append(HTMLschoolStart);

    var formattedSchool = HTMLschoolName.replace("%data%",
    education.schools[edu].school).replace("#",
    education.schools[edu].url);
    $(".education-entry:last").append(formattedSchool);

    var formattedLocation = HTMLschoolLocation.replace("%data%",
    education.schools[edu].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedDates = HTMLschoolDates.replace("%data%",
    education.schools[edu].dates);
    var formattedDegree = HTMLschoolDegree.replace("%data%",
    education.schools[edu].degree);
    $(".education-entry:last").append(formattedDegree + formattedDates);

    var formattedMajor = HTMLschoolMajor.replace("%data%",
    education.schools[edu].majors);
    $(".education-entry:last").append(formattedMajor);
  }

  $(".education-entry:last").append(HTMLonlineClasses);

  for (online = 0; online < education.onlineCourses.length; online++) {

    var formattedTitle = HTMLonlineTitle.replace("%data%",
    education.onlineCourses[online].title).replace("#",
    education.onlineCourses[online].url);
    $(".education-entry:last").append(formattedTitle);

    var formattedOnline = HTMLonlineSchool.replace("%data%",
    education.onlineCourses[online].school);
    $(".education-entry:last").append(formattedOnline);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%",
    education.onlineCourses[online].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedURL = HTMLonlineURL.replace("%data%",
    education.onlineCourses[online].url).replace("#",
    education.onlineCourses[online].url);
    $(".education-entry:last").append(formattedURL);
  }
};

education.display();

var projects = {
  "projects" : [
    {
      "title" : "Project 1",
      "dates" : "2016",
      "description" : "Bacon ipsum dolor amet ribeye swine tongue turkey tri-tip tail. Bresaola short ribs tri-tip ribeye meatloaf doner pork belly fatback. Flank picanha kevin capicola leberkas andouille ball tip spare ribs landjaeger. Pig venison rump shank tri-tip cupim, bresaola swine tenderloin salami.",
      "images" : ["images/NOLA-400_sm.jpg"],
    },
    {
      "title" : "Project 2",
      "dates" : "2016",
      "description" : "Pig frankfurter corned beef ground round bresaola shankle tongue porchetta pork belly flank shoulder rump meatloaf chicken. Flank pig pork loin prosciutto bresaola shoulder picanha cupim corned beef frankfurter. Drumstick salami corned beef rump, pancetta boudin filet mignon pork belly.",
      "images" : ["images/laughing-400_sm.jpg"],
    },
    {
      "title" : "Project 3",
      "dates" : "2016",
      "description" : "Porchetta beef ground round bacon landjaeger pork loin, boudin strip steak sirloin pig kielbasa turkey pork chop venison rump. Turkey corned beef turducken alcatra tri-tip jerky. Corned beef jowl short ribs prosciutto cupim sirloin. Chicken tongue turducken tri-tip spare ribs bresaola pancetta.",
      "images" : ["images/lilys-400_sm.jpg"],
    }
  ]
};

projects.display = function() {
  for (project = 0; project < projects.projects.length; project++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",
    projects.projects[project].title);
    // grab and append the last one
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%",
    projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%",
    projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    // check if images are present before appending them
    for (img = 0; img < projects.projects[project].images.length; img++) {
      var formattedImage = HTMLprojectImage.replace("%data%",
      projects.projects[project].images[img]);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

projects.display();

$("#mapDiv").append(googleMap);