interface Job {
  key: number;
  value: string;
}

class JobRunner {
  data: Job[] = [];

  insert = (node: Job) => this.data.push(node);

  maximum = () =>
    this.data.length == 0
      ? null
      : this.data.reduce((min, current) =>
          current.key < min.key ? current : min
        );

  extractMaximum = () => {
    if (this.data.length == 0) return null;

    let min = this.data[0];
    let minIndex = -1;
    this.data.forEach((item, index) => {
      if (item.key < min.key) {
        min = item;
        minIndex = index;
      }
    });

    this.data.splice(minIndex, 1);
    return min;
  };

  increaseKey = (node: Job, key: number) => {
    this.data = this.data.map((item) => {
      if (Object.is(item, node)) {
        node.key = key;
        return node;
      }
      return node;
    });
  };
}

const jobRunner = new JobRunner();

[1, 2, 3, 4, 5].forEach((item) => {
  const node: Job = {
    key: Math.floor(Math.random() * 100),
    value: `Job number ${item}`,
  };

  jobRunner.insert(node);
});

const items = jobRunner.data.length;

for (let index = 0; index < items; index++) {
  const element = jobRunner.extractMaximum();
  console.log(element);
}
