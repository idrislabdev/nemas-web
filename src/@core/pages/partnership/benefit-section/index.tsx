import Image from 'next/image'
import React from 'react'

const PartnerBenefitSection = () => {
  return (
    <div className='partner-benefit-section'>
        <div className='main-container'>
            <h2>Benefits</h2>
            <div className='benefit-cards'>
                <div className='rows'>
                    <div className='card'>
                        <Image 
                            src={`/images/benefits/mitra-bank.png`}
                            alt='mitra bank'
                            width={0}
                            height={0}
                            sizes='100%'
                        />
                        <div className='text-area'>
                            <h5>Bermitra dengan Bank Swasta Nasional Terbesar</h5>
                            <p>Didukung oleh dompet digital, lembaga keuangan non-bank, dan institusi finansial ternama di Indonesia.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <Image 
                            src={`/images/benefits/api-cog.png`}
                            alt='mitra bank'
                            width={0}
                            height={0}
                            sizes='100%'
                        />
                        <div className='text-area'>
                            <h5>Pilihan Integrasi Super Cepat</h5>
                            <p>Gunakan solusi app-within-app atau API lengkap untuk integrasi cepat dan menyeluruh.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <Image 
                            src={`/images/benefits/customer-service.png`}
                            alt='mitra bank'
                            width={0}
                            height={0}
                            sizes='100%'
                        />
                        <div className='text-area'>
                            <h5>Dukungan Integrasi Terbaik</h5>
                            <p>Tim support kami siap membantu Anda dalam pengembangan integrasi dan infrastruktur bisnis ke depan.</p>
                        </div>
                    </div>
                </div>
                <div className='rows'>
                    <div className='card'>
                        <Image 
                            src={`/images/benefits/subtract.png`}
                            alt='mitra bank'
                            width={0}
                            height={0}
                            sizes='100%'
                        />
                        <div className='text-area'>
                            <h5>Risiko Pihak Ketiga Nol</h5>
                            <p>Pengaturan Security Trustee & Independent Custodian kami yang menjamin keamanan nasabah dan reputasi bisnis Anda</p>
                        </div>
                    </div>
                    <div className='card'>
                        <Image 
                            src={`/images/benefits/megaphone.png`}
                            alt='mitra bank'
                            width={0}
                            height={0}
                            sizes='100%'
                        />
                        <div className='text-area'>
                            <h5>Akuisisi Pelanggan Potensial</h5>
                            <p>Dapatkan nasabah tabungan emas bernilai tinggi untuk merek perhiasan Anda.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <Image 
                            src={`/images/benefits/nemas-logo.png`}
                            alt='mitra bank'
                            width={0}
                            height={0}
                            sizes='100%'
                        />
                        <div className='text-area'>
                            <h5>Tawarkan Investasi Emas yang Paling Dicari</h5>
                            <p>200 juta masyarakat Indonesia membeli emas setiap tahun; manfaatkan pasar emas terbesar di Indonesia melalui solusi digital.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PartnerBenefitSection