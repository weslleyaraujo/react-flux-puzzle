import createFields from '../helpers/create-fields';
import _ from 'underscore';

export default new class {

  data = {}

  getHead = () => {
    return _(this.data.fields)
      .chain()
      .where({ isMatched: false })
      .first()
      .value();
  }

  rebuild = (lines, size) => {
    this.data.fields = createFields(lines, size);
    this.data.options = _.shuffle(this.data.fields);
  }

  setMatched = () => {
    this.getHead().isMatched = true;
  }

  isMatched = (id) => {
    return this.getHead().id === id;
  }
}
