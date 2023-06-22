import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const pathname = location.pathname;

  let currentPage = '';

  switch (pathname) {
    case '/':
      currentPage = 'داشبورد';
      break;
    case '/table':
      currentPage = 'جداول';
      break;
    case '/billing':
      currentPage = 'صورت حساب';
      break;
    case '/notification':
      currentPage = 'اطلاع رسانی';
      break;
    case '/profile':
      currentPage = 'پروفایل';
      break;
    default:
      currentPage = 'داشبورد';
      break;
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 ms-5">
        <li className="breadcrumb-item text-sm">
          <Link className="opacity-5 text-dark" to="javascript:;">
            صفحه اصلی
          </Link>
        </li>
        {currentPage === 'Dashboard' && (
          <li className="breadcrumb-item text-sm active" aria-current="page">
            <Link className='text-grey text-decoration-none' to="/">داشبورد</Link>
          </li>
        )}
        {currentPage !== 'Dashboard' && (
          <li className="breadcrumb-item text-sm text-dark active" aria-current="page">
            {currentPage}
          </li>
        )}
      </ol>
      <h6 className="font-weight-bolder mb-0">{currentPage}</h6>
    </nav>
  );
}

export default Breadcrumb;
