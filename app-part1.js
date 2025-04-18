// Demo JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // DOM elements
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const chatTab = document.getElementById('chat-tab');
  const filesTab = document.getElementById('files-tab');
  const editorTab = document.getElementById('editor-tab');
  const chatPanel = document.getElementById('chat-panel');
  const filesPanel = document.getElementById('files-panel');
  const editorPanel = document.getElementById('editor-panel');
  const suggestionsToggle = document.getElementById('suggestions-toggle');
  const suggestionsChips = document.getElementById('suggestions-chips');
  const suggestionsChevron = document.getElementById('suggestions-chevron');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const messagesContainer = document.getElementById('messages');
  const fileItems = document.querySelectorAll('.file-item');
  const analyzeButton = document.getElementById('analyze-button');
  const copyCodeButton = document.getElementById('copy-code-button');
  const editorContent = document.getElementById('editor-content');
  const currentFilename = document.getElementById('current-filename');
  const addFileButton = document.getElementById('add-file-button');
  
  // Files data
  const files = {
    'file1': {
      name: 'App.js',
      language: 'jsx',
      content: 'import React from "react";\n\nfunction App() {\n  return (\n    <div className="App">\n      <h1>Hello World</h1>\n    </div>\n  );\n}\n\nexport default App;'
    },
    'file2': {
      name: 'styles.css',
      language: 'css',
      content: '.App {\n  text-align: center;\n  font-family: sans-serif;\n}\n\nh1 {\n  color: #333;\n}'
    },
    'file3': {
      name: 'api.js',
      language: 'javascript',
      content: 'const API_URL = "https://api.example.com";\n\nasync function fetchData() {\n  const response = await fetch(`${API_URL}/data`);\n  return response.json();\n}\n\nexport { fetchData };'
    }
  };
  
  let currentFileId = 'file1';
  let isTyping = false;
  let fileCounter = 4; // For new files

  // Theme toggle
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    
    // Update theme toggle icon
    if (body.classList.contains('dark-theme')) {
      themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    } else {
      themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }
  });

  // Tab switching
  chatTab.addEventListener('click', function() {
    setActiveTab('chat');
  });
  
  filesTab.addEventListener('click', function() {
    setActiveTab('files');
  });
  
  editorTab.addEventListener('click', function() {
    if (!editorTab.hasAttribute('disabled')) {
      setActiveTab('editor');
    }
  });
  
  function setActiveTab(tab) {
    // Update tab buttons
    chatTab.classList.toggle('active', tab === 'chat');
    filesTab.classList.toggle('active', tab === 'files');
    editorTab.classList.toggle('active', tab === 'editor');
    
    // Show/hide panels
    chatPanel.style.display = tab === 'chat' ? 'flex' : 'none';
    filesPanel.style.display = tab === 'files' ? 'block' : 'none';
    editorPanel.style.display = tab === 'editor' ? 'flex' : 'none';
  }

  // Suggestions toggle
  suggestionsToggle.addEventListener('click', function() {
    const isVisible = suggestionsChips.style.display === 'flex';
    suggestionsChips.style.display = isVisible ? 'none' : 'flex';
    suggestionsChevron.style.transform = isVisible ? '' : 'rotate(180deg)';
  });
  
  // Suggestion chips
  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', function() {
      chatInput.value = this.textContent;
      suggestionsChips.style.display = 'none';
      suggestionsChevron.style.transform = '';
      chatInput.focus();
    });
  });
