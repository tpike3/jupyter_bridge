import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyter_bridge extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter_bridge:plugin',
  description: 'A JupyterLab extension that adds footer buttons to code cells for improved interactivity and visibility control, supporting operations like running cells, hiding/showing code, and managing output directly from the cell interface. Initial functionality included to mark documentation cells that are controlled by their corresponding code cells.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyter_bridge is activated!');
  }
};

export default plugin;
