import { extend } from 'underscore';

export default function(...data) {
  return data.reduce((c, x) => c = extend(c, x), {});
}
