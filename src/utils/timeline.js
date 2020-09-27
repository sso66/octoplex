// timeline.js
console.log("Mounting timeline.js...");

let currentTime = new Date().getTime();
console.log(currentTime);

[
    {
        id: 1,
        timestamp: currentTime,
        text: "Ate lunch at Fresh Market, Jupiter",
        user: {
            id: 1,
            name: "Nate",
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [
            {
                from: "Ari", 
                text: "Me too!"
            }
        ]
    },
    {
        id: 2,
        timestamp: currentTime,
        text: "Visited Palladium Technologies, Friday",
        user: {
            id: 2,
            name: "Nate",
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [
            {
                from: "Ari", 
                text: "Me too!"
            }
        ]
    },
    {
        id: 3,
        timestamp: currentTime,
        text: "Woke up early for a beautiful run",
        user: {
            id: 3,
            name: "Ari",
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [
            {
                from: "Nate", 
                text: "I am so jealous"
            }
        ]
    },
    {
        id: 4,
        timestamp: currentTime,
        text: "This is React integration",
        user: {
            id: 4,
            name: "Ari",
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [
            {
                from: "Frank", 
                text: "How are you doing?"
            }
        ]
    }
];    
