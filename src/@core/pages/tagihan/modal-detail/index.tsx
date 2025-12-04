import { IMonthlyCost } from '@/@core/@types/interface';
import { Modal } from 'antd';
import moment from 'moment';
import React, { Dispatch, SetStateAction } from 'react';
import 'moment/locale/id';
import { formatterNumber } from '@/@core/utils/general';

moment.locale('id');

const ModalDetailTagihan = (props: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  detail: IMonthlyCost;
}) => {
  const { isModalOpen, setIsModalOpen, detail } = props;

  const status = detail.is_paid ? 'LUNAS' : 'BELUM BAYAR';

  return (
    <Modal
      className="modal-detail-transaksi"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <h5>Detail Tagihan</h5>

      <div className="header-transaksi">
        <div className="left-header">
          <label>Order #{detail.order_number}</label>
          <p>
            Total Tagihan:{' '}
            <strong>Rp {formatterNumber(detail.total_cost)}</strong>
          </p>
          <span>{detail.gold_weight} Gram</span>
        </div>

        <div className="right-header">
          <label>Status: {status}</label>
          <p>{moment(detail.monthly_cost_issue_date).format('DD MMM YYYY')}</p>
        </div>
      </div>

      <div className="body-transaksi">
        <div className="row">
          <span>Biaya Bulanan</span>
          <label>Rp {formatterNumber(detail.monthly_cost)}</label>
        </div>

        <div className="row">
          <span>Diskon</span>
          <label>Rp {formatterNumber(detail.discount)}</label>
        </div>

        <div className="row">
          <span>Level</span>
          <label>{detail.level}</label>
        </div>

        <div className="row">
          <span>Berat Emas</span>
          <label>{detail.gold_weight} Gram</label>
        </div>

        <div className="row total">
          <span>Total Tagihan</span>
          <label>Rp {formatterNumber(detail.total_cost)}</label>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetailTagihan;
