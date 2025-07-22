export const loaderMock = (LoaderComponent, count) => {
  const amountRandomEl = Math.floor(Math.random() * count + 1);
  const mock = [];
  for (let i = 0; i < amountRandomEl; i++) {
    mock.push(<LoaderComponent key={i}/>);
  }
  return mock;
};
