export class PageContent {
  constructor(json) {
    // array since could have multiple sub pages
    this.amount = 0;

    this.name = [];
    this.description = [];
    this.complexity = [];
    this.implementation = [];

    this.parseJSON(json);
  }

  parseJSON(json) {
    for (let sub in json) {
      this.amount++;

      // name
      this.name.push(sub);

      // description
      let desc = [];
      for (let line in json[sub]["description"]) {
        desc.push(json[sub]["description"][line]);
      }
      this.description.push(desc);

      // complexity
      let comp = new Map();
      for (let compCategory in json[sub]["complexity"]) {
        comp.set(compCategory, json[sub]["complexity"][compCategory]);
      }
      this.complexity.push(comp);

      // implementation
      let impl = new Map();
      for (let lang in json[sub]["implementation"]) {
        let lines = [];
        for (let line in json[sub]["implementation"][lang]) {
          lines.push(json[sub]["implementation"][lang][line]);
        }
        impl.set(lang, lines.join("\n"));
      }
      this.implementation.push(impl);
    }
  }

  getAmount() {
    return this.amount;
  }

  getName(index) {
    return this.name[index];
  }

  getDescription(index) {
    return this.description[index];
  }

  getComplexity(index) {
    return this.complexity[index];
  }

  getImplementation(index) {
    return this.implementation[index];
  }
}
