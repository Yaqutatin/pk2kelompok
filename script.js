// script.js

// Mengubah nama profil ketika tombol "Edit Profile" ditekan
document.querySelector('.edit-profile').addEventListener('click', function() {
    document.querySelector('h2').textContent = "Jane Doe";
});

// Mengirim pesan ketika tombol "Message" ditekan
document.querySelector('.message').addEventListener('click', function() {
    alert("Pesan berhasil terkirim!");
});

// Menampilkan komentar ketika gambar postingan diklik
document.querySelectorAll('.post img').forEach(function(image) {
    image.addEventListener('click', function() {
        var post = this.closest('.post');
        var comment = post.querySelector('.comment');
        comment.style.display = 'block';
    });
});
