const success = (message:string, data:unknown) =>{
    return {
      success: true,
      message: message,
      data: data,
    };
}

const error = (message:any, err:any) =>{
    return {
      success: false,
      message: message,
      data: err,
    };
}

export {
    success,
    error,
}
