import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'portfolio';
    myProfile = {
        "fname": "ASIF",
        "lname": "KHAN",
        "address": "Kutubshah Nagar, Gittikhadan, Katol Road, Nagpur-13",
        "contactNo": "+91 8956742601",
        "email": "mohammadasifkhan619@gmail.com",
        "about": "I am a talented and ambitious front-end developer with one Year of experience. Proficient in HTML, CSS,  Bootstrap,and JavaScript, I have successfully built visually appealing and responsive web applications. I am a detail-oriented team player, collaborating effectively with designers, back-end developers, and stakeholders to deliver high-quality code and exceptional user experiences. ",
        "projects": [
            {
                "project_name": "WEB OS",
                "year": 2022,
                "role": ["Designed the UI of a web OS using React"],
                "description": "A React based Web OS with the functionality of login, logout, having a calendar & clock."
            },
            {
                "project_name": "Student Management System",
                "year": 2022,
                "role": [ "Created the python CLI application using Replit"],
                "description": "Created the student manager where we can store data of students and can perform operations like adding student details, removing student details, updating student details."
            }
        ],
        "education": [
            {
                "graduation": {
                    "type": "B.Tech Computer Science",
                    "duration": "2025",
                    "course_name": "RTM NAGPUR UNIVERSITY",
                    "gpa": "GPA-9.95",
                },
                "hsc": {
                    "type": "HSC",
                    "duration": "2021",
                    "course_name": "Maharashtra State Board",
                    "gpa": "90.5%",
                },
                "ssc": {
                    "type": "SSC",
                    "duration": "2019",
                    "course_name": "Maharashtra State Board",
                    "gpa": "80.2%",
                },

            }

        ],
        "skills": [
            { "title": "Programming", 
              "skills": [" C", " C++", " Python", " HTML", " CSS", " Bootstrap", " JavaScript", " jQuery", " React js", " Angular js", " MySQL"] },
            { "title": "Tools", 
              "skills": [" VS Code", " Sublime Text", " Github", " firebase", " Replit", " Wordpress", " Canva" ," Blender 3D", " Code Chef", " Codeforces", ] },
            { "title": "Other Skills", 
              "skills": [" Graphic Designing", " 3D Modelling", " Competitive Coding"] }
        ],
        "awards": [
            "2nd Winner of logo designing using canva", 
            "Mobile Web Specialist - Google Certification", 
            "University of Colorado Boulder - Emerging Tech Competition 2009", 
            "University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)"
        ],
        "hobbies": [" Competitive Coding", " Learing new things", " Palying Online Games"]
    }
}


