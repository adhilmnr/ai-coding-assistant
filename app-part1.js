// Chat Bot functionality
document.addEventListener('DOMContentLoaded', function() {
  // DOM elements
  const suggestionsToggle = document.getElementById('suggestions-toggle');
  const suggestionsChips = document.getElementById('suggestions-chips');
  const suggestionsChevron = document.getElementById('suggestions-chevron');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const messagesContainer = document.getElementById('messages');
  
  let isTyping = false;

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
