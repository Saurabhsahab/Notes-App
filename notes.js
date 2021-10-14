const fs = require("fs");

const addnote = (t, b) => {
  const notes = loadnotes();
  const dpc = notes.filter((x) => {
    return t === x.title;
  });

  if (dpc.length == 0) {
    notes.push({
      title: t,
      body: b,
    });
  } else {
    console.log("Title is taken !!!");
  }

  const y = JSON.stringify(notes);

  fs.writeFileSync("notes.json", y);
};

const loadnotes = () => {
  try {
    const x = fs.readFileSync("notes.json");
    const y = JSON.parse(x);
    return y;
  } catch (e) {
    return [];
  }
};

const deletenote = (x) => {
  const notes = loadnotes();
};

module.exports = {
  addnote: addnote,
  deletenote: deletenote,
};
