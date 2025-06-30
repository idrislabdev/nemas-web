const panduan = [
    {
        "title" : "Halaman Pembuka (Splash Screen)",
        "description" : "Halaman ini muncul pertama kali saat pengguna membuka aplikasi Nemas. Halaman ini berfungsi sebagai identitas visual awal sebelum pengguna diarahkan ke halaman login atau onboarding.",
        "contents" : [
            {
                "title" : "📌 Deskripsi Komponen:",
                "subs" : [
                    {
                        "title" : "Logo Aplikasi Nemas",
                        "contents" : [
                            "Terdiri dari ikon koin emas dan teks “Nemas”.",
                            "Mewakili identitas aplikasi dalam bidang pengelolaan atau perdagangan emas digital."
                        ]
                    },
                    {
                        "title" : "Logo dan Identitas Kementerian",
                        "contents" : [
                            "Ditampilkan di bagian bawah layar.",
                            "Menunjukkan bahwa aplikasi ini berada di bawah naungan Kementerian Perdagangan Republik Indonesia, memberikan kesan resmi dan kredibel."
                        ]
                    },
                    {
                        "title" : "Warna Latar Belakang",
                        "contents" : [
                            "Menggunakan gradasi hijau toska yang memberikan kesan segar, profesional, dan terpercaya."
                        ]
                    }
                ],
                "image_url" : [
                    "/images/panduan/Picture1.jpg"
                ]
            },
            {
                "title" : "🔄 Fungsi Halaman Splash:",
                "subs" : [
                    { "title" : "Memberikan transisi visual saat aplikasi dimuat (loading)."},
                    { "title" : "Menampilkan brand awareness instansi dan aplikasi kepada pengguna."},
                    { "title" : "Biasanya tampil selama beberapa detik sebelum berpindah otomatis ke halaman login atau beranda utama jika sudah login."}
                ],
                "image_url" : []
            }
        ]
    },
    {
        "title" : "Halaman Beranda (Home) - Sebelum Login",
        "description": "Halaman ini merupakan halaman pengantar setelah Splash Screen dan sebelum proses login. Bertujuan memperkenalkan fitur-fitur utama aplikasi, memberikan gambaran harga emas terkini, dan mendorong pengguna untuk masuk atau mendaftar.",
        "contents" : [
            {
                "title" : "📌 Deskripsi Komponen",
                "subs" : [
                    { 
                        "title"  : "Header Selamat Datang",
                        "contents" : [
                            "Menampilkan sambutan ramah dengan kalimat ajakan. Contoh: “Siap untuk menabung emas hari ini?”",
                            "Memberikan kesan hangat dan memotivasi pengguna untuk mengeksplorasi aplikasi lebih lanjut."
                        ]
                    },
                    {
                        "title" : "Banner Promosi",
                        "contents" : [
                            "Menampilkan informasi atau penawaran menarik dari aplikasi Nemas.",
                            "Bisa berupa slider/banner geser otomatis.",
                            "Contoh konten promosi: “Pakai QRIS Bebas Biaya Admin!”, “Diskon Biaya Kirim Emas Fisik hingga 50%!”"
                        ]
                    },
                    {
                        "title" : "Menu Fitur Utama (Preview)",
                        "contents" : [
                            "Menampilkan ikon menu ke fitur inti aplikasi:",
                            "fitur inti: Shortcut Tabungan Emas, Beli Emas, Emas Fisik, Kirim Emas", 
                            "Catatan: Shortcut Semua fitur ini hanya bisa digunakan setelah login. Jika diklik, sistem otomatis mengalihkan pengguna ke halaman Login."
                        ]
                    },
                    {
                        "title" : "Harga Emas Terkini",
                        "contents" : [
                            "Menampilkan harga emas per gram secara real-time.",
                            "Dilengkapi grafik fluktuasi harga untuk: Harian (Day), Mingguan (Week), Bulanan (Month)",
                            "Indikator perubahan harga emas saat ini, misalnya: “Rp 1.895.000 (+2,5%) ↑”"
                        ]
                    },
                    {
                        "title" : "Navigasi Bawah (Bottom Navigation Bar)",
                        "contents" : [
                            "Home - Mengarah ke halaman ini.",
                            "Notifikasi - Tidak aktif sebelum login. Jika ditekan, akan diarahkan ke halaman Login.",
                            "Login - Tombol untuk masuk ke akun pengguna."
                        ]
                    }
                ],
                "image_url" : [
                    "/images/panduan/Picture2.png"
                ]
            },
            {
                "title" : "⚠️ Perilaku Interaktif",
                "subs": [
                    { "title" : "Setiap klik pada fitur seperti “Beli Emas” atau “Kirim Emas” sebelum login akan: Mengarahkan otomatis ke Halaman Login." },
                    { "title" : "Beberapa elemen bersifat non-aktif untuk pengguna yang belum login." }
                ],
                "image_url" : []
            },
            {
                "title" : "📝 Catatan Penting",
                "subs": [
                    { "title" : "Pengguna tidak dapat melakukan transaksi apa pun tanpa login" },
                    { "title" : "Preview fitur ini dibuat untuk memperkenalkan fungsi aplikasi kepada calon pengguna." },
                    { "title" : "Tujuan utama halaman ini: Memberikan first impression yang positif."},
                    { "title" : "Tujuan utama halaman ini: Mendorong pengguna untuk login atau daftar akun."}
                ],
                "image_url" : []
            }
            
        ]
    },
    {
        "title" : "Halaman Login",
        "description": "Halaman ini digunakan untuk masuk ke dalam aplikasi Nemas bagi pengguna yang sudah memiliki akun terdaftar.",
        "contents" : [
            {
                "title" : "📌 Deskripsi Komponen:",
                "subs" : [
                    {
                        "title" : "Logo dan Nama Aplikasi",
                        "contents" : [
                            "Terletak di bagian atas halaman.",
                            "Menampilkan logo aplikasi Nemas dan nama merek"
                        ]
                    },
                    {
                        "title" : "Kolom Email / No. Handphone", 
                        "contents" : [
                            "Masukkan alamat email atau nomor handphone yang telah didaftarkan pada akun Anda."
                        ]
                    },
                    {
                        "title" : "Kolom Password", 
                        "contents" : [
                            "Masukkan kata sandi akun Anda.",
                            "Tersedia ikon untuk menampilkan atau menyembunyikan password."
                        ]
                    },
                    {
                        "title" : "Lupa Password?",
                        "contents" : [
                            "Klik teks ini jika Anda lupa kata sandi, untuk memulai proses reset password."
                        ]
                    },
                    {
                        "title" : "Tombol Login",
                        "contents" : [
                           "Tekan tombol ini setelah mengisi data untuk masuk ke dalam aplikasi."
                        ]
                    },
                    {
                        "title" : "Tautan Daftar Akun",
                        "contents" : [
                           "Jika Anda belum memiliki akun, klik tombol “Daftar” untuk membuat akun baru."
                        ]
                    }
                ],
                "image_url" : [
                    "/images/panduan/Picture3.png"
                ]
            },
            {
                "title" : "📝 Catatan Penting:",
                "subs" : [
                    { "title" : "Pastikan Anda mengisi data login dengan benar untuk menghindari kegagalan masuk."},
                    { "title" : "Jika Anda lupa password, gunakan fitur “Lupa Password” untuk mendapatkan panduan reset melalui email atau SMS."}
                ],
                "image_url" : []
            }
        ]

    },
    {
        "title" : "Halaman Registrasi Akun",
        "description": "Halaman ini digunakan untuk membuat akun baru di aplikasi Nemas. Pengguna diminta untuk mengisi data diri dan membuat password sesuai ketentuan yang berlaku",
        "contents" : [
            {
                "title" : "📌 Deskripsi Komponen:",
                "subs": [
                    {
                        "title" : "Nama *",
                        "contents" : [
                            "Masukkan nama lengkap Anda sesuai identitas.",
                            "Kolom ini bersifat wajib diisi."
                        ]
                    },
                    {
                        "title" : "No. Handphone *",
                        "contents": [
                            "Masukkan nomor handphone aktif yang akan digunakan untuk verifikasi dan komunikasi.",
                            "Format: tanpa spasi atau simbol."
                        ]
                    },
                    {
                        "title" : "Email *",
                        "contents": [
                            "Masukkan alamat email yang valid.",
                            "Digunakan untuk notifikasi, reset password, dan verifikasi akun."
                        ]
                    },
                    {
                        "title" : "Kode Referral (Opsional)",
                        "contents": [
                            "Jika Anda mendapatkan kode dari pengguna lain, Anda dapat memasukkannya di sini.",
                            "Tidak wajib diisi."
                        ]
                    },
                    {
                        "title" : "Password *",
                        "contents": [
                            "Masukkan kata sandi yang akan digunakan untuk login.",
                            "Password harus memenuhi kriteria : 8-16 karakter",
                            "Password harus memenuhi kriteria : Mengandung minimal 1 angka",
                            "Password harus memenuhi kriteria : Mengandung 1 huruf besar",
                            "Password harus memenuhi kriteria : Mengandung 1 karakter spesial (contoh: !, @, #, dll)"
                        ]
                    },
                    {
                        "title" : "Ulangi Password *",
                        "contents": [
                            "Ketik ulang password yang telah Anda buat sebelumnya untuk konfirmasi."
                        ]
                    },
                    {
                        "title" : "Persetujuan",
                        "contents": [
                            "Dengan menekan tombol “Daftar Sekarang”, Anda dianggap telah menyetujui Syarat dan Ketentuan serta Kebijakan Privasi aplikasi Nemas."
                        ]
                    },
                    {
                        "title" : "Tombol “Daftar Sekarang”",
                        "contents": [
                            "Tekan tombol ini untuk menyelesaikan proses registrasi dan membuat akun."
                        ]
                    }
                ],
                "image_url" : [
                    "/images/panduan/Picture4.png"
                ]
            },
            {
                "title": "📝 Catatan Penting:",
                "subs": [
                    { "title": "Pastikan semua kolom wajib diisi dengan data yang benar." },
                    { "title": "Password harus kuat dan tidak mudah ditebak untuk keamanan akun Anda." },
                    { "title": "Jika terjadi kesalahan, sistem akan menampilkan pesan peringatan." }
                ],
                "image_url" : []
            }
        ]
    },
    {
        "title" : "Halaman Lupa Password",
        "description": "Halaman Lupa Password digunakan oleh pengguna aplikasi Nemas untuk mengatur ulang kata sandi akun mereka. Proses ini dilakukan melalui verifikasi email, di mana sistem akan mengirim tautan penggantian password ke alamat email yang telah terdaftar.",
        "contents": [
            {
                "title": "📌 Deskripsi Komponen:",
                "subs": [
                    {
                        "title" : "Kolom Email",
                        "contents": [
                            "Input untuk memasukkan alamat email yang terdaftar di aplikasi Nemas.",
                            "Wajib diisi agar sistem dapat memverifikasi akun.",
                            "Validasi input dilakukan untuk memastikan format email benar."
                        ]
                    },
                    {
                        "title" : "Tombol “Kirim Email”",
                        "contents": [
                            "Tombol utama untuk mengirim permintaan reset password.",
                            "Setelah ditekan, sistem akan: Memverifikasi apakah email valid dan terdaftar.",
                            "Setelah ditekan, sistem akan: Mengirim tautan reset password ke email tersebut."
                        ]
                    },
                    {
                        "title" : "Tombol “Kembali ke Login”",
                        "contents": [
                            "Opsi untuk membatalkan proses dan kembali ke halaman login.",
                            "Berguna jika pengguna teringat kembali kata sandi sebelum proses dilanjutkan."
                        ]
                    }
                ],
                "image_url" : [
                    "/images/panduan/Picture5.png"
                ]
            },
            {
                "title" : "📝 Catatan Penting",
                "subs" : [
                    { "title" : "Pastikan anda adalah email yang aktif dan terdaftar di akun Nemas."},
                    { "title" : "Jika tidak menerima email di kotak masuk utama, periksa folder Spam atau Promosi."},
                    { "title" : "Tautan reset email hanya berlaku dalam waktu tertentu (misal: 30 menit atau 1 jam). Segera lakukan reset password setelah email diterima."},
                    { "title" : "Jika masih belum menerima email, Silahkan coba ulangi proses pengiriman atau hubungi tim dukungan Nemas melalui pusat bantuan."}
                ],
                 "image_url" : []
            }
        ]
    },
    {
        "title" : "Halaman Utama (Setelah Login)",
        "description" : "Halaman beranda utama adalah tampilan pertama yang dilihat pengguna setelah berhasil login. Halaman ini menyajikan informasi ringkas, real-time, dan akses cepat ke fitur-fitur utama aplikasi Nemas, yang berfokus pada pengelolaan emas digital dan fisik.",
        "contents" : [
            {
                "title" : "📌 Deskripsi Komponen:",
                "subs" : [
                    {
                        "title" : "Header Selamat Datang",
                        "contents" : [
                            "Menampilkan sapaan personal, contoh: Hi, Reza",
                            "Terdapat Badge Level pengguna (contoh: Novice Saver).",
                            "Terdapat Ikon Notifikasi (amplop) untuk akses cepat ke pesan sistem atau promo."
                        ]
                    },
                    {
                        "title" : "Kartu Saldo Emas",
                        "contents": [
                            "Menunjukkan total kepemilikan emas dalam: Gram: Misalnya 28,0167 Gram",
                            "Menunjukkan total kepemilikan emas dalam: Estimasi Rupiah: Misalnya Rp 49.890.935",
                            "Nilai rupiah mengikuti harga pasar terkini (real-time)."
                        ]
                    },
                    {
                        "title" : "Kartu Saldo Uang",
                        "contents": [
                            "Menampilkan sisa saldo uang di akun pengguna. Contoh: Rp 24.882.746",
                            "Dilengkapi tombol “Topup Saldo” untuk isi ulang."
                        ]
                    },
                    {
                        "title" : "Carousel Promo / Informasi",
                        "contents": [
                            "Berisi slide banner berputar otomatis atau bisa di-swipe manual.",
                            "Konten meliputi: Promo pembelian emas, Event diskon, Program hadiah atau referral",
                            "Dirancang menarik dengan visual grafis dinamis."
                        ]
                    },
                    {
                        "title" : "Menu Lain (Fitur Utama)",
                        "contents": [
                            "Shortcut Tabungan Emas - Akses ke fitur menyimpan emas.",
                            "Shortcut Beli Emas - Pembelian emas digital.",
                            "Shortcut Emas Fisik - Kelola pembelian dan pengiriman emas fisik.",
                            "Shortcut Kirim Emas - Kirim emas ke sesama pengguna.",
                            "Tombol “Lihat Semua” untuk melihat menu tambahan seperti: Jual Emas, Riwayat, Pengaturan"
                        ]
                    },
                    {
                        "title" : "Grafik Harga Emas",
                        "contents": [
                            "Menampilkan grafik pergerakan harga emas berdasarkan periode waktu: Harian (Day), Mingguan (Week), Bulanan (Month)",
                        ],
                        "image_url" : [
                            "/images/panduan/Picture7.png"
                        ]
                    },
                    {
                        "title" : "Navigasi Bawah (Bottom Navigation Bar)",
                        "contents" : [
                            "Tombol dengan icon Home - Kembali ke halaman utama.",
                            "Tombol dengan icon Transaksi - Cek riwayat pembelian, penjualan, dan kirim emas.",
                            "Tombol dengan icon Notifikasi - Informasi sistem dan promosi.",
                            "Tombol dengan icon Akun Saya - Kelola profil, keamanan, pengaturan, dan logout."

                        ]
                    }
                ],
                "image_url" : [
                    "/images/panduan/Picture6.png"
                ]
            },
             {
                "title": "📝 Catatan Penting:",
                "subs": [
                    { "title": "Hanya dapat diakses setelah berhasil login" },
                    { "title": "Jika pengguna belum login dan mencoba membuka halaman ini melalui navigasi, sistem akan mengarahkannya ke halaman login terlebih dahulu." },
                    { "title": "Seluruh informasi (saldo, harga emas, notifikasi) ditarik secara real-time dari server setiap kali halaman dibuka atau di-refresh." }, 
                    { "title": "Komponen halaman ini didesain untuk memberi kontrol penuh terhadap portofolio emas dan uang pengguna dengan antarmuka yang ringkas dan ramah pengguna." }
                ],
                 "image_url" : []
            }
        ]
    },
    {
        "title" : "Halaman Transaksi",
        "description": "Halaman Transaksi berfungsi sebagai pusat informasi seluruh riwayat aktivitas keuangan pengguna dalam aplikasi Nemas, seperti top up, pembelian emas, pengiriman, hingga penerimaan emas dari pengguna lain.",
        "contents": [
            {
                "title" : "📌 Deskripsi Komponen:",
                "subs" : [
                    {
                        "title" : "Header Atas",
                        "contents" : [
                            "Judul Halaman: Ditampilkan di tengah layar dengan teks “Transaksi”",
                            "Ikon Pencarian (🔍): Digunakan untuk mencari transaksi berdasarkan kata kunci (misalnya: “Topup”, “Kirim Emas”).",
                            "Ikon Filter (🔽): Digunakan untuk menyaring daftar transaksi berdasarkan: (Jenis transaksi, Rentang tanggal, Jumlah nominal atau gram"
                        ]
                    },
                    {
                        "title" : "Daftar Transaksi",
                        "contents" : [
                            "Disusun secara kronologis dari yang terbaru ke yang terlama, dalam bentuk daftar vertikal.",
                            "Setiap item transaksi menampilkan: Nominal Transaksi Contoh: Rp 6.000.000",
                            "Setiap item transaksi menampilkan: Deskripsi Singkat Contoh: (Topup Saldo, Kirim Emas Fisik, Terima Emas dari Ifan)",
                            "Setiap item transaksi menampilkan: Detail Tambahan (Opsional) Contoh: 10 Gram, 0.0056 Gram",
                            "Setiap item transaksi menampilkan: Tanggal Transaksi Contoh: 18 Juni 2025",
                            "Setiap item transaksi menampilkan: Ikon Transaksi (Dompet -> Topup), (Koin dan panah -> Kirim Emas), (Paket -> Kirim Fisik), (Amplop dann Tangan -> Terima Emas)"
                        ],
                        "image_url" : [
                            "/images/panduan/Picture8.png"
                        ]
                    },
                    {
                        "title" : "Navigasi Bawah (Bottom Navigation Bar)",
                        "contents": [
                            "Terdapat 4 tab navigasi: Home, Transaksi (aktif pada halaman ini), Notifikasi, Akun Saya",
                            "Tab Transaksi akan disorot atau berwarna aktif untuk menunjukkan pengguna sedang berada di halaman ini."
                        ]
                    }
                ]
            },
            {
                "title": "📝 Catatan Penting:",
                "subs": [
                    {"title": "Semua transaksi diurut berdasarkan waktu, terbaru di atas."},
                    {"title": "Transaksi dengan emas menampilkan satuan gram dan estimasi nilai dalam rupiah."},
                    {"title": "Fitur pencarian dan filter sangat membantu jika pengguna memiliki banyak riwayat."},
                    {"title": "Tap pada salah satu item transaksi bisa diarahkan ke halaman detail transaksi (jika tersedia)."},
                    {"title": "Idealnya, transaksi lama dapat dimuat dengan scroll atau tombol “Tampilkan Lebih Banyak”."}

                ],
                 "image_url" : []
            }
        ]
    },
    {
        "title" : "Halaman Akun Saya",
        "description": "Halaman Akun Saya merupakan pusat pengaturan dan informasi pribadi pengguna. Halaman ini memungkinkan pengguna untuk melihat ringkasan portofolio, mengatur keamanan akun, mengakses bantuan, serta keluar dari aplikasi.",
        "contents" : [
            {
                "title" : "📌 Deskripsi Komponen:",
                "subs" : [
                    {
                        "title" : "Header Profil",
                        "contents": [
                            "Menampilkan identitas pengguna secara singkat dan jelas:",
                            "Nama Pengguna: Contoh: reza",
                            "ID Pengguna: Ditampilkan sebagai Id Nemas → Format unik sebagai identitas akun.",
                            "Badge Level: Menunjukkan status pengguna, misalnya: Novice Saver (badge warna hijau stabilo).",
                            "Nomor Telepon: Contoh: 081234552213 → Dilengkapi ikon 📋 (copy) di sebelah kanan untuk menyalin nomor ke clipboard."
                        ]
                    },
                    {
                        "title" : "Ringkasan Saldo",
                        "contents": [
                            "Disajikan dalam bentuk kartu saldo ringkas",
                            "Terdiri dari: Tabungan Emas, Contoh: 28,0167 Gram",
                            "Terdiri dari: Saldo Nemas (Rupiah), Contoh: Rp 24.882.746",
                            "Terdiri dari: Investasi Lain (Placeholder): Contoh: 0.0"
                        ]
                    },
                    {
                        "title" : "Menu Pengaturan & Informasi",
                        "contents": [
                            "Terdiri dari dua bagian utama, (Pengaturan)  dan (Bantuan & Informasi)",
                            "Menu Pengaturan terdiri dari, Pengaturan  untuk Ubah nama, email, nomor HP, dll., Keamanan Akun untuk Ganti PIN, password, otentikasi dua faktor (jika tersedia)., Setting Notifikasi Harga untuk atuf notifikasi harga",
                            "Menu Bagian & Informasi terdiri dari: Bantuan, Whats  New Nemas, Tentang Nemas, Customer Service, Legal"
                        ]
                    },
                    {
                        "title" : "Navigasi Bawah (Bottom Navigation Bar)",
                        "contents": [
                            "Terdapat 4 tab navigasi: Home, Transaksi, Notifikasi, Akun Saya (aktif pada halaman ini)",
                            "Tab Akun Saya akan disorot atau berwarna aktif untuk menunjukkan pengguna sedang berada di halaman ini."
                        ]
                    }
                ],
                "image_url" : [
                    "/images/panduan/Picture9.png"
                ]
            },
            {
                "title": "📝 Catatan Penting:",
                "subs": [
                    {"title" : "Data pengguna dan saldo bersifat real-time dan otomatis terupdate saat halaman dibuka."},
                    {"title" : "Logout akan mengembalikan pengguna ke halaman login."},
                    {"title" : "Fitur pengaturan keamanan penting untuk menjaga perlindungan akun dan transaksi."}

                ],
                "image_url" : []
            }
        ]
    },
    {
        "title" : "Halaman Topup Saldo",
        "description": "Halaman ini digunakan untuk melakukan pengisian (top-up) saldo uang elektronik di akun pengguna aplikasi Nemas.",
        "contents" : [
            {
                "title" : "📌 Deskripsi Komponen:",
                "subs": [
                    {
                        "title": "Saldo Uang Saat Ini", 
                        "contents": [
                            "Terletak di bagian atas halaman dengan latar berwarna krem.",
                            "Menampilkan total saldo uang yang dimiliki saat ini.",
                            "Contoh: Rp 24.882.746"
                        ]
                    },
                    {
                        "title": "Input Nominal Topup", 
                        "contents": [
                            "Terdapat kolom input bertuliskan “Masukkan Nominal” di bawah label “Nominal”.",
                            "Pengguna dapat mengetik jumlah top-up secara manual sesuai keinginan.",
                            "Satuan default: Rupiah"
                        ]
                    },
                    {
                        "title": "Pilihan Nominal Cepat (Quick Select", 
                        "contents": [
                            "Terdapat 8 tombol berisi nominal top-up yang sering digunakan: (Rp 15.000 Rp 25.000, Rp 50.000, Rp 100.000, Rp 250.000, Rp 500.000, Rp 1.000.000, Rp 2.000.000"
                        ]
                    },
                    {
                        "title": "Tombol “Proses”", 
                        "contents": [
                            "Digunakan untuk melanjutkan transaksi top-up.",
                            "Tombol akan aktif jika pengguna telah memilih atau memasukkan nominal.",
                            "Saat belum ada input, tombol ditampilkan dalam kondisi nonaktif (abu-abu)."
                        ]
                    },
                    {
                        "title": "Pilih Metode Pembayaran:", 
                        "contents": [
                            "Transfer Bank: Mandiri, BCA, BNI",
                            "QRIS: Scan kode QR menggunakan aplikasi e-wallet atau mobile banking Anda.",
                            "Setelah memilih metode pembayaran, centang Saya menyetujui Syarat dan Ketentuan.",
                            "Tekan Proses Pembayaran",
                            "Masukkan PIN 6 digit Anda untuk konfirmasi."
                        ],
                        "image_url" : [
                            "/images/panduan/Picture11.png",
                            "/images/panduan/Picture12.png",
                            "/images/panduan/Picture13.png"
                        ]
                    },
                    {
                        "title": "Bukti Pembayaran", 
                        "contents": [
                            "Setelah pembayaran berhasil, Anda akan menerima email notifikasi dari Nemas.",
                            "Email ini berisi: No. Transaksi, Rincian transaksi (Topup, Biaya Admin), Status pembayaran: success dan Metode Pembayaran",
                        ],
                        "image_url" : [
                            "/images/panduan/Picture14.png",
                        ]
                    }
                ],
                "image_url" : [
                    "/images/panduan/Picture10.png"
                ]
            },
            {
                "title" : "📝 Catatan Penting",
                "subs": [
                    { "title" : "Pastikan nominal yang dimasukkan sesuai dengan batas minimal dan maksimal yang diperbolehkan oleh sistem." },
                    { "title" : "Setelah menekan tombol “Proses”, Anda akan diarahkan ke halaman metode pembayaran atau konfirmasi transaksi." },
                    { "title" : "Jika tombol “Proses” tidak bisa ditekan, pastikan Anda telah memilih atau mengetik nominal yang valid."},
                ],
                "image_url" : []
            }
        ],
    },
    {
        "title": "Halaman Menu Lainnya",
        "description": "Halaman Menu Lainnya berfungsi sebagai pusat akses cepat (shortcut hub) menuju berbagai fitur utama dan lanjutan dalam aplikasi Nemas yang berhubungan dengan aktivitas keuangan, transaksi emas digital, serta layanan tambahan seperti investasi dan penarikan fisik",
        "contents" : [
            {
                "title" : "📌 Syarat Akses",
                "subs": [
                    { "title" : "✅ Halaman ini hanya dapat diakses setelah login ke akun Nemas." },
                    { "title" : "❌ Jika pengguna belum login, maka:" },
                    { "title" : "Sistem akan mengalihkan otomatis ke halaman Login saat mencoba membuka halaman ini."},
                ],
                "image_url" : []
            },
            {
                "title" : "🧾 Daftar Menu & Fungsinya",
                "subs": [
                    { "title" : "Tabungan Emas (Menampilkan riwayat dan detail saldo tabungan emas pengguna.)" },
                    { "title" : "Kirim Emas ke Member (Transfer emas digital ke sesama pengguna aplikasi Nemas.)" },
                    { "title" : "Beli Emas (Melakukan pembelian emas menggunakan saldo Nemas.)"},
                    { "title" : "Jual Emas (Menjual emas digital dan mengonversinya ke saldo uang.)"},
                    { "title" : "Tarik Saldo (Menarik dana dari saldo Nemas ke rekening bank terdaftar.)"},
                    { "title" : "Tarik Emas (Mengajukan penarikan emas dalam bentuk fisik untuk dikirimkan.)"},
                    { "title" : "Investasi (Mengakses produk investasi berbasis emas atau keuangan lainnya.)"},
                    { "title" : "Jaminan Emas (Menggunakan emas sebagai agunan pinjaman atau jaminan produk finansial.)"},
                    { "title" : "Produk Emas Fisik (Melihat katalog emas fisik untuk dibeli dan dikirim secara langsung.)"},
                ],
                "image_url" : [
                    `/images/panduan/Picture15.png`
                ]
            },
            {
                "title" : "📍 Tata Letak Tampilan",
                "subs": [
                    { "title" : "Disusun dalam bentuk kartu-kartu fitur yang ditata dalam grid 2 kolom." },
                    { "title" : "Setiap kartu dilengkapi: Ikon Ilustratif yang merepresentasikan fitur" },
                    { "title" : "Setiap kartu dilengkapi: Nama fitur secara jelas dan singkat" },
                ],
                "image_url" : []
            },
            {
                "title" : "📌 Deskripsi Komponen:",
                "subs": [
                    { "title" : "Judul Halaman: Ditampilkan sebagai Menu Lainnya di bagian atas" },
                    { "title" : "Tombol Tutup (❌): Terletak di pojok kiri atas, digunakan untuk kembali ke halaman sebelumnya tau dashboard utama." },
                ],
                "image_url" : []
            },
            {
                "title" : "📝 Catatan Penting",
                "subs": [
                    { "title" : "Semua menu dalam halaman ini bersifat interaktif dan terhubung langsung ke halaman fungsional masing-masing." },
                    { "title" : "Pengguna disarankan memahami fitur-fitur ini sebelum mengaksesnya agar dapat memaksimalkan layanan yang tersedia di aplikasi Nemas." },
                    { "title" : "Beberapa fitur seperti Jaminan Emas atau Investasi mungkin memerlukan proses verifikasi tambahan."},
                ],
                "image_url" : []
            }
        ]
    },
    {
        "title": "Menu: Tabungan Emas",
        "description": "Menu ini menyajikan informasi lengkap mengenai aset emas digital milik pengguna. Selain menampilkan jumlah total gram emas dan estimasi nilai rupiah, halaman ini juga berisi riwayat transaksi emas serta fitur praktis untuk menyalin nomor rekening dan mengunduh mutasi.",
        "contents" : [
            {
                "title" : "📌 Syarat Akses",
                "subs": [
                    { "title" : "✅ Hanya dapat diakses oleh pengguna yang sudah login ke akun Nemas." },
                    { "title" : "❌ Pengguna yang belum login akan otomatis diarahkan ke halaman login saat mencoba membuka halaman ini."},
                ],
                "image_url" : []
            },
            {
                "title" : "🧾 Informasi yang Ditampilkan",
                "subs": [
                    { 
                        "title" : "Bagian Aset Emas",
                        "contents": [
                            "Menampilkan ringkasan saldo emas pengguna secara jelas:",
                            "Info Total Emas, Contoh: 28,0167 Gram",
                            "Estimasi Nilai Rupiah, Contoh: Rp 49.965.432",
                            "Nomor Rekening Emas, Contoh: 1122 3344 5566 6",
                        ]
                    },
                    {
                        "title": "Filter Transaksi",
                        "contents": [
                            "Tombol Salin Nomor Rekening untuk menyalin nomor rekening ke clipboard dengan sekali klik.",
                            "Filter Transaksi untuk mennyaring berdasarkan jenis transaksi atau rentang tanggal",
                            "Desain setiap transaksi ditampilkan dalam kartu vertikal, dilengkap dengan ikon dan teks informatif"
                        ]
                    },
                    {
                        "title" : "Tombol Download Mutasi",
                        "contents": [
                            "Terletak di bagian bawah halaman.",
                            "Mengunduh laporan aktivitas emas (kemungkinan dalam format PDF atau CSV) untuk pencatatan atau kebutuhan laporan pribadi."
                        ]
                    }
                ],
                "image_url" : [
                    "/images/panduan/Picture16.png"
                ]
            },
            {
                "title" : "📝 Catatan Penting",
                "subs": [
                    { "title" : "Semua data ditampilkan secara real-time dan diperbarui otomatis saat halaman dibuka." },
                    { "title" : "Nomor rekening emas bersifat unik untuk tiap pengguna dan dapat digunakan untuk menerima transfer emas digital." },
                    { "title" : "Fitur unduh mutasi sangat berguna untuk kebutuhan dokumentasi dan pelaporan."},
                ],
                "image_url" : []
            }
        ]
    },
    {
        "title": "Menu: Kirim Emas ke Member",
        "description": "Menu Kirim Emas ke Member memungkinkan pengguna untuk mentransfer emas digital ke sesama pengguna Nemas. Fitur ini hanya bisa digunakan oleh pengguna yang sudah login dan terverifikasi (KTP) serta memiliki saldo emas minimal 1 gram dari hasil pembelian.",
        "contents" : [
            {
                "title" : "📌 Syarat Akses",
                "subs": [
                    { "title" : "✅ Hanya dapat diakses oleh pengguna yang sudah login ke akun Nemas." },
                    { "title" : "❌ Pengguna yang belum login akan otomatis diarahkan ke halaman login saat mencoba membuka halaman ini."},
                ],
                "image_url" : []
            },
            {
                "title" : "📌 Deskripsi Komponen",
                "subs" : [
                    { 
                        "title"  : "Halaman Syarat dan Ketentuan Kirim Emas",
                        "contents" : [
                            "Menampilkan informasi penting terkait aturan transfer emas sebelum pengguna dapat mengakses fitur.",
                            "Transfer hanya setelah verifikasi KTP dan memiliki minimal 1 gram emas.",
                            "Transaksi dapat dibatalkan jika terindikasi pelanggaran.",
                            "Transfer hanya untuk sesama member Nemas dan bukan untuk jual-beli komersial.",
                            "Emas dari promo tidak bisa ditransfer.",
                            "Notifikasi email dikirim ke penerima.",
                            "Pengguna haru menekan tombol 'Saya Mengerti' untuk masuk ke form transfer.",
                            "Halaman / Informasi ini hanya ditampilkan sekali, dan tidak akan ditampilkan kembali setelah pengguna menyetujuinya."
                        ],
                        "image_url": [
                            "/images/panduan/Picture17.png"
                        ]
                    },
                    { 
                        "title"  : "Halaman Form Kirim Emas ke Member",
                        "contents" : [
                            "Terdapat inputan untuk memasukkan nominal angka dengan format Rupiah, inputan uang ini akan dikonversikan ke dalam gram secara otomatis, contoh: Rp. 25.000 -> 0,0137 Gram",
                            "Terdapat inputan untuk memasukkan jumlah berat dalam satuan gram, Contoh : 0,01 Gram, setelah itu estimasi harga emas akan muncul",
                            "Terdapat juga pilihan tombol / shortcut seperti Rp. 15.000 -> 0,0082 Gram, 25.000 -> Rp. 0,0137 Gram.",
                            "Tombol “Lanjutkan”: untuk melanjutkan transaksi, menjadi aktif ketika inputan sudah sesuai"
                        ],
                        "image_url": [
                            "/images/panduan/Picture18.png"
                        ]
                    },
                    { 
                        "title"  : "Halaman Detail Transfer Emas ke Member",
                        "contents" : [
                            "Terdapat inputan untuk memasukkan nomor handphone tujuan (Wajib), nomor tujuan merupakan nomor yang mempunyai akun nemas, contoh (081234567890)",
                            "Dropdown tujuan transfer (Wajib), yang berisi pilihan, Hadiah, Pembayaran, dan Lain-lain",
                            "Inputan untuk memasukkan notes (opsional), contoh : “Selamat ulang tahun! Semoga bermanfaat 🎁",
                            "Checkbox persetujuan S&K",
                            "Tombol “Kirim”: untuk melanjutkan proses transfer"
                        ],
                        "image_url": [
                            "/images/panduan/Picture19.png"
                        ]
                    },
                    { 
                        "title"  : "Konfirmasi PIN",
                        "contents" : [
                            "Sebelum transaksi diproses, pengguna diminta memasukkan PIN keamanan sebagai langkah verifikasi."
                        ],
                        "image_url": [
                            "/images/panduan/Picture13.png"
                        ]
                    },
                     { 
                        "title"  : "Notifikasi",
                        "contents" : [
                            "Setelah berhasil, pengguna dan penerima akan menerima notifikasi dan email."
                        ],
                        "image_url": [
                            "/images/panduan/Picture20.png",
                            "/images/panduan/Picture21.png"
                        ]
                    },
                ]
            },
             {
                "title" : "📝 Catatan Penting",
                "subs": [
                    { "title" : "Saldo emas harus berasal dari pembelian, bukan promo." },
                    { "title" : "Transaksi tidak dapat dibatalkan setelah dikirim." },
                    { "title" : "Gunakan pilihan cepat untuk menghindari kesalahan input."},
                    { "title" : "Sistem memantau tujuan transfer untuk mencegah penyalahgunaan."}
                ],
                "image_url" : []
            }
        ],
    },
    {
        "title": "Menu: Pembelian Emas",
        "description": "Menu ini memungkinkan pengguna membeli emas digital menggunakan saldo rupiah yang tersedia di aplikasi NEMAS. Pembelian dapat dilakukan melalui input manual atau pilihan cepat dengan nominal tertentu.",
        "contents" : [
            {
                "title" : "📌 Syarat Akses",
                "subs": [
                    { "title" : "✅ Hanya dapat diakses oleh pengguna yang sudah login ke akun Nemas." },
                    { "title" : "❌ Pengguna yang belum login akan otomatis diarahkan ke halaman login saat mencoba membuka halaman ini."},
                ],
                "image_url" : []
            },
            {
                "title" : "🧾 Alur Transaksi Pembelian Emas",
                "subs" : [
                    {
                        "title" : "Masuk ke Menu “Beli Emas”",
                        "contents": [
                            "Menampilkan informasi harga emas terkini, contoh: Rp 1.821.586/Gram",
                            "Menamilkan saldo uang yang tersedia, contoh: Rp 24.882.746"
                        ],
                        "image_url": [
                            "/images/panduan/Picture22.png"
                        ]
                    },
                    {
                        "title" : "Input Jumlah Pembelian",
                        "contents": [
                            "Pengguna dapat memilih: Input Manual dengan memasukkan nilai dalam rupiah atau berat dalam gram",
                            "Pengguna juga dapat memilih dengan tombol pilihan cepat, seperti : Rp25.000 -> 0,0137 Gram, Rp50.000 -> 0,0274 Gram"
                        ],
                          "image_url": [
                            "/images/panduan/Picture23.png"
                        ]
                    },
                    {
                        "title" : "Klik Tombol “Proses”",
                        "contents": [
                            "Menampilkan halaman Detail Transaksi, terdiri dari: Harga per gram, jumlah emas yang akan dibeli, Total pembayaran, Estimasi saldo tersisa",
                            "Chekbox persetujuan : “Saya menyetujui Syarat & Ketentuan pembelian emas”",
                            "Tombol “Proses Pembayaran” akan aktif setelah semua input valid."
                        ]
                    },
                    {
                        "title" : "Masukkan PIN",
                        "contents": [
                            "Pengguna diminta untuk memasukkan 6 digit PIN sebagai verifikasi keamanan transaksi."
                        ],
                        "image_url": [
                            "/images/panduan/Picture13.png"
                        ]
                    },
                    {
                        "title" : "Transaksi Berhasil",
                        "contents": [
                            "Muncul halaman dengan notifikasi “Pembelian Berhasil”.",
                            "Saldo uang akan otomatis dikurangi.",
                            "Emas akan langsung masuk ke akun tabungan emas pengguna."
                        ]
                    },
                ]
            },
             {
                "title" : "📝 Catatan Penting",
                "subs": [
                    { "title" : "Harga emas bersifat real-time dan dapat berubah setiap saat." },
                    { "title" : "Pastikan nominal pembelian tidak melebihi saldo uang yang tersedia." },
                    { "title" : "PIN wajib diisi untuk menyelesaikan transaksi."},
                    { "title" : "Setelah transaksi berhasil, bukti transaksi dapat dilihat di menu Transaksi dan Notifikasi"}
                ],
                "image_url" : []
            }
        ]
    },
    {
        "title": "Menu: Jual Emas Digital",
        "description": "Menu ini digunakan untuk menjual emas digital milik pengguna dan mengubahnya menjadi saldo uang (Nemas). Proses dilakukan berdasarkan harga jual emas saat ini, dan nominal hasil penjualan akan otomatis ditambahkan ke saldo uang pengguna.",
        "contents" : [
            {
                "title" : "📌 Syarat Akses",
                "subs": [
                    { "title" : "✅ Hanya dapat diakses oleh pengguna yang sudah login ke akun Nemas." },
                    { "title" : "❌ Pengguna yang belum login akan otomatis diarahkan ke halaman login saat mencoba membuka halaman ini."},
                    { "title" : "✅	Pengguna harus memiliki saldo emas aktif"},
                    { "title" : "✅	Minimal penjualan adalah setara Rp 10.000."},
                ],
                "image_url" : []
            },
            {
                "title": "📌 Deskripsi Komponen:",
                "subs": [
                    {
                        "title": "🟡 Informasi Harga & Aset Emas",
                        "contents": [
                            "Aset Emas Anda: Menunjukkan jumlah emas yang dimiliki., Contoh: 27,58085 Gram",
                            "Harga Jual per Gram: Harga saat ini untuk menjual emas. Contoh: Rp 1.777.157 / Gram",
                            "Perubahan Harga: Menampilkan persentase perubahan harga terkini. Contoh: naik 1,02%"
                        ],
                        "image_url": [
                            "/images/panduan/Picture24.png"
                        ]
                    },
                    {
                        "title": "🧾 Input Jumlah Penjualan",
                        "contents": [
                            "Pengguna dapat memasukkan jumlah emas (dalam Gram) yang ingin dijual.",
                            "Konversi otomatis akan menghitung nilai dalam Rupiah berdasarkan harga jual saat ini.",
                            "Tidak tersedia tombol pilihan cepat seperti pada menu beli."

                        ]
                    },
                    {
                        "title": "🔘 Tombol “Jual”",
                        "contents": [
                            "Akan aktif setelah jumlah valid dimasukkan (setara min. Rp 10.000).",
                            "Setelah ditekan, sistem akan menampilkan halaman Detail Transaksi."
                        ]
                    },
                    {
                        "title": "📄 Halaman: Detail Transaksi Penjualan",
                        "contents": [
                            "Menampilkan ringkasan transaksi sebelum diproses",
                            "✅ Checklist Persetujuan: Saya menyetujui syarat dan ketentuan penjualan emas.",
                            "🔘 Tombol: “Proses Penjualan”"
                        ],
                         "image_url": [
                            "/images/panduan/Picture25.png"
                        ]
                    },
                    {
                        "title": "🔐 Verifikasi PIN",
                        "contents": [
                            "Setelah klik “Proses Penjualan”, pengguna akan diminta memasukkan 6 digit PIN keamanan untuk menyelesaikan transaksi."
                        ],
                        "image_url": [
                            "/images/panduan/Picture13.png"
                        ]
                    },
                    {
                        "title": "Transaksi Berhasil",
                        "contents": [
                            "Setelah PIN terverifikasi: akan muncul halaman Transaksi Berhasil",
                            "Saldo emas akan dikurangi secara otomatis",
                            "Uang langsung masuk ke saldo uang akun penerima"
                        ],
                        "image_url": []
                    },
                    {
                        "title": "Notifikasi",
                        "contents": [
                            "Bukti transaksi akan ditampilkan di menu transaksi",
                            "Bukti transfer juga akan tampil di notifikasi aplikasi",
                            "Bukti transfer juga akan di kirim ke email pengguna (jika aktif)"
                        ],
                        "image_url": []
                    }
                ]
            },
            {
                "title" : "📝 Catatan Penting",
                "subs": [
                    { "title" : "Pastikan jumlah gram yang dijual setara minimal Rp 10.000." },
                    { "title" : "Harga jual emas dapat berubah sewaktu-waktu." },
                    { "title" : "PIN wajib untuk menyelesaikan transaksi."},
                    { "title" : "Setelah berhasil, transaksi tidak dapat dibatalkan."}
                ],
                "image_url" : []
            }
        ]
    },
    {
        "title": "Menu: Tarik Saldo",
        "description": "Menu ini digunakan untuk menarik saldo uang (Nemas) ke rekening bank yang telah terdaftar. Proses mencakup input nominal, tinjauan detail transaksi, verifikasi PIN, dan pengiriman dana ke rekening tujuan",
        "contents" : [
            {
                "title" : "📌 Syarat Akses",
                "subs": [
                    { "title" : "✅ Hanya dapat diakses oleh pengguna yang sudah login ke akun Nemas." },
                    { "title" : "✅ Telah menautkan rekening bank yang valid"},
                    { "title" : "✅ Saldo uang mencukupi jumlah penarikan + biaya admin."},
                    { "title" : "✅ Minimal penarikan adalah Rp 10.000."},
                ],
                "image_url" : []
            },
            {
                "title": "📌 Deskripsi Komponen:",
                "subs": [
                    {
                        "title": "🟡 Informasi Saldo",
                        "contents": [
                            "Saldo Uang Saat Ini: Ditampilkan saat membuka menu tarik saldo. Contoh: Rp 24.742.558"
                        ],
                        "image_url": []
                    },
                    {
                        "title": "🧾 Input Nominal Penarikan",
                        "contents": [
                            "Pengguna memasukkan jumlah uang (dalam Rupiah) yang ingin ditarik.",
                            "Minimal penarikan: Rp 10.000"

                        ],
                        "image_url": [
                            "/images/panduan/Picture26.png"
                        ]
                    },
                    {
                        "title": "🔘 Tombol “Tarik Saldo”",
                        "contents": [
                            "Akan aktif jika input nominal valid.",
                            "Setelah diklik, akan muncul halaman Detail Transaksi."
                        ],
                        "image_url": []
                    },
                    {
                        "title": "📄 Halaman: Detail Transaksi Penarikan",
                        "contents": [
                            "Menampilkan rincian transaksi sebelum dikonfirmasi:",
                            "✅ Checklist Persetujuan: Saya menyetujui syarat dan ketentuan penarikan saldo.",
                            "🔘 Tombol: “Proses Penarikan”",
                        ],
                        "image_url": [
                            "/images/panduan/Picture27.png"
                        ]
                    },
                     {
                        "title": "🔐 Verifikasi PIN",
                        "contents": [
                            "•	Setelah klik “Proses Penarikan”, pengguna akan diminta memasukkan 6 digit PIN keamanan untuk melanjutkan transaksi."
                        ],
                        "image_url": [
                            "/images/panduan/Picture13.png"
                        ]
                    },
                     {
                        "title": "📬 Notifikasi Email",
                        "contents": [
                            "Setelah transaksi berhasil, pengguna akan menerima email konfirmasi berisi: Jumlah penarikan, Biaya admin, Total saldo yang dipotong, Informasi rekening tujuan, status transaksi",
                        ],
                        "image_url": []
                    }
                ]
            },
             {
                "title" : "📝 Catatan Penting",
                "subs": [
                    { "title" : "Dana akan ditransfer ke rekening bank pengguna sesuai jumlah penarikan." },
                    { "title" : "Transaksi akan tercatat di riwayat transaksi di aplikasi." }
                ],
                "image_url" : []
            }
        ]
    },
    {
        "title": "Menu: Tarik Emas Fisik",
        "description": "Menu ini digunakan untuk menarik saldo emas digital menjadi emas fisik dalam bentuk kepingan, yang akan dikirim ke alamat pengguna atau diambil di outlet tertentu. Proses ini mencakup pemilihan produk emas, metode pengiriman, serta konfirmasi pembayaran dan verifikasi keamanan.",
        "contents" : [
            {
                "title" : "📌 Syarat Akses",
                "subs": [
                    { "title" : "✅ Hanya dapat diakses oleh pengguna yang sudah login ke akun Nemas." },
                    { "title" : "✅ Memiliki saldo emas yang cukup sesuai berat kepingan yang dipilih."},
                    { "title" : "✅ Beberapa produk bisa memiliki syarat ketersediaan stok dan biaya tambahan."},
                ],
                "image_url" : []
            },
            {
                "title" : "📋 Deskripsi Proses:",
                "subs": [
                    {
                        "title": "Masuk ke Menu “Tarik Emas”",
                        "contents": [
                            "Pengguna membuka menu Tarik Emas.",
                            "Sistem akan menampilkan saldo emas saat ini."
                        ],
                        "image_url": []
                    },
                    {
                        "title": "🧾 Pilih Jenis Kepingan Emas",
                        "contents": [
                            "Pengguna memilih salah satu produk kepingan emas yang tersedia. Tombol produk akan bertuliskan “Tarik Sekarang” jika tersedia.",
                            "Contoh pilihan : Antam 4.0 gram — Rp 281.000, Marga Gold 3.0 gram — Rp 365.000"
                        ],
                        "image_url": [
                            "/images/panduan/Picture28.png"
                        ]
                    },
                    {
                        "title": "🚚 Pilih Metode Pengiriman",
                        "contents": [
                            "Pengguna memilih salah satu dari pilihan yang tersedia",
                            "Terdapat dua pilihan, yakni: •	Kurir SAPX: Kirim langsung ke alamat pengguna dan Pick-Up di Outlet: Ambil langsung di outlet pilihan."
                        ],
                        "image_url": [
                            "/images/panduan/Picture29.png"
                        ]
                    },
                    {
                        "title": "📍 Konfirmasi Alamat Pengiriman",
                        "contents": [
                            "Contoh tampilan alamat pengguna: Reza, Badas, Badas, Kediri, 64221"
                        ],
                        "image_url": [
                            "/images/panduan/Picture30.png"
                        ]
                    },
                    {
                        "title": "✉️ Pilih Jasa Ekspedisi",
                        "contents": [
                            "Pengguna memilih jasa pengiriman berdasarkan estimasi waktu & biaya:",
                            "Terdapat beberapa pilihan seperti SATRIA REG, 2-4 hari (estimasi pengiriman) dengan Biaya R 18.000"
                        ],
                        "image_url": [
                            "/images/panduan/Picture34.png"
                        ]
                    },
                    {
                        "title": "📄 Lihat Rincian Transaksi",
                        "contents": [
                            "Sistem menampilkan detail lengkap biaya penarikan:",
                            "Informasi yang ditampilkan antara lain adalah Harga Sertifikat, Berat Kepingan, Biaya Asuransi, Biaya Pengiriman, Biaya Tarik Emas, Biaya Admin dan Total Bayar",
                            "Catatan : Biaya admin tergantung dengan pembayaran yang dipilih"
                        ],
                        "image_url": [
                            "/images/panduan/Picture35.png"
                        ]
                    },
                     {
                        "title": "💳 Pilih Metode Pembayaran",
                        "contents": [
                            "Pengguna dapat memilih salah satu metode pembayaran, seperti: Bank Transfer (Mandiri, BCA, BNI), QRIS, atau menggunakan Saldo Nemas"
                        ],
                        "image_url": [
                            "/images/panduan/Picture36.png"
                        ]
                    },
                    {
                        "title": "🔐 Verifikasi PIN",
                        "contents": [
                            "•	Sebelum melanjutkan, pengguna akan diminta memasukkan 6 digit PIN keamanan untuk melanjutkan transaksi."
                        ],
                        "image_url": [
                            "/images/panduan/Picture13.png"
                        ]
                    },
                    {
                        "title": "✅ Pembayaran & Konfirmasi Transaksi",
                        "contents": [
                            "Transaksi akan diproses jika PIN yang diinputkan valid",
                            "Kepingan emas akan dikirim ke alamat atau disiapkan untuk diambil di outlet."
                        ],
                        "image_url": []
                    },
                     {
                        "title": "📬 Notifikasi Email",
                        "contents": [
                            "Status penarikan emas (diproses/dikirim).",
                            "Detail pengiriman: jasa kurir, nomor resi, estimasi pengiriman, dll."

                        ],
                        "image_url": []
                    },
                ],
                "image_url" : []
            },
        ]
    },
    {
        "title": "Menu: Beli Emas Fisik",
        "description": "Menu ini digunakan untuk membeli emas fisik dalam bentuk kepingan melalui aplikasi NEMAS. Pembelian dilakukan langsung dari katalog produk dan diselesaikan melalui proses pembayaran dan pengiriman ke alamat pengguna.",
        "contents" : [
            {
                "title" : "📌 Syarat Akses",
                "subs": [
                    { "title" : "✅ Hanya dapat diakses oleh pengguna yang sudah login ke akun Nemas." },
                    { "title" : "✅ Memiliki metode pembayaran aktif (transfer, QRIS, atau saldo mencukupi)."},
                    { "title" : "✅ Produk emas tersedia dalam stok."},
                    { "title" : "✅ Video unboxing wajib tersedia untuk keperluan klaim."},
                ],
                "image_url" : []
            },
            {
                "title" : "📋 Deskripsi Proses:",
                "subs": [
                    {
                        "title": "Pilih Produk Emas Fisik",
                        "contents": [
                            "Masuk ke menu Beli Emas Fisik.",
                            "Pilih produk berdasarkan berat dan harga.",
                            "Contoh Produk: Antam 4 gram — Rp 7.567.400"
                        ],
                        "image_url": []
                    },
                    {
                        "title": "Lihat Detail Produk",
                        "contents": [
                            "Klik produk untuk membuka halaman Detil Produk.",
                            "Informasi yang ditampilkan antara lain adalah: Harga sudah termasuk biaya cetak sertifikat, Status stok tersedia, ketentuan klaim: wajib ada video unboxing",
                            "Tentukan jumlah pembelian, lalu klik Tambah ke Keranjang."
                        ],
                        "image_url": []
                    },
                    {
                        "title": "🛍️ Keranjang",
                        "contents": [
                            "Setelah produk ditambahkan, masuk ke halaman Keranjang.",
                            "Terdapat fitur : Lihat daftar produk, Ubah jumlah pembelian, Hapus produk dari keranjang",
                            "Tombol Checkout untuk lanjut ke transaksi"
                        ],
                        "image_url": []
                    },
                     {
                        "title": "🚚 Pilih Metode Pengiriman",
                        "contents": [
                            "Pengguna memilih salah satu dari pilihan yang tersedia",
                            "Terdapat dua pilihan, yakni: •	Kurir SAPX: Kirim langsung ke alamat pengguna dan Pick-Up di Outlet: Ambil langsung di outlet pilihan."
                        ],
                        "image_url": [
                            "/images/panduan/Picture29.png"
                        ]
                    },
                      {
                        "title": "📍 Konfirmasi Alamat Pengiriman",
                        "contents": [
                            "Contoh tampilan alamat pengguna: Reza, Badas, Badas, Kediri, 64221"
                        ],
                        "image_url": [
                            "/images/panduan/Picture30.png"
                        ]
                    },
                    {
                        "title": "✉️ Pilih Jasa Ekspedisi",
                        "contents": [
                            "Pengguna memilih jasa pengiriman berdasarkan estimasi waktu & biaya:",
                            "Terdapat beberapa pilihan seperti SATRIA REG, 2-4 hari (estimasi pengiriman) dengan Biaya R 18.000"
                        ],
                        "image_url": [
                            "/images/panduan/Picture34.png"
                        ]
                    },
                    {
                        "title": "📄 Lihat Rincian Transaksi",
                        "contents": [
                            "Sistem menampilkan detail lengkap biaya penarikan:",
                            "Informasi yang ditampilkan antara lain adalah Harga Sertifikat, Berat Kepingan, Biaya Asuransi, Biaya Pengiriman, Biaya Tarik Emas, Biaya Admin dan Total Bayar",
                            "Catatan : Biaya admin tergantung dengan pembayaran yang dipilih"
                        ],
                        "image_url": [
                            "/images/panduan/Picture35.png"
                        ]
                    },
                     {
                        "title": "💳 Pilih Metode Pembayaran",
                        "contents": [
                            "Pengguna dapat memilih salah satu metode pembayaran, seperti: Bank Transfer (Mandiri, BCA, BNI), QRIS, atau menggunakan Saldo Nemas"
                        ],
                        "image_url": [
                            "/images/panduan/Picture36.png"
                        ]
                    },
                    {
                        "title": "🔐 Verifikasi PIN",
                        "contents": [
                            "Sebelum melanjutkan, pengguna akan diminta memasukkan 6 digit PIN keamanan untuk melanjutkan transaksi."
                        ],
                        "image_url": [
                            "/images/panduan/Picture13.png"
                        ]
                    },
                    {
                        "title": "✅ Pembayaran & Konfirmasi Transaksi",
                        "contents": [
                            "Transaksi akan diproses jika PIN yang diinputkan valid",
                            "Kepingan emas akan dikirim ke alamat atau disiapkan untuk diambil di outlet."
                        ],
                        "image_url": []
                    },
                     {
                        "title": "📬 Notifikasi Email",
                        "contents": [
                            "Status penarikan emas (diproses/dikirim).",
                            "Detail pengiriman: jasa kurir, nomor resi, estimasi pengiriman, dll."

                        ],
                        "image_url": []
                    },
                ],
                "image_url": [
                    "/images/panduan/Picture32.png"
                ]
            },
              {
                "title" : "📝 Catatan Penting",
                "subs": [
                    { "title" : "Biaya asuransi tergantung berat emas yang dibeli." },
                    { "title" : "Biaya admin akan muncul setelah metode pembayaran dipilih." },
                    { "title" : "Pastikan pengguna melakukan video unboxing untuk validasi klaim jika produk rusak atau tidak sesuai." }
                ],
                "image_url" : []
            }
        ]
    }
]

export {
    panduan
}