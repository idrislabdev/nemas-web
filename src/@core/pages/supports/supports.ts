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
                            "QRIS: Scan kode QR menggunakan aplikasi e-wallet atau mobile banking Anda."
                        ]
                    }
                ],
                "image_url" : [
                    "/images/panduan/Picture10.png"
                ]
            }
        ]
    },
    // {
    //     "title": "Halaman Menu Lainnya",
    //     "content" : []
    // },
]

export {
    panduan
}