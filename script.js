const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

textInput.addEventListener("input", () => {
  // Character count
  const chars = textInput.value.length;
  charCount.textContent = chars;

  // Word count (ignores extra spaces)
  const words = textInput.value.trim().split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = words.length;
});
