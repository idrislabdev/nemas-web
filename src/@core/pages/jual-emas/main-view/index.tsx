import { ChevronUp } from '@untitled-ui/icons-react';
import React, { Dispatch, SetStateAction, useState } from 'react'
import CurrencyInput from 'react-currency-input-field'

const JualEmasMainView = (props: {setView:Dispatch<SetStateAction<string>>}) => {
    const { setView } = props
    const [nominal, setNominal] = useState('');

    const onProces = () => {
        setView('ringkasan')
    }

    return (
        <div className='main-section'>
            <div className='header-container'>
                <h2>Jual Emas</h2>
                <div className='info-subcontainer'>
                    <div className='gold-asset-card'>
                        <label>Aset Emas Anda</label>
                        <p>50.0 Gram</p>
                    </div>
                    <hr />
                    <div className='gold-sell-card'>
                        <label>Harga Jual <span>(Per 4 Nov 2024)</span></label>
                        <p>Rp 1.427.000/gr <span><span className='my-icon icon-sm'><ChevronUp /></span>5%</span></p>
                    </div>
                </div>
            </div>
            <div className='main-container'>
                <div className='input-area'>
                    <label>Masukkan jumlah emas yang ingin dijual</label>
                    <div className='group-input'>
                        <CurrencyInput
                            value={nominal}
                            decimalsLimit={2}
                            decimalSeparator="," groupSeparator="." 
                            onValueChange={(value) => setNominal(value ? value : "0")}
                            className='w-full'
                            placeholder='0'
                        />
                        <span>Gram</span>
                    </div>
                </div>
                <div className='note-area'>
                    <p>*) Jumlah minimal <span>Rp 10.000</span></p>
                    <p>*) Pastikan saldo emas minimal <span>1 gram</span> untuk melakukan proses Jual Emas jika pembelian emas menggunakan voucher promo (tidak termasuk emas hasil transfer)</p>
                    <p>*) Jumlah minimal Jual Emas adalah <span>1 gram</span> jika pembelian emas menggunakan voucher promo</p>
                </div>
                <div className='summary-card'>
                    <label>Hasil penjualan <span>12 gram emas</span> adalah</label>
                    <p>Rp 16,848,000</p>
                </div>
                <button disabled={nominal == '' || nominal == '0'} onClick={() => onProces()}>Proses</button>
            </div>
        </div>
    )
}

export default JualEmasMainView