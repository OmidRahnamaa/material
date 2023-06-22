import React from 'react';
import './Authors.css';
import Team2 from '../../assets/img/team-2.jpg';
import Team3 from '../../assets/img/team-3.jpg';
import Team4 from '../../assets/img/team-4.jpg';

const authorsData = [
  {
    name: 'John Michael',
    email: 'john@creative-tim.com',
    avatar: Team2,
    role: 'مدیر',
    department: 'تشکیلات',
    status: 'آنلاین',
    employed: '23/04/18',
  },
  {
    name: 'Alexa Liras',
    email: 'alexa@creative-tim.com',
    avatar: Team3,
    role: 'برنامه نویس',
    department: 'توسعه دهنده',
    status: 'آفلاین',
    employed: '11/01/19',
  },
  {
    name: 'Laurent Perrier',
    email: 'laurent@creative-tim.com',
    avatar: Team4,
    role: 'اجرایی',
    department: 'پروژه ها',
    status: 'آنلاین',
    employed: '19/09/17',
  },
  {
    name: 'Michael Levi',
    email: 'michael@creative-tim.com',
    avatar: Team3,
    role: 'برنامه نویس',
    department: 'توسعه دهنده',
    status: 'آنلاین',
    employed: '24/12/08',
  },
  {
    name: 'Richard Gran',
    email: 'richard@creative-tim.com',
    avatar: Team2,
    role: 'مدیر',
    department: 'اجرایی',
    status: 'آفلاین',
    employed: '04/10/21',
  },
  {
    name: 'Miriam Eric',
    email: 'miriam@creative-tim.com',
    avatar: Team4,
    role: 'برنامه نویس',
    department: 'توسعه دهنده',
    status: 'آفلاین',
    employed: '14/09/20',
  },
];

const Authors = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
              <h6 className="text-white text-capitalize pe-3" style={{ textAlign: 'right' }}>
                جدول نویسنده ها
              </h6>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">نویسنده</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">وظیفه</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">وضعیت</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">به کار گرفته شده</th>
                    <th className="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  {authorsData.map((author, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src={author.avatar} className="avatar avatar-sm ms-4 border-radius-lg" alt={`user${index + 1}`} />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{author.name}</h6>
                            <p className="text-xs text-secondary mb-0">{author.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">{author.role}</p>
                        <p className="text-xs text-secondary mb-0">{author.department}</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className={`badge badge-sm ${author.status === 'آنلاین' ? 'bg-gradient-success' : 'bg-gradient-secondary'}`}>
                          {author.status}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">{author.employed}</span>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary text-decoration-none font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          ویرایش کنید
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
