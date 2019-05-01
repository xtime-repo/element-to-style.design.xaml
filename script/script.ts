
var eSource = document.querySelector("#txtSrc") as HTMLTextAreaElement;
var eTarget = document.querySelector("#txtResponse") as HTMLTextAreaElement;

function convert(){


    var vl = eSource.value.replace(/\>/g , ">\n");

    var arr = vl.split("\n");

    arr
     .forEach(line => {
        if(line.trim().length ==0 )return;
        if(line.trim().startsWith("</") ) {
            eTarget.value += `</Style>`  
            eTarget.value += "\n" 
            return;
        }

        var examinator  = line.trim().split(" ")

        examinator
         .forEach(part => {

             if(part.startsWith("<")){
                eTarget.value += `<Style TargetType="${part.substring(1)}">`  
                eTarget.value += "\n"   
            }
            if(part.includes("=")){
                eTarget.value +=`     <Setter Property="${part.split("=")[0]}" Value="${part.split("=")[1].replace(/\"/g , "")}" /> `
                eTarget.value += "\n"   
            }

             if(part.endsWith ("/>")){
                eTarget.value +=`</Style>`
                eTarget.value += "\n"   
            }

        });

    });


}


function dicUsage() {
    

  eTarget.value +=`    <UserControl.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="/Dashboard;component/theme/theme-header.xaml"/>
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </UserControl.Resources>`
                eTarget.value += "\n"   
    
}


`
<Style TargetType="Border">
        <Setter Property="Background" Value="AliceBlue" />
    </Style>
    `