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
	listaCursos.push(cur);
	console.log(listaCursos);
	guardarCurso();
}
//listar cursos
const listarCursos=()=>{
	try{
		listaCursos=require('Listadocursos.json');
	}catch(error){
		listaCursos=[];
	}
	
}
const crearUsuario=(usuario)=>{
	listarUsuarios();
	let usu={
		nombre:usuario.nombre,
		cedula:usuario.cedula,
		contraseña:usuario.contraseña
	};
	listaUsuarios.push(usu);
	console.log(listaUsuarios);
	guardarUsuario();
}
//listar usuarios
const listarUsuarios=()=>{
	try{
		listaUsuarios=require('Listadousuario.json');
	}catch(error){
		listaUsuarios=[];
	}
	
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