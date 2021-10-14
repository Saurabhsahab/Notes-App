const chalk = require("chalk");
const fs = require("fs");

const addnote = (t, b) => {
  const notes = loadnotes();
  const dpc = notes.find((x) => {
    return t === x.title;
  });

  if (!dpc) {
    notes.push({
      title: t,
      body: b,
    });

    const y = JSON.stringify(notes);

    fs.writeFileSync("notes.json", y);

    console.log(chalk.green.inverse("Note added !!!"));
  } else {
    console.log(chalk.red.inverse("Title is taken !!!"));
  }
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
  const dpc = notes.filter((y) => {
    return y.title != x;
  });

  if (dpc.length === notes.length) {
    console.log(chalk.red.inverse("Note not found !!!"));
  } else {
    const z = JSON.stringify(dpc);

    fs.writeFileSync("notes.json", z);
    console.log(chalk.green.inverse("Note deleted !!!"));
  }
};

const listnotes = () => {
  console.log(chalk.bold.blueBright.inverse("All present notes title are"));
  const sn = loadnotes();

  sn.forEach((x) => {
    console.log(chalk.yellowBright.inverse(x.title));
  });
};

const read = (x) => {
  const sn = loadnotes();

  const pl = sn.filter((y) => {
    return x === y.title;
  });

  if (pl.length === 0) console.log(chalk.red.inverse("Note not found"));
  else {
    pl.forEach((e) => {
      console.log(chalk.green.inverse("Notes' content is : "));
      console.log(e.body);
    });
  }
};

module.exports = {
  addnote: addnote,
  deletenote: deletenote,
  list: listnotes,
  read: read,
};
