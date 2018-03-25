import React from 'react';
import ProjectThumbnail from './project-thumbnail';


const ProjectsList = ({onProjectSelect}) => {
    const projectsInfo = [
        {
            name: 'Wainscoting 2057', 
            imageUrl: 'https://f4.bcbits.com/img/a3019626676_16.jpg', 
            src: '991521820',
            description: `Recorded in early 2011 around Ann Arbor and Detroit. Posthumous self release.
            Released May 2, 2012.`
        },
        {
            name: 'Split w/ Uzi Rash', 
            imageUrl: 'https://f4.bcbits.com/img/a4213601407_16.jpg', 
            src: '375210525',
            description: `Split with Oakland CA weirdos Uzi Rash. 
            Released August 20, 2010 on partyngg! Records.`
        },
        {
            name: 'FD 7 inch', 
            imageUrl: 'https://f4.bcbits.com/img/a0788580331_10.jpg', 
            src: '1575528626',
            description: `Pressed locally at Archer Record Pressing Co in Detroit.
            Released March 15, 2009 on partynng! Records.`
        },
        {
            name: 'Split w/ Valterra Blue', 
            imageUrl: 'https://f4.bcbits.com/img/a2806539989_10.jpg', 
            src: '102406384',
            description: `Split with legendary Ypsilanti crooner Valterra Blue.
            Released August 1, 2008 by Dustin Krcatovich.`
        },
        {
            name: 'Volumes 1 & 2', 
            imageUrl: 'https://f4.bcbits.com/img/a1900835088_10.jpg', 
            src: '3139097133',
            description: `Anthology of early recordings. First released May 1, 2007.
            Re-released May 2010 on Fixture Records.`
        }
    ];
    const projects = projectsInfo.map((project) => {
        return (
            <ProjectThumbnail 
                key={project.name}
                imageUrl={project.imageUrl}
                project={project}
                onProjectSelect={onProjectSelect}
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