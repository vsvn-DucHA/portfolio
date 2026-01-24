// Header scroll behavior
const navbar = document.getElementById('navbar')
const heroSection = document.getElementById('hero')

function handleScroll() {
  const heroHeight = heroSection.offsetHeight
  if (window.scrollY > heroHeight - 100) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

window.addEventListener('scroll', handleScroll)

// Scroll reveal animation
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed')
    }
  })
}, observerOptions)

document.querySelectorAll('.scroll-reveal').forEach((el) => {
  observer.observe(el)
})

// Acorn bounce animation
const style = document.createElement('style')
style.textContent = `
  @keyframes acornBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-8px) rotate(-5deg); }
    75% { transform: translateY(-4px) rotate(5deg); }
  }
`
document.head.appendChild(style)

// Sheet component functions - Updated with real CV projects
const projectData = {
  sourcebase: {
    title: 'Source Base Frontend',
    subtitle: 'Internal Tool for Frontend Standardization',
    description:
      'A comprehensive internal tool managing dependency, license, and security risks in the software supply chain. Standardizes frontend architecture across all company projects.',
    features: [
      'Frontend source base and project initialization scripts',
      'Standardized component wrapper from Shadcn UI',
      'Best practices documentation and guidelines',
      'CI/CD workflow optimization',
      'Centralized problem-solving platform',
      'OSS library declaration automation',
    ],
    tech: ['ReactJS', 'TanStack', 'Zustand', 'Shadcn UI', 'Tailwind CSS', 'Axios'],
    images: ['Project initialization', 'Component library', 'Documentation'],
    challenges:
      'Reducing technology selection and project initialization time while ensuring consistency across multiple teams.',
    outcome:
      'Reduced project setup time from 1 week to a few hours. Improved team collaboration with unified technology stack and best practices.',
    link: '#',
  },
  sbom: {
    title: 'SBOM Management System',
    subtitle: 'Software Supply Chain Security Platform',
    description:
      'Internal system managing software components, license compliance, and early detection of security vulnerabilities in the supply chain. Serves thousands of internal users.',
    features: [
      'Upgraded from Vue 2/Nuxt 2 to Vue 3/Nuxt 3',
      'Optimized large data display and tree graph rendering',
      'Flexible permission system design',
      'SBOM dashboard management',
      'Export/Import/Merge data functionality',
      'Automatic security vulnerability alerts from NVD, GitHub Advisory',
    ],
    tech: ['Python (Django)', 'VueJS', 'Nuxt 3', 'Celery', 'Redis', 'PostgreSQL', 'Vuetify'],
    images: ['Dashboard view', 'Tree graph visualization', 'Security alerts'],
    challenges:
      'Optimizing display for large datasets and rendering complex tree graph algorithms for version management.',
    outcome:
      'Widely adopted across multiple enterprise projects. Automated security vulnerability updates and alerts.',
    link: '#',
  },
  account: {
    title: 'Account Management System',
    subtitle: 'Technology Product Distribution Platform',
    description:
      'System managing technology product distribution, licensing, and customer support processes. Includes AI-powered report analysis for administrators.',
    features: [
      'Customer and license management system',
      'Sales dashboard and tracking',
      'Automated email/notification workflow',
      'AI-powered report analysis for admin',
      'Customer self-service portal',
      'Real-time notification system',
    ],
    tech: ['Python (Django)', 'NuxtJS', 'VueJS', 'Vuetify', 'Celery', 'RabbitMQ', 'PostgreSQL', 'Azure'],
    images: ['Customer dashboard', 'License management', 'Admin analytics'],
    challenges:
      'Automating manual processes while maintaining security and data integrity across customer workflows.',
    outcome:
      'Reduced manual request processing time to under 5 minutes. Improved support response speed by 40%.',
    link: '#',
  },
  recruitment: {
    title: 'Recruitment Manager',
    subtitle: 'End-to-End Hiring Management System',
    description:
      'Internal application managing the entire recruitment process from CV screening to offer, integrated with Microsoft Teams & Outlook via Azure Graph API.',
    features: [
      'Candidate lifecycle management',
      'Internal referral and centralized candidate sourcing',
      'Interview evaluation storage and management',
      'Automated scheduling and Teams/Email notifications',
      'Interview question bank management',
      'Integration with Microsoft Teams & Outlook',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'Ant Design', 'PostgreSQL', 'Azure Graph API'],
    images: ['Candidate pipeline', 'Interview scheduling', 'Teams integration'],
    challenges:
      'Ensuring seamless integration with Microsoft ecosystem while maintaining security and performance.',
    outcome:
      'Reduced manual processing time by 50-70% for HR and interviewers. Shortened average hiring time from 15-20 days to 7-12 days.',
    link: '#',
  },
  manhour: {
    title: 'Manhour Management',
    subtitle: 'Enterprise Work Hour Tracking Tool',
    description:
      'Work hour management tool following business requirements, supporting tracking and performance evaluation by period.',
    features: [
      'Business logic-based database design',
      'API development for frontend integration',
      'Quarterly/yearly manhour comparison charts',
      'Optimized data processing with periodic calculation caching',
      'Automated manhour statistics',
      'Warning alerts and period reporting',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Vue 3', 'Material UI', 'Pinia'],
    images: ['Manhour dashboard', 'Comparison charts', 'Reports'],
    challenges:
      'Processing large volumes of manhour data efficiently while maintaining real-time performance.',
    outcome:
      'Automated statistics and visualization with charts. Fast and accurate comparison between actual and estimated manhours.',
    link: '#',
  },
  vinfast: {
    title: 'SmartSheet Connector',
    subtitle: 'Jira-SmartSheet Bi-directional Integration',
    description:
      'Bi-directional synchronization system between Jira and SmartSheet, enabling real-time data sync of issues, status, and progress. The solution allows users to leverage SmartSheet for statistics, data visualization, charting, and project tracking based on live Jira data.',
    features: [
      'Bi-directional sync between Jira and SmartSheet',
      'Flexible field mapping configuration',
      'Incremental data synchronization',
      'Conflict resolution for concurrent changes',
      'Real-time progress tracking and visualization',
      'Dashboard and chart generation in SmartSheet',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'Ant Design', 'Zustand', 'PostgreSQL', 'Jira Graph API', 'SmartSheet Graph API'],
    images: ['Sync dashboard', 'Field mapping', 'SmartSheet visualization'],
    challenges:
      'Implementing flexible field mapping between Jira and SmartSheet, handling data conflicts from both sides, and ensuring stable incremental sync with large datasets.',
    outcome:
      'Enabled teams and non-technical stakeholders to track Jira project progress through visual dashboards on SmartSheet. Eliminated manual export/import operations and reduced data discrepancies. Supports stable sync with large datasets and easily extensible for future sync rules.',
    link: '#',
  },
  vinfastfe: {
    title: 'Vinfast VA Frontend',
    subtitle: 'Cloud-based Virtual Assistant Platform',
    description:
      'Virtual assistant platform utilizing cloud services for ASR, text-to-speech, and entity detection. Enables vehicle control of compatible devices and virtual assistant version updates.',
    features: [
      'UI/UX bug fixes and improvements',
      'Cloud-based ASR and text-to-speech integration',
      'Entity detection for voice commands',
      'Vehicle device control interface',
      'Virtual assistant version management',
      'Microservice architecture integration',
    ],
    tech: ['Python (FastAPI)', 'Vue.js', 'Nuxt.js', 'Vuex', 'Vuetify', 'Kong Gateway', 'Kafka', 'Microservices'],
    images: ['Voice assistant UI', 'Device control', 'Cloud integration'],
    challenges:
      'Integrating multiple cloud services for real-time voice processing while maintaining responsive UI and handling microservice communication.',
    outcome:
      'Delivered responsive virtual assistant interface with seamless cloud service integration and device control capabilities.',
    link: '#',
  },
  bidv: {
    title: 'BIDV Sentiment Analysis',
    subtitle: 'Customer Sentiment Analytics Platform',
    description:
      'Full-stack sentiment analysis system processing customer data provided by BIDV. Features comprehensive CRUD operations and analytical dashboards for understanding customer emotions and feedback.',
    features: [
      'User interface design and implementation',
      'File upload API development',
      'Authentication and authorization system',
      'Data processing and transformation',
      'Interactive analytics dashboard',
      'Real-time sentiment visualization',
    ],
    tech: ['Python (FastAPI)', 'Vue.js', 'Vuex', 'Dagster', 'BI Tools', 'Microservices'],
    images: ['Sentiment dashboard', 'Data upload', 'Analytics charts'],
    challenges:
      'Processing large volumes of customer data efficiently and creating intuitive visualizations for sentiment trends and patterns.',
    outcome:
      'Enabled BIDV to gain actionable insights from customer sentiment data through interactive dashboards and automated analysis.',
    link: '#',
  },
  acb: {
    title: 'ACB SDK',
    subtitle: 'Mobile Chat SDK Integration',
    description:
      'React Native SDK for chat functionality in ACB mobile application. Designed components based on Vinbase API responses with cross-platform WebSocket connectivity.',
    features: [
      'Cross-platform mobile chat interface',
      'WebSocket real-time communication',
      'Custom component design from API responses',
      'Rich messaging with Gifted Chat',
      'Responsive UI components',
      'Multi-platform compatibility',
    ],
    tech: ['React Native', 'Gifted Chat', 'React Native Elements', 'Font Awesome', 'WebSocket'],
    images: ['Chat interface', 'Message components', 'Mobile integration'],
    challenges:
      'Ensuring consistent WebSocket connectivity across different mobile platforms and designing flexible components adapting to various API response formats.',
    outcome:
      'Delivered robust chat SDK enabling seamless communication features within ACB mobile app across iOS and Android platforms.',
    link: '#',
  },
  vitadary: {
    title: 'Vitadary WebView',
    subtitle: 'Embedded Product Showcase Platform',
    description:
      'Full-stack webview solution embedded in Vitadary website. Integrated Salesforce synchronization running three times daily, featuring WebSocket connectivity and static product pages.',
    features: [
      'WebSocket real-time connectivity',
      'Salesforce API integration',
      'Scheduled data synchronization (3x daily)',
      'Static product showcase pages',
      'Responsive webview design',
      'Automated data sync with Apache scheduler',
    ],
    tech: ['Python (FastAPI)', 'Vue.js', 'Vuetify', 'Vue Formulate', 'Vuex', 'Apache Scheduler', 'Celery'],
    images: ['Product showcase', 'Salesforce sync', 'WebView integration'],
    challenges:
      'Maintaining reliable Salesforce integration with scheduled synchronization and ensuring WebSocket stability within webview constraints.',
    outcome:
      'Successfully deployed webview solution with automated Salesforce sync, providing Vitadary with real-time product information and enhanced customer engagement.',
    link: '#',
  },
}

function openSheet(projectId) {
  const project = projectData[projectId]
  if (!project) return

  const sheetContent = document.getElementById('sheetContent')
  sheetContent.innerHTML = `
    <div class="space-y-6">
      <!-- Header with gradient -->
      <div class="bg-gradient-to-br from-blue-500 to-purple-600 gradient-animate -mx-8 -mt-8 p-8 text-white">
        <h2 class="font-heading text-3xl font-bold mb-2 text-reveal">${project.title}</h2>
        <p class="text-blue-100 text-lg">${project.subtitle}</p>
      </div>

      <!-- Description -->
      <div class="prose max-w-none">
        <h3 class="font-heading text-xl font-semibold text-primary mb-3">Overview</h3>
        <p class="text-secondary leading-relaxed">${project.description}</p>
      </div>

      <!-- Features -->
      <div>
        <h3 class="font-heading text-xl font-semibold text-primary mb-4">Key Features</h3>
        <div class="grid gap-3">
          ${project.features
            .map(
              (feature, index) => `
            <div class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200" style="animation: bounceScale 0.5s ease ${index * 0.1}s">
              <svg class="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-secondary">${feature}</span>
            </div>
          `,
            )
            .join('')}
        </div>
      </div>

      <!-- Technologies -->
      <div>
        <h3 class="font-heading text-xl font-semibold text-primary mb-4">Technologies Used</h3>
        <div class="flex flex-wrap gap-2">
          ${project.tech
            .map(
              (tech, index) => `
            <span class="px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer" style="animation: bounceScale 0.5s ease ${index * 0.05}s">
              ${tech}
            </span>
          `,
            )
            .join('')}
        </div>
      </div>

      <!-- Challenges -->
      <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
        <h4 class="font-heading font-semibold text-orange-900 mb-2 flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          Technical Challenge
        </h4>
        <p class="text-orange-800">${project.challenges}</p>
      </div>

      <!-- Outcome -->
      <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
        <h4 class="font-heading font-semibold text-green-900 mb-2 flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Impact & Results
        </h4>
        <p class="text-green-800">${project.outcome}</p>
      </div>
    </div>
  `

  // Show sheet
  document.getElementById('sheetOverlay').classList.add('active')
  document.getElementById('projectSheet').classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeSheet(event) {
  if (event) {
    event.stopPropagation()
    event.preventDefault()
  }
  document.getElementById('sheetOverlay').classList.remove('active')
  document.getElementById('projectSheet').classList.remove('active')
  document.body.style.overflow = 'auto'
}

// Close sheet with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSheet()
  }
})
