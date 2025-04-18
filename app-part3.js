// Add user message to chat
  function addUserMessage(text) {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user';
    messageDiv.innerHTML = `
      <div class="message-bubble">
        <div class="message-header">
          <span class="font-semibold">You</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="message-content">
          ${text}
        </div>
        <div class="message-timestamp">
          ${timestamp}
        </div>
      </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Add bot message to chat
  function addBotMessage(text) {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot';
    messageDiv.innerHTML = `
      <div class="message-bubble">
        <div class="message-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="10" r="3"></circle>
            <path d="M7 16.3c0-1 2.5-1.9 5-1.9s5 .9 5 1.9"></path>
          </svg>
          <span class="font-semibold">Coding Assistant</span>
        </div>
        <div class="message-content">
          ${renderMessageContent(text)}
        </div>
        <div class="message-timestamp">
          ${timestamp}
        </div>
      </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Show typing indicator
  function showTypingIndicator() {
    isTyping = true;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
      <div class="typing-bubble">
        <div class="typing-dots">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // For demo purposes, hide after a few seconds
    setTimeout(() => {
      hideTypingIndicator();
    }, 1500);
  }

  // Hide typing indicator
  function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
    isTyping = false;
  }

  // Analyze button
  analyzeButton.addEventListener('click', function() {
    addBotMessage(`### Code Analysis for ${files[currentFileId].name}\n\n#### Suggestions:\n- 🟠 Consider adding proper documentation/comments to your code.\n- 🔵 You could improve error handling in your asynchronous operations.\n\n#### Recommended Improvements:\n- Add JSDoc comments for better code documentation\n- Use try/catch blocks for better error handling\n\nI've prepared an improved version of your code. Would you like me to implement these changes?`);
    
    // Switch to chat tab to show the analysis
    setActiveTab('chat');
  });

  // Chat form submission
  chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const message = chatInput.value.trim();
    if (message === '' || isTyping) return;
    
    // Add user message
    addUserMessage(message);
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate bot response after delay
    setTimeout(() => {
      if (message.toLowerCase().includes('react')) {
        addBotMessage("Here's a React functional component with hooks:\n\n```jsx\nimport React, { useState, useEffect } from 'react';\n\nfunction DataFetcher({ url, render }) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        setLoading(true);\n        const response = await fetch(url);\n        \n        if (!response.ok) {\n          throw new Error(`HTTP error! Status: ${response.status}`);\n        }\n        \n        const result = await response.json();\n        setData(result);\n        setError(null);\n      } catch (err) {\n        setError(`Failed to fetch data: ${err.message}`);\n        setData(null);\n      } finally {\n        setLoading(false);\n      }\n    };\n\n    fetchData();\n  }, [url]);\n\n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error}</div>;\n  return render(data);\n};\n\nexport default DataFetcher;\n```\n\nThis component implements a reusable data fetching pattern using React Hooks.");
      } else if (message.toLowerCase().includes('python') || message.toLowerCase().includes('flask')) {
        addBotMessage("Here's a Python Flask API with authentication:\n\n```python\nfrom flask import Flask, request, jsonify\nfrom flask_jwt_extended import JWTManager, jwt_required, create_access_token\nfrom werkzeug.security import generate_password_hash, check_password_hash\nfrom datetime import timedelta\nimport os\n\napp = Flask(__name__)\n\n# Configuration\napp.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'dev-secret-key')\napp.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)\njwt = JWTManager(app)\n\n# Mock database\nusers_db = {}\n\n@app.route('/api/register', methods=['POST'])\ndef register():\n    data = request.get_json()\n    \n    if not data or not data.get('username') or not data.get('password'):\n        return jsonify({'error': 'Username and password are required'}), 400\n        \n    username = data['username']\n    \n    if username in users_db:\n        return jsonify({'error': 'User already exists'}), 409\n        \n    hashed_password = generate_password_hash(data['password'])\n    \n    users_db[username] = {\n        'username': username,\n        'password': hashed_password\n    }\n    \n    return jsonify({'message': 'User registered successfully'}), 201\n```");
      } else if (message.toLowerCase().includes('node') || message.toLowerCase().includes('express')) {
        addBotMessage("Here's a Node.js Express API with proper error handling:\n\n```javascript\nconst express = require('express');\nconst cors = require('cors');\nconst helmet = require('helmet');\n\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\n// Middleware\napp.use(helmet()); // Security headers\napp.use(cors()); // Enable CORS\napp.use(express.json()); // Parse JSON bodies\n\n// Error handler middleware\nconst errorHandler = (err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).json({\n    success: false,\n    error: process.env.NODE_ENV === 'production' \n      ? 'Server Error' \n      : err.message\n  });\n};\n\n// Routes\napp.get('/api/status', (req, res) => {\n  res.json({ status: 'API is running' });\n});\n```");
      } else {
        addBotMessage("I'd be happy to help you with that. Could you provide more details about what you're looking for? I can generate code in various languages including JavaScript, Python, Java, and many more.");
      }
    }, 1500);
  });
  
});
