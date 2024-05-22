const success = (message:string, data:any) =>{
    return {
      success: true,
      message: message,
      data: data,
    };
}

const error = (message:string, err:any) =>{
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
