const reviewData = [
    {
        title: "Sushant KC",
        body: "You really think you can fly that thing? You know what? It is beets. I've crashed into a beet truck. They're using our own satellites against us. And the clock is ticking. Jaguar shark! So tell me - does it really exist? ",
        stars: 5
    },

    {
        title: "Rijan Giri",
        body: "This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Hey, you know how I'm, like, always trying to save the planet? Here's my chance.",
        stars: 4
    },
    {
        title: "Varsha Thapa",
        body: "You really think you can fly that thing? Jaguar shark! So tell me - does it really exist? Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You really think you can fly that thing? Must go faster... go, go, go, go, go!",
        stars: 3
    },
]

export default function handler(req, res) {
    res.status(200).json(reviewData)
}