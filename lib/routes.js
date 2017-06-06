import { Session } from 'meteor/session';

FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("Layout", {content: "WelcomeGame"});
    }
});

FlowRouter.route('/question/:questionId', {
    action: function(params) {
        Session.set('questionId', params.questionId);
        BlazeLayout.render("Layout", {
            content: "QuestionComponent"
        });
    }
});