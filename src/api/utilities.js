
const techImageNames = ['amazon.png', 'css.png', 'docker.png', 'github.png', 'html.png', 
                'javascript.png', 'mysql.png', 'node.png', 'python.jpg', 'react.png'];


const portfolioData = [ 
    {
        idx: 0,
        title: '3d-Maze Game',
        desc: 'I developed a game that generates a maze and allows the user to play a game where they try to escape the maze. The mazes may be generated with DFS, BFS, or sidewinder algorithms and may be solved with DFS, BFS, or A*.',
        imgDescName: 'maze-game.jpg',
        pageLink: 'https://1aoxomoxoa1.github.io/3d-Maze/',
        gitLinks: ['https://github.com/1aoxomoxoa1/3d-Maze'],
        techUsed: ['html.png', 'css.png', 'javascript.png'] 
    },
    {
        idx: 1,
        title: 'Online Store',
        desc: 'I developed a small website modeling an online shoe store. Front end built with react and back end built with Node and Express.',
        imgDescName: 'shoe-store.jpg',
        pageLink: 'https://shoe-store-pwtf.onrender.com/',
        gitLinks: ['https://github.com/1aoxomoxoa1/online-store-client', 'https://github.com/1aoxomoxoa1/shoe-store-backend'],
        techUsed: ['html.png', 'css.png', 'javascript.png', 'react.png', 
                    'mysql.png', 'node.png', 'amazon.png', 'github.png']
    },
    {
        idx: 2,
        title: 'Online Code Editor Classroom',
        desc: 'I developed a small website modeling an code editor. First user to enter the room is the teacher and can edit and the changes are live streamed to the other participants in the room who can see the live changes.',
        imgDescName: 'codeblock.png',
        pageLink: 'https://move-task-frontend.onrender.com/',
        gitLinks: ['https://github.com/1aoxomoxoa1/moveo-task'],
        techUsed: ['html.png', 'css.png', 'javascript.png', 'react.png', 'mysql.png', 
                    'node.png', 'github.png', 'docker.png']
    }
];

function checkNavigationHistory(location){
    console.log(location.state);
    window.history.replaceState(null, '')

    if(!location.state){
        console.log('not from menu');
        return true
    }else{
        console.log('from menu');
        return false;
    }
}


export {checkNavigationHistory, techImageNames, portfolioData}