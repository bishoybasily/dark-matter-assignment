export default class GeneralException {
    code: number
    msg: string

    static from(code, msg) {
        let exception = new GeneralException();
        exception.code = code;
        exception.msg = msg;
        return exception;
    }

}
