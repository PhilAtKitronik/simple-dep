
/**
 * PhilAtKitronik Block
 * Simple block to test the depenacy code with enum
 */
namespace pak_DEP {

    /*GENERAL*/
    export enum OnOffSelection {
        //% block="on"
        On = 1,
        //% block="off"
        Off = 0
    }

    //MAIN FUNCTION FOR READING ALL THE TIME AND DATE RESIGITER TO OUTPUT TO THE WORLD
    export function readValue(value: OnOffSelection): void {
        if (value == OnOffSelection.On)
        {
                basic.showLeds(`
        # # # # # 
        # # # # # 
        # # # # # 
        # # # # # 
        # # # # # 
        `)
        }
        else if (value == OnOffSelection.Off)
        {
            basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        }
        
    }

}
