import React from 'react';
import { Link } from 'react-router-dom';
import './BillInfo.css';
import Delete from '../../assets/img/svgs/delete.svg';
import Edit from '../../assets/img/svgs/edit.svg';

const billData = [
  {
    name: 'Oliver Liam',
    companyName: 'Viking Burrito',
    emailAddress: 'oliver@burrito.com',
    vatNumber: 'FRB1235476'
  },
  {
    name: 'Lucas Harper',
    companyName: 'Stone Tech Zone',
    emailAddress: 'lucas@stone-tech.com',
    vatNumber: 'FRB1235476'
  },
  {
    name: 'Ethan James',
    companyName: 'Fiber Notion',
    emailAddress: 'ethan@fiber.com',
    vatNumber: 'FRB1235476'
  }
];

const BillInfo = () => {
  return (
    <div className="col-md-7 mt-4">
      <div className="card">
        <div className="card-header pb-0 px-3">
          <h6 className="mb-0">اطلاعات صورت حساب</h6>
        </div>
        <div className="card-body pt-4 p-3">
          <ul className="list-group">
            {billData.map((bill, index) => (
              <li
                key={index}
                className="list-group-item mb-3 border-0 d-flex p-4 mb-2 bg-gray border-radius-lg"
              >
                <div className="d-flex flex-column" style={{ textAlign: 'right' }}>
                  <h6 className="mb-3 text-sm">{bill.name}</h6>
                  <span className="mb-2 text-xs text-grey">
                    نام شرکت: <span className="text-grey font-weight-bold ms-sm-2">{bill.companyName}</span>
                  </span>
                  <span className="mb-2 text-xs text-grey">
                    آدرس ایمیل: <span className="text-grey ms-sm-2 font-weight-bold">{bill.emailAddress}</span>
                  </span>
                  <span className="text-xs text-grey">
                  شماره مالیات بر ارزش افزوده: <span className="text-grey ms-sm-2 font-weight-bold">{bill.vatNumber}</span>
                  </span>
                </div>
                <div className="me-auto text-start">
                  <Link className="btn btn-link text-danger text-gradient none-margin px-3 mb-0" href="/">
                    <img src={Delete} className="material-icons float-right text-sm me-2" alt="Delete" />
                    حذف
                  </Link>
                  <Link className="btn btn-link text-decoration-none text-grey px-3 mb-0" href="/">
                    <img src={Edit} className="material-icons float-right text-sm me-2" alt="Edit" />
                    ویرایش
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BillInfo;
