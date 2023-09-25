export const useMadeUnicList = (arr) => {
  const list = [];
  let obj;
  arr.map(
    (flight) => (
      (obj = {}),
      (obj.name = flight.flight.carrier.caption),
      (obj.code = flight.flight.carrier.airlineCode),
      (obj.price = flight.flight.price.total.amount),
      list.push(obj)
    )
  );
  list.sort((a, b) => b.price - a.price);
  let unicList = [
    ...new Map(list.map((elem) => [elem["name"], elem])).values(),
  ];
  return unicList;
};
