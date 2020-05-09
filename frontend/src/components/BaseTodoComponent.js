import React, {Component} from "react";

export default class BaseTodoComponent extends Component {

    fieldsAreValid() {
        let todo = this.getTodo();
        return this.fieldIsValid(todo.title) === this.fieldIsValid(todo.description);
    }

    fieldIsValid(field) {
        return field !== undefined && field !== '';
    }

    getTodo() {
        return undefined;
    }

}
