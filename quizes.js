var choosenQuiz;

let States_Of_Matter_HW_01 = [
    {
        question: 'State of matter with a definite shape and definite volume.',
        choice1: 'Solid',
        choice2: 'Gas',
        choice3: 'Liquid',
        choice4: 'None Of the Above',
        awnswer: 1,
    },
    {
        question: 'State of matter with no definite shape and no definite volume',
        choice1: 'Solid',
        choice2: 'Gas',
        choice3: 'Liquid',
        choice4: 'None Of The Above',
        awnswer: 2,
    },
    {
        question: 'Particles move relative to each other, but remain in contact with each other.',
        choice1: 'Solid',
        choice2: 'Gas',
        choice3: 'Liquid',
        choice4: 'None Of The Above',
        awnswer: 3,
    },
    {
        question: 'Particles are not so closely spaced and slide past each other.',
        choice1: 'Solid',
        choice2: 'Gas',
        choice3: 'Liquid',
        choice4: 'None Of The Above',
        awnswer: 3,
    },
    {
        question: 'Basic state of matter with the greatest amount of energy.',
        choice1: 'Solid',
        choice2: 'Gas',
        choice3: 'Liquid',
        choice4: 'None Of The Above',
        awnswer: 2,
    },
    {
        question: 'The AVERAGE kinetic energy of particles in a substance is its...',
        choice1: 'Temperature',
        choice2: 'Kinetic Energy',
        choice3: 'Heat',
        choice4: 'None Of The Above',
        awnswer: 1,
    },
    {
        question: 'State of matter with a definite volume, but no definite shape.',
        choice1: 'Solid',
        choice2: 'Gas',
        choice3: 'Liquid',
        choice4: 'None Of The Above',
        awnswer: 3,
    },
    {
        question: 'Particles are closely spaced.',
        choice1: 'Solid',
        choice2: 'Gas',
        choice3: 'Liquid',
        choice4: 'None Of The Above',
        awnswer: 1,
    },
    {
        question: 'Particles vibrate in place and do not change relative positions.',
        choice1: 'Solid',
        choice2: 'Gas',
        choice3: 'Liquid',
        choice4: 'None Of The Above',
        awnswer: 1,
    },
    {
        question: 'Basic state of matter with the least amount of energy.',
        choice1: 'Solid',
        choice2: 'Gas',
        choice3: 'Liquid',
        choice4: 'None Of The Above',
        awnswer: 1,
    },
    {
        question: 'Basic state of matter with an intermediate (medium) amount of energy.',
        choice1: 'Solid',
        choice2: 'Gas',
        choice3: 'Liquid',
        choice4: 'None Of The Above',
        awnswer: 3,
    },
    {
        question: 'What happens to particles when their temperature increases?',
        choice1: 'The particles stay still',
        choice2: 'The particles blow up',
        choice3: 'The particles move slower',
        choice4: 'The particles move faster',
        awnswer: 4,
    },
    {
        question: 'What happens when the speed of particles decreases?',
        choice1: 'Their temperature decreases',
        choice2: 'Their temperature increases',
        choice3: 'The particles move slower',
        choice4: 'The particles move faster',
        awnswer: 1,
    },
    {
        question: 'When ice sits out on a counter and melts, it is because the ice has...',
        choice1: 'none',
        choice2: 'loses energy',
        choice3: 'none of the above',
        choice4: 'gained energy',
        awnswer: 4,
    }
];

function quiz() {
    choosenQuiz = 1;
    window.location.assign('../public/game.html')
}