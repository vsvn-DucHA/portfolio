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
    title: 'Vinfast VA (Virtual Assistant)',
    subtitle: 'Cloud-based Virtual Assistant for Vehicles',
    description:
      'Built cloud infrastructure supporting virtual assistant operations for Vinfast vehicles. Includes chatbot logic design and microservices architecture.',
    features: [
      'Chatbot conversation logic and flow design',
      'System monitoring and log analysis on Grafana',
      'Cloud-native microservices integration',
      'RESTful API development for virtual assistant',
      'User interaction interface design',
      'Docker and Kubernetes deployment',
    ],
    tech: ['Python (FastAPI)', 'Docker', 'Kubernetes', 'Grafana', 'Microservices'],
    images: ['Chatbot interface', 'Grafana monitoring', 'Cloud architecture'],
    challenges:
      'Building scalable cloud infrastructure for real-time voice assistant interactions in vehicles.',
    outcome:
      'Successfully deployed cloud platform supporting Vinfast virtual assistant operations.',
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

      <!-- CTA Button -->
      <div class="pt-6 border-t border-gray-200">
        <a href="${project.link}" class="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 cursor-pointer magnetic-btn">
          <span>View Live Project</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>
    </div>
  `

  // Show sheet
  document.getElementById('sheetOverlay').classList.add('active')
  document.getElementById('projectSheet').classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeSheet() {
  document.getElementById('sheetOverlay').classList.remove('active')
  document.getElementById('projectSheet').classList.remove('active')
  document.body.style.overflow = 'auto'
}

// Magnetic button effect
document.addEventListener('DOMContentLoaded', () => {
  const magneticButtons = document.querySelectorAll('.magnetic-btn')

  magneticButtons.forEach((button) => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
    })

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0)'
    })
  })
})

// Close sheet with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSheet()
  }
})
