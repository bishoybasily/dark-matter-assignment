import * as actions from "./actions";

let id = 0;

export const todosReducer = (state = [], action) => {

    let payload = action.payload;
    let type = action.type;

    switch (type) {

        case actions.CREATE_TODO:
            return [...state, {
                id: ++id,
                title: payload.title,
                description: payload.description,
                time: payload.time,
                done: false
            }];

        case actions.REMOVE_TODO:
            return state.filter(it => it.id !== payload.id);

        case actions.UPDATE_TODO:
            return state.map(it => {
                if (it.id === payload.id) {
                    it.title = payload.title;
                    it.description = payload.description;
                    it.time = payload.time;
                    it.done = payload.done;
                }
                return it;
            });

        default:
            return state;

    }

}
