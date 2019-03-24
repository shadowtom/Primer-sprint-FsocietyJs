const {argv}=require ('./Modulocreacion');

let comando=argv._[0];

if (argv._[0]=='crear curso'){
	Funciones.crearCurso(argv);
}
if (argv._[0]=='registrar'){
	Funciones.crearUsuario(argv);
}