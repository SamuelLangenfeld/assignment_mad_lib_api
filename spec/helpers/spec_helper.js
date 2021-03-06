// spec/helpers/spec_helper.js

// Set test environment
process.env.NODE_ENV = "test";

// spec/helpers/spec_helper.js

const mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost/mad_lib_test");

// Set test environment
process.env.NODE_ENV = "test";

beforeAll(done => {
  if (mongoose.connection.readyState) {
    done();
  } else {
    require("./../../mongo")().then(() => done());
  }
});

afterEach(done => {
  require("./../../seeds/clean")()
    .then(() => done())
    .catch(e => console.error(e.stack));
});