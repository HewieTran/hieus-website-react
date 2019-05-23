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
                <a href="https://hieu-reviews-on-heroku.herokuapp.com/" target="_blank">
                    <div className="project-1-header shadow">
                        <a href="https://hieu-reviews-on-heroku.herokuapp.com/" target="_blank"><button className="project-1-btn btn">Visit Hieu Reviews</button></a>
                    </div>
                </a>
                    <div className="project-text">
                        I love writing movie reviews and before I used to just post them on Facebook. But why do that when I can build my own movie blog!? Hieu Reviews is built using Node, Express, and MongoDB.
                </div>
                </div>
                <div className="project-2">
                <a href="https://morning-scrubland-48539.herokuapp.com/" target="_blank">
                    <div className="project-2-header shadow">
                        <a href="https://morning-scrubland-48539.herokuapp.com/" target="_blank"><button className="project-2-btn btn">Visit Nutrition Tracker</button></a>
                    </div>
                </a>
                    <div className="project-text">
                        Stay on track with your daily nutrition intake with this handy dandy tracker. This app is powered by Nutritionix API, a popular USDA approved food database.
                </div>
                </div>
                <div className="project-3">
                <a href="https://github.com/HewieTran" target="_blank">
                    <div className="project-3-header shadow">
                        <button className="project-3-btn btn">Coming Soon!</button>
                    </div>
                </a>
                    <div className="project-text">
                        Learning new technologies is what keeps me motivated in this field. The next project will feature new tech that I haven't used before. Stay tune!

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