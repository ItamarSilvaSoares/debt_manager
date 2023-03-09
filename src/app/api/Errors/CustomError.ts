class CustomError extends Error {
  constructor(status: number, message: string, name: string) {
    super(message);
    this.message = message;
    this.name = name;
    this.stack = String(status);
  }
}

export default CustomError;
