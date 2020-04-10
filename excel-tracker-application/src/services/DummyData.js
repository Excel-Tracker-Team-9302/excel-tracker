const dummyData = {

  competencies: [
    {
      title: "Can call an Uber/Lyft",
      domain: "Transportation",
      subcategory: "Uber/Lyft",
      difficulty: "Intermediate",
      frequency: "Semester",
      id: 1
    },
    {
      title: "Can cancel an Uber/Lyft",
      domain: "Transportation",
      subcategory: "Uber/Lyft",
      difficulty: "Advanced",
      frequency: "Semester",
      id: 2
    },
    {
      title: "Is on time for work/internships",
      domain: "Employment/Careers",
      subcategory: "Planning and Preparation",
      difficulty: "Intermediate",
      frequency: "Month",
      id: 3
    },
    {
      title: "Performs assigned tasks and follows directions on the job",
      domain: "Employment/Careers",
      subcategory: "Work Skills",
      difficulty: "Intermediate",
      frequency: "Semester",
      id:4
    },
    {
      title: "Understands and utilizes advanced benefits: health insurance, Employee Assistance Programs (EAP)",
      domain: "Employment/Careers",
      subcategory: "Work Skills",
      difficulty: "Expert",
      frequency: "Year",
      id: 5
    },
    {
      title: "Addresses bullying through effective communication by discussing the situation with others, or asking for help if needed",
      domain: "Social and Leadership Development",
      subcategory: "General Social Skills",
      difficulty: "Advanced",
      frequency: "Semester",
      id: 6
    },
    {
      title: "Presents clean, neat and appropriate attire / uniform ",
      domain: "Employment/Careers",
      subcategory: "Hygiene & Physical Presentation",
      difficulty: "Beginner",
      frequency: "Semester",
      id: 7
    },
    {
      title: "Displays good hygiene and grooming: Including body, hair, nails, teeth",
      domain: "Employment/Careers",
      subcategory: "Hygiene & Physical Presentation",
      difficulty: "Beginner",
      frequency: "Semester",
      id: 8
    },
    {
      title: "Utilizes and records an appropriate voicemail message",
      domain: "Employment/Careers",
      subcategory: "Job Search Skills (to get the job)",
      difficulty: "Intermediate",
      frequency: "Semester",
      id: 9
    }
  ],

  users: [
    {
      email: "cking32@gatech.edu",
      role: "Faculty/Staff",
      name: "Cole King",
      userID: "coleking"
    },

    {
      email: "mtaylor@gatech.edu",
      name: "Mason Taylor",
      role: "Student",
      cohort_number: 3,
      mentor: 'fyates33@gatech.edu',
      status: "current",
      userID: "masontaylor"
    },

    {
      email: "asullivan@gatech.edu",
      name: "Andy Sullivan",
      role: "Student",
      cohort_number: 2,
      mentor: "bdylan9@gatech.edu",
      status: "current",
      userID: "andysullivan"
    },

    {
      email: "psullivan@gatech.edu",
      name: "Perry Sullivan",
      role: "Student",
      cohort_number: 2,
      mentor: null,
      status: "current",
      userID: "perrysullivan"
    },

    {
      email: "bdylan9@gatech.edu",
      name: "Bob Dylan",
      role: "Mentor",
      students: ["asullivan@gatech.edu"],
      userID: "bobdylan"
    },

    {
      email: "crands@gatech.edu",
      role: "Faculty/Staff",
      name: "Carly Rands",
      userID: "carlyrands"
    },

    {
      email: "rSmith@gatech.edu",
      name: "Riley Smith",
      role: "Admin",
      userID:"rileysmith"
    },

    {
      email: "hNeald@gatech.edu",
      name: "Hathan Neald",
      role: "Admin",
      userID: "hathanneald"
    },

    {
      email: "ctreaty77@gatech.edu",
      name: "Courtney Treaty",
      role: "Student",
      cohort_number: 1,
      mentor: null,
      status: "current",
      userID: "courtneytreaty"
    },

    {
      email: "fyates33@gatech.edu",
      name: "Fred Yates",
      role: "Mentor",
      students: ["mtaylor@gatech.edu"],
      userID: "fredyates"
    }
  ],

  trackingLocations: [
    {
      name: "Communications 2",
      competencies: [2, 3, 5],
      locationID: 3,
      instructors: [],
      students: []
    },

    {
      name: "Workplace Management",
      competencies: [6, 7, 8],
      locationID: 2,
      instructors: ["cking32@gatech.edu", "crands@gatech.edu"],
      students: ['ctreaty77@gatech.edu', 'psullivan@gatech.edu']

    },

    {
      name: "Transportation 1",
      competencies: [1, 2, 3],
      locationID: 1,
      instructors: ["crands@gatech.edu"],
      students: ['ctreaty77@gatech.edu', 'psullivan@gatech.edu']

    },
    

  ],

  evaluations: [
    {
      userID: "masontaylor",
      competencyID: 9,
      year: 2020,
      month: 3,
      day: 24,
      evaluatorID: "coleking",
      evaluationScore: 4,
      evidence: "Assessment",
      approved: "False"

    },

    {
      userID: "masontaylor",
      competencyID: 9,
      year: 2019,
      month: 3,
      day: 24,
      evaluatorID: "coleking",
      evaluationScore: 3,
      evidence: "Interview",
      approved: "False"

    },

    {
      userID: "masontaylor",
      competencyID: 4,
      year: 2020,
      month: 3,
      day: 24,
      evaluatorID: "coleking",
      evaluationScore: 4,
      evidence: "Assessment",
      approved: "False"

    },

    {
      userID: "andysullivan",
      competencyID: 1,
      year: 2020,
      month: 3,
      day: 24,
      evaluatorID: "coleking",
      evaluationScore: 3,
      evidence: "Assessment",
      approved: "False"

    },

    {
      userID: "andysullivan",
      competencyID: 2,
      year: 2020,
      month: 3,
      day: 24,
      evaluatorID: "coleking",
      evaluationScore: 4,
      evidence: "Assessment",
      approved: "False"

    },

    {
      userID: "perrysullivan",
      competencyID: 1,
      year: 2020,
      month: 3,
      day: 24,
      evaluatorID: "carlyrands",
      evaluationScore: 4,
      evidence: "Assessment",
      approved: "False"

    },

    {
      userID: "perrysullivan",
      competencyID: 2,
      year: 2020,
      month: 3,
      day: 24,
      evaluatorID: "carlyrands",
      evaluationScore: 4,
      evidence: "Assessment",
      approved: "False"

    },

    {
      userID: "courtneytreaty",
      competencyID: 1,
      year: 2020,
      month: 3,
      day: 24,
      evaluatorID: "carlyrands",
      evaluationScore: 4,
      evidence: "Assessment",
      approved: "False"

    },

    {
      userID: "courtneytreaty",
      competencyID: 2,
      year: 2020,
      month: 3,
      day: 24,
      evaluatorID: "carlyrands",
      evaluationScore: 3,
      evidence: "Assessment",
      approved: "False"

    }

  ]


}


export default dummyData;