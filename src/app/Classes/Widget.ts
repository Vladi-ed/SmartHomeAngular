export class Widget {

  title: string;
  type: string;
  cols: number;
  rows: number;


  constructor(title: string, cols: number, rows: number, type: string = 'none') {
    this.title = title;
    this.type = type;
    this.cols = cols;
    this.rows = rows;
  }
}
