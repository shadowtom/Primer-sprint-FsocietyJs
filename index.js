const {argv}=require ('./Modulocreacion');
const Funciones=require('./Funciones');

let comando=argv._[0];

switch(comando){

	case 'crear curso':
		Funciones.crearCurso(argv);
	break
	case 'registrar':
		Funciones.crearUsuario(argv);
	break
	case 'Mostrar usuarios':
		Funciones.listarUsuarios(argv);
	break
	default:
		console.log('No ingreso un comando existente');
	break
}
