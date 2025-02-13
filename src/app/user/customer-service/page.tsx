import { CommentIcon, PhoneIcon, WhatsappIcon } from '@/@core/components/custom-icons'
import { ChevronRight, Mail01 } from '@untitled-ui/icons-react'
import React from 'react'

const UserCustomerServicePage = () => {
  return (
    <div className='customer-service-sub-container'>
        <h5>Customer Service</h5>
        <div className='list-menu'>
            <a>
                <span><Mail01 />Kirim Email</span>
                <span className='my-icon'><ChevronRight /></span>
            </a>
            <a>
                <span><WhatsappIcon />Whatsapp Customer Service</span>
                <span className='my-icon'><ChevronRight /></span>
            </a>
            <a>
                <span><PhoneIcon />Pusat Panggilan</span>
                <span className='my-icon'><ChevronRight /></span>
            </a>
            <a>
                <span><CommentIcon />Live Chat</span>
                <span className='my-icon'><ChevronRight /></span>
            </a>
        </div>
    </div>
  )
}

export default UserCustomerServicePage