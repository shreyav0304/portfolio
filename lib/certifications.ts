export const certificateArchive = "https://drive.google.com/drive/folders/12zV18VyWC5lBapC0ua0SFd1NYBlNv0m6";

export const certificateCategories = ["All", "Courses & programs", "Badges", "Workshops & events", "Recognition"] as const;
export type CertificateCategory = (typeof certificateCategories)[number];

export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  kind: string;
  category: Exclude<CertificateCategory, "All">;
  fileId: string;
  verification?: string;
};

export const certifications: Certificate[] = [
  { title: "Machine Learning Specialization", issuer: "DeepLearning.AI & Stanford University · Coursera", date: "July 2025", kind: "Specialization", category: "Courses & programs", fileId: "132cwRP5vNTR-EoY8uehsC2vpumwI1yoq", verification: "https://coursera.org/verify/specialization/XEJKUR77HMNE" },
  { title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI & Stanford University · Coursera", date: "July 2025", kind: "Course", category: "Courses & programs", fileId: "1gyaqAa_n4WbKAR7T2iJFX3VupbRlFL6N", verification: "https://coursera.org/verify/58ZN5ZO97EE9" },
  { title: "Advanced Learning Algorithms", issuer: "DeepLearning.AI & Stanford University · Coursera", date: "July 2025", kind: "Course", category: "Courses & programs", fileId: "1MfKC27BRO3xKPrmqeRYEeKbQe5Wu9fA6", verification: "https://coursera.org/verify/B9HNY2YQ416C" },
  { title: "Unsupervised Learning, Recommenders, Reinforcement Learning", issuer: "DeepLearning.AI & Stanford University · Coursera", date: "July 2025", kind: "Course", category: "Courses & programs", fileId: "1zGtV1cK4LwyGwMbzW6QEECHlHPnbSkIi", verification: "https://coursera.org/verify/FOX0YOFNO5UO" },
  { title: "Python Full Stack", issuer: "RIA Institute of Technology", kind: "Training", category: "Courses & programs", fileId: "1kKsd_o4W4lkTxTpwGOlycDBrhseBd4im" },
  { title: "Python for Data Science", issuer: "Great Learning Academy", date: "November 2024", kind: "Course", category: "Courses & programs", fileId: "13xACM7blloVYGT8RGNH5nd2_nXc_K5yk", verification: "https://www.mygreatlearning.com/certificate/RKQOKEWY" },
  { title: "Python Complete Course for Beginners", issuer: "Horizon Tech · Udemy", date: "October 2025", kind: "Course", category: "Courses & programs", fileId: "1FiuCxztVKsDqzgZZgMBRJ2YT0FUkWQ6T" },
  { title: "Probability and Statistics using Python", issuer: "Infosys Springboard", date: "October 2025", kind: "Course", category: "Courses & programs", fileId: "1kybd2JzNh-OMTC9kI7lckmOxhoSFGggQ" },
  { title: "Data Structures in C", issuer: "Great Learning Academy", date: "October 2024", kind: "Course", category: "Courses & programs", fileId: "136mPNlR29jhuMiqbitWVckfBGtQM49F_", verification: "https://www.mygreatlearning.com/certificate/VPGSAKOZ" },
  { title: "Cryptography and Network Security", issuer: "NPTEL", date: "January–April 2025", kind: "Course", category: "Courses & programs", fileId: "1xNtY0Q53v4q5QRIRtdV2YARVZaEjcKUZ" },
  { title: "Generative AI Mastermind", issuer: "Outskill", kind: "Program", category: "Courses & programs", fileId: "1XHJQ-aeklWitbDnFM7Fy50W9DsBRtnak" },
  { title: "Artificial Intelligence Fundamentals", issuer: "Great Learning Academy", date: "December 2024", kind: "Course", category: "Courses & programs", fileId: "1GOHnHHBXUqrxtNv4ZpmUUgcIIAFa5aet", verification: "https://www.mygreatlearning.com/certificate/JCMZBFCY" },
  { title: "Introduction to Artificial Intelligence", issuer: "Great Learning Academy", date: "November 2024", kind: "Course", category: "Courses & programs", fileId: "1jXiur77ME74FB7xi-oQNWFgfaWFlpU6V", verification: "https://www.mygreatlearning.com/certificate/JXUVJRDC" },
  { title: "Artificial Intelligence", issuer: "Infosys Springboard", date: "November 2025", kind: "Course", category: "Courses & programs", fileId: "1WPHhdPlCUwtarl859KvOhxvtODpz-xVv" },
  { title: "Introduction to Data Science", issuer: "Great Learning Academy", date: "November 2024", kind: "Course", category: "Courses & programs", fileId: "1owtSMCT8WwIRWhfynVZeWndcECXOcBjc", verification: "https://www.mygreatlearning.com/certificate/KZPTLYRA" },
  { title: "AI Literacy", issuer: "IBM SkillsBuild", date: "February 2026", kind: "Badge", category: "Badges", fileId: "170vR1tHt5-tRNmkf4ELstCfJtL0F6w2j", verification: "https://www.credly.com/go/Y3ai0UbS" },
  { title: "Explore Emerging Tech", issuer: "IBM SkillsBuild", date: "June 2026", kind: "Badge", category: "Badges", fileId: "1IoCSLUf65Kj3SVAERSGt3rb4njweR8du", verification: "https://www.credly.com/go/2rwLYyp3" },
  { title: "Demystifying Cloud Data Engineering", issuer: "Cambridge Institute of Technology", date: "April 2026", kind: "Participation", category: "Workshops & events", fileId: "1dhw-ftEsLjJfQ6bDN60Wg6Tfl_JgBTOP" },
  { title: "Raw to Refined: A Practical Journey into Data Mining and Data Warehouse", issuer: "Cambridge Institute of Technology", date: "May 2025", kind: "Participation", category: "Workshops & events", fileId: "1WH3AOur7HA8SVK0xmbiZTQDZID-WVixc" },
  { title: "Bharatiya Antariksh Hackathon 2026", issuer: "ISRO · Hack2skill", date: "2026", kind: "Participation", category: "Workshops & events", fileId: "1NIhYdFXXd5q5JVoOt1u86I2_IjRP1f4P" },
  { title: "Rakuten Product Conference 2026", issuer: "Rakuten India", date: "April 2026", kind: "Participation", category: "Workshops & events", fileId: "1n8VadgzVPAVN_7713UMSRFWwM8xqPBp6" },
  { title: "Crime-Free KR Puram 5 KM Marathon", issuer: "Crime-Free KR Puram", date: "August 2025", kind: "Participation", category: "Workshops & events", fileId: "1_YUKDMz1ziPfqf-yH5MX_BrudZ1NPTb6" },
  { title: "Research Associate — Certificate of Appreciation", issuer: "Cambrian SkillsDA Technologies and Consultancy Services LLP", date: "August 2026", kind: "Appreciation", category: "Recognition", fileId: "1Lt5AF0EEl7X3-Vo9XeUF88kMW9ym6gnc" },
];

const featuredTitles = new Set([
  "Machine Learning Specialization",
  "Python Full Stack",
  "Python for Data Science",
  "Cryptography and Network Security",
  "AI Literacy",
  "Research Associate — Certificate of Appreciation",
]);

export const featuredCertifications = certifications.filter((certificate) => featuredTitles.has(certificate.title));
