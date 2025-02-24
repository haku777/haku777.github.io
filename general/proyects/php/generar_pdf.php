<?php

require_once "recursos/fpdf/fpdf.php";
require_once "conexion/conexion.php";

$datosPDF = "select * from usuarios";
$resultadoPDF = $con->query($datosPDF);
// if($resultadoPDF){
//     echo "bien<br>";    
// }else{
//     echo "mal";

// }


class PDF extends FPDF
{
function Header()
{
    global $title;

    // Arial bold 15
    $this->SetFont('Arial','B',15);
    // Calculamos ancho y posición del título.
    $w = $this->GetStringWidth($title)+6;
    $this->SetX((210-$w)/2);
    // Colores de los bordes, fondo y texto
    $this->SetDrawColor(32,56,75);
    $this->SetFillColor(76,134,198);
    $this->SetTextColor(255,255,255);
    // Ancho del borde (1 mm)
    $this->SetLineWidth(1);
    // Título
    $this->Cell($w,9,$title,1,1,'C',true);
    // Salto de línea
    $this->Ln(10);
}

function Footer()
{
    // Posición a 1,5 cm del final
    $this->SetY(-15);
    // Arial itálica 8
    $this->SetFont('Arial','I',8);
    // Color del texto en gris
    $this->SetTextColor(128);
    // Número de página
    $this->Cell(0,10,'Página '.$this->PageNo(),0,0,'C');
}

function ChapterTitle($num, $label)
{
    // Arial 12
    $this->SetFont('Arial','',12);
    // Color de fondo
    $this->SetFillColor(200,220,255);
    // Título
    $this->Cell(0,6,"Capítulo $num : $label",0,1,'L',true);
    // Salto de línea
    $this->Ln(4);
}


function PrintChapter($num, $title, $file)
{
    $this->AddPage();
    $this->ChapterTitle($num,$title);
}
}

$pdf = new PDF();
$title = 'Usuarios APP Clima';
$pdf->SetTitle($title);
$pdf->SetAuthor('Jimmy');
$pdf->PrintChapter(1,'Reporte de usuarios en APP Clima','20k_c1.txt');
while($fila = mysqli_fetch_array($resultadoPDF)){
    $pdf->Cell(40,10,$fila['usuario'],1,0,'C',0);
    $pdf->Cell(40,10,$fila['correo'],1,1,'C',0);
}
$pdf->Output();
?>