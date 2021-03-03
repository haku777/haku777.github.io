// JScript File


function HandleCheckbox(event)
{
    if (g_browser.isIE) 
        {
        manejadorCheckBox_IE(event)
        }
    if (g_browser.isNS)
        {
        manejadorCheckBox_FF(event)
        }
}

function manejadorCheckBox_IE(event)
{
    var element = event.srcElement;

    if (element.tagName == "INPUT" && element.type == "checkbox")
    {
        var checkedState = element.checked;
        if (checkedState==true){
            estadoArbol=1;
            return false;
        }else{
            if (estadoArbol==1){
                estadoArbol=2;
                element.checked=true
                checkedState = element.checked;
            }else{
                estadoArbol = 0;
            }
        }
        while (element.tagName != "TABLE") // Get wrapping table
        {
            element = element.parentElement;
        }
        UnCheckParents(element); // Uncheck all parents
        
        element = element.nextSibling;
        
        if (element == null) // If no childrens than exit
            return;
        
        var childTables = element.getElementsByTagName("TABLE");
        for (var tableIndex = 0; tableIndex < childTables.length; tableIndex++)
        {
            CheckTable(childTables[tableIndex], checkedState);
        }
    }
}

// Uncheck the parents of the given table, Can remove the recurse (redundant)
function UnCheckParents(table)
{
    if (table == null || table.rows[0].cells.length == 2) // This is the root
    {
        return;
    }
    var parentTable = table.parentElement.previousSibling;
    CheckTable(parentTable, false);
    UnCheckParents(parentTable);
}

// Handle the set of checkbox checked state
function CheckTable(table, checked)
{
    var checkboxIndex = table.rows[0].cells.length - 1;
    var cell = table.rows[0].cells[checkboxIndex];
    var checkboxes = cell.getElementsByTagName("INPUT");
    if (checkboxes.length == 1)
    {
        checkboxes[0].checked = checked;
    }
}
var estadoArbol = 0;//apagado
function manejadorCheckBox_FF(event)
{
    var element = event.target;

    if (element.tagName == "INPUT" && element.type == "checkbox")
    {
        var checkedState = element.checked;
        if (checkedState==true){
            estadoArbol=1;
            return false;
        }else{
            if (estadoArbol==1){
                estadoArbol=2;
                element.checked=true
                checkedState = element.checked;
            }else{
                estadoArbol = 0;
            }
        }
        while (element.tagName != "TABLE") // Get wrapping table
        {
            element = element.parentNode;
        }
        UnCheckParents_FF(element); // Uncheck all parents
        
        element = element.nextSibling;
        
        if (element.tagName == undefined) // If no childrens than exit
            return;
        
        var childTables = element.getElementsByTagName("table");
        for (var tableIndex = 0; tableIndex < childTables.length; tableIndex++)
        {
            CheckTable_FF(childTables[tableIndex], checkedState);
        }
    }
}
// Uncheck the parents of the given table, Can remove the recurse (redundant)
function UnCheckParents_FF(table)
{
    if (table == null || table.rows[0].cells.length == 2) // This is the root
    {
        return;
    }
    var parentTable = table.parentNode.previousSibling;
    CheckTable_FF(parentTable, false);
    UnCheckParents_FF(parentTable);
}

// Handle the set of checkbox checked state
function CheckTable_FF(table, checked)
{

        
    var checkboxIndex = table.rows[0].cells.length - 1;
    var cell = table.rows[0].cells[checkboxIndex];
    var checkboxes = cell.getElementsByTagName("INPUT");
    if (checkboxes.length == 1)
    {
        checkboxes[0].checked = checked;
    }
}