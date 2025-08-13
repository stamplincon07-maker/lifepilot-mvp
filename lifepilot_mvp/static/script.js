document.getElementById('briefing-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = document.getElementById('payload').value;
  const res = await fetch('/briefing', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: payload
  });
  const data = await res.json();
  document.getElementById('output').textContent = JSON.stringify(data, null, 2);
});
