const chalk = require("chalk");
const yargs = require("yargs");
const note = require("./notes");

yargs.command({
  command: "add",
  describe: "Add a new note",

  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },

  handler: (argv) => {
    note.addnote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    note.deletenote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List notes",
  handler: () => {
    console.log("Listing out all the notes");
  },
});

yargs.command({
  command: "read",
  describe: "read note",
  handler: () => {
    console.log("Reading a note");
  },
});

yargs.parse();
