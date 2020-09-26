function expand(amount, name, object) {
	let o = object[name];

	do {
		o = o[name];
	} while(amount--);
}

let handler = {
	get: function(o, p) {
		return o[p] = new Proxy({}, handler);
	}
};

let object = new Proxy({}, handler);

// object.accessing.any.property.will.create.it.for.you.automatically.so.you.can.do.things.like.this.xd
//
// or you can expand it using `expand`, for example, if you want to go 100
// layers deep with a property name of 'lol', use `expand(100, 'lol', object)`
