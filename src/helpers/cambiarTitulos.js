export const cambiarTitulo = (nombrePagina) => {
  switch (nombrePagina) {
    case "HomePage":
      document.title = "WarpPass";
      break;
    case "LoginPage":
      document.title = "Iniciar Sesión | WarpPass";
      break;
    case "RegisterPage":
      document.title = "Registro | WarpPass";
      break;
    case "CrearEvento":
      document.title = "Crear Evento | WarpPass";
      break;
    case "GaleriaEventos":
      document.title = "Eventos | WarpPass";
      break;
    case "Perfil":
      document.title = "Mi Perfil | WarpPass";
      break;
    case "ContactPage":
      document.title = "Contacto | WarpPass";
      break;
    case "HomeAdminPage":
      document.title = "Admin | WarpPass";
      break;
    case "PanelEventos":
      document.title = "Panel Eventos | WarpPass";
      break;
    case "PanelUsuarios":
      document.title = "Panel Usuarios | WarpPass";
      break;

    default:
      document.title = "Pagina no encontrada :(";
      break;
  }
};
