export const dummyData = {

  competencies: {
    1: {
      title: "Can call an Uber/Lyft",
      domain: "Transportation",
      subcategory: "Uber/Lyft",
      difficulty: "I",
      frequency: "Sem"
    },
    2: {
      title: "Can cancel an Uber/Lyft",
      domain: "Transportation",
      subcategory: "Uber/Lyft",
      difficulty: "A",
      frequency: "Sem"
    },
    3: {
      title: "Is on time for work/internships",
      domain: "Employment/Careers",
      subcategory: "Planning and Preparation",
      difficulty: "I",
      frequency: "Mnth"
    },
    4: {
      title: "Performs assigned tasks and follows directions on the job",
      domain: "Employment/Careers",
      subcategory: "Work Skills",
      difficulty: "I",
      frequency: "Sem"
    },
    5: {
      title: "Understands and utilizes advanced benefits: health insurance, Employee Assistance Programs (EAP)",
      domain: "Employment/Careers",
      subcategory: "Work Skills",
      difficulty: "E",
      frequency: "Yr"
    },
    6: {
      title: "Addresses bullying through effective communication by discussing the situation with others, or asking for help if needed",
      domain: "Social and Leadership Development",
      subcategory: "General Social Skills",
      difficulty: "A",
      frequency: "Sem"
    },
    6: {
      title: "Presents clean, neat and appropriate attire / uniform ",
      domain: "Employment/Careers",
      subcategory: "Hygiene & Physical Presentation",
      difficulty: "B",
      frequency: "Sem"
    },
    7: {
      title: "Displays good hygiene and grooming: Including body, hair, nails, teeth",
      domain: "Employment/Careers",
      subcategory: "Hygiene & Physical Presentation",
      difficulty: "B",
      frequency: "Sem"
    },
    8: {
      title: "Utilizes and records an appropriate voicemail message",
      domain: "Employment/Careers",
      subcategory: "Job Search Skills (to get the job)",
      difficulty: "I",
      frequency: "Sem"
    }
  },

  users: [
    {
      email: "cking32@gatech.edu",
      role: "Faculty/Staff",
      name: "Cole King"
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
      email:"psullivan@gatech.edu",
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
      student: "asullican@gatech.edu"
    }
  ]
  }
