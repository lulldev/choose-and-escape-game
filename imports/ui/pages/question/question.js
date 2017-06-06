import { Session } from 'meteor/session';

import './question.html';

class QuestionComponent extends BlazeComponent {

    onCreated() {
        this.questionId = Session.get('questionId');
    }

    template() {
        return 'Question';
    }

    value() {
        return this.questionId;
    }

    events() {
        return [{
            'change input': this.onChange,
            'click input': this.onClick
        }];
    }

    onChange(event) {
        //Values.upsert(this.data().id, {$set: {
        //    value: event.target.value
        //}});
    }

    onClick(event) {
        $(event.target).select();
    }
}

QuestionComponent.register('QuestionComponent');