// Helper function to format code blocks
  function formatCodeBlock(code, language) {
    return `<div class="code-block">
      <div class="code-header">
        <span>${language}</span>
        <button class="copy-button" onclick="navigator.clipboard.writeText(\`${code.replace(/`/g, '\\`')}\`)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
      <pre>${code}</pre>
    </div>`;
  }

  // Helper function to render message content
  function renderMessageContent(content) {
    if (!content.includes('```')) {
      return content.split('\n').map(line => line || ' ').join('<br>');
    }
    
    const parts = content.split('```');
    let html = parts[0];
    
    for (let i = 1; i < parts.length; i++) {
      if (i % 2 === 1) { // Code block
        const codeBlock = parts[i];
        const firstNewline = codeBlock.indexOf('\n');
        const language = firstNewline > 0 ? codeBlock.slice(0, firstNewline).trim() : '';
        const code = firstNewline > 0 ? codeBlock.slice(firstNewline + 1) : codeBlock;
        
        html += formatCodeBlock(code, language);
      } else { // Text
        html += parts[i].split('\n').map(line => line || ' ').join('<br>');
      }
    }
    
    return html;
  }

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
