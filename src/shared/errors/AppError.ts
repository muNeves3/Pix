interface IErrorMessage {
  message: string;
  statusCode: number 
}

export default class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor({ message, statusCode = 400 }: IErrorMessage) {
      this.message = message;
      this.statusCode = statusCode;
  }
}
