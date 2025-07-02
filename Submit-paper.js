
  // ➕ JS FUNCTION TO ADD MORE AUTHOR FIELDS (UP TO 7 MAX)
  let authorCount = 1;
  function addAuthorFields() {
    if (authorCount >= 7) return;
    const container = document.getElementById('authorFields');
    const row = document.createElement('div');
    row.className = 'row g-3 mt-2';
    row.innerHTML = `
      <div class="col-md-3"><input type="text" class="form-control" placeholder="Name" required></div>
      <div class="col-md-3"><input type="email" class="form-control" placeholder="Email" required></div>
      <div class="col-md-3"><input type="text" class="form-control" placeholder="Mobile" required></div>
      <div class="col-md-3"><input type="text" class="form-control" placeholder="Institute" required></div>
    `;
    container.appendChild(row);
    authorCount++;
    document.getElementById('authorCount').innerText = authorCount;
  }
