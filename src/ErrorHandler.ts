export default class ErrorHandler extends Error {
    constructor(public success: Boolean, public statusCode: number, public message: string) {
        super();
    }
}
