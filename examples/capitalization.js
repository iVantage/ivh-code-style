// -----------------------------------------------------
// fooBarSnap not foo_bar_snap
// -----------------------------------------------------
var fooBarSnap = "foo bar and snap";

// -----------------------------------------------------
// Constructors should be in UpperCamelCase, just like regular camelCase but the
// first letter is also uppercase.
// -----------------------------------------------------
var ClientConstructor = function(uuid) {
  this.id = uuid;
};

var oneClientInstance = new ClientConstructor('1234-abcd-12346642');

// -----------------------------------------------------
// Use . or _ as appropriate for namespacing. This is mostly relevant for
// languages that don't have object types.
// -----------------------------------------------------
var ivh = {};
ivh.generateReport = function() {
  // stuffs
};
