import React, {Component} from "react";
import './Todos.scss';
import store from "../../redux/store";
import {
    Button,
    DataTable,
    Table,
    TableBatchAction,
    TableBatchActions,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
    TableSelectAll,
    TableSelectRow,
    TableToolbar,
    TableToolbarContent,
    TableToolbarSearch
} from 'carbon-components-react';
import {Delete16, Edit16, Task16} from '@carbon/icons-react';
import {Link} from "react-router-dom";
import * as actions from "../../redux/actions";

export default class Todos extends Component {

    storeUnsubscribe;

    constructor(props) {
        super(props);
        this.state = {
            todosHeaders: this.getTodosHeaders(),
            todos: this.getTodos()
        }
    }

    componentDidMount() {
        this.storeUnsubscribe = store.subscribe(() => {
            this.setState({todos: this.getTodos()});
        });
    }

    getTodosHeaders() {
        return [{
            header: "Id",
            key: "id"
        }, {
            header: "Title",
            key: "title",
        }, {
            header: "Description",
            key: "description",
        }, {
            header: "Done",
            key: "done",
        }, {
            header: "",
            key: "update"
        }];
    }

    getTodos() {
        return store.getState().map(it => {
            return {
                ...it,
                done: it.done ? "Yes" : "Not yet",
                update: it.id
            };
        });
    }

    componentWillUnmount() {
        this.storeUnsubscribe();
    }

    deleteAll(ids) {
        ids.forEach(it => actions.removeTodo(it));
    }

    markAllDone(ids) {
        ids.map(it => this.state.todos.filter(todo => todo.id === it)[0]).forEach(it => {
            actions.updateTodo(it.id, it.title, it.description, it, true);
        });
    }

    render() {
        return (
            <DataTable
                rows={this.state.todos}
                headers={this.state.todosHeaders}
                render={({
                             rows,
                             headers,
                             getHeaderProps,
                             getRowProps,
                             getSelectionProps,
                             getBatchActionProps,
                             onInputChange,
                             selectedRows
                         }) => (
                    <TableContainer
                        data-testid="t-todos-table-container"
                        title="Todos">
                        <TableToolbar
                            data-testid="t-todos-table-toolbar">
                            <TableBatchActions {...getBatchActionProps()}>
                                <TableBatchAction
                                    tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                                    renderIcon={Delete16}
                                    onClick={() => {
                                        this.deleteAll(selectedRows.map(it => it.id));
                                        getBatchActionProps().onCancel();
                                    }}>
                                    Delete
                                </TableBatchAction>
                                <TableBatchAction
                                    tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                                    renderIcon={Task16}
                                    onClick={() => {
                                        this.markAllDone(selectedRows.map(it => it.id));
                                        getBatchActionProps().onCancel();
                                    }}>
                                    Mark Done
                                </TableBatchAction>
                            </TableBatchActions>
                            <TableToolbarContent>

                                <TableToolbarSearch
                                    tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                                    onChange={onInputChange}/>

                                <Button
                                    tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                                    onClick={() => this.props.history.push('/todos/create')}
                                    size="small"
                                    kind="primary">
                                    Create todo
                                </Button>

                            </TableToolbarContent>
                        </TableToolbar>
                        <Table
                            data-testid="t-todos-table"
                            size='normal'>
                            <TableHead
                                data-testid="t-todos-table-head">
                                <TableRow>
                                    <TableSelectAll {...getSelectionProps()} />
                                    {headers.map(header => (
                                        <TableHeader {...getHeaderProps({header})}>
                                            {header.header}
                                        </TableHeader>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody
                                data-testid="t-todos-table-body">
                                {rows.map(row => {
                                    return (
                                        <TableRow {...getRowProps({row})}>
                                            <TableSelectRow {...getSelectionProps({row})} />
                                            {
                                                row.cells.map(cell => {
                                                    if (cell.info.header === 'update')
                                                        return (
                                                            <TableCell key={cell.id}>
                                                                <Link to={`/todos/${cell.value}/update`}>
                                                                    <Button kind='secondary' size='small'
                                                                            hasIconOnly
                                                                            renderIcon={Edit16}
                                                                            tooltipAlignment="center"
                                                                            tooltipPosition="bottom"
                                                                            iconDescription="Update this todo"
                                                                    />
                                                                </Link>
                                                            </TableCell>
                                                        );
                                                    if (cell.info.header === 'delete')
                                                        return (
                                                            <TableCell key={cell.id}>
                                                                <Button kind='danger' size='small'
                                                                        hasIconOnly
                                                                        renderIcon={Delete16}
                                                                        tooltipAlignment="center"
                                                                        tooltipPosition="bottom"
                                                                        iconDescription="Delete this todo"
                                                                />
                                                            </TableCell>
                                                        );
                                                    return (
                                                        <TableCell key={cell.id}>{cell.value}</TableCell>
                                                    );
                                                })
                                            }
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>)}
            />
        );
    }

}
