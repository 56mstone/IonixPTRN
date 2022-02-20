import * as desarrolloActions from "./desarrolloActions";
import * as filtrosActions from "./filtrosActions";
import * as filtrosVisualizacionActions from "./visualizacionActions";
import * as detalleActions from "./detalleActions";
import * as navigationActions from "./navigationActions";
import * as fechaActions from "./fechaActions";
import * as loginActions from "./loginActions";
import * as modalActions from "./modalActions";

const ActionCreators = Object.assign(
  {},
  desarrolloActions,
  filtrosActions,
  filtrosVisualizacionActions,
  detalleActions,
  navigationActions,
  fechaActions,
  loginActions,
  modalActions
);

export default ActionCreators;
