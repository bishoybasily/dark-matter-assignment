export default class RuntimeException {

    code: number
    msg: string

    static from(code, msg) {
        let exception = new RuntimeException();
        exception.code = code;
        exception.msg = msg;
        return exception;
    }

}
