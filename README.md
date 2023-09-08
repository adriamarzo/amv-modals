# amv-modals
A simple and customizable modal management library for ReactJS application.

---

## Installation
`npm i --save amv-modals` or `yarn add amv-modals`

# Docs
The library uses Javascript custom events, React Portals and hooks. You can take a look from [here](https://adriamarzo.github.io/amv-modals/).

### 1. Instantiate the Modal Manager component
This library provides a component named `ModalManager`. This component is the responsible to get the existing DOM element, or create it in case it does not exist, from where the modals will be rendered.

| Prop   |      Type      |  Description |
|----------|-------------|------|
| portalId | String | The id of the DOM element to use as a root element of the modals |
| backgroundColor | String | The background color of the modal backdrop |
| zIndex | Number<br>(`1` by default) | Customize the z-order of the modals to overlap the rest of the elements.

### 2. Modal actions
You can create a modal through the `modalEventEmitter` provided object. It is a singleton that allows you to perform the following actions:

#### AddModal (creates a modal):

| Parameters   |      Type      |  Description |
|----------|-------------|------|
| `id` | String | Identifier of the modal |
| `content` | React component | Instance of a React component that represents the modal itself |
| `settings` | Object | Additional props used for the management of the modal. Actually it is supporting an `onClose` field which is a method called when user clicks on the modal background |

#### RemoveModal (removes an existing modal):

| Parameters   |      Type      |  Description |
|----------|-------------|------|
| `id` | String | Identifier of the modal |

#### UpdateModal (replaces an existing modal by the new one):

| Parameters   |      Type      |  Description |
|----------|-------------|------|
| `id` | String | Identifier of the modal |
| `content` | React component | Instance of a React component that represents the modal itself |
| `settings` | Object | Additional props used for the management of the modal. Actually it is supporting an `onClose` field which is a method called when user clicks on the modal background |

#### UpdateModalSettings (updates the settings of an existing modal):

| Parameters   |      Type      |  Description |
|----------|-------------|------|
| `id` | String | Identifier of the modal |
| `settings` | Object | Additional props used for the management of the modal. Actually it is supporting an `onClose` field which is a method called when user clicks on the modal background |

## Example:
``` js
import {
  ModalManager,
  modalEventEmitter,
} from 'amv-modals';
import CustomModal from '../components/custom-modal';

const Component = () => {
  useEffect(() => {
    modalEventEmitter.addModal('modal-1', <CustomModal />);
  }, []);

  return (<div>
    <p>This is an example</p>
    <ModalManager
      portalId="modal-portal"
      zIndex={10}
      backgroundColor="pink"
    />
  </div>);
};

```

# Considerations
The library is smart enough to avoid closing the modal when the click event has been triggered from the modal but propagated to the modal wrapper that renders the background.
But it is recommended that any `click` interation implemented in the modal includes the prevention of the propagation of the event.

# CI/CD [WIP]
This project is configured using:
- Semantic Release to automate the versioning of the package.
- GitHub actions to perform the required steps (build and upload to repository) to publish the resulting package.
- Npmjs as a repository where we can download all the versions of this library.
