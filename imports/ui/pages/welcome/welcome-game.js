import './welcome-game.html';

let bgMusic = ReactiveVar();

Template.WelcomeGame.onCreated(() => {
    bgMusic.set(new buzz.sound('/sounds/50 Cent - Position Of Power.mp3').play());
});

Template.WelcomeGame.events({
    'click .start-link' () {
        bgMusic.get().stop();
    }
});