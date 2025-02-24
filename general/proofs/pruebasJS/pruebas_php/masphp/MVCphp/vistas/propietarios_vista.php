
<?php require 'controladores/propietario_controlador.php'; ?>

<table>
    <thead>
        <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Active</th>
            <th colSpan="2">Acciones</th>
        </tr>
    </thead>
    <tbody>

        <?php foreach(propietario::mostrar() as $fila): ?>
            <tr>
                <td><?php echo $fila['cedula']; ?></td>
                <td><?php echo $fila['nombre']; ?></td>
                <td><?php echo $fila['active']; ?></td>
                <td>Actualizar | Eliminar</td>
            </tr>
        <?php endforeach; ?>

</tbody>
</table>

