 // Fungsi untuk tab navigasi
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Hapus kelas aktif dari semua tab dan konten
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Tambahkan kelas aktif ke tab yang diklik
                tab.classList.add('active');
                
                // Tampilkan konten yang sesuai
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(`${tabId}-content`).classList.add('active');
                
                // Scroll ke atas konten
                if (window.innerWidth > 768) {
                    document.getElementById(`${tabId}-content`).scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Animasi scroll untuk section
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section, .team-section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            sections.forEach(section => {
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            });
        });

        // Fungsi untuk tombol copy code
        const copyButton = document.getElementById('copy-code-btn');
        if (copyButton) {
            copyButton.addEventListener('click', () => {
                const codeSnippet = document.getElementById('code-snippet');
                const codeText = codeSnippet.innerText;

                navigator.clipboard.writeText(codeText).then(() => {
                    // Success feedback
                    copyButton.innerHTML = `<i class="fas fa-check"></i> <span>Copied!</span>`;
                    copyButton.disabled = true;
                    
                    setTimeout(() => {
                        copyButton.innerHTML = `<i class="fas fa-copy"></i> <span>Copy</span>`;
                        copyButton.disabled = false;
                    }, 2000); // Revert back after 2 seconds
                }).catch(err => {
                    console.error('Gagal menyalin kode: ', err);
                    alert('Gagal menyalin kode. Silakan coba lagi.');
                });
            });
        }

        // Fungsi untuk tombol "Lihat Selengkapnya"
        const toggleCodeBtn = document.getElementById('toggle-code-btn');
        if(toggleCodeBtn) {
            const fullCode = document.getElementById('full-code');
            const codeEllipsis = document.getElementById('code-ellipsis');

            toggleCodeBtn.addEventListener('click', () => {
                const isHidden = fullCode.style.display === 'none';
                if (isHidden) {
                    fullCode.style.display = 'inline';
                    codeEllipsis.style.display = 'none';
                    toggleCodeBtn.textContent = 'Tampilkan Lebih Sedikit';
                } else {
                    fullCode.style.display = 'none';
                    codeEllipsis.style.display = 'inline';
                    toggleCodeBtn.textContent = 'Lihat Selengkapnya';
                }
            });
        }