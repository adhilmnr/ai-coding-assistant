// UI Components
// This file contains all UI-related components and utilities

// Create icons object from Lucide
const { createIcons, icons } = lucide;

// Project types with their associated languages
const PROJECT_TYPES = [
  { 
    id: 'web', 
    name: 'Web Development',
    icon: 'globe',
    languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Vue', 'Angular', 'Svelte']
  },
  { 
    id: 'mobile', 
    name: 'Mobile Development',
    icon: 'smartphone',
    languages: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java']
  },
  { 
    id: 'backend', 
    name: 'Backend Development',
    icon: 'server',
    languages: ['Node.js', 'Python', 'Java', 'C#', 'Go', 'Ruby', 'PHP']
  },
  { 
    id: 'data', 
    name: 'Data Science',
    icon: 'bar-chart',
    languages: ['Python', 'R', 'SQL', 'Julia']
  },
  { 
    id: 'game', 
    name: 'Game Development',
    icon: 'gamepad-2',
    languages: ['Unity/C#', 'Unreal/C++', 'JavaScript', 'Python', 'Godot']
  },
  { 
    id: 'desktop', 
    name: 'Desktop Applications',
    icon: 'monitor',
    languages: ['Electron', 'C#/.NET', 'Java', 'Python', 'C++']
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    icon: 'cloud',
    languages: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'Azure', 'GCP']
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    icon: 'link',
    languages: ['Solidity', 'Rust', 'Go', 'JavaScript']
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: 'brain',
    languages: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn']
  }
];

// Header component
function Header({ activeProjectType, setActiveProjectType }) {
  const [showProjectMenu, setShowProjectMenu] = React.useState(false);
  
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo">
          <i data-lucide="code" className="lucide lucide-code"></i>
          <h1>CodeGenius</h1>
        </div>
        
        <div className="project-type-selector">
          <button 
            className="project-dropdown-btn"
            onClick={() => setShowProjectMenu(!showProjectMenu)}
          >
            <i data-lucide={PROJECT_TYPES.find(p => p.id === activeProjectType)?.icon || 'code'} className={`lucide lucide-${PROJECT_TYPES.find(p => p.id === activeProjectType)?.icon || 'code'}`}></i>
            <span>{PROJECT_TYPES.find(p => p.id === activeProjectType)?.name || 'All Projects'}</span>
            <i data-lucide="chevron-down" className="lucide lucide-chevron-down"></i>
          </button>
          
          {showProjectMenu && (
            <div className="project-dropdown-menu">
              {PROJECT_TYPES.map(project => (
                <div 
                  key={project.id}
                  className={`project-menu-item ${activeProjectType === project.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveProjectType(project.id);
                    setShowProjectMenu(false);
                  }}
                >
                  <i data-lucide={project.icon} className={`lucide lucide-${project.icon}`}></i>
                  <span>{project.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <i data-lucide="code" className="lucide lucide-code"></i>
          <span>CodeGenius AI Assistant</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i data-lucide="github" className="lucide lucide-github"></i>
            GitHub
          </a>
          <a href="#" className="footer-link">
            <i data-lucide="book-open" className="lucide lucide-book-open"></i>
            Documentation
          </a>
          <a href="#" className="footer-link">
            <i data-lucide="help-circle" className="lucide lucide-help-circle"></i>
            Help
          </a>
        </div>
      </div>
    </footer>
  );
}

// Loading/Typing indicator
function TypingIndicator() {
  return (
    <div className="typing-indicator">
      <div className="typing-bubble">
        <div className="typing-dots">
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
        </div>
      </div>
    </div>
  );
}

// Query tags component
function QueryTags({ activeTag, setActiveTag }) {
  const tags = [
    { id: 'all', name: 'All', icon: 'layers' },
    { id: 'code', name: 'Code Generation', icon: 'code' },
    { id: 'explain', name: 'Explain Code', icon: 'book-open' },
    { id: 'debug', name: 'Debug', icon: 'bug' },
    { id: 'optimize', name: 'Optimize', icon: 'zap' }
  ];
  
  return (
    <div className="query-tags">
      {tags.map(tag => (
        <button
          key={tag.id}
          className={`query-tag ${activeTag === tag.id ? 'active' : ''}`}
          onClick={() => setActiveTag(tag.id)}
        >
          <i data-lucide={tag.icon} className={`lucide lucide-${tag.icon}`}></i>
          {tag.name}
        </button>
      ))}
    </div>
  );
}

// Get suggested queries based on active project type and tag
function getSuggestedQueries(projectType, tag) {
  const suggestions = {
    web: {
      code: [
        "Create a responsive navbar with dropdown menus",
        "Build a React form with validation",
        "Create a dark mode toggle with CSS and JavaScript",
        "Generate an API fetch wrapper with error handling"
      ],
      explain: [
        "Explain how React hooks work",
        "What are JavaScript closures?",
        "Explain CSS Grid vs Flexbox",
        "How does the JavaScript event loop work?"
      ],
      debug: [
        "Debug my React useEffect infinite loop",
        "Fix CORS issues in my fetch request",
        "Why is my state not updating in React?",
        "Debug z-index issues in my CSS"
      ],
      optimize: [
        "Optimize my React component rendering",
        "How to lazy load images in a web app",
        "Improve my website performance score",
        "Reduce bundle size in my webpack project"
      ]
    },
    mobile: {
      code: [
        "Create a bottom tab navigator in React Native",
        "Build a login screen in Flutter",
        "Generate a custom UI component in SwiftUI",
        "Create a list with pull-to-refresh in Kotlin"
      ],
      explain: [
        "Explain React Native lifecycle methods",
        "How does Flutter state management work?",
        "What are Swift protocols?",
        "Explain Kotlin coroutines"
      ],
      debug: [
        "Debug layout issues in React Native",
        "Fix memory leaks in my Android app",
        "Why is my Flutter animation choppy?",
        "Debug navigation stack issues in iOS"
      ],
      optimize: [
        "Optimize React Native app startup time",
        "Reduce APK size for my Android app",
        "Improve Flutter performance",
        "Optimize battery usage in my mobile app"
      ]
    },
    backend: {
      code: [
        "Create a RESTful API with Express.js",
        "Build a Django model with relationships",
        "Write a GraphQL schema with resolvers",
        "Create a PostgreSQL database migration"
      ],
      explain: [
        "Explain Node.js event emitters",
        "How does Django ORM work?",
        "What is dependency injection in Spring?",
        "Explain database indexing strategies"
      ],
      debug: [
        "Debug memory leaks in my Node.js app",
        "Fix database connection pooling issues",
        "Why is my API request timing out?",
        "Debug authentication middleware problems"
      ],
      optimize: [
        "Optimize database queries in my app",
        "How to implement caching for my API",
        "Scale my backend service horizontally",
        "Improve throughput for my message queue"
      ]
    },
    data: {
      code: [
        "Create a data cleaning pipeline with pandas",
        "Build a machine learning model with scikit-learn",
        "Write a SQL query to analyze user behavior",
        "Generate a visualization with matplotlib"
      ],
      explain: [
        "Explain gradient descent algorithm",
        "How does TF-IDF work?",
        "What is the difference between SQL and NoSQL?",
        "Explain random forests vs gradient boosting"
      ],
      debug: [
        "Debug out-of-memory issues in my pandas script",
        "Fix dimensionality issues in my ML model",
        "Why is my data pipeline slow?",
        "Debug overfitting in my neural network"
      ],
      optimize: [
        "Optimize pandas operations for large datasets",
        "How to parallelize data processing",
        "Improve training time for my ML model",
        "Reduce memory usage in my data pipeline"
      ]
    },
    game: {
      code: [
        "Create a player controller in Unity",
        "Build a collision detection system in C++",
        "Generate a procedural level generator",
        "Create an entity component system"
      ],
      explain: [
        "Explain game physics engines",
        "How does pathfinding with A* work?",
        "What is the game loop?",
        "Explain sprite batching in 2D games"
      ],
      debug: [
        "Debug collision detection issues",
        "Fix frame rate drops in my game",
        "Why is my character falling through the floor?",
        "Debug memory leaks in my game engine"
      ],
      optimize: [
        "Optimize rendering for my 3D game",
        "How to implement level of detail (LOD)",
        "Improve load times for game assets",
        "Reduce memory usage in my Unity game"
      ]
    },
    desktop: {
      code: [
        "Create an Electron app with IPC communication",
        "Build a WPF user interface with MVVM",
        "Generate a PyQt desktop app",
        "Create a Java Swing application"
      ],
      explain: [
        "Explain Electron's main and renderer processes",
        "How does WPF data binding work?",
        "What is the Qt signal-slot mechanism?",
        "Explain JavaFX property binding"
      ],
      debug: [
        "Debug memory issues in my Electron app",
        "Fix UI rendering problems in WPF",
        "Why is my PyQt app freezing on startup?",
        "Debug thread synchronization in Java Swing"
      ],
      optimize: [
        "Optimize startup time for my desktop app",
        "How to reduce executable size",
        "Improve UI responsiveness in my application",
        "Optimize resource usage in my C# app"
      ]
    },
    devops: {
      code: [
        "Create a Docker compose setup for microservices",
        "Build a CI/CD pipeline with GitHub Actions",
        "Generate Terraform scripts for AWS infrastructure",
        "Create Kubernetes deployment manifests"
      ],
      explain: [
        "Explain container orchestration with Kubernetes",
        "How does infrastructure as code work?",
        "What is the difference between CI and CD?",
        "Explain cloud auto-scaling strategies"
      ],
      debug: [
        "Debug Docker networking issues",
        "Fix failed Terraform deployments",
        "Why is my Kubernetes pod crashing?",
        "Debug Jenkins pipeline failures"
      ],
      optimize: [
        "Optimize Docker image size",
        "How to reduce cloud infrastructure costs",
        "Improve deployment time in my CI/CD pipeline",
        "Optimize Kubernetes resource allocation"
      ]
    },
    blockchain: {
      code: [
        "Create a smart contract for token exchange",
        "Build a decentralized app frontend",
        "Generate Solidity code for NFT minting",
        "Create a blockchain wallet integration"
      ],
      explain: [
        "Explain blockchain consensus mechanisms",
        "How do smart contracts work?",
        "What are gas fees in Ethereum?",
        "Explain public vs private blockchains"
      ],
      debug: [
        "Debug smart contract execution issues",
        "Fix gas optimization problems",
        "Why is my transaction failing on-chain?",
        "Debug web3 connection issues"
      ],
      optimize: [
        "Optimize smart contract gas usage",
        "How to reduce costs for blockchain operations",
        "Improve transaction throughput",
        "Optimize storage patterns in Solidity"
      ]
    },
    ai: {
      code: [
        "Create a neural network with TensorFlow",
        "Build a natural language processing pipeline",
        "Generate a computer vision model with PyTorch",
        "Create a recommendation system"
      ],
      explain: [
        "Explain transformers architecture",
        "How does backpropagation work?",
        "What is transfer learning?",
        "Explain recurrent vs convolutional neural networks"
      ],
      debug: [
        "Debug vanishing gradient problems",
        "Fix CUDA memory issues in PyTorch",
        "Why is my model not converging?",
        "Debug TensorFlow graph execution"
      ],
      optimize: [
        "Optimize inference speed for my neural network",
        "How to quantize models for edge deployment",
        "Improve training efficiency with mixed precision",
        "Optimize batch size for model training"
      ]
    }
  };
  
  // Default suggestions for any project type
  const defaultSuggestions = {
    code: [
      "Create a function to validate input data",
      "Build a utility class for common operations",
      "Generate code to parse JSON data",
      "Create a logging system"
    ],
    explain: [
      "Explain object-oriented programming principles",
      "How does version control work?",
      "What is test-driven development?",
      "Explain RESTful API design principles"
    ],
    debug: [
      "Debug performance bottlenecks in my code",
      "Fix memory leaks",
      "Why is my function returning unexpected results?",
      "Debug concurrency issues"
    ],
    optimize: [
      "Optimize algorithm complexity",
      "How to improve code readability",
      "Reduce redundancy in my codebase",
      "Optimize resource usage"
    ]
  };
  
  // If tag is 'all', return a mix of suggestions
  if (tag === 'all') {
    const allSuggestions = [];
    const categories = ['code', 'explain', 'debug', 'optimize'];
    categories.forEach(cat => {
      const projectSuggestions = suggestions[projectType]?.[cat] || defaultSuggestions[cat];
      allSuggestions.push(projectSuggestions[0]); // Take the first suggestion from each category
    });
    return allSuggestions;
  }
  
  // Return project-specific suggestions if available, otherwise default suggestions
  return suggestions[projectType]?.[tag] || defaultSuggestions[tag];
}
