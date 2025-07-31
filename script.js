function searchWord() {
  const word = document.getElementById("wordInput").value;
  const resultDiv = document.getElementById("result");

  if (!word) {
    resultDiv.innerHTML = "<p>Please enter a word.</p>";
    return;
  }

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => {
      const meaning = data[0]?.meanings[0]?.definitions[0]?.definition;
      resultDiv.innerHTML = `<p><strong>Meaning:</strong> ${meaning}</p>`;
    })
    .catch(err => {
      resultDiv.innerHTML = "<p>Word not found or API error.</p>";
    });
}
