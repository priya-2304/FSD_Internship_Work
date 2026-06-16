class TaskManager {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
    this.id = 0;
  }

  addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (!text) return;

    const task = {
      id: this.id++,
      text,
      status: "pending"
    };

    this.queue.push(task);
    this.renderTask(task);
    input.value = "";

    this.processQueue();
  }

  async processQueue() {
    if (this.isProcessing) return;

    this.isProcessing = true;

    while (this.queue.length) {
      const task = this.queue.shift();
      await this.runTask(task);
    }

    this.isProcessing = false;
  }

  sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  async runTask(task) {
    const statusEl = document.getElementById(`status-${task.id}`);

    statusEl.innerText = "🚀 Running";
    statusEl.className = "running";

    const delay = Math.floor(Math.random() * 4000) + 1000;
    await this.sleep(delay);

    statusEl.innerText = "✅ Done";
    statusEl.className = "done";
  }

  renderTask(task) {
    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <span class="badge">ID ${task.id}</span>
      <p>${task.text}</p>
      <p id="status-${task.id}" class="pending">⏳ Pending</p>
    `;

    document.getElementById("taskList").appendChild(div);
  }
}

const taskManager = new TaskManager();