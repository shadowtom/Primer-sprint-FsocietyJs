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
const rol={
	demand:true,
	alias:'r'
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
	contraseña,
	rol
}
const registroAspirante={
	nombrecurso,
	nombre
}
const muestraRegistro={
	nombre
}
const elimina={
	nombrecurso
}
//ingresar
const inicio={
	ced,
	contraseña,
	rol
}
//creacion de rol
const argv =require('yargs')
			.command('crearCurso','Crea un curso para ofertar',creacionCurso)
			.command('registrar','Registrate como usuario',creacionUsuario)
			.command('mostrarUsuario','Esta es la lista de usuarios')
			.command('mostrarCurso','Lista de cursos disponible')
			.command('registrarAspirante','registro de aspirantes a cursos disponibles',registroAspirante)
			.command('mostrarRegistro','Cursos en los que se ha registrado',muestraRegistro)
			.command('eliminarCurso','Eliminacion de Cursos',elimina)
			.command('Ingresar','ingrese cedula y contraseña',inicio)
			.argv;

module.exports={
	argv
};