import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
//import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,0,0)", "rgb(136,0,0)"];

export const info = {
    firstName: "Mehmet",
    lastName: "Zorlu",
    initials: "MZ", 
    position: "a Software Engineer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '💻',
            text: 'Based in the Netherlands'
        },
        {
            emoji: "📖",
            text: "MSc Computer Science student at TU/e"
        },
        {
            emoji: "📬",
            text: <a href="mailto:memo.zzzorlu@gmail.com">memo.zzzorlu@gmail.com</a> 
        }
    ],
    socials: [
        {
            link: "https://github.com/MehmetZorlu07",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/mehmet-zorlu-2a05a299",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.facebook.com/Mehmet.Zorlu9917/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/mehmet.zorlu__/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },

    ],
    bio: "Hello! I'm Mehmet. I'm a MSc Computer Science and Engineering student at Eindhoven University of Technology, TU/e. I studied Computing Science BSc at University of Glasgow. I love gaming, and I think we might be in the Matrix!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'python', 'bootstrap', 'html5', 'css3', 'SQL'],
            exposedTo: ['nodejs', 'C/C++/C#', 'Unity', 'java']
        }
    ,
    hobbies: [
        {
            label: 'Music Production',
            emoji: '🎼'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        },
        {
            label: 'Chess',
            emoji: '♟'
        },
    ],
    portfolio: [ 
        {
            title: "Remote Research",
            live: "https://remote-research.herokuapp.com/", 
            source: "https://github.com/MehmetZorlu07/remote-mentoring", 
            image: mock1
        },
        {
            title: "Smart Brain",
            live: "https://smart-brain-cy.herokuapp.com/",
            source: "https://github.com/MehmetZorlu07/smart-brain",
            image: mock2
        },
        {
            title: "Pig Game",
            live: "https://mehmetzorlu07.github.io/Pig-Game/",
            source: "https://github.com/MehmetZorlu07/Pig-Game",
            image: mock3
        },
        {
            title: "FoodLife International Ltd",
            live: "https://www.foodlifeint.com/",
            source: "https://www.foodlifeint.com/",
            image: mock4
        },
        // {
        //     title: "AGH Zorlu Gida",
        //     image: mock5
        // }
    ],
    projects: [
        {
            name: '- Medipix (Collaboration with CERN)'   
        },
        {
            name: '- Glasgow Gems (Django WebApp)'   
        },
        {
            name: '- Cardinality Estimator for Path Queries On Graphs'   
        },
        {
            name: '- Discovery of Multivariate Correlations with Three Variables (Spark)'   
        },
        {
            name: '- Modelling and Visualizing Sweep Objects (Unity)'   
        },
        {
            name: '-  Developing a Language for Ordering Computing Hardware from a Vendor (Rascal)'   
        },
        {
            name: '-  Developing a Model Transformation for Visualizing Hardware Configurations (Ecore)'   
        },
        {
            name: '-  Developing a File Search Language (Rascal)'   
        },
        {
            name: '-  Digital Twin of a Smart Room (IBM Rhapsody)'   
        },
        {
            name: '-  Particle systems'   
        },
        {
            name: '-  Fluid Simulation'   
        },
        {
            name: '- Alice Simulation Projects'
        },
        {
            name: '- Sigma16 Assembly Project'
        },
        {
            name: '- Book Recommendation'   
        },
        {
            name: '- Superhero Game'   
        },
        {
            name: '- Socket Programming'   
        },
        {
            name: '- Smith-Waterman Algorithm in C'   
        },
        {
            name: '- Concurrent Dependency Discoverer in C++'   
        },
        {
            name: '- PowerShell Script for custom installation'   
        },
        {
            name: '- BodgeIt Website Hacking'   
        },
        {
            name: '- Mobile App Design for Campus Experience'   
        },
        {
            name: '- Thread Subreddit Classification'   
        },
        {
            name: '- Comment Discourse Classification'   
        },
        {
            name: '- Applications of Suffix Trees'   
        },
        {
            name: '- Professor Web Scraper (Haskell)'   
        },
        {
            name: '- Covid House Game'   
        },
        {
            name: '- Compiler Extension (Fun)'   
        },
        {
            name: '- Chessboard Setup by Baxter (Robot)'   
        },
        {
            name: '- Comparison of Sorting Algorithms'   
        },
        {
            name: '- Dynamic Set Implementation'   
        },
    ],
}