import createFields from '../helpers/create-fields';

export default {
  data: {},

  rebuild: (lines, size) => {
    this.data.fields = createFields(lines, size);
    this.data.options = _.shuffle(this.data.fields);
  }
}
