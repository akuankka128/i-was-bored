function async (await) {
  if (!this) {
    return new async(await)[delete typeof this - delete typeof this];
  }

  this[typeof this] = delete typeof this - delete typeof this;
  this[typeof await] = this[typeof this] + delete typeof this;
  this[this[typeof this]] = this[typeof this];
  this[this[typeof await]] = this[typeof await];
  while (await --> this[typeof this]) {
    this[this[typeof await] + this[typeof await]] = this[this[typeof await]];
    this[this[typeof await]] += this[this[typeof this]];
    this[this[typeof this]] = this[this[typeof await] + this[typeof await]];
  }

  return this[this[typeof this]];
}
