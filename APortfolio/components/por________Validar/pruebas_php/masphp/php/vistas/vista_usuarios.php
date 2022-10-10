
<?php 
    require_once "controladores/controlador_consultas.php"; 
    require_once "modelos/modelo_conexion.php";

?>

<main>
    <div class="large">
        <div class="small">
            <div class="content">
                
                <div>
                    <a style="text-decoration:none;color:white;font-size:30px;" href="vistas/vista_agregar.php">Agregar</a>
                </div>
                
                <article>
                    <h2>php mvc</h2>
                    <br>
                    <h4>aqui los datos a mostrar actualizar y eliminar</h4>
                    
                    <table>
                        <thead>
                            <tr style="padding:20px !important;">
                                <th>usuario</th>
                                <th>contrasena</th>
                                <th>active</th>
                                <th colspan="2">acciones</th>
                            </tr>
                        </thead>
                        <?php 
                        // $consulta = new Controlador_consultas();
                        foreach(Controlador_consultas::consulta() as $resultado): ?>
                            
                            <tr>
                                <form action="" method="post">

                                    <td><?php echo $resultado['usuario']; ?></td>
                                    <td><?php echo $resultado['password']; ?></td>
                                    <td><?php echo $resultado['active']; ?></td>
                                    
                                    <td><input type="submit" name="actualizar" value="Actualizar"> </td>
                                    <td><input type="submit" name="eliminar" value="Eliminar"> </td>
                                    
                                </form>
                            </tr>
                            
                            <?php endforeach; ?>

                        </table>

                </article>
            </div>
        </div>
    </div>
</main>