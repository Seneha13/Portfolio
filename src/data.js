// Edit this file to update the portfolio content.

export const profile = {
  name: 'Seneha S',
  role: 'Software Development Engineer in Test (SDET)',
  company: 'Relevantz Technology Services',
  experience: '1 year',
  location: 'Chennai, India',
  relocate: 'Dubai, UAE',
  email: 'senehagayathri@gmail.com',
  phone: '+91 9042288609',
  linkedin: 'https://www.linkedin.com/in/seneha13',
  github: 'https://github.com/seneha13',
  stack: ['Java', 'React', 'TypeScript', 'SQL'],
}

export const experience = [
  {
    title: 'Software Development Engineer in Test',
    meta: 'Relevantz Technology Services, India | 2025 - Present (1 year)',
    groups: [
      {
        name: 'ServiceEverZ, enterprise ITSM platform',
        points: [
          'Contributed to a service management platform where users raise tickets through the portal or by email.',
          'Worked on email-to-ticket automation, so incoming emails create tickets with no manual entry, cutting turnaround time and effort.',
          'Supported a fully traceable ticket workflow, with every step recorded in the ticket history for transparency and audit.',
        ],
      },
      {
        name: 'StarZ, mobile application',
        points: [
          'Working on an app where action items are emailed to the assigned person, who can accept or reject them.',
          'Features include the accept/reject workflow, email notifications to assignees, and a star rating that recognises completed work.',
        ],
      },
    ],
  },
  {
    title: 'Data Science Intern',
    meta: 'Commonwealth | Jul - Aug 2024',
    points: ['Proposed data analysis methods and carried out practical tasks in data privacy and analytical insights.'],
  },
  {
    title: 'Data Analytics and Visualization, virtual program',
    meta: 'Accenture | Jun - Jul 2024',
    points: ['Practised data storytelling and client presentations to communicate business recommendations.'],
  },
  {
    title: 'Technical Intern',
    meta: 'Indworks | Jul - Sep 2023',
    points: ['Worked in a team on an image-to-text conversion project using computer vision.'],
  },
]

export const projects = [
  {
    title: 'Attendance Management System',
    big: true,
    text: 'Real-time attendance tracking that sends an automated WhatsApp alert to parents when a student is absent.',
    tags: ['MongoDB', 'Express.js', 'React Native (Expo)', 'Node.js'],
  },
  {
    title: 'Digital Signature Standard',
    text: 'Generated public and private key pairs and managed them through a certificate authority, sharing keys only with authorised users.',
    tags: ['Cryptography', 'Certificate authority'],
  },
  {
    title: 'Fake Review Detection',
    text: 'Detected fake online reviews using keyword-based analysis.',
    tags: ['Python', 'Text analysis'],
  },
]

export const skills = [
  { title: 'Languages', note: 'Core programming', items: ['Java', 'TypeScript', 'JavaScript', 'SQL', 'Python'] },
  { title: 'Frontend and mobile', note: 'Web and app UIs', items: ['React JS', 'React Native', 'TypeScript', 'HTML/CSS'] },
  { title: 'Testing and QA', note: 'Quality engineering', items: ['SDET practices', 'Test automation', 'Manual testing'] },
  { title: 'Tools', note: 'Version control and office', items: ['Git', 'GitLab', 'MS Excel'] },
]

export const education = [
  { title: 'B.E. Computer Science', lines: ['Abdul Hakeem College | 2021 - 2025', 'CGPA: 8.8'] },
  { title: 'Java, SQL and Web certified course', lines: ['Q-Spiders, Chennai | Aug 2025'] },
]
