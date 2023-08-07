import { ResumeStructure } from '../structure';

export const raw: ResumeStructure = {
    core: {
        contact: {type: "Contact",
            name: "Joey Zhu",
            number: "+1 (925) 858-2048",
            email: "joey.j.zhu@gmail.com",
        },
        location: {type: "Location",
            city: "San Ramon",
            state: "CA",
            zipCode: "94583",
        },
        title: "Software Engineer",
        homesiteUrl: "https://joeyjzhu.com",
    },
    skills: {
        skillMap: new Map(),
        skillObj: {
            Python: 3,
            JavaScript: 3,
            VSCode: 3,
            Git: 3,
            Photoshop: 2,
            Illustrator: 2,
            React_dot_js: 2,
            HTML: 2,
            CSS: 2,
            Typescript: 1,
            Java: 2,
            Spring_Boot: 1,
            AWS_CDK: 1,
            AWS_Lambda: 1,
            AWS_ECS: 1,
            AWS_Dynamo_DB: 1,
            AWS_S3: 1,
            AWS_API_Gateway: 1,
            AWS_SQS: 1,
            AWS_SNS: 1,
            AWS_Cloudwatch: 1,
            C: 1,
            Numpy: 1,
            Jira: 0,
            Confluence: 0,
            C_plus_plus: 0,
            Jenkins: 0,
            Gradle: 0,
            Mockito: 0,
            Three_dot_js: 0,
            Tailwind_CSS: 0,
            Next_dot_js: 0,
            ElasticSearch: 0,
            Kibana: 0,
            Scipy: 0,
            PyTorch: 0,
            Docker: 0,
        },
    },
    degree: {
        schoolName: "University of California, Berkeley",
        degree: "B.A.",
        major: "Computer Science",
        location: {type: "Location",
                address: "110 Sproul Hall",
                city: "Berkeley",
                state: "CA",
                zipCode: "94720",
            },
        startDate: {type: "Date",
            month: 8, day: 29, year: 2019, 
        },
        endDate: {type: "Date",
            month: 12, day: 31, year: 2022, 
        },
        courses: [
            {type: "Course",
                className: "Probability Theory",
                isMajor: true,
                codeName: "COMPSCI 126",
                description: "Information theory, density functions, conditional probability, random vectors, Markov chains"
            },
            {type: "Course",
                className: "Neural Networks",
                isMajor: true,
                codeName: "COMPSCI 182",
                description: "Convolutional Neural Networks, LSTMs, Transformers, VAEs, GANs, LLMs"
            },
            {type: "Course",
                className: "Cybersecurity",
                isMajor: true,
                codeName: "COMPSCI 161",
                description: "Cryptography, including encryption, authentication, hash functions, cryptographic protocols, and applications. Operating system security, access control. Network security, firewalls, viruses, and worms. Software security, defensive programming, and language-based security. Case studies from real-world systems"
            },
            {type: "Course",
                className: "Algorithm Theory",
                isMajor: true,
                codeName: "COMPSCI 170",
                description: "Concept and basic techniques in the design and analysis of algorithms; models of computation; lower bounds; algorithms for optimum search trees, balanced trees and UNION-FIND algorithms; numerical and algebraic algorithms; combinatorial algorithms. Turing machines, how to count steps, deterministic and nondeterministic Turing machines, NP-completeness. Unsolvable and intractable problems."
            },
            {type: "Course",
                className: "Intro to Machine Learning",
                isMajor: true,
                codeName: "COMPSCI 189",
                description: "Probabilistic and geometric ML methods, MLEs, NNs, SVMs, Regularization"
            },
            {type: "Course",
                className: "Differential Equations",
                isMajor: false,
                codeName: "PHYSICS 89",
                description: "Complex numbers, linear algebra, ordinary differential equations, Fourier series and transform methods, introduction to partial differential equations, introduction to tensors."
            },
            {type: "Course",
                className: "Analytic Mechanics",
                isMajor: false,
                codeName: "PHYSICS 105",
                description: "Newtonian, Lagrangian, and Hamiltonian mechanics, orbital mechanics, rigid body dynamics, tensor analysis techniques, chaos theory"
            },
            {type: "Course",
                className: "Electrodynamics",
                isMajor: false,
                codeName: "PHYSICS 110A",
                description: "electric and magnetic fields; dielectric, conducting, and magnetic media; relativity, Maxwell equations. Wave propagation in media, radiation and scattering, Fourier optics, interference and diffraction, ray optics and applications."
            },
            {type: "Course",
                className: "Quantum Mechanics",
                isMajor: false,
                codeName: "PHYSICS 137A",
                description: "Wave mechanics, matrix mechanics, with applications to atomic, molecular, solid state, nuclear and elementary particle physics. "
            },
            {type: "Course",
                className: "Statistical Mechanics",
                isMajor: false,
                codeName: "PHYSICS 112",
                description: "Basic concepts of statistical mechanics, microscopic basis of thermodynamics and applications to macroscopic systems, condensed states, phase transformations, quantum distributions, elementary kinetic theory of transport processes, fluctuation phenomena"
            },
        ],
        gpa: 3.5,
    },
    blurb: { body: "Results-oriented software engineer with a strong foundation in programming and a hunger for continuous learning. I have a strong talent and drive for quantifying and visualizing challenging problems and their solutions, and a great eye for web design and graphics." },
    experienceEntries: [
        {name: "UC Berkeley EECS",
            team: "Data Structures Course Summer 2022",
            role: "Academic Intern",
            isInternship: true,
            isVolunteer: true,
            location: {type: "Location",
                address: "Cory Hall",
                city: "Berkeley",
                state: "CA",
                zipCode: "94720",
            },
            startDate: {type: "Date",
                month: 1, day: 18, year: 2022, 
            },
            endDate: {type: "Date",
                month: 5, day: 6, year: 2022,
            },
            supervisor: {type: "Contact",
                name: "Eric Tang",
                email: "erictang000@berkeley.edu",
            },
            bulletPoints: [
                {type: "BulletPoint",
                    body: "Provided groups of 15-20 with practice problems on data structures, preparing them for midterm exams",
                },
            ]
        },
        {name: "IEEE",
            team: "Berkeley Chapter",
            role: "Marketing Team Officer",
            isInternship: false,
            isVolunteer: true,
            location: {type: "Location",
                address: "Cory Hall",
                city: "Berkeley",
                state: "CA",
                zipCode: "94720",
            },
            startDate: {type: "Date",
                month: 1, day: 18, year: 2022, 
            },
            endDate: {type: "Date",
                month: 5, day: 6, year: 2022,
            },
            supervisor: {type: "Contact",
                name: "Katja Maucec",
                email: "katja.maucec@berkeley.edu",
            },
            bulletPoints: [
                {type: "BulletPoint",
                    body: "Used Adobe Photoshop and Illustrator to design promotional stickers, semesterly organization shirt, and new club logo",
                },
            ]
        },
        {name: "Amazon",
            team: "Online Agreement Services",
            role: "Software Developer & Engineer Intern",
            isInternship: true,
            isVolunteer: false,
            location: {type: "Location",
                address: "410 Terry Ave.",
                city: "Seattle",
                state: "WA",
                zipCode: "98109",
            },
            startDate: {type: "Date",
                month: 1, day: 18, year: 2022, 
            },
            endDate: {type: "Date",
                month: 5, day: 6, year: 2022,
            },
            supervisor: {type: "Contact",
                name: "Akshay Mittal",
                number: "+1 (425) 279-3270",
                email: "akshaym@amazon.com",
            },
            bulletPoints: [
                {type: "BulletPoint",
                    body: "Automated a critical business workflow of requesting and exchanging internal permissions by creating a form feature and new APIs, saved 3 hours of work each for over 1000 users",
                },
                {type: "BulletPoint",
                    body: "Leveraged Git and IntelliJ for efficient version control and collaboration within cross-functional teams working in an Agile environment",
                },
                {type: "BulletPoint",
                    body: "Provisioned a new CloudFormation stack including AWS Lambda, SQS, and DynamoDB to deploy and manage scalable feature on team backend",
                },
                {type: "BulletPoint",
                    body: "Configured backend infrastructure using CDK and Typescript, and wrote business logic using singleton dependency injection design pattern and Java",
                },
                {type: "BulletPoint",
                    body: "Practiced test-driven development by unit tests with above 90 percent coverage, and tested feature in CI/CD developer environments to find and troubleshoot inactive-user edge cases",
                },
                {type: "BulletPoint",
                    body: "Refactored React.js frontend error boundaries to display form feature from any webpage",
                },
                {type: "BulletPoint",
                    body: "Designed an automatic, templated email using HTML, CSS, and Javascript",
                },
                {type: "BulletPoint",
                    body: "Implemented clean code, code refactoring, and code review best practices, ensuring high code quality and maintainability",
                },
                {type: "BulletPoint",
                    body: "Added a new SNS topic and DLQ to alarm on bounced emails to keep feature reliable and maintainable",
                },
                {type: "BulletPoint",
                    body: "Added procedures in runbook for handling edge cases of bounced emails and inactive users",
                },
            ]
        },
        {name: "NimbleRx",
            team: "Platform Team",
            role: "Software Developer & Engineer Intern",
            isInternship: true,
            isVolunteer: false,
            location: {type: "Location",
                address: "2317 Broadway",
                city: "Redwood City",
                state: "CA",
                zipCode: "94063",
            },
            startDate: {type: "Date",
                month: 5, day: 14, year: 2022, 
            },
            endDate: {type: "Date",
                month: 8, day: 10, year: 2022,
            },
            supervisor: {type: "Contact",
                name: "Vladislav Yavichev",
                email: "https://www.linkedin.com/in/yavichev/",
            },
            bulletPoints: [
                {type: "BulletPoint",
                    body: "Added S3 fallback table to AWS data pipeline architecture design, solving problem of dynamically composing notification data from user SMS webhooks",
                },
                {type: "BulletPoint",
                    body: "Organized tasks and tickets using Atlassian JIRA, and meeting notes and feedback using Confluence",
                },
                {type: "BulletPoint",
                    body: "Improved performance of cron jobs by multithreading Java Executor Service, leveraging up to 8 new cores to handle batched user shopping cart APIs",
                },
                {type: "BulletPoint",
                    body: "Refactored over 100 Spring Boot dependency classes to use Java configurations instead of XML, unifying design patterns across backend codebase",
                },
                {type: "BulletPoint",
                    body: "Delegated large code changes with other interns and reviewed their pull requests using Bitbucket",
                },
                {type: "BulletPoint",
                    body: "Practiced test-driven development and continuous integration using Docker and Jenkins, also resolving long-standing warnings in build logs",
                },
                {type: "BulletPoint",
                    body: "Monitored SQS Cloudwatch monitors after deploying new release, catching and resolving a throttle before severely affecting user end of production",
                },
            ]
        },
        {name: "Lawrence Berkeley National Laboratory",
            team: "ATAP Division",
            role: "Software Developer & Engineer Intern",
            isInternship: true,
            isVolunteer: false,
            location: {type: "Location",
                address: "1 Cyclotron Road",
                city: "Berkeley",
                state: "CA",
                zipCode: "94720",
            },
            startDate: {type: "Date",
                month: 8, day: 17, year: 2022, 
            },
            endDate: {type: "Date",
                month: 11, day: 1, year: 2022,
            },
            supervisor: {type: "Contact",
                name: "Axel Huebl",
                email: "axelhuebl@lbl.gov",
            },
            bulletPoints: [
                {type: "BulletPoint",
                    body: "Added C++ SIMD vectorization, OpenMP multithreading, and particle memory restructuring to plasma simulation, improving overall performance while maintaining future parallelizability",
                },
                {type: "BulletPoint",
                    body: "Designed a C++ parser to convert LUA scripts of CERN particle accelerators to Python input files for LBNL particle simulations",
                },
                {type: "BulletPoint",
                    body: "Integrated an existing LUA interpreter from CERN codebase into parser, replacing old case-by-case RegEx parsing approach",
                },
                
            ]
        },
        {name: "",
            team: "",
            role: "Freelance Web Developer",
            isInternship: false,
            isVolunteer: true,
            location: {type: "Location",
                city: "San Ramon",
                state: "CA",
                zipCode: "94583",
            },
            startDate: {type: "Date",
                month: 1, day: 1, year: 2023, 
            },
            endDate: {type: "Date",
                month: 7, day: 1, year: 2023,
            },
            supervisor: {type: "Contact",
                name: "Joey Zhu",
                email: "joey.j.zhu@gmail.com",
            },
            bulletPoints: [{type: "BulletPoint",
                body: "Designed personal webpage UI mockups using Illustrator, implemented using React.js",
            },
            {type: "BulletPoint",
                body: "Planned, implemented, and completed Atom Visualizer and Pentaquad personal projects",
            },
        ]
        },
        {name: "FOOD For Lane County",
            team: "Engineering",
            role: "Tech Lead",
            isInternship: false,
            isVolunteer: true,
            location: {type: "Location",
                address: "770 Bailey Hill Rd",
                city: "Eugene",
                state: "OR",
                zipCode: "97402",
            },
            startDate: {type: "Date",
                month: 7, day: 1, year: 2023, 
            },
            supervisor: {type: "Contact",
                name: "Yizhao Yang",
                email: "yizhao@uoregon.edu",
            },
            bulletPoints: [
                {type: "BulletPoint",
                    body: "Led design and development of a food bank delivery app that sources volunteer drivers, as an improvement to an existing Doordash partnership",
                },
                {type: "BulletPoint",
                    body: "Designed clean UI mockups using Photoshop and Illustrator, helping shareholders and project managers better understand needs and functionalities for the app",
                },
                {type: "BulletPoint",
                    body: "Scoped core functionalities, designed architecture, and planned 6-month timeline to build a minimum viable product, organizing work with other part-time volunteers",
                },
                {type: "BulletPoint",
                    isHidden: true,
                    body: "Designed algorithm to plan large-scale routing for up to 250 deliveries for one day, accounting for different volunteer driver preferences and capacities",
                },
                
            ]
        },
    ],
    projectEntries: [
        {name: "Atom Visualizer",
            isHidden: true,
            projectLink: "https://github.com/np-eazy/electron-cloud",
            role: "Solo Developer",
            location: {type: "Location",
                city: "San Ramon",
                state: "CA",
                zipCode: "94583",
            },
            startDate: {type: "Date",
                month: 2, day: 1, year: 2023, 
            },
            endDate: {type: "Date",
                month: 3, day: 1, year: 2023,
            },
            bulletPoints: [
                {type: "BulletPoint",
                    body: "Used Numpy to implement pilot wave formulation of Schrodinger's equation for a pointcloud",
                },
                {type: "BulletPoint",
                    body: "Created camera function and rotation to map 3d pointcloud to 2d with perspective",
                },
            ]
        },
        {name: "Pentaquad",
            projectLink: "https://github.com/np-eazy/Pentaquad",
            role: "Solo Developer",
            location: {type: "Location",
                city: "San Ramon",
                state: "CA",
                zipCode: "94583",
            },
            startDate: {type: "Date",
                month: 3, day: 1, year: 2023, 
            },
            endDate: {type: "Date",
                month: 8, day: 1, year: 2023,
            },
            bulletPoints: [
                {type: "BulletPoint",
                    body: "Organized issues and self-reviewed pull requests using Github web application, maintaining future portability to existing game engines",
                },
                {type: "BulletPoint",
                    body: "Built game engine from ground-up using JavaScript and HTML Canvas",
                },
                {type: "BulletPoint",
                    body: "Deployed React.js game client using Google Cloud",
                },
                {type: "BulletPoint",
                    body: "Incorporated feedback, requests, and design patterns from friends and experienced game developers",
                },
                
            ]
        },
        {name: "ChatBoba",
            isHidden: true,
            projectLink: "https://chatboba.com/",
            role: "Developer",
            location: {type: "Location",
                city: "San Ramon",
                state: "CA",
                zipCode: "94583",
            },
            startDate: {type: "Date",
                month: 5, day: 1, year: 2023, 
            },
            endDate: {type: "Date",
                month: 6, day: 1, year: 2023,
            },
            bulletPoints: [
                {type: "BulletPoint",
                    body: "Created a React component and state to recursively upload and display folders in app sidebar",
                },
            ]
        },
    ],
    hobbies: [
        {name: "Piano",
            description: "I've played piano since I was 5"
        },
        {name: "Cello",
            description: "I've played cello since I was 8"
        },
        {name: "Oil Painting",
            description: "I've done oil painting since I was 12"
        },
    ],
}


