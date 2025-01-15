exports.BACKEND_URL  = process.env.REACT_APP_BACKEND_URL || ( this.PROD_SWITCH == 0 ? 'http://localhost:3001' :  "https://mr-dorker-backend.onrender.com" ); 
exports.LOGIN_URL = this.BACKEND_URL + "/authService/nylas/hostedAuth"
exports.PROD_SWITCH = 1;
exports.GOOGLE_DORKS_JSON = [
    { name: "XSS", id: "xss-dorks" },
    { name: "Amazon Storage Blobs", id: "s3-files" }, 
    { name: "SQL Injections", id: "sql-dorks" },
    { name: "Open Redirections", id: "open-redirection" },
    { name: "Excel Files", id: "excel-files" },
    { name: "DB Files", id: "db-files" },
    { name: "Find Login/Signup pages", id: "login-dorks" },
    { name: "Find Backup Files", id: "backup-files" },
    { name: "Find Log Files", id: "log-files" },
    { name: "Find Grafana Exposures", id: "grafana-files" },
    { name: "Find Stat files", id: "stat-files" },
    { name: "Find Server files", id: "server-files" },
    { name: "Find Config files", id: "config-files" },
    { name: "Company Files", "id": "company-files" } 
  ];
  exports.GITHUB_DORKS_JSON = [
    { name: "Sensitive Information Exposures", id: "github" }
  ];

  exports.SHODAN_DORKS_JSON = [
    { name: "Sensitive Information Exposures", id: "shodan" }
  ];

  exports.AI_REPORT_HEADINGS = [
    { label: 'Summary', value: 'Summary' },
    { label: 'Description', value: 'Description' },
    { label: 'Steps to Reproduce', value: 'Steps to Reproduce' },
    { label: 'Expected Behavior', value: 'Expected Behavior' },
    { label: 'Actual Behavior', value: 'Actual Behavior' },
    { label: 'Environment', value: 'Environment' },
    { label: 'Severity', value: 'Severity' },
    { label: 'Priority', value: 'Priority' },
    { label: 'Component', value: 'Component' },
    { label: 'Impact to users', value: 'User Impact' },
    { label: 'Impact to organization', value: 'organization Impact' },
    { label: 'Workaround', value: 'Workaround' },
    { label: 'Labels', value: 'Labels' },
    { label: 'Assignee', value: 'Assignee' },
    { label: 'Reporter', value: 'Reporter' },
    { label: 'Date Reported', value: 'Date Reported' },
    { label: 'Date Resolved', value: 'Date Resolved' },
    { label: 'Attachments', value: 'Attachments' },
    { label: 'Browser', value: 'Browser' },
    { label: 'Operating System', value: 'Operating System' },
    { label: 'Device', value: 'Device' },
    { label: 'Reproducibility', value: 'Reproducibility' },
    { label: 'Frequency', value: 'Frequency' },
    { label: 'Customer Name', value: 'Customer Name' },
    { label: 'Customer ID', value: 'Customer ID' },
    { label: 'Test Case ID', value: 'Test Case ID' },
    { label: 'Related Issues', value: 'Related Issues' },
    { label: 'Log Files', value: 'Log Files' },
    { label: 'Error Messages', value: 'Error Messages' },
    { label: 'Screenshots', value: 'Screenshots' },
    { label: 'Videos', value: 'Videos' },
    { label: 'Code Snippet', value: 'Code Snippet' }, 
];

exports.AI_REPORT_VULNS = [
  { label: "Blind XSS", value: "Blind XSS" },
  { label: "Stored XSS", value: "Stored XSS" },
  { label: "Reflected XSS", value: "Reflected XSS" },
  { label: "DOM Based XSS", value: "DOM Based XSS" },
  { label: "SQL Injection", value: "SQL Injection" },
  { label: "Command Injection", value: "Command Injection" },
  { label: "Cross-Site Request Forgery (CSRF)", value: "Cross-Site Request Forgery (CSRF)" },
  { label: "Session Hijacking", value: "Session Hijacking" },
  { label: "Clickjacking", value: "Clickjacking" },
  { label: "Brute-Force Attack", value: "Brute-Force Attack" },
  { label: "Password Spraying", value: "Password Spraying" },
  { label: "Directory Traversal", value: "Directory Traversal" },
  { label: "File Inclusion", value: "File Inclusion" },
  { label: "Server-Side Request Forgery (SSRF)", value: "Server-Side Request Forgery (SSRF)" },
  { label: "Insecure Direct Object Reference", value: "Insecure Direct Object Reference" },
  { label: "Broken Access Control", value: "Broken Access Control" },
  { label: "Security Misconfiguration", value: "Security Misconfiguration" },
  { label: "Unvalidated Redirects and Forwards", value: "Unvalidated Redirects and Forwards" },
  { label: "Unrestricted Upload of Files", value: "Unrestricted Upload of Files" },
  { label: "XML External Entities (XXE)", value: "XML External Entities (XXE)" },
  { label: "Business Logic Errors", value: "Business Logic Errors" },
  { label: "Improper Input Validation", value: "Improper Input Validation" },
  { label: "Sensitive Information Exposure", value: "Sensitive Information Exposure" },
  { label: "DMARC misconfiguration", value: "DMARC misconfiguration" },
  { label: "SPF Misconfiguration", value: "SPF Misconfiguration" },
  { label: "BAC Horizontal Escalation", value: "BAC Horizontal Escalation" },
  { label: "BAC Vertical Escalation", value: "BAC Vertical Escalation" },
  { label: "Password Reset Token Expiration Issues", value: "Password Reset Token Expiration Issues" },
  { label: "2FA Change Session Invalidation Issues", value: "2FA Change Session Invalidation Issues" },
  { label: "2FA Bypass", value: "2FA Bypass" },
  { label: "Insufficient Session Management", value: "Insufficient Session Management" },
  { label: "Missing Function Level Access Control", value: "Missing Function Level Access Control" },
  { label: "Improper Authorization", value: "Improper Authorization" },
  { label: "Lack of Transport Layer Protection", value: "Lack of Transport Layer Protection" },
  { label: "Cryptographic Failures", value: "Cryptographic Failures" },
  { label: "Injection Flaws", value: "Injection Flaws" }, 
];

exports.VULNERABILITY_OPTIONS = {
  "Blind XSS": [
    { label: "Vulnerable Parameter", type: "input" },
    { label: "Payload Used", type: "input" },
    { label: "Callback URL", type: "input" },
  ],
  "Stored XSS": [
    { label: "Affected Input Field", type: "input" },
    { label: "Stored Payload", type: "input" },
  ],
  "Reflected XSS": [
    { label: "Vulnerable URL with Payload", type: "input" },
    { label: "HTTP Method", type: "dropdown", options: ["GET", "POST", "PUT", "DELETE"] },
  ],
  "DOM Based XSS": [
    { label: "Affected JavaScript Function", type: "input" },
    { label: "Triggering Event", type: "input" },
  ],
  "SQL Injection": [
    { label: "Vulnerable Query", type: "textarea" },
    { label: "Database Type", type: "dropdown", options: ["MySQL", "PostgreSQL", "SQL Server", "Oracle"] },
  ],
  "Command Injection": [
    { label: "Injected Command", type: "input" },
    { label: "Vulnerable Parameter", type: "input" },
  ],
  "Cross-Site Request Forgery (CSRF)": [
    { label: "Affected Endpoint", type: "input" },
    { label: "CSRF Token Status", type: "dropdown", options: ["Missing", "Incorrect Validation"] },
  ],
  "Session Hijacking": [
    { label: "Session Token", type: "input" },
    { label: "Session Cookie Details", type: "textarea" },
  ],
  "Clickjacking": [
    { label: "Vulnerable Page", type: "input" },
    { label: "Missing X-Frame-Options Header", type: "dropdown", options: ["Yes", "No"] },
  ],
  "Brute-Force Attack": [
    { label: "Targeted Endpoint", type: "input" },
    { label: "Authentication Mechanism", type: "dropdown", options: ["Username/Password", "OTP", "PIN"] },
  ],
  "Directory Traversal": [
    { label: "Vulnerable Path", type: "input" },
    { label: "Disclosed File", type: "input" },
  ],
  "File Inclusion": [
    { label: "Included File Path", type: "input" },
    { label: "Payload Used", type: "input" },
  ],
  "Server-Side Request Forgery (SSRF)": [
    { label: "Target URL", type: "input" },
    { label: "Response Data", type: "textarea" },
  ],
  "Insecure Direct Object Reference": [
    { label: "Affected Resource", type: "input" },
    { label: "Exploitable ID", type: "input" },
  ],
  "Broken Access Control": [
    { label: "Vulnerable Endpoint", type: "input" },
    { label: "Affected User Role", type: "input" },
  ],
  "Security Misconfiguration": [
    { label: "Misconfigured Setting", type: "input" },
    { label: "Impact", type: "textarea" },
  ],
  "Unvalidated Redirects and Forwards": [
    { label: "Vulnerable URL", type: "input" },
    { label: "Redirect Destination", type: "input" },
  ],
  "Unrestricted Upload of Files": [
    { label: "Upload Path", type: "input" },
    { label: "Accepted File Types", type: "textarea" },
  ],
  "XML External Entities (XXE)": [
    { label: "Vulnerable XML Input", type: "textarea" },
    { label: "Disclosed Data", type: "textarea" },
  ],
  "Business Logic Errors": [
    { label: "Error Description", type: "textarea" },
    { label: "Impact on Business", type: "textarea" },
  ],
  "Improper Input Validation": [
    { label: "Vulnerable Field", type: "input" },
    { label: "Improperly Accepted Input", type: "textarea" },
  ],
  "Sensitive Information Exposure": [
    { label: "Disclosed Information", type: "textarea" },
    { label: "Affected Endpoint", type: "input" },
  ],
  "DMARC misconfiguration": [
    { label: "DMARC Record", type: "textarea" },
    { label: "Impact", type: "textarea" },
  ],
  "SPF Misconfiguration": [
    { label: "SPF Record", type: "textarea" },
    { label: "Impact", type: "textarea" },
  ],
  "Password Reset Token Expiration Issues": [
    { label: "Token Expiration Time", type: "input" },
    { label: "Observed Issue", type: "textarea" },
  ],
  "Cryptographic Failures": [
    { label: "Weak Algorithm", type: "input" },
    { label: "Affected Data", type: "textarea" },
  ],
  "Injection Flaws": [
    { label: "Injected Payload", type: "input" },
    { label: "Affected Query/Script", type: "textarea" },
  ],
  "Password Spraying": [
    { label: "Targeted Endpoint", type: "input" },
    { label: "Authentication Mechanism", type: "dropdown", options: ["Username/Password", "OTP", "PIN"] },
  ],
  "BAC Horizontal Escalation": [
    { label: "Affected Resource", type: "input" },
    { label: "User Role A", type: "input" },
    { label: "User Role B", type: "input" },
  ],
  "BAC Vertical Escalation": [
    { label: "Vulnerable Endpoint", type: "input" },
    { label: "Affected Privilege Level", type: "textarea" },
  ],
  "2FA Change Session Invalidation Issues": [
    { label: "Observed Behavior", type: "textarea" },
    { label: "Expected Behavior", type: "textarea" },
  ],
  "2FA Bypass": [
    { label: "Short brief on the way you bypassed", type: "textarea" },
    { label: "Expected Behavior", type: "textarea" },
  ],
  "Insufficient Session Management": [
    { label: "Session Issue Details", type: "textarea" },
    { label: "Affected Endpoint", type: "input" },
  ],
  "Missing Function Level Access Control": [
    { label: "Vulnerable Functionality", type: "input" },
    { label: "Affected User Role", type: "input" },
  ],
  "Improper Authorization": [
    { label: "Vulnerable Endpoint", type: "input" },
    { label: "Improper Access Granted", type: "textarea" },
  ],
  "Lack of Transport Layer Protection": [
    { label: "Vulnerable Resource", type: "input" },
    { label: "Missing Protection Type", type: "dropdown", options: ["HTTPS", "SSL/TLS"] },
  ],
};

exports.TERMS_AND_CONDITIONS = `
<p>
  <strong>Effective Date:</strong> [January 7th, 2025]
  <br><br>
  Welcome to <strong>Mr.Dorker</strong> (“Application”). By accessing or using the Application, you agree to these <strong>Terms and Conditions</strong> (“Terms”). If you do not agree, you must discontinue use immediately.
  <br><br>
  <strong>1. Definitions</strong>
  <ul>
    <li><strong>Application:</strong> Refers to the bug bounty hunting tool, including all its features and services.</li>
    <li><strong>Owner:</strong> The creator and administrator of the Application, <strong>JAI NIRESH J</strong>.</li>
    <li><strong>User:</strong> Any individual or entity accessing or using the Application.</li>
    <li><strong>Content:</strong> Includes payloads, dorks, scripts, reports, or any other material provided through the Application.</li>
  </ul>
  <br>
  <strong>2. Intended Use</strong>
  <p>The Application is designed as a tool to assist users in ethical bug bounty hunting. By using the Application, you agree:</p>
  <ul>
    <li>To comply with all applicable laws and regulations.</li>
    <li>To use the Application only for lawful purposes, including authorized penetration testing and vulnerability hunting.</li>
  </ul>
  <br>
  <strong>3. Prohibited Activities</strong>
  <p>You are strictly prohibited from using the Application for:</p>
  <ul>
    <li>Any illegal activities, including unauthorized access to systems or networks.</li>
    <li>Actions that violate the <strong>Computer Fraud and Abuse Act (CFAA)</strong>, <strong>General Data Protection Regulation (GDPR)</strong>, or other applicable laws.</li>
    <li>Distributing malicious payloads or conducting activities outside authorized bug bounty programs.</li>
  </ul>
  <br>
  <strong>4. Limitation of Liability</strong>
  <ul>
    <li><strong>No Warranty:</strong> The Application is provided “as is” and “as available” without warranties of any kind, either express or implied.</li>
    <li><strong>Owner’s Liability:</strong> The Owner is not liable for any damages, legal consequences, or penalties arising from:
      <ul>
        <li>Unauthorized or illegal use of the Application.</li>
        <li>User actions performed using the Application's tools, content, or features.</li>
        <li>Failure to achieve desired results in any bug bounty program.</li>
      </ul>
    </li>
  </ul>
  <br>
  <strong>5. User Responsibility</strong>
  <p>Users agree to bear full responsibility for their actions while using the Application. The Owner is not liable for misuse or misinterpretation of the Application’s tools or data.</p>
  <br>
  <strong>6. Termination</strong>
  <p>The Owner reserves the right to suspend or terminate access to the Application at any time, especially in cases of misuse or violation of these Terms.</p>
  <br>
  <strong>7. Indemnification</strong>
  <p>Users agree to indemnify and hold the Owner harmless from any claims, damages, or liabilities arising from:</p>
  <ul>
    <li>Misuse of the Application.</li>
    <li>Violations of laws or regulations.</li>
    <li>Third-party claims related to the User’s activities.</li>
  </ul>
  <br>
  <strong>8. Governing Law</strong>
  <p>These Terms are governed by the laws of <strong>INDIA/TAMIL NADU</strong>. Any disputes arising from these Terms will be resolved exclusively in <strong>INDIAN Jursidiction</strong>.</p>
</p>
`;

exports.PRIVACY_POLICY = `
<p>
  <strong>Effective Date:</strong> January 7, 2025
  <br><br>
  Welcome to <strong>Mr.Dorker</strong> (“Application”). This Privacy Policy explains how we collect, use, and disclose your personal information when you use the Application.
  <br><br>
  <strong>1. Information Collection</strong>
  <ul>
    <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, and other details that you provide when using the Application.</li>
    <li><strong>Usage Data:</strong> We collect information about your usage of the Application, such as IP addresses, browser types, and interaction with features.</li>
  </ul>
  <br>
  <strong>2. Use of Information</strong>
  <ul>
    <li>We use your personal information to provide, improve, and personalize the Application.</li>
    <li>We may use your data to communicate with you about updates, features, and promotions related to the Application.</li>
    <li>We do not share or sell your personal information to third parties for marketing purposes.</li>
  </ul>
  <br>
  <strong>3. Information Sharing</strong>
  <p>We may share your information in the following cases:</p>
  <ul>
    <li><strong>Legal Compliance:</strong> We may disclose your information to comply with applicable laws or regulations.</li>
    <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in providing the Application.</li>
  </ul>
  <br>
  <strong>4. Data Security</strong>
  <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
  <br>
  <strong>5. User Rights</strong>
  <ul>
    <li>You may access, update, or delete your personal information at any time by contacting us.</li>
    <li>You have the right to opt out of communications or withdraw consent for the processing of your data.</li>
  </ul>
  <br>
  <strong>6. Changes to this Privacy Policy</strong>
  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
  <br>
  <strong>7. Contact Us</strong>
  <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us at <strong>JAI NIRESH J</strong>, [nireshpandian191@gmail.com].</p>
</p>
`;


exports.dorksExclusion = {
  "google": {
    "s3-files":"intext",
    "company-files":"intext"
  }
}

exports.aboutUsDescription = 
`
<b>MrDorker</b> is a project built out of a deep passion for both cybersecurity and software development engineering (SDE).<br />

It serves as a one-stop platform designed specifically to assist bug bounty hunters. <br /> MrDorker consolidates all the essential tools, resources, and support needed by security researchers and ethical hackers, enabling them to efficiently hunt for vulnerabilities and enhance their bug bounty efforts. <br /><br /> Whether you're looking for tools, guides, or a community, MrDorker provides a comprehensive suite of resources to streamline and empower the bug bounty hunting experience.`

exports.courses = [
  {
      id: 1,
      heading: 'Advanced Automated Broken Access Control Hunting',
      target: 'Intermediates',
      description: 'Master IDORS, BACs at ease, and never miss your next BAC/IDOR when you come across one.',
      content: [
          'Authentication`s evolution',
          'What are BAC`s ? An indepth dive',
          'What are IDOR`s ? An indepth dive',
          'How to look for programs, that might contain a potential BAC/IDOR ?',
          'How to manually hunt for BACs and IDORs',
          'How to Automate your hunt for BACs and IDORs',
      ],
      benefits: [
          'This is the time, where you get clear once and for all on BACs and IDORs',
          'Learn how to manually hunt for BAC`s and IDOR`s with unique strategies',
          'Learn how to Automate your manual hunting, to hunt at ease like a king !',
      ],
      video: 'https://www.example.com/videos/bug-bounty.mp4',
      images: ['/collage.png','/profilePic.png','/profilePic.png'],
      price: '4999',
      slashedPrice: '9000'
  },
  {
      id: 2,
      target: 'Beginners',
      heading: 'Getting Started into BugBounty',
      description: 'Are you an Absolute beginner, who has no knowledge on cybersecurity ? Still Interested in learning and to dive into Bug Bounty Hunting ! Then you this would be the perfect choice for you.',
      
      images: ['/collage.png','/profilePic.png','/profilePic.png'],
      content: [
          'Introduction to Bug Bounty',
          'In depth dive between various synonyms of bug bounty in Cybersecurity',
          'Get to know the Hands On tools, required for bug hunting',
          'Learn Reconaissance',
          'Learn about all the basic necessities, and standard vulnerabilities',
          'Learn Report writing',
          'Learn how to use AI for bug hunting.',
          'Learn about authentication related issues, and bypasses',
          'Common often found vulnerabilities out in the wild',
          'Public report dicussions.'
      ],
      benefits: [
          'Gain an indepth knowledge on how to bug hunt in a few days',
          'Get yourselves ready for real live website bug hunting',
          'Get free access to our premium tool for 2 months',
          'Learn how to hunt on real live websites',
          'Get enrolled on the referral scheme free of cost'
      ],
      video: 'https://www.example.com/videos/bac-automation.mp4',
      price: '2999',
      slashedPrice: '5000'
  },
];