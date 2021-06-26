const notFound = (next:Function) => {
  const err : any = new Error('Not found');
  err.status = 404;
};

export default notFound;
