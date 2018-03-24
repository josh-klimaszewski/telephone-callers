import React from 'react';
import ProjectThumbnail from './project-thumbnail';

const ProjectsList = () => {
    const projectsInfo = [
        {name: 'Wainscoting 2057', imageUrl: 'https://f4.bcbits.com/img/a3019626676_16.jpg', src: '991521820' },
        {name: 'Split w/ Uzi Rash', imageUrl: 'https://f4.bcbits.com/img/a4213601407_16.jpg', src: '375210525'},
        {name: 'FD 7 inch', imageUrl: 'https://f4.bcbits.com/img/a0788580331_10.jpg', src: '1575528626'},
        {name: 'Split w/ Valterra Blue', imageUrl: 'https://f4.bcbits.com/img/a2806539989_10.jpg', src: '102406384'},
        {name: 'Volumes 1 & 2', imageUrl: 'https://f4.bcbits.com/img/a1900835088_10.jpg', src: '3139097133'}
    ];
    const projects = projectsInfo.map((project) => {
        return (
            <ProjectThumbnail 
                key={project.name}
                name={project.name}
            />
        );
    });
    return (
        <div className="projects-list">
        {projects}
        </div>
    );
}
export default ProjectsList;