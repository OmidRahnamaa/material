import React from 'react';
import './Projects.css';
import AsanaLogo from '../../assets/img/small-logos/logo-asana.svg';
import GithubLogo from '../../assets/img/small-logos/github.svg';
import AtlassianLogo from '../../assets/img/small-logos/logo-atlassian.svg';
import BootstrapLogo from '../../assets/img/small-logos/bootstrap.svg';
import SlackLogo from '../../assets/img/small-logos/logo-slack.svg';
import DevtoLogo from '../../assets/img/small-logos/devto.svg';
import Ellipsis from '../../assets/img/svgs/ellipsis.svg';

const MyMergedComponent = () => {
    const projects = [
        {
            name: 'Asana',
            budget: '$2,500',
            status: 'working',
            completion: 60,
            progressColor: 'info',
            logo: AsanaLogo,
        },
        {
            name: 'Github',
            budget: '$5,000',
            status: 'done',
            completion: 100,
            progressColor: 'success',
            logo: GithubLogo,
        },
        {
            name: 'Atlassian',
            budget: '$3,800',
            status: 'working',
            completion: 80,
            progressColor: 'primary',
            logo: AtlassianLogo,
        },
        {
            name: 'Bootstrap',
            budget: '$1,200',
            status: 'pending',
            completion: 30,
            progressColor: 'warning',
            logo: BootstrapLogo,
        },
        {
            name: 'Slack',
            budget: '$4,500',
            status: 'done',
            completion: 100,
            progressColor: 'success',
            logo: SlackLogo,
        },
        {
            name: 'Dev.to',
            budget: '$1,800',
            status: 'working',
            completion: 40,
            progressColor: 'info',
            logo: DevtoLogo,
        },
    ];


    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize pe-3" style={{ textAlign: 'right' }}>Projects table</h6>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center justify-content-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Project</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Completion</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.map((project, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="d-flex px-2">
                                                        <div>
                                                            <img src={project.logo} className="avatar avatar-sm rounded-circle ms-3" alt={project.name} />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">{project.name}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm font-weight-bold mb-0">{project.budget}</p>
                                                </td>
                                                <td>
                                                    <span className="text-xs font-weight-bold">{project.status}</span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <span className="ms-2 text-xs font-weight-bold">{project.completion}%</span>
                                                        <div>
                                                            <div className="progress">
                                                                <div className={`progress-bar bg-${project.progressColor}`} role="progressbar" aria-valuenow={project.completion} aria-valuemin="0" aria-valuemax="100" style={{ width: `${project.completion}%`, minWidth: '10%' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">
                                                    <button type="button" className="btn btn-link text-secondary mb-0">
                                                        <img src={Ellipsis} style={{ width: '1.3rem' }} className="fa fa-edit me-2" />
                                                    </button>
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
        </div>
    );
}

export default MyMergedComponent;
