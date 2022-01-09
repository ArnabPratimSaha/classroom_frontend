import React from "react";
import "./Home.css";
import ClassCard from "../../components/ClassCard/ClassCard";

function Home() {

    return (
        <div className="home-page__full-div">
            
            <div className="home-page__classes__div">
                {/* <div className='home-page__recent-classes__div'>

                </div> */}

                <div className="home-page__enrolled-classes__heading-div">
                    <span>E</span>
                    <span>nrolled Classe</span>
                    <span>S</span>
                </div>
                <div style = {{width : 'calc(100vw + 20px)' , transform : 'translateX(-10px)'}} className="underline"></div>
                <div className="home-page__enrolled-classes__div">
                    <ClassCard
                        classId = {1}
                        adminName="Sushanta Saren"
                        className="Object Oriented Programming"
                        department="Computer Science and Engineering"
                    />
                    <ClassCard
                        classId = {2}
                        adminName="Sushanta Saren"
                        className="Object Oriented Programming"
                        department="Computer Science and Engineering"
                    />
                    <ClassCard
                        classId = {3}
                        adminName="Sushanta Saren"
                        className="Object Oriented Programming"
                        department="Computer Science and Engineering"
                    />
                    <ClassCard
                        classId = {4}
                        adminName="Sushanta Saren"
                        className="Object Oriented Programming"
                        department="Computer Science and Engineering"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
