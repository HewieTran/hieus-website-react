import React, { Component } from 'react';

const ProjectHeader = () => {
    return (
        <div className="project-header">
            <h1>My Personal Projects</h1>
        </div>
    )
}

const ProjectItems = () => {
    return (
        <div className="project-wrapper">
            <div className="project-body">
                <div className="project-1">
                    <div className="project-1-header shadow">
                    <a href="https://hieu-reviews-on-heroku.herokuapp.com/" target="_blank"><button className="project-1-btn btn">Visit Hieu Reviews</button></a>
                    </div>
                    <div className="project-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed tortor porttitor, dictum purus vitae, vestibulum lacus. Morbi nisi elit, imperdiet et turpis eu, sollicitudin mollis magna.
                </div>
                </div>
                <div className="project-2">
                    <div className="project-2-header shadow">
                        <a href="https://morning-scrubland-48539.herokuapp.com/" target="_blank"><button className="project-2-btn btn">Visit Nutrition Tracker</button></a>
                    </div>
                    <div className="project-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed tortor porttitor, dictum purus vitae, vestibulum lacus. Morbi nisi elit, imperdiet et turpis eu, sollicitudin mollis magna.
                </div>
                </div>
                <div className="project-3">
                    <div className="project-3-header shadow">
                        <button className="project-3-btn btn">Coming Soon!</button>
                    </div>
                    <div className="project-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed tortor porttitor, dictum purus vitae, vestibulum lacus. Morbi nisi elit, imperdiet et turpis eu, sollicitudin mollis magna.
                </div>
                </div>
            </div>
        </div>
    )
}


class Projects extends Component {
    render() {
        return (
            <section className="section-b-projects">
                <ProjectHeader />
                <ProjectItems />
            </section>
        )
    }
}

export default Projects;