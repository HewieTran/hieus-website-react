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
                <h1>Hello! I'm Hieu and it's nice to virtually meet you :)</h1>
            </div>
            <div className="profile-intro-body">
                <p>"Programming + Hieu" sounds like a silly idea to me 1 year ago.I went to college originally to get a degree in CS.
                    Unforunately it never happened because the school I went to dropped the major.</p>
                <p>Now I have a chance to actually do what I believe I was destined to do.
                    And I'm not wasting a single second on this great opportunity</p>
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