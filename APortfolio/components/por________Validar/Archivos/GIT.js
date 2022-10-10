GIT


(DVCS)Control de versiones distribuido

git remote origin = https://gitlab.com/haku777/MyProyectGIT.git

git init: inicializar un proyecto

Working Directory
	git Add:
Stating Area
	git Gommit:

git Commit: pasar el proyecto al




git branch -d branch_name
Para eliminar una rama local, puedes usar cualquiera de los siguientes comandos de Git.


elininar una rama
git push remote_name --delete branch_name
o
git push remote_name :branch_name



git branch -a
3. Verifica el proceso
Obtén una lista de todas las ramas para verificar que has cambiado el nombre a la rama correcta:





1. Cambia el nombre de la rama de Git (Git Rename Branch) con la opción –m del comando

El comando Git rename requerirá que agregues la opción -m:

git branch -m new-name


git remote add origin git@github.com:username/project.git



3. Actualiza y confirma la nueva rama

Confirma tu nueva rama de Git utilizando la opción de checkout del comando:

git checkout new-branch-name

O

git checkout -b new-branch-name


para fucionar dos ramas nos paramos sobre la master y realizamos git merge y nombre de la rama a la que queremos que revise y despues editamos lo que queremos
dejar de las dos ramas sobre el archivo y guardamos con git add luego git commit y ya quedaria solucionado el merge




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
para evitar perdida de cambios pero necesitas traer unos archivos actualizados

hacer lo siguiente:

1- commit para guardar tu version de los cambios

2- git stash (esconde los cambios mientras realizas el merge local)
3- git stash pop (trae los cambios guardados o escondidos devuelta)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





000000000000000000000

- 845 Validar permisos de usuario para los documentos que debe de 
mostrar dentro del pop de validación de los catalogos en itemDocumento


$ git add –A
$ git commit –m "Some commit message"
$ git checkout master
$ git merge new-branch






TRABAJANDO CON GIT: ELIMINAR RAMAS LOCALES Y REMOTAS
24 / 08 / 2013 Otros

Hoy publicamos este pequeño tutorial Git donde explicamos cómo borrar ramas, tanto locales como remotas, en un repositorio Git.

Para eliminar una rama de nuestro repositorio local ejecutaremos el siguiente comando:


$ git branch -d nombre_rama

En el caso de que esa rama contenga trabajos sin fusionar, el comando anterior nos devolverá el siguiente error:


error: The branch 'nombre-rama' is not an ancestor of your current HEAD.
If you are sure you want to delete it, run 'git branch -D nombre-rama'.

Si aún así queremos eliminar esa rama, se puede forzar el borrado de la siguiente manera:


$ git branch -D nombre-rama

En el caso de querer eliminar una rama del repositorio remoto, la sintaxis será la siguiente:


$ git push origin :nombre-rama

Y de esta forma, desaparecerá la rama nombre-rama del servidor.







GIT IGNORE


# ignora los archivos terminados en .a
*.a

# pero no lib.a, aun cuando había ignorado los archivos terminados en .a en la línea anterior
!lib.a

# ignora unicamente el archivo TODO de la raiz, no subdir/TODO
/TODO

# ignora todos los archivos del directorio build/
build/

# ignora doc/notes.txt, pero no este: doc/server/arch.txt
doc/*.txt

# ignora todos los archivos .txt del directorio doc/
doc/**/*.txt
	



datos de acceso por usuario:

	Para configurar globalmente (para todos los repositorios )tu email y name añades --global

		git config --global user.email"tu@email.com"
		git config --global user.name"tunombre"

	y para hacerlo solo para un repositorio lo puedes hacer sin ese parámetro dentro del repositorio :

		git config user.email"tu@email.com"
		git config user.name"tunombre"

