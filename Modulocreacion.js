/* 
	Archivo Principal Entregable 2
*/
 //menu principal
 const nombre={
 	demand: true,
	alias: 'n'
 }
const ced={
	demand:true,
	alias:'cd'
}
const contraseña={
	demand:true,
	alias:'pass'
}
//Constante Curso
const nombrecurso={
	demand: true,
	alias: 'nc'
}
const duracion={
	demand: true,
	alias: 'd'
}
const valor={
	demand: true,
	alias: 'v'
}
const ide={
	demand: true,
	alias: 'i'
}
//creacion curso
const creacionCurso={
	nombrecurso,
	duracion,
	valor,
	ide
}
//creacion usuario
const creacionUsuario={
	nombre,
	ced,
	contraseña
}
//creacion de rol
const argv =require('yargs')
			.command('crear curso','Crea un curso para ofertar',creacionCurso)
			.command('registrar','Registrate como usuario',creacionUsuario)
		//	.command('Mostrar usuarios','Esta es la lista de usuarios')
			.argv;

module.exports={
	argv
};