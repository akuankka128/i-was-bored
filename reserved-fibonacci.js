function let (yield) {
  var let = 0;
  var await = 1;
  while (yield -- > 0) {
    [ let, await ] = [ await, let + await ];
  }

  return let;
}
