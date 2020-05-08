export class Todo {

    id: number;
    title: string;
    description: string
    done: boolean

    static from(id, title, description, done) {
        let todo = new Todo();
        todo.id = id;
        todo.title = title;
        todo.description = description;
        todo.done = done;
        return todo;
    }

}
