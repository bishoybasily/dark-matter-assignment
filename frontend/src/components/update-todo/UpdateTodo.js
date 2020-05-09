import React from "react";
import './UpdateTodo.scss';
import {Button, Form, FormGroup, TextArea, TextInput} from "carbon-components-react";
import * as actions from "../../redux/actions";
import store from "../../redux/store";
import BaseTodoComponent from "../BaseTodoComponent";

export default class UpdateTodo extends BaseTodoComponent {

    constructor(props) {
        super(props);
        this.state = {
            todo: store.getState().todos.filter(it => it.id.toString() === props.match.params.id.toString())[0],
            valid: false
        }
    }

    getTodo() {
        return this.state.todo;
    }

    render() {
        return (
            <div
                data-testid="t-update-todo-form">
                <h4>Update todo</h4>
                <Form>
                    <FormGroup legendText="">
                        <TextInput
                            data-testid="t-update-todo-input-title"
                            onChange={e => {
                                const value = e.target.value;
                                this.setState(it => {
                                    return {
                                        ...it,
                                        todo: {
                                            ...it.todo,
                                            title: value
                                        },
                                        valid: this.fieldsAreValid()
                                    };
                                });
                            }}
                            value={this.state.todo.title}
                            id="title"
                            labelText="Todo title"
                            placeholder="Title text"/>
                    </FormGroup>
                    <FormGroup legendText="">
                        <TextArea
                            data-testid="t-update-todo-input-description"
                            onChange={(e) => {
                                const value = e.target.value;
                                this.setState(it => {
                                    return {
                                        ...it,
                                        todo: {
                                            ...it.todo,
                                            description: value
                                        },
                                        valid: this.fieldsAreValid()
                                    };
                                });
                            }}
                            cols={50}
                            value={this.state.todo.description}
                            id="description"
                            labelText="Todo description"
                            placeholder="Description text"
                            rows={2}/>
                    </FormGroup>
                    <Button
                        data-testid="t-update-todo-submit"
                        kind="primary"
                        tabIndex={0}
                        disabled={!this.state.valid}
                        onClick={() => {
                            let todo = this.state.todo;
                            actions.updateTodo(todo.id, todo.title, todo.description, todo.done);
                            this.props.history.push('/todos');
                        }}
                        type="button">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }

}
