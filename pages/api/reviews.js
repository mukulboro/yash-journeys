const reviewData = ()=>[
    {
        name: "Sushant KC",
        body: "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Yes, Yes, without the oops!",
        stars: 5,
    },
    {
        name: "Rijan Giri",
        body: "We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Checkmate... Must go faster... go, go, go, go, go! Just my luck, no ice. Must go faster.",
        stars: 4,
    },
    {
        name: "Varsha Thapa",
        body: "Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Jaguar shark! So tell me - does it really exist? Hey, take a look at the earthlings. Goodbye! Remind me to thank John for a lovely weekend.",
        stars: 3,
    }
]

export default function handler(req, res) {
    res.status(200).json(reviewData)
}