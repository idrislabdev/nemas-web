import Image from 'next/image'
import React from 'react'
import TentangKamiSupportContainer from './support-container'

const TentangKamiPageWrapper = () => {
  return (
    <main className='tentang-kami-page sm:mobile-responsive md:mobile-responsive'>
      <div className='header-section'>
        <div className='title-container'>
          <h2>Investasi Cerdas Masa Depan dengan Nemas</h2>
        </div>
        <div className='image-container'>
            <Image src={`/images/tentang-kami-header.png`} alt='haeder tentang kami' width={0} height={0} sizes='100%' />
            <div className='description'>
                <p>
                  Emas adalah simbol kekayaan dan aset yang stabil, menjadikannya pilihan investasi cerdas 
                  di tengah ketidakpastian ekonomi global. 
                  Mulailah menabung dan bertransaksi emas dengan aman di <span>NEMAS (Nabung Emas)</span>, 
                  platform terpercaya yang dijamin oleh BAPPEPTI.
                </p>
                <p>
                  Dapatkan poin dari setiap transaksi, naikkan level Anda, dan nikmati berbagai fitur eksklusif yang membuat 
                  investasi emas semakin menguntungkan!
                </p>
            </div>
        </div>
      </div>
      <div className='main-section'>
        <div className='content-container'>
          <h5>Kepercayaan &amp; Jaminan Keamanan NEMAS</h5>
          <div className='description'>
            <p>
              Hati tenang dan serahkan urusan EMAS anda pada <span>NEMAS</span>. Saat ini total tabungan emas pelanggan kami <span>“22.456.234 kg”</span>. 
              NEMAS selalu <span>menjaga kepercayaan</span> anda untuk aset emas anda.
              Emas kami simpan di tempat yang aman pihak ketiga (Depository) yang di tunjuk pemerintah-BAPPEPTI. 
              Semua transaksi dan tabungan emas anda di NEMAS <span>di jamin oleh BAPPEPTI</span>.
            </p>
            <p>
              NEMAS telah memperoleh <span>sertifikat keanggotaan</span> dari salah satu <span>lembaga kliring di Indonesia, 
              yaitu Indonesia Clearing House (ICH)</span>, serta <span>sertifikat keanggotaan dari bursa berjangka, yaitu Indonesia Commodity Derivatives Exchange (ICDX)</span>. 
              Baik ICH maupun ICDX beroperasi di bawah pengawasan BAPPEBTI sebagai otoritas yang berwenang
            </p>
          </div>
        </div>
        <div className='image-container'>
          <Image src={`/images/nemas-flow.png`} alt='flow nemas' width={0} height={0} sizes='100%' />
        </div>
        <div className='content-container'>
          <h5>Sertifikasi NEMAS</h5>
          <div className='description'>
            <p>
              NEMAS telah mendapatkan izin resmi dari BAPPEPTI (Badan Pengawas Perdagangan Berjangka Komoditi 
              Kementerian Perdagangan Republik Indonesia pada tanggal 11 JUNI 2025 berdasarkan Surat Keputusan 
              Kepala <span>BAPPEBTI Nomor 001/BAPPEBTI/P-ED/06/2025</span> tentang Persetujuan Sebagai Pedagang Fisik Emas Digital kepada 
              PT SUKA JADI LOGAM serta <span>Sertifikat Persetujuan Sebagai Pedagang Fisik Emas Digital Nomor 001/BAPPEBTI/P-ED/06/2025</span>.
            </p>
            <p>
              APLIKASI NEMAS merupakan <span>anggota Asosiasi Fintech Indonesia (AFTECH)</span> dan telah terdaftar dalam <span>Tanda Daftar Penyelenggaraan 
              Sistem Elektronik dari Kementerian Komunikasi dan Informatika Republik Indonesia (KOMINFO)</span>.
              Nemas juga telah memperoleh <span>sertifikat lisensi ISO 9001 dan ISO 27001-KAN</span> guna standarisasi keamanan data dan manajemen.
            </p>
          </div>
        </div>
        <TentangKamiSupportContainer />
      </div>
    </main>
  )
}

export default TentangKamiPageWrapper