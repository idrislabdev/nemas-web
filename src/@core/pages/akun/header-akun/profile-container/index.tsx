import React, { useEffect } from 'react';
import { useGlobals } from '@/@core/hoc/useGlobals';
import { Copy06, InfoCircle, User01 } from '@untitled-ui/icons-react';
import { formatterNumber } from '@/@core/utils/general';
const ProfileAkunContainer = () => {
  const { globals } = useGlobals();

  useEffect(() => {
    console.log(globals);
  }, [globals]);

  return (
    <>
      <div className="profile-container">
        <div className="main-profile">
          <div className="main-info">
            <span className="user-icon">
              <User01 />
            </span>
            <h5>{globals.userLogin.name}</h5>
            <label className="badge-member gold">Novice Saver</label>
          </div>
          <div className="id-info">
            <label>ID Nemas</label>
            <p>JKL1234567890</p>
          </div>
        </div>
        <div className="id-profile">
          <div className="profile-info">
            <label>
              ICH ID{' '}
              <span className="my-icon icon-xs">
                <InfoCircle />
              </span>
            </label>
            <p>IDG1234567890TYO0987654</p>
          </div>
          <a>
            <span className="my-icon icon-sm">
              <Copy06 />
            </span>
          </a>
        </div>
      </div>
      <div className="asset-container">
        <div className="asset-card tabungan">
          <label>Tabungan Emas</label>
          <p>
            {globals.userProp &&
            globals.userProp.gold_stock &&
            globals.userProp.gold_stock.weight
              ? globals.userProp.gold_stock.weight.toString().replace('.', ',')
              : ''}{' '}
            Gram
          </p>
        </div>
        <div className="asset-card saldo">
          <label>Saldo Uang</label>
          <p>
            Rp{' '}
            {globals.userProp.wallet && globals.userProp.wallet.balance
              ? formatterNumber(Math.ceil(globals.userProp.wallet.balance))
              : ''}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileAkunContainer;
