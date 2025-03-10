import { CommentIcon, PhoneIcon, WhatsappIcon } from '@/@core/components/custom-icons'
import { ChevronRight, Mail01 } from '@untitled-ui/icons-react'
import React from 'react'

const UserCustomerServicePage = () => {
  return (
    <div className='customer-service-sub-container'>
        <h5>Customer Service</h5>
        <div className='list-menu'>
            <a href="mailto:support@nemas.com" target='_blank'>
                <span><Mail01 />Kirim Email</span>
                <span className='my-icon'><ChevronRight /></span>
            </a>
            <a href="https://wa.me/+6281234567890" target='_blank'>
                <span><WhatsappIcon />Whatsapp Customer Service</span>
                <span className='my-icon'><ChevronRight /></span>
            </a>
            <a href="tel:+6281234567890">
                <span><PhoneIcon />Pusat Panggilan</span>
                <span className='my-icon'><ChevronRight /></span>
            </a>
            <a href="https://wa.me/+6281234567890" target='_blank'>
                <span><CommentIcon />Live Chat</span>
                <span className='my-icon'><ChevronRight /></span>
            </a>
        </div>
    </div>
  )
}

export default UserCustomerServicePage