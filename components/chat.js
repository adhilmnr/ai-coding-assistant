// Chat Components
// This file contains messaging and interaction components

// Message component - Renders a single message bubble
function Message({ message, copyToClipboard }) {
  const messageRef = React.useRef(null);
  
  // Apply syntax highlighting after component mounts
  React.useEffect(() => {
    if (messageRef.current) {
      // Find all code blocks and apply highlighting
      const codeBlocks = messageRef.current.querySelectorAll('pre code');
      codeBlocks.forEach(block => {
        hljs.highlightElement(block);
      });
    }
  }, [message]);

  // Format code blocks with syntax highlighting
  const renderMessageContent = (content) => {
    if (!content.includes('```')) {
      return content.split('\n').map((line, i) => <div key={i}>{line || ' '}</div>);
    }
    
    const parts = [];
    let currentPart = '';
    let inCodeBlock = false;
    let language = '';
    
    content.split('\n').forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          // End of code block
          parts.push({
            type: 'code',
            content: currentPart,
            language
          });
          currentPart = '';
          inCodeBlock = false;
        } else {
          // Start of code block
          if (currentPart) {
            parts.push({
              type: 'text',
              content: currentPart
            });
          }
          language = line.slice(3).trim();
          currentPart = '';
          inCodeBlock = true;
        }
      } else {
        currentPart += (currentPart ? '\n' : '') + line;
      }
    });
    
    // Add any remaining text
    if (currentPart) {
      parts.push({
        type: inCodeBlock ? 'code' : 'text',
        content: currentPart,
        language: inCodeBlock ? language : null
      });
    }
    
    return parts.map((part, i) => {
      if (part.type === 'text') {
        return (
          <div key={i}>
            {part.content.split('\n').map((line, j) => <div key={j}>{line || ' '}</div>)}
          </div>
        );
      } else {
        // Code block
        const lang = part.language || 'plaintext';
        return (
          <div key={i} className="code-block">
            <div className="code-header">
              <div className="code-lang-label">
                <i data-lucide="terminal" className="lucide lucide-terminal"></i>
                <span>{lang}</span>
              </div>
              <div className="code-actions">
                <button 
                  className="code-action-btn"
                  onClick={() => copyToClipboard(part.content)}
                  title="Copy code"
                >
                  <i data-lucide="copy" className="lucide lucide-copy"></i>
                </button>
              </div>
            </div>
            <pre>
              <code className={lang}>
                {part.content}
              </code>
            </pre>
          </div>
        );
      }
    });
  };

  return (
    <div className={`message ${message.role}`}>
      <div className="message-bubble">
        {message.role === 'bot' && (
          <div className="message-header">
            <i data-lucide="bot" className="lucide lucide-bot"></i>
            <span className="font-semibold">CodeGenius</span>
          </div>
        )}
        {message.role === 'user' && (
          <div className="message-header">
            <span className="font-semibold">You</span>
            <i data-lucide="user" className="lucide lucide-user"></i>
          </div>
        )}
        <div className="message-content" ref={messageRef}>
          {renderMessageContent(message.content)}
        </div>
        <div className="message-timestamp">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
}

// Suggestions dropdown component
function SuggestionsDropdown({ suggestions, onClick, onClose }) {
  // Group suggestions by category for structured display
  const categories = [
    { id: 'code', name: 'Code Generation', icon: 'code' },
    { id: 'explain', name: 'Explanations', icon: 'book-open' },
    { id: 'debug', name: 'Debugging', icon: 'bug' },
    { id: 'optimize', name: 'Optimization', icon: 'zap' }
  ];
  
  const groupedSuggestions = {};
  categories.forEach(cat => {
    groupedSuggestions[cat.id] = suggestions.filter(s => s.category === cat.id);
  });
  
  return (
    <div className="suggestions-dropdown">
      {categories.map(category => (
        <div key={category.id} className="suggestion-category">
          <div className="suggestion-category-title">
            <i data-lucide={category.icon} className={`lucide lucide-${category.icon}`}></i>
            {category.name}
          </div>
          <div className="suggestion-items">
            {suggestions
              .filter(s => s.category === category.id)
              .map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => {
                    onClick(suggestion.text);
                    onClose();
                  }}
                >
                  {suggestion.text}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Input area component
function InputArea({ 
  input, 
  setInput, 
  handleSubmit, 
  isTyping, 
  activeProjectType,
  activeQueryTag,
  setActiveQueryTag
}) {
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const inputRef = React.useRef(null);
  
  // Auto-resize textarea based on content
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [input]);
  
  // Prepare suggestions based on active project and query tag
  const rawSuggestions = getSuggestedQueries(activeProjectType, activeQueryTag);
  const suggestions = rawSuggestions.map(text => ({
    text,
    category: activeQueryTag === 'all' 
      ? ['code', 'explain', 'debug', 'optimize'][Math.floor(Math.random() * 4)] 
      : activeQueryTag
  }));
  
  // Handle keyboard shortcuts
  const handleKeyDown = (e) => {
    // Submit on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        handleSubmit(e);
      }
    }
  };
  
  return (
    <div className="input-area">
      <QueryTags 
        activeTag={activeQueryTag}
        setActiveTag={setActiveQueryTag}
      />
      
      <form onSubmit={handleSubmit} className="input-form">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Ask me about ${PROJECT_TYPES.find(p => p.id === activeProjectType)?.name || 'coding'} or type / for suggestions...`}
          className="input-field"
          rows={1}
        />
        
        <div className="input-actions">
          <button
            type="button"
            className="suggestions-btn"
            onClick={() => setShowSuggestions(!showSuggestions)}
            title="Show suggestions"
          >
            <i data-lucide="list" className="lucide lucide-list"></i>
          </button>
          
          <button
            type="submit"
            disabled={input.trim() === '' || isTyping}
            className="send-button"
            title="Send message"
          >
            <i data-lucide="send" className="lucide lucide-send"></i>
          </button>
        </div>
        
        {showSuggestions && (
          <SuggestionsDropdown 
            suggestions={suggestions}
            onClick={(text) => setInput(text)}
            onClose={() => setShowSuggestions(false)}
          />
        )}
      </form>
    </div>
  );
}

// Messages container component
function MessagesContainer({ messages, copyToClipboard, isTyping }) {
  const messagesEndRef = React.useRef(null);
  
  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  
  return (
    <div className="messages">
      {messages.map((message, index) => (
        <Message 
          key={index} 
          message={message} 
          copyToClipboard={copyToClipboard}
        />
      ))}
      
      {isTyping && <TypingIndicator />}
      
      <div ref={messagesEndRef} />
    </div>
  );
}
