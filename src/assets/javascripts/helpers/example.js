import countdown from './countdown';

let example = (data) => {
  console.log('callback', data, this);
};

countdown(10 * 60, example, () => console.log('done!'));
