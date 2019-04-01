const {argv}=require ('./Modulocreacion');
const Funciones=require('./Funciones');


console.log('Inicia el proceso de registro, si ya estas registrado ingresa');

let comando=argv._[0];
switch(comando){

	case 'crearCurso':
		Funciones.crearCurso(argv);
	break
	case 'registrar':
		Funciones.crearUsuario(argv);
	break
	case 'mostrarUsuario':
		Funciones.listarUsuarios();
	break
	case 'mostrarCurso':
		Funciones.listarCursos();
	break
	case 'registrarAspirante':
	Funciones.crearRegistroAspirante(argv);
	break
	case 'mostrarRegistro':
	Funciones.mostrarReg(argv.nombre, argv.nombrecurso);
	break
	case 'eliminarCurso':
	Funciones.eliminarC(argv.nombrecurso);
	break

	default:
		console.log('No ingreso un comando existente');
	break
}
