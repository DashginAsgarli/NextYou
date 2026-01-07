import React from "react";
import { Link } from "react-router-dom";
import "./codeMap.css";

const courses = [
    {
        id: "fullstack",
        title: "Fullstack Proqramlaşdırma",
        skills: "HTML, CSS, JS, React, NextJS, NodeJS, MongoDB, XML, API, Git, Deployment",
        bgColor: "bg-orange",
        iconClass: "bi bi-code-slash"
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        skills: "Marketingə giriş, Rəqəmsal marketing, SMM, Kontent ilə işləmə, Google Ads və s.",
        bgColor: "bg-yellow",
        iconClass: "bi bi-graph-up"
    },
    {
        id: "data-science",
        title: "Data Science",
        skills: "Data Science-ə giriş, Python, SQL, Data analitika, Machine Learning, Süni intellekt",
        bgColor: "bg-purple",
        iconClass: "bi bi-database"
    },
    {
        id: "it-project-management",
        title: "IT Project Management",
        skills: "Agile, Waterfall metodları, Project structures, Soft skills, Risk analysis və s.",
        bgColor: "bg-green",
        iconClass: "bi bi-gear"
    },
    {
        id: "ai-engineering",
        title: "AI Engineering",
        skills: "Python, Machine Learning, Data, Pandas, NumPy, TensorFlow, Computer Vision, NLP, MLOps",
        bgColor: "bg-pink",
        iconClass: "bi bi-robot"
    }
];
function CodeMap() {
    return (
        <section>
            <h1 className="course-h1">Haradan başlayacağınızdan əmin deyilsiz?</h1>
        <div className="courses-container">
            {courses.map((course) => (
                <div key={course.id} className={`course-card ${course.bgColor}`}>
                    <div className="course-icon">
                        <i className={course.iconClass}></i>
                    </div>
                    <h2 className="course-title">{course.title}</h2>
                    <p className="course-skills">{course.skills}</p>
                    <Link to={`/courses/${course.id}`}>
                        <button className="learn-btn">Ətraflı öyrən</button>
                    </Link>
                </div>
            ))}
        </div>
        </section>
    );
}

export default CodeMap;
