import React, { useState } from 'react';
import careersVideo from './careers.mp4'; // Import the video from the components folder
import image1 from './image1.gif'; // Import the images
import image2 from './image2.gif';
import image3 from './image3.gif';
import image4 from './image4.gif';

const jobList = [
  {
    title: 'Programmer Analyst 6 - SharePoint Developer - Lansing, MI - Long Term Contract  - Job ID# 1080124',
    date: ' Posted on Aug 01 2024',
    description:(
        <>
          <p><strong>Urgent Requirement looking for:</strong> Programmer Analyst 6 - SharePoint Developer</p>
          <ul className="list-disc list-inside">
            <li>Duration: 1 year with possible extension.</li>
            <li>Will close submissions on: 8/2/2024 at 10am EST.</li>
            <li>Interview Process: Virtual Interview via MS Teams with any 2nd rounds being held ONSITE. (Candidates submitted must be willing to conduct a face-to-face interview if requested).</li>
            <li>On-site: Hybrid position - Onsite 2 days per week - REQUIRED. Candidates MUST be local at time of submission. Hiring manager is not currently interested in candidates who will need to relocate to accept offer. NO REMOTE OPTION.</li>
          </ul>
          <p className="mt-4"><strong>NEW Interview Attachment Functionality:</strong> When you receive an interview request, you will now receive a notification if an attachment is required with the request. As previously required for the SOMI, a current screenshot photo of your candidate is required when they receive an interview request. This now must be uploaded BEFORE you can accept the interview request and cannot be edited after the interview is accepted. This will need to be added when you approve the interview and MUST be a PDF file. Attachment instructions will be listed within the interview request.</p>
          <p className="mt-4"><strong>The posting is titled:</strong> Lansing, MI - IT - DTMB - Agency Services - DHHS - Programmer Analyst 6 - SharePoint Developer 133315.</p>
          <ul className="list-disc list-inside mt-4">
            <li>Top Skills & Years of Experience:
              <ul className="list-disc list-inside ml-4">
                <li>Expert knowledge in creating custom SharePoint solutions with SharePoint and Power Platform out of the box features.</li>
                <li>Expert knowledge in HTML, XHTML, JavaScript, CSS, XML jQuery, and REST APIs.</li>
                <li>Expert knowledge in SharePoint Designer and InfoPath.</li>
                <li>Excellent oral and written communication with strong customer service/client facing skills.</li>
                <li>Certifications in SharePoint, SharePoint Online, and Power Platform - Preferred.</li>
              </ul>
            </li>
          </ul>
          <p className="mt-4"><strong>Full Job Description:</strong></p>
          <ul className="list-disc list-inside mt-4">
            <li>Develop SharePoint applications using SharePoint 2016 and SharePoint Online.</li>
            <li>Migrate and/or redesign custom SharePoint solutions from SharePoint 2016 to SharePoint Online using SharePoint development best practices.</li>
            <li>Work with SharePoint Designer workflows and InfoPath forms.</li>
            <li>Develop custom SharePoint Lists and Content types.</li>
            <li>Develop front-end using web languages like HTML, Bootstrap, JavaScript, CSS, XSLT, XML jQuery, and REST API.</li>
            <li>Implement and customize SharePoint-based solutions using best practices.</li>
            <li>Build new applications using SharePoint Online and Power Platform.</li>
            <li>Work with client's business analyst and project manager to understand the requirements.</li>
            <li>Use Agile development best practices such as develop a minimum viable product (MVP), develop in sprints, demo at the end of each sprint, and emphasize creating simple solutions over complex ones.</li>
            <li>Troubleshoot any issue with the current application as well as participate in the development of new product features.</li>
            <li>Perform unit and functional testing on the application features, as needed.</li>
            <li>Help develop test cases, document technical features of the application.</li>
            <li>Use best practice with writing code.</li>
          </ul>
          <p className="mt-4"><strong>Knowledge, Skills and Abilities:</strong></p>
          <ul className="list-disc list-inside mt-4">
            <li>Expert knowledge in creating custom SharePoint solutions with SharePoint and Power Platform out of the box features.</li>
            <li>Expert knowledge in HTML, XHTML, JavaScript, CSS, XML jQuery, and REST APIs.</li>
            <li>Expert knowledge in SharePoint Designer and InfoPath.</li>
            <li>Strong customer service/client facing skills.</li>
            <li>Excellent oral and written communication skills.</li>
            <li>ShareGate migration experience is a plus.</li>
            <li>Business Connectivity Services (BCS) experience is a plus.</li>
          </ul>
          <p className="mt-4"><strong>Preferred Skills:</strong></p>
          <ul className="list-disc list-inside mt-4">
            <li>Certifications in SharePoint, SharePoint Online, and Power Platform.</li>
          </ul>
          <p className="mt-4"><strong>APPLY TO THIS JOB 👉</strong> email your latest resume to <a href="mailto:jobs@amxsol.com" className="text-blue-500 hover:underline">jobs@amxsol.com</a> | REFER A FRIEND 🤝 for Program Analyst</p>
        </>
      ),

    
  },
  {
    title: 'Project Manager - Job ID# 2072524',
    date: '  Posted on July 25 2024',
    description:(
        <>
        <p><strong>Job Title:</strong> Project Manager</p>
        <p><strong>Job Location:</strong> Berkeley Heights, NJ</p>
        <p><strong>Job type:</strong> Contract W2 or C2C</p>
        <p><strong>Experience:</strong> 10 to 15 years</p>
        <p className="mt-4"><strong>Job Descriptions:</strong></p>
        <p className="mt-2"><strong>Mandatory Skills:</strong></p>
        <ul className="list-disc list-inside">
          <li>Service Provider, Big 4 etc.</li>
          <li>Consulting experience.</li>
          <li>Project Budgeting & Tracking.</li>
          <li>Capacity Planning.</li>
          <li>Experience in handling SAP projects.</li>
          <li>Should have an understanding of the landscape of SAP.</li>
          <li>Experience in Supply chain & Finance domain.</li>
          <li>Experience in Retail domain.</li>
          <li>Retail or CPG experience is mandatory.</li>
        </ul>
        <p className="mt-4">The IT Project Manager will act as a strong business partner representing IT strategy & projects ensuring IT consistency on the Supply Chain and Finance for North America.</p>
        <p>The ideal candidate will be accountable for leading local, Zone, and at times Global projects, teams, delivery & budget and be responsible for collaboration with Domain teams to drive project success.</p>
        <p>This Role will evolve the standard of Agile Project delivery within the SC&F domain and could include hybrid and traditional waterfall project types depending on scope.</p>
        <p className="mt-4"><strong>Key Job Responsibilities:</strong></p>
        <ul className="list-disc list-inside">
          <li>Ensure execution of standard Project Documents, Functional Scope, Technical Design, Integration Models, and Data Analytics is completed per schedule.</li>
          <li>Project Budgeting and tracking using standard rate sheets for Contract Staff, summarizing across all domains.</li>
          <li>Capacity Planning in coordination with Domain leads and B2B guidelines.</li>
          <li>Resource Assignment planning with Domain leads.</li>
          <li>Project task planning complete with resource model and milestones.</li>
          <li>Ownership of project billing artifacts, Statement of Work, Purchase Orders, and Capital Requests.</li>
          <li>Periodic Budget Tracking inclusive of Timesheet reconciliation, invoicing, and remaining spend.</li>
          <li>Periodic Status reporting to project stakeholders and IT leadership.</li>
          <li>Provide Budget oversight for projects managed directly by Contract Staff. (Per LUSA Guidelines on Budget Management).</li>
          <li>Manage Local Project Responsibilities.</li>
          <li>Key Lead for Project Portfolio structures, PMO standards, and practices.</li>
          <li>Steer deployment of core models within the Zone in coordination with central teams.</li>
          <li>Apply Zone IT and B2B guidelines & consistency framework.</li>
        </ul>
        <p className="mt-4"><strong>APPLY TO THIS JOB 👉</strong> email your latest resume to <a href="mailto:jobs@amxsol.com" className="text-blue-500 hover:underline">jobs@amxsol.com</a> | REFER A FRIEND 🤝</p>
      </>
    ),
  },
  {
    title: 'Node.JS Developer - Job ID# 1072524 ',
    date: 'Posted on July 25 2024',
    description:(
        <>
        <p><strong>Position:</strong> Node.JS Developer</p>
        <p><strong>Location:</strong> Plano, TX (Hybrid)</p>
        <p><strong>Type:</strong> Full Time</p>
        <p><strong>OPT EAD Will Work</strong></p>
        <p className="mt-4"><strong>Required Qualifications:</strong></p>
        <ul className="list-disc list-inside">
          <li>At least 7 years of related work experience.</li>
          <li>At least 2 years of experience leading an application development team (minimum 6 - 8 members) for AWS target environment (Web/Mobile/Desktop applications).</li>
          <li>Excellent in designing and writing code supporting serverless frameworks using Node.js.</li>
          <li>Strong understanding and work experience of 3 years in JavaScript, TypeScript.</li>
          <li>At least 5 years of experience in Microservice architecture.</li>
          <li>Demonstrated in-depth knowledge & work experience in Node.Js and its APIs - e.g., File System, Clusters, Console, OS, etc.</li>
          <li>Ability to develop, integrate, and test REST APIs.</li>
          <li>Ability to design and work with Swagger documentation.</li>
          <li>Ability to write complex queries in any relational database (PostgreSQL, SQL Server).</li>
          <li>Demonstrated experience with Agile or other rapid application development methods.</li>
          <li>Ability to design the optimal data model based on the application need and system performance.</li>
          <li>Solid understanding in NoSQL databases like Elasticsearch, DynamoDB, etc.</li>
          <li>Ability to transform complex business requirements into technical design specifications.</li>
          <li>Experience in AWS developer tools, SDK, CLI tools, VPC, EC2, EBS, S3, ELB, Auto Scaling, Elastic Beanstalk, IAM, RDS, Route 53, CloudFront, CloudWatch, CloudTrail.</li>
          <li>Knowledge of AWS EC2 Instances provisioning, AWS VPC setup, AWS Auto Scaling for availability of EC2 Instances, and availability of applications.</li>
          <li>Experience in DevOps methodologies and Continuous Integration (CI) / Continuous Delivery (CD) tools (Jenkins) Infrastructure.</li>
          <li>Knowledge of various components like Docker Engine, Hub, Machine, Compose, and Docker Registry.</li>
          <li>Proficiency in programming with different Java IDEs like Eclipse, NetBeans, Visual Studio.</li>
          <li>Expertise in source control and deployment tools like GIT Lab, Team Foundation Server, Jenkins, etc.</li>
          <li>Experience and desire to work in a Global delivery environment.</li>
        </ul>
        <p className="mt-4"><strong>Preferred Qualifications:</strong></p>
        <ul className="list-disc list-inside">
          <li>Working experience in developing frontend using Angular is preferred.</li>
          <li>Capable of adapting to modern technologies and learning new tools and applications and flexible as per the project need.</li>
          <li>Good communication skills, interpersonal skills, self-motivated, and team player.</li>
          <li>Good working experience of the tools responsible for automation processes.</li>
          <li>Ability to integrate server-side logic into user-facing components created in Angular is preferred.</li>
          <li>Ability to communicate complex technology solutions to diverse teams, namely, technical, business, and management teams.</li>
          <li>Excellent verbal and written communication skills.</li>
          <li>Experience and desire to work in a Global delivery environment.</li>
        </ul>
        <p className="mt-4">If you are qualifying for the above opportunity, please send me a copy of your resume along with the following details ASAP to <a href="mailto:jobs@amxsol.com" className="text-blue-500 hover:underline">jobs@amxsol.com</a></p>
        <ul className="list-disc list-inside mt-4">
          <li>Full Name:</li>
          <li>Current Location:</li>
          <li>Work Authorization:</li>
          <li>Earliest Available date to start:</li>
          <li>Date and times available to interview:</li>
          <li>Two Professional References: (Preferably Supervisory references)</li>
        </ul>
        <p className="mt-4"><strong>APPLY TO THIS JOB 👉</strong> email your latest resume to <a href="mailto:jobs@amxsol.com" className="text-blue-500 hover:underline">jobs@amxsol.com</a> | REFER A FRIEND 🤝</p>
      </>
    ),
  },
  {
    title: '.Net Full Stack Developer - Job ID# 1071624',
    date: ' Posted on July 16 2024',
    description: (
        <>
          <p><strong>Company Description</strong></p>
          <p>AMXSOL is a leading technology company that provides innovative technical solutions and consulting services to enhance innovation, business value, and competitiveness. We are distinguished by our ability to anticipate the unique needs of our clients and deliver a level of quality that far exceeds their expectations.</p>
  
          <p><strong>Why AMXSOL?</strong></p>
          <p>At AMXSOL, we are a family unit powered by diversity, inclusion, transparency, respect, integrity, and passion for our clients and our people. Our business growth depends on your professional development, as we collaborate, share ideas and innovation, and invest in our future. By forging a meaningful partnership with our people, we come together with the same purpose, exceeding our goals. This keeps us nimble, ahead of the competition, and on top of our industry. Our continued success begins with you.</p>
  
          <p><strong>Role Description:</strong></p>
          <p>Design, build, and configure applications to meet business process and application requirements. Sharpen your skills, build an extraordinary career, and play a key role in the design and development of cross-platform mobile solutions. You will be instrumental in helping us make a successful transition to a .NET/C# development environment.</p>
  
          <p><strong>Responsibilities:</strong></p>
          <ul className="list-disc list-inside">
            <li>Develop, test, and deploy software solutions using .NET Core, .NET framework – ASP, ASP.NET, C#, JavaScript, CSS, ADO.NET, and SQL Server.</li>
            <li>Develop JavaScript-based web application front end using technologies such as Ajax, jQuery.</li>
            <li>Develop Web APIs based on RESTful architecture. Build SOAP and REST-based service to expose business functionality for consumption by various clients.</li>
            <li>Develop solution in microservice-oriented architecture using Microsoft technologies and deploy them on cloud using DevOps.</li>
            <li>Develop medium-complex business and financial reporting solutions using XML, HTML, and SQL reporting services.</li>
            <li>Tune the application to improve overall response time and resource utilization.</li>
            <li>Interface between the business users and technical team, and clarify the technical limitations and business requirements to the concerned parties.</li>
            <li>Perform gap analysis between the existing systems and business requirements.</li>
            <li>Decompose the complex solutions into simple achievable modules and direct the team for meeting the overall business objective.</li>
            <li>Create technical specification document for a given functional requirement.</li>
            <li>Develop SSIS packages/ETL programs using C#, T-SQL, batch files, database tables, triggers, and SSIS controls.</li>
            <li>Interface between development and testing team and ensure quick turnaround time for defect life cycle.</li>
            <li>Prepare the deliverables for each phase of project as per project plan.</li>
            <li>Provide quick and robust solution for production issues.</li>
            <li>Adhere to all standards and procedures defined for the life cycle of the project.</li>
          </ul>
  
          <p><strong>Qualifications:</strong></p>
          <ul className="list-disc list-inside">
            <li>Bachelor's degree in Computer Science/engineering or equivalent.</li>
            <li>4+ years of experience in .NET technologies.</li>
            <li>Proficient in .NET Core, ASP.NET, C#, XML, JavaScript environments and programming languages.</li>
            <li>Strong HTML5 and JavaScript coding skills.</li>
            <li>Experience in working on relational databases (DB2, Oracle, SQL Server), XML, Unix Shell Scripts, and able to code and debug stored procedures.</li>
            <li>Experience in working with ORMs like Entity Framework, EF Core.</li>
            <li>Knowledge of DevOps, CI/CD, Containerization (Docker, Kubernetes).</li>
            <li>Nice to have skills - MVC, SQL Reports, API gateway, Lambda Function, Serverless Architecture, CI/CD, Node.js, Python, SQL Database.</li>
            <li>Excellent software development life cycle and analytical skills.</li>
            <li>Software Life Cycle Experience for multi-tier systems, involving scope, specifications, architecture, design, development, integration, testing, release, revision, and maintenance.</li>
            <li>Should have excellent verbal and written communication skills and be able to work with associates at all levels within the organization.</li>
            <li>Ability to work independently and as part of a team.</li>
            <li>Excellent problem-solving and analytical skills.</li>
            <li>Relevant certifications (e.g., Microsoft Certified: Azure Developer Associate) is a plus.</li>
          </ul>
  
          <p className="mt-4"><strong>APPLY TO THIS JOB 👉</strong> email your latest resume to <a href="mailto:jobs@amxsol.com" className="text-blue-500 hover:underline">jobs@amxsol.com</a> | REFER A FRIEND 🤝</p>
        </>
      ),
  },
  {
    title: 'CMDBuild TOOL (Sr) - Job ID# 1050222 ',
    date: ' Posted on July 10 2024',
    description: (
        <>
          <p><strong>Position:</strong> CMDBuild Tool (Sr)</p>
          <p><strong>Type:</strong> Contract Position</p>
          <p><strong>Experience Required:</strong> 10+ years</p>
          <p className="mt-4"><strong>Skills Required:</strong></p>
          <ul className="list-disc list-inside">
            <li>Service Now, CMDB, and Asset Management</li>
            <li>CMD Build Tool experience (must have)</li>
            <li>DevOps Skills (Jenkins, Terraform, and CICD pipelines)</li>
            <li>AWS Cloud</li>
          </ul>
          <p className="mt-4"><strong>Location:</strong> Remote for now, eventually onsite in NYC</p>
          <p className="mt-4">APPLY TO THIS JOB 👉 email your latest resume to <a href="mailto:jobs@amxsol.com" className="text-blue-500 hover:underline">jobs@amxsol.com</a> | REFER A FRIEND 🤝</p>
        </>
      ),  },
  {
    title: 'C & C++ (Sr) - Job ID# 2050222',
    date: ' Posted on July 10 2024',
    description: (
        <>
          <p><strong>Position:</strong> C & C++ (Sr)</p>
          <p><strong>Type:</strong> Contract Position</p>
          <p><strong>Experience Required:</strong> 10+ years</p>
          <p className="mt-4"><strong>Skills Required:</strong></p>
          <ul className="list-disc list-inside">
            <li>C and C++ strong</li>
            <li>Strong Linux and non-Windows experience</li>
            <li>Leadership skills</li>
            <li>Soft skills</li>
            <li>DevOps (optional)</li>
            <li>AWS Cloud (nice to have)</li>
          </ul>
          <p className="mt-4"><strong>Location:</strong> Remote for now, eventually onsite in NYC</p>
          <p className="mt-4">APPLY TO THIS JOB 👉 email your latest resume to <a href="mailto:jobs@amxsol.com" className="text-blue-500 hover:underline">jobs@amxsol.com</a> | REFER A FRIEND 🤝</p>
        </>
      ),
  },
];

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJobDescription = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="relative top-[60px]">
      {/* Video Section */}
      <div className="relative w-full h-[60vh]">
        <video
          src={careersVideo}
          alt="Careers"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />

        {/* Overlay Text on Video */}
        <div className="absolute top-4 left-4 sm:left-8 text-white">
          <h1 className="text-xl sm:text-2xl font-bold leading-tight">
            WHO WE ARE / Careers
          </h1>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-6">
            <span className="text-yellow-300">Build</span> a Career <br />
            <span className="text-yellow-300">with us</span>
          </h2>
        </div>

        {/* Right Bottom Content */}
        <div className="absolute bottom-4 right-4 sm:right-8 text-white text-xs sm:text-sm w-[80%] sm:w-[40%]">
          <p className="mb-2">
            Want to be a global change maker?
          </p>
          <p className="mb-2 text-red-300">
            <span className="font-bold text-red-500">Join our team.</span> At AMXSOL <span className="text-red-500">∞</span> infinite possibilities
          </p>
          <p className="mb-2">
            We believe exceptional work begins with hiring, celebrating, and nurturing the best people.
          </p>
          <p className="mb-2">
            Contact us for <span className="text-red-500">∞</span> infinite possibilities
          </p>
          <p>
            Connect with us on: <span className="mr-2">in</span>
            <span className="mr-2">X</span>
            <span className="mr-2">f</span>
            <span className="mr-2">Y</span>
            <span className="mr-2">✆</span>
            <span className="mr-2">✉</span>
            <span className="mr-2">🕸</span>
          </p>
        </div>
      </div>

      {/* New Section Below Video */}
      <div className="p-4 sm:p-8 bg-white">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Build a Career with us at <span className="text-yellow-300">AMXSOL</span> for <span className="text-red-500">∞</span> infinite possibilities
        </h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          JOIN US
        </h2>
        <p className="text-lg sm:text-xl text-gray-900 mb-8">
          Shape your future with us!!!
          <br />
          <br />
          As a global company with unparalleled scale, a track record of pioneering innovation, and a huge influential client base, we offer associates a chance to drive change and improve the lives of millions of people around the world.
        </p>
      </div>

      {/* Images Section */}
      <div className="p-4 sm:p-8 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start text-left space-y-2">
            <img src={image1} alt="Research and Innovation" className="w-full h-auto" />
            <p className="text-gray-900">
              <strong>Our research and innovation</strong><br />
              We believe in the power of collective knowledge
            </p>
          </div>
          <div className="flex flex-col items-start text-left space-y-2">
            <img src={image2} alt="Inclusive Workplaces" className="w-full h-auto" />
            <p className="text-gray-900">
              <strong>Our inclusive work places</strong><br />
              We believe in the power of collective knowledge
            </p>
          </div>
          <div className="flex flex-col items-start text-left space-y-2">
            <img src={image3} alt="Investment in Innovation" className="w-full h-auto" />
            <p className="text-gray-900">
              <strong>Our investment in innovation</strong><br />
              We believe in nurturing fresh talent
            </p>
          </div>
          <div className="flex flex-col items-start text-left space-y-2">
            <img src={image4} alt="Design Thinking Philosophy" className="w-full h-auto" />
            <p className="text-gray-900">
              <strong>Our design thinking philosophy</strong><br />
              We believe in trying, testing and tenacity
            </p>
          </div>
        </div>
      </div>

      {/* Open Jobs Section */}
      <div className="p-4 sm:p-8 bg-gray-100 mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Explore Open Jobs <span className="text-red-500">∞</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-900 mb-4">
  AMXSOL | Open Positions | Apply immediately |{" "}
  <a 
    href="https://forms.gle/your-google-form-link" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-500 hover:underline"
  >
    Upload Resume
  </a>
</p>

        <p className="text-md sm:text-lg text-gray-900 mt-8">
          APPLY FOR A JOB 👉 email your latest resume to <a href="mailto:jobs@amxsol.com" className="text-blue-500 hover:underline">jobs@amxsol.com</a> | REFER A FRIEND 🤝 | Connect with us on: | <span className="mr-2">in</span> <span className="mr-2">X</span> <span className="mr-2">f</span> <span className="mr-2">Y</span> <span className="mr-2">✆</span> <span className="mr-2">✉</span> <span className="mr-2">🕸</span>
        </p>

        {/* Job List */}
        <div>
          {jobList.map((job, index) => (
            <div key={index} className="border-b border-gray-300 mb-4">
              <button
                onClick={() => toggleJobDescription(index)}
                className="flex items-center justify-between w-full text-left p-4 focus:outline-none"
              >
                <span className="text-lg font-semibold">
                  {job.title} <sub className="text-sm">{job.date}</sub>
                </span>
                <svg
                  className={`w-6 h-6 ml-2 transition-transform duration-300 ${expandedJob === index ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedJob === index && (
                <div className="p-4 text-gray-900">
                  {job.description}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* <p className="text-md sm:text-lg text-gray-900 mt-4">
          APPLY FOR A JOB 👉 email your latest resume to <a href="mailto:jobs@amxsol.com" className="text-blue-500 hover:underline">jobs@amxsol.com</a> | REFER A FRIEND 🤝 | Connect with us on: | <span className="mr-2">in</span> <span className="mr-2">X</span> <span className="mr-2">f</span> <span className="mr-2">Y</span> <span className="mr-2">✆</span> <span className="mr-2">✉</span> <span className="mr-2">🕸</span>
        </p> */}
      </div>
    </div>
  );
};

export default Careers;
