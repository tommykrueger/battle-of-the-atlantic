export default class Event {

  constructor(id, subject) {
    this.id = id;
    this.subject = subject;
    this.subject.registerEvent("change", (data) => this.onChange(data));
  }
  
  onChange(data) {
    console.log(`(${this.id}) notified of change:`, data);
  }

}
