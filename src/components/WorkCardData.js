// this file is serving as kind of an "api"/"data file" where WorkCard will fetch this api/data and then import/render in Work.js

import arcade from "../assets/arcade.png"
import calculator from "../assets/calculator.png"
import wordsearch from "../assets/wordsearch.png"
import taskmanager from "../assets/taskmanager.png"

const projectCardData = [
    {
        imgsrc: taskmanager,
        title: "Task Manager",
        text: "Utilizing my knowledge of React within a real-life applicable software for my own needs, I implemented a convenient and useful task manager. Consisting of a form to add tasks and their details to toggling each tasks' importance to clearing tasks as they're completed, I was able to effectively apply new concepts in React such as routing, hooks, states, and back-end JSON to store user data.",
        view: "https://task-manager-frontend-b8i8.onrender.com",
        source: "https://github.com/helenaxu924/Task-Manager"
    }, 
    {
        imgsrc: calculator,
        title: "Simple Calculator",
        text: "Practicing my self-learned skills of HTML, CSS, and Javascript. I initated all three into developing a calculator web application. To do so, I applied tools such as CSS Grid for the calculator format, Flexbox for the design, OOP for the stucture of function calls and user clicks, and debugging edge cases such as handling decimals and adding commas for proper numeric notation." ,
        view: "https://helenaxu924.github.io/Simple-Calculator/",
        source: "https://github.com/helenaxu924/Simple-Calculator"
    }, 
    {
        imgsrc: wordsearch,
        title: "GUI Word Search",
        text: "As a final project for my Java CS course, I implemented a multi-level GUI word search with Java Widgets, and applied knowledge such as searching algorithms and OOP. Consisting of a main page, three levels of difficulty and a user guide, I implemented navigation routing, reading from external files, and other functional programming principles.",
        source: "https://github.com/helenaxu924/Word-Search"
        // view:
    }, 
    {
        imgsrc: arcade,
        title: "Console Emoji Arcade",
        text: "Also a a final project for my Python CS course, I curated a console-based emoji arcade game. The arcade consisted of 3 simple games: Pictionary, Tic Tac Toe, and Simon Says. Within the arcade users have the option to indicate their selection from the main menu using keyboard inputs, and the use of dictionaries enabled users to select emojis with just a simple key. The game also imported modules and packages such as random, emoji, and time as well as the use of concepts such as loops, functions, statements, and exception handling in Python.",
        view: "https://replit.com/@Helenaxu924/XuEMOJIARCADEpy",
        source: "https://github.com/helenaxu924/Emoji-Arcade"
    }
]


export default projectCardData