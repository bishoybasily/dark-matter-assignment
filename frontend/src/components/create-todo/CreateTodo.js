import React from "react";
import './CreateTodo.scss';
import {Button, Form, FormGroup, TextArea, TextInput} from 'carbon-components-react';
import * as actions from "../../redux/actions";
import BaseTodoComponent from "../BaseTodoComponent";

export default class CreateTodo extends BaseTodoComponent {

    constructor(props) {
        super(props);
        this.state = {
            todo: {
                title: '',
                description: ''
            },
            valid: false
        }
    }

    getTodo() {
        return this.state.todo;
    }

    render() {
        return (
            <div
                data-testid="t-create-todo-form">
                <h4>Create todo</h4>
                <Form>
                    <FormGroup legendText="">
                        <TextInput
                            data-testid="t-create-todo-input-title"
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
                            id="title"
                            labelText="Todo title"
                            placeholder="Title text"/>
                    </FormGroup>
                    <FormGroup legendText="">
                        <TextArea
                            data-testid="t-create-todo-input-description"
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
                            id="description"
                            labelText="Todo description"
                            placeholder="Description text"
                            rows={2}/>
                    </FormGroup>
                    <Button
                        data-testid="t-create-todo-submit"
                        kind="primary"
                        tabIndex={0}
                        disabled={!this.state.valid}
                        onClick={() => {
                            actions.createTodo(this.state.todo.title, this.state.todo.description);
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
