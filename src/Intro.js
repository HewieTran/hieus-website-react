import React, { Component } from 'react';
import profileImg from './profileImg.png';
// import backgroundImg from './backgroundImg.jpg';

const ProfileImage = () => {
    return (
        <div>
            <img className="profileImg" src={profileImg} />
        </div>
    )
}

const ProfileIntro = () => {
    return (
        <div className="section-a-content">
            <div className="profile-intro-header">
                <h1>Hello there! <br></br> I'm Hieu and it's nice to virtually meet you :)</h1>
            </div>
            <div className="profile-intro-body">
                <p>
                    I'm a <strong>Web Developer</strong> currently working for a start-up based in Washington DC.  
                    Art and tech have always been my 'thing', so it's only natural to combine the two together and specialize in frontend development.
                    <br></br> Programming has been a challenging and rewarding experience for me. I'm excited to see where it will take me in the next few months.
                </p>
            </div>
        </div>
    )
}

class Intro extends Component {
    render() {
        return (
            <section className="section-a-intro">
                <div className="section-a-content-wrap">
                    <ProfileImage />
                    <ProfileIntro />
                </div>
            </section>
        )
    }
}

export default Intro;