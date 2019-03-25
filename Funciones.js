const fs=require('fs');
//vectores
listaCursos=[];
listaUsuarios=[];

const crearCurso=(curso)=>{
	listarCursos();
	let cur={
		nombre:curso.nombre,
		duracion:curso.duracion,
		valor:curso.valor,
		ide:curso.ide
	};
	let duplicado=listaCursos.find(nom=>nom.nombre==curso.nombre);
	if(!duplicado){
	listaCursos.push(cur);
	console.log(listaCursos);
	guardarCurso();}else{
		console.log('Ya existe otro curso con ese nombre');
	}
}
//listar cursos
const listarCursos=()=>{
	listaCursos();
	listaCursos.forEach(curso=>{
		console.log(curso.nombre);
		console.log('duracion '+curso.duracion);
		console.log('valor '+curso.valor);
		console.log('ide '+curso.ide+'\n');
	});
	
}
const crearUsuario=(usuario)=>{
	listarUsuarios();
	let usu={
		nombre:usuario.nombre,
		cedula:usuario.cedula,
		contraseña:usuario.contraseña
	};
	let duplicado=listaUsuarios.find(ced=>ced.cedula==usuario.cedula);
	if(!duplicado){
	listaUsuarios.push(usu);
	console.log(listaUsuarios);
	guardarUsuario();}else{
		console.log('Ya existe otro usuario con ese Ide');
	}
}
//listar usuarios
const listarUsuarios=()=>{
	listaUsuarios();
	listaUsuarios.forEach(usuario=>{
		console.log(usuario.nombre);
		console.log('la cedula del usuario es '+usuario.cedula+'\n');
	});

}
//Guardar archivos
const guardarCurso=()=>{
	let datosC=JSON.stringify(listaCursos);
	fs.writeFile('Listadocursos.json',datosC,(err)=>{
		if(err)throw(err);
		console.log('Listado de cursos creado con exito');
	})
}
const guardarUsuario=()=>{
	let datosU=JSON.stringify(listaUsuarios);
	fs.writeFile('Listadousuario.json',datosU,(err)=>{
		if(err)throw(err);
		console.log('Listado de usuarios creado con exito');
	})
}

module.exports={
	crearCurso,
	crearUsuario
}