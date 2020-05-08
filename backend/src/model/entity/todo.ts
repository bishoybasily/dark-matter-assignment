export class Todo {

    id: number;
    title: string;

    static from(id, title) {
        let u = new Todo();
        u.id = id;
        u.title = title;
        return u;
    }

}
