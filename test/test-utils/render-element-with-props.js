import sd from 'skin-deep';

export default function renderElementWithProps(component) {
  let element = sd.shallowRender(component);
  let instance = element.getMountedInstance();

  return {
    element,
    instance
  }
}
