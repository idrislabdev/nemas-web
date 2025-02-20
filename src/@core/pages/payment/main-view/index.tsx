import { formatterNumber } from '@/@core/utils/general'
import { ChevronUp } from '@untitled-ui/icons-react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import CurrencyInput from 'react-currency-input-field'

const BeliEmasMainView = (props: {setView:Dispatch<SetStateAction<string>>}) => {
    const { setView } = props
    const [selectedPrice, setSelectedPrice] = useState(0)
    const priceses = [
        {id: 1, price: 15000, weight: 0.012},
        {id: 2, price: 25000, weight: 0.022},
        {id: 3, price: 50000, weight: 0.044},
        {id: 4, price: 100000, weight: 0.088},
        {id: 5, price: 250000, weight: 0.23},
        {id: 6, price: 500000, weight: 0.44},
        {id: 7, price: 1000000, weight: 0.92},
        {id: 8, price: 2000000, weight: 1.84},
    ]

    const onProces = () => {
        setView('detail')
    }
    return (
        <div className='main-section'>
            <h2>Beli Emas</h2>
            <div className='main-container'>
                <div className='main-subcontainer'>
                    <div className='header-area'>
                        <div className='gold-buy-card'>
                            <label>Harga Beli <span>(Per 4 Nov 2024)</span></label>
                            <p>Rp 1.427.000/gr <span><span className='my-icon icon-sm'><ChevronUp /></span>5%</span></p>
                        </div>
                    </div>
                    <div className='form-area'>
                        <div className='input-area'>
                            <label>Nominal</label>
                            <div className='group-input'>
                                <span>Rupiah</span>
                                <CurrencyInput
                                    decimalsLimit={2}
                                    decimalSeparator="," groupSeparator="." 
                                    className='w-full'
                                    placeholder='0'
                                />
                            </div>
                        </div>
                        <div className='input-area'>
                            <label>Berat</label>
                            <div className='group-input'>
                                <span>Gram</span>
                                <CurrencyInput
                                    decimalsLimit={2}
                                    decimalSeparator="," groupSeparator="." 
                                    className='w-full'
                                    placeholder='0'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cards-subcontainer'>
                    {priceses.map((item:{id:number, price:number, weight:number}, index:number) => (
                        <div className='card' key={index} onClick={() => setSelectedPrice(item.id)}>
                            <div className={`card-body ${selectedPrice == item.id ? 'selected' : ''}`}>
                                <label>Rp {formatterNumber(item.price)}</label>
                                <p>{item.weight} Gram</p>
                            </div>
                        </div>
                    ))
                        
                    }
                </div>
            </div>
            <div className='button-area'>
                <button onClick={() => onProces()}>Proses</button>
            </div>
        </div>
    )
}

export default BeliEmasMainView