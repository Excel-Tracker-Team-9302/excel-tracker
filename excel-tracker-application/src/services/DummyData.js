const dummyData = {

  competencies: [
    {
      title: "Can call an Uber/Lyft",
      domain: "Transportation",
      subcategory: "Uber/Lyft",
      difficulty: "I",
      frequency: "Sem"
    },
    {
      title: "Can cancel an Uber/Lyft",
      domain: "Transportation",
      subcategory: "Uber/Lyft",
      difficulty: "A",
      frequency: "Sem"
    },
    {
      title: "Is on time for work/internships",
      domain: "Employment/Careers",
      subcategory: "Planning and Preparation",
      difficulty: "I",
      frequency: "Mnth"
    },
    {
      title: "Performs assigned tasks and follows directions on the job",
      domain: "Employment/Careers",
      subcategory: "Work Skills",
      difficulty: "I",
      frequency: "Sem"
    },
    {
      title: "Understands and utilizes advanced benefits: health insurance, Employee Assistance Programs (EAP)",
      domain: "Employment/Careers",
      subcategory: "Work Skills",
      difficulty: "E",
      frequency: "Yr"
    },
    {
      title: "Addresses bullying through effective communication by discussing the situation with others, or asking for help if needed",
      domain: "Social and Leadership Development",
      subcategory: "General Social Skills",
      difficulty: "A",
      frequency: "Sem"
    },
    {
      title: "Presents clean, neat and appropriate attire / uniform ",
      domain: "Employment/Careers",
      subcategory: "Hygiene & Physical Presentation",
      difficulty: "B",
      frequency: "Sem"
    },
    {
      title: "Displays good hygiene and grooming: Including body, hair, nails, teeth",
      domain: "Employment/Careers",
      subcategory: "Hygiene & Physical Presentation",
      difficulty: "B",
      frequency: "Sem"
    },
    {
      title: "Utilizes and records an appropriate voicemail message",
      domain: "Employment/Careers",
      subcategory: "Job Search Skills (to get the job)",
      difficulty: "I",
      frequency: "Sem"
    }
  ],

  users: [
    {
      email: "cking32@gatech.edu",
      role: "Faculty/Staff",
      name: "Cole King"
    },

    {
      email: "mtaylor@gatech.edu",
      name: "Mason Taylor",
      role: "Student",
      cohort_number: 3,
      mentor: 'fyates33@gatech.edu',
      status: "current"
    },

    {
      email: "asullivan@gatech.edu",
      name: "Andy Sullivan",
      role: "Student",
      cohort_number: 2,
      mentor: "bdylan9@gatech.edu",
      status: "current"
    },

    {
      email: "psullivan@gatech.edu",
      name: "Perry Sullivan",
      role: "Student",
      cohort_number: 2,
      mentor: null,
      status: "current"
    },

    {
      email: "bdylan9@gatech.edu",
      name: "Bob Dylan",
      role: "Mentor",
      students: ["asullivan@gatech.edu"]
    },

    {
      name: "crands@gatech.edu",
      role: "Faculty/Staff",
      name: "Carly Rands"
    },

    {
      email: "rSmith@gatech.edu",
      name: "Riley Smith",
      role: "Admin",
    },

    {
      email: "hNeald@gatech.edu",
      name: "Hathan Neald",
      role: "Admin",
    },

    {
      email: "ctreaty77@gatech.edu",
      name: "Courtney Treaty",
      role: "Student",
      cohort_number: 1,
      mentor: null,
      status: "current"
    },

    {
      email: "fyates33@gatech.edu",
      name: "Fred Yates",
      role: "Mentor",
      students: ["mtaylor@gatech.edu"]
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
      instructors: ["cking32@gatech.edu"],
      students: ['ctreaty77@gatech.edu', 'psullivan@gatech.edu']

    },

    {
      name: "Transportation 1",
      competencies: [1, 2, 3],
      locationID: 2,
      instructors: ["crands@gatech.edu"],
      students: ['ctreaty77@gatech.edu', 'psullivan@gatech.edu']

    },
    

  ]
}


export default dummyData;