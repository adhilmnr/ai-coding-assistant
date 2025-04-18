// File selection
  fileItems.forEach(item => {
    item.addEventListener('click', function() {
      const fileId = this.getAttribute('data-file-id');
      currentFileId = fileId;
      editorContent.textContent = files[fileId].content;
      currentFilename.textContent = files[fileId].name;
      
      // Enable editor tab
      editorTab.removeAttribute('disabled');
      
      // Switch to editor tab
      setActiveTab('editor');
    });
  });

  // Add new file button
  addFileButton.addEventListener('click', function() {
    const fileId = `file${fileCounter++}`;
    const fileName = `new_file_${fileCounter - 4}.js`;
    
    // Add to files object
    files[fileId] = {
      name: fileName,
      language: 'javascript',
      content: '// Add your code here\n\n'
    };
    
    // Create new file item element
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    fileItem.setAttribute('data-file-id', fileId);
    fileItem.innerHTML = `
      <div class="file-info">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span class="file-name">${fileName}</span>
        <span class="file-language">javascript</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    `;
    
    // Add event listener
    fileItem.addEventListener('click', function() {
      currentFileId = fileId;
      editorContent.textContent = files[fileId].content;
      currentFilename.textContent = files[fileId].name;
      
      // Enable editor tab
      editorTab.removeAttribute('disabled');
      
      // Switch to editor tab
      setActiveTab('editor');
    });
    
    // Add to DOM
    document.getElementById('file-list').appendChild(fileItem);
    
    // Select the new file
    currentFileId = fileId;
    editorContent.textContent = files[fileId].content;
    currentFilename.textContent = files[fileId].name;
    
    // Enable editor tab
    editorTab.removeAttribute('disabled');
    
    // Switch to editor tab
    setActiveTab('editor');
  });

  // Copy code button
  copyCodeButton.addEventListener('click', function() {
    navigator.clipboard.writeText(editorContent.textContent)
      .then(() => {
        // Show temporary success message
        const originalText = this.innerHTML;
        this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
        
        setTimeout(() => {
          this.innerHTML = originalText;
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  });

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
