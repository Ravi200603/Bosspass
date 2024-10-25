const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const websiteInput = document.getElementById('website');
const btn = document.querySelector('.btn');
const tableBody = document.querySelector('table tbody');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    const website = websiteInput.value;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${website}</td>
        <td>${username}</td>
        <td>${password}</td>
        <td>
            <button class="copy-btn" title="Copy Password">
                <img src="copy.jpg" alt="Copy" style="width:20px; height:20px; border:none; cursor:pointer;">
            </button>
            <button class="delete-btn" title="Delete">
                <img src="redbin.png" alt="Delete" style="width:20px; height:20px; border:none; cursor:pointer;">
            </button>
        </td>
    `;

    tableBody.appendChild(row);
    usernameInput.value = '';
    passwordInput.value = '';
    websiteInput.value = '';
});

// Function to create the dialog box
function createDialog(message) {
    const dialog = document.createElement('div');
    dialog.classList.add('dialog');
    dialog.textContent = message;

    // Append dialog to the body
    document.body.appendChild(dialog);

    // Remove dialog after 2 seconds
    setTimeout(() => {
        dialog.remove();
    }, 2000);
}

// Update the copy button click handler
document.addEventListener('click', (e) => {
    if (e.target.closest('.copy-btn')) {
        const password = e.target.closest('tr').querySelector('td:nth-child(3)').textContent;
        navigator.clipboard.writeText(password)
            .then(() => {
                createDialog('Password copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    if (e.target.closest('.delete-btn')) {
        
        const row = e.target.closest('tr');
        row.remove();
    }
});
