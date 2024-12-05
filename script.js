document.getElementById('pulsa-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const nominal = document.getElementById('nominal').value;

    // URL backend Anda (sesuaikan dengan URL server yang berjalan di Codesandbox/Replit)
    const backendUrl = 'https://[your-backend-url]/process-pulsa';

    fetch(backendUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, nominal }),
    })
        .then(response => response.json())
        .then(data => {
            const messageElement = document.getElementById('message');
            if (data.message) {
                messageElement.textContent = data.message;
                messageElement.style.color = data.message.includes('berhasil') ? 'green' : 'red';
            } else {
                messageElement.textContent = 'Terjadi kesalahan: Respons tidak valid.';
                messageElement.style.color = 'red';
            }
        })
        .catch(error => {
            const messageElement = document.getElementById('message');
            messageElement.textContent = `Terjadi kesalahan: ${error.message}`;
            messageElement.style.color = 'red';
        });
});
