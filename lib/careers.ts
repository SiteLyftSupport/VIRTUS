export type Career = {
  slug: string;
  title: string;
  location: string;
  clearance: string;
  summary: string;
  required: string[];
  desired?: string[];
  technologies?: string[];
};

export const CAREERS: Career[] = [
  {
    slug: "systems-engineer",
    title: "Systems Engineer",
    location: "Northern VA",
    clearance: "Active FS Poly",
    summary:
      "Drive technical requirements, accreditation, and program-level engineering for highly visible Sponsor programs.",
    required: [
      "Demonstrated knowledge of and experience with performing assessment, analysis and development of technical requirements.",
      "Demonstrated knowledge and ability to ensure technical requirements align with and are traceable to legal and policy requirements. Implemented technical requirements, in coordination with internal and external systems.",
      "Demonstrated experience with Security and Accreditation requirements and standards, including creation and support of relevant required documentation.",
      "Demonstrated expertise in software development (Java, Junit, JQuery, JSON/backend; HTML/web front end).",
      "Demonstrated ability to create and deliver program and project artifacts and deliverables to a wide array of audiences, predominantly executives.",
      "Demonstrated ability with program/project reporting, for both technical and non-technical audiences.",
      "Demonstrated experience exhibiting analytical and problem solving skills.",
      "Demonstrated familiarity with the data management lifecycle.",
      "Demonstrated knowledge of and experience with developing new training materials in various formats, in person or work-based training (WBT).",
      "Demonstrated ability to update or revise training materials based on changes to training content.",
      "Ability to create reports measuring training delivered as well as development and maintenance of training metrics for internal and external reporting.",
    ],
    desired: [
      "Demonstrated experience with and knowledge of executive, highly visible Sponsor programs.",
      "Demonstrated experience with data tagging and/or metadata management.",
      "Demonstrated experience with Git/GitHub.",
      "Demonstrated experience with Jenkins.",
      "Demonstrated experience engineering and developing on AWS / Sponsor Cloud Services.",
    ],
  },
  {
    slug: "software-engineer",
    title: "Software Engineer",
    location: "Northern VA",
    clearance: "Active FS Poly",
    summary:
      "Build full-stack web applications and services for large, highly distributed Sponsor systems.",
    required: [
      "Demonstrated experience in API Design.",
      'Demonstrated experience in developing "drop-in" Web Components.',
      "Demonstrated experience in authoring and consuming Web Services.",
      "Demonstrated experience in designing applications to support Deep Linking.",
      "Demonstrated experience utilizing RDBMS and NoSQL capabilities.",
      "Demonstrated experience in open source technologies and experience in pulling together multiple open source modules to satisfy a system requirement.",
      'Demonstrated experience in securely and efficiently facilitating search within large distributed systems with "row-level" or "cell-level" security.',
      "Demonstrated experience in user engagements, soliciting requirements, decomposing into user stories.",
      "Demonstrated experience in User Experience design — to include Visual Design.",
      "Demonstrated experience developing Web Applications.",
      "Demonstrated experience in the full software development lifecycle. This includes development, deployment, testing, and monitoring.",
      "Demonstrated experience in requirements definition.",
      "Demonstrated experience in Information Security, Assessment & Accreditation.",
      "Demonstrated on-the-job experience with Agile methodologies.",
    ],
    technologies: [
      "Linux (e.g. CentOS)",
      "Java",
      "Python",
      "Adobe Illustrator / Photoshop or equivalent",
      "HTML, CSS, JavaScript",
      "Angular",
      "React",
      "Vue",
      "CORS",
      "REST",
      "SOLR / ElasticSearch",
      "MongoDB",
      "Cassandra",
      "Amazon RDS",
      "SQL",
    ],
  },
  {
    slug: "software-developer",
    title: "Software Developer",
    location: "Northern VA",
    clearance: "Active FS Poly",
    summary:
      "Develop dashboards, costing models, and AWS-native delivery pipelines that translate metrics into mission decisions.",
    required: [
      "Demonstrated experience capturing metrics and developing dashboard capabilities that effectively communicate data analysis.",
      "Demonstrated experience working with engineers to ensure that the right plan, design and product is engineered and implemented.",
      "Demonstrated experience with Amazon Web Services, to include in-depth knowledge of technical service offerings and how they can be used to meet performance, cost and schedule to achieve project success.",
      "Demonstrated experience developing costing projections using Amazon Web Services pricing models and cloud design principles.",
      "Demonstrated experience applying business and technical skills to inform decisions for cost reductions, performance improvements and mission benefit.",
      "Demonstrated experience writing clear, readable technical documents and presentations for technical and non-technical personnel.",
    ],
    desired: [
      "Demonstrated experience developing Grafana dashboards.",
      "Demonstrated experience developing dashboards and data analysis products leveraging multiple programming languages such as Python, Java, JavaScript, etc.",
      "Demonstrated experience creating and maintaining an engineering and/or technical project budget.",
      "Demonstrated experience collaboratively analyzing IT systems to improve performance and reducing costs.",
    ],
  },
  {
    slug: "database-administrator",
    title: "Database Administrator",
    location: "Northern VA",
    clearance: "Active FS Poly",
    summary:
      "Own structured-data tiers across Oracle and AWS — performance, security, and the integrity of every transaction.",
    required: [
      "Demonstrated experience working with relational data tiers including cleansing, transforming, and processing of structured data.",
      "Demonstrated experience in Oracle Relational Database Management System.",
      "Demonstrated experience developing complex data transformation flows using graphical ETL tools.",
      "Demonstrated experience creating and modifying complex SQL routines, with a focus on performance tuning.",
      "Demonstrated experience working with Views, triggers, and Oracle PL/SQL.",
      "Demonstrated experience implementing complex security policies in Oracle.",
      "Demonstrated experience and knowledge of Amazon Web Services environments, including RDS, S3, EMR, SQS, and SNS.",
      "Demonstrated experience with data hosting solutions for structured and unstructured data sets.",
    ],
    desired: [
      "Demonstrated experience with the Sponsor's approval and data provisioning processes pertaining to enterprise data.",
      "Demonstrated experience with data management, data versioning, backups, and GitHub.",
      "Demonstrated experience with data streaming solutions to transform and store data.",
      "Demonstrated experience with coordination and facilitation of meetings and technical discussions of requirements.",
      "Demonstrated experience tracking project status, plans, and action items.",
      "Demonstrated experience drafting meeting minutes.",
      "Demonstrated experience working in an agile environment and providing inputs to agile operations such as scrum and retrospectives.",
      "Demonstrated experience with data repository storage types such as relational, NoSQL, or distributed processing framework.",
      "Demonstrated experience with data transformation services and pipelines such as AWS pipeline.",
      "Demonstrated experience with formulating strategies and designs for decoupling direct connections to the data tier.",
      "Demonstrated experience proposing strategies for utilizing web services and an Application Program Interfaces (API) gateway.",
      "Demonstrated experience creating REST APIs.",
      "Demonstrated experience interfacing with REST APIs.",
      "Demonstrated experience with programming languages such as JavaScript, Java, Python, PHP, or Ruby.",
    ],
  },
  {
    slug: "application-developer",
    title: "Application Developer",
    location: "Northern VA",
    clearance: "Active FS Poly",
    summary:
      "Build and ship web/cloud applications across AWS — from front-end JavaScript through deployment automation.",
    required: [
      "Demonstrated experience with HTML, JavaScript, Regular Expressions, JSON, and APIs.",
      "Demonstrated experience with Python and/or Node.js.",
      "Demonstrated experience with shell scripting, for example, Bash.",
      "Demonstrated ability to communicate technical information to non-technical audiences.",
      "Takes ownership of problems.",
      "Demonstrated experience writing cloud-based infrastructure deployment scripts incorporating AWS, e.g. using CloudFormation.",
      "Demonstrated experience with Linux bash shell scripting.",
      "Demonstrated experience automating project builds, for example by writing Makefiles, shell scripts, or Jenkins jobs.",
      "Ability to work with application developers to identify and implement infrastructure and deployment requirements.",
    ],
    desired: [
      "Demonstrated experience deploying systems onto Amazon Web Services, especially using S3, Lambda.",
      "Demonstrated experience with other (non-AWS) cloud services (e.g. Azure, Google Cloud, etc.).",
      "Demonstrated experience using automated testing frameworks.",
      "Demonstrated experience with automated deployment tools, e.g. Jenkins, Docker, CloudFormation.",
      "Demonstrated experience with SQL and/or NoSQL databases, such as SQLite, MariaDB, MongoDB.",
      "Familiarity with web-based collection platforms and/or data flow quality assurance.",
    ],
  },
];

export function getCareer(slug: string) {
  return CAREERS.find((c) => c.slug === slug);
}
