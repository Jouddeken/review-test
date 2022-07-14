async function getTodos() {
  const request = await fetch('https://jsonplaceholder.typicode.com/todos');
  const response = await request.json();

  return response;
}

function getTodosSection(start, end) {
  if (!start) start = 0;
  if (!end) end = 100;

  const todos = getTodos();
  return todos.slice(start, end);
}

getTodosSection(10, 30);

// -----------------------------------------------------------------------------

const v291 = {
  javascript: {
    version: 291,
  },
};

function updateVersion(nextVersion) {
  const vNext = { ...v291 };
  vNext.javascript.version = nextVersion;

  return vNext;
}

const v292 = updateVersion(292);

// -----------------------------------------------------------------------------

const utils = {
  name: "JavaScript",
  delay: 2000,
  printNameIn2Secs: function () {
    setTimeout(function() {
      console.log(this.name);
    }, this.delay);
  },
};

utils.printNameIn2Secs();

// -----------------------------------------------------------------------------
