const fs=require('fs');
//vectores
listaCursos=[];
listaUsuarios=[];
listaRegistro=[];//aqui se guardan los registos del rol de aspirante

const crearCurso=(curso)=>{
	listarC();
	let cur={
		nombrecurso:curso.nombrecurso,
		duracion:curso.duracion,
		valor:curso.valor,
		ide:curso.ide
	};
	let duplicado=listaCursos.find(nom=>nom.nombrecurso==curso.nombrecurso);
	if(!duplicado){
	listaCursos.push(cur);
	console.log(listaCursos);
	guardarCurso();}else{
		console.log('Ya existe otro curso con ese nombre');
	}
}
//listar cursos
const listarCursos=()=>{
	listarC();
	listaCursos.forEach(curso=>{
		console.log(curso.nombrecurso);
		console.log('duracion '+curso.duracion);
		console.log('valor '+curso.valor);
		console.log('ide '+curso.ide+'\n');
	});
	
}


const crearUsuario=(usuario)=>{
	listar();
	let usu={
		nombre:usuario.nombre,
		cedula:usuario.cedula,
		contraseña:usuario.contraseña
		rol:usuario.rol
	};
	let duplicadoUsu=listaUsuarios.find(ced=>ced.cedula==usuario.cedula);
	if(!duplicadoUsu){
	listaUsuarios.push(usu);
	console.log(listaUsuarios);
	guardarUsuario();}else{
		console.log('Ya existe otro usuario con ese Numero de cedula');
	}
}
//listar usuarios
const listarUsuarios=()=>{
	listar();
	listaUsuarios.forEach(usuario=>{
		console.log(usuario.nombre);
		console.log('la cedula del usuario es '+usuario.cedula+'\n');
	});

}
//listando los usuarios guardados
const listar = () =>{
    try{
    listaUsuarios= require('./Listadousuario.json');
    //listaEstudiantes= JSON.parse(fs.readFileSync('listado.json'));
    }catch(error){
        listaUsuarios=[];//excepcipn para cuando el arreglo este vacio
    }
}
const listarC = () =>{//listando los cursos guardados
    try{
    listaCursos= require('./Listadocursos.json');
    //listaEstudiantes= JSON.parse(fs.readFileSync('listado.json'));
    }catch(error){
        listaCursos=[];//excepcipn para cuando el arreglo este vacio
    }
}
const listarA = () =>{//listado de los aspirantes
    try{
    listaRegistro= require('./ListadoAspirante.json');
    //listaEstudiantes= JSON.parse(fs.readFileSync('listado.json'));
    }catch(error){
        listaRegistro=[];//excepcipn para cuando el arreglo este vacio
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
const guardarAspirante=()=>{
	let datosA=JSON.stringify(listaRegistro);
	fs.writeFile('ListadoAspirante.json',datosA,(err)=>{
		if(err)throw(err);
		console.log('Registro realizado con Exito');
	})
}
//creando registro de aspirante
const crearRegistroAspirante=(aspirante)=>{
	listarA();
	let aspi={
		nombrecurso:aspirante.nombrecurso,
		nombre:aspirante.nombre
	
	};
	let encontrado = listaRegistro.find(buscar => buscar.nombre!=aspirante.nombre)//funcion flecha duplicado
	if(!encontrado){//validacion para para aspirantes que no se han registrado previamente
		console.log('El aspirante aun no se ha registrado en el sistema')
	}else{
	let duplicadoUsu=listaRegistro.find(nom=>nom.nombrecurso==aspirante.nombrecurso && nom.nombre==aspirante.nombre);//validacion usuario ya matriculado en algun curso
	 if(!duplicadoUsu){
	listaRegistro.push(aspi);
	console.log(listaRegistro);
	guardarAspirante();}else{
		console.log('Ya estas registrado en este curso');
	}}
		
}
const mostrarReg = (nom) =>{//muestra todos los cursos en el que el estudiante esta inscrito
	listarA();
	let est = listaRegistro.filter(buscar => buscar.nombre==nom)//funcion flecha duplicado
	if(!est){//validacion de duplicado

	console.log('no existe este estudiante');
   
	}else
	//listaRegistro.filter(buscar => buscar.nombre==nom)
		est.forEach(aspirante => {
			if(aspirante.nombre)
            console.log(aspirante.nombre)
            console.log('Cursos registrados')
            console.log('Curso de '+aspirante.nombrecurso+'\n')
            
		});
	}
	const eliminarC = (nom) =>{//elimininar cualquier curso
		listarC();
		let nuevo = listaCursos.filter (cur => cur.nombrecurso != nom);
		if(nuevo.length== listaCursos.length){
			console.log('ningun curso tiene el nombre indicado')
		}else
		  listaCursos = nuevo
		  guardarCurso();
				
			}
		
		

module.exports={
	crearCurso,
	crearUsuario,
	listarUsuarios,
	listarCursos,
	crearRegistroAspirante,
	mostrarReg,
	eliminarC
	
}