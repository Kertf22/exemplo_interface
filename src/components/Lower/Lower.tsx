import React, { useState } from "react"
import  Box  from '../Box/Box';
import  Grid  from "../Grid/Grid";
import  ItemGrid  from "../ItemGrid/ItemGrid";
import  Text from "../Text/Text";

const Lower = () => {

    const [active_1, setActive_1] = useState(true);
    const [active_2, setActive_2] = useState(false);
    const [active_3, setActive_3] = useState(false);

    function handleActive(active:number) {
        if(active === 1){
            setActive_1(true)
            setActive_2(false)
            setActive_3(false)
        }
        else if(active === 2){
            setActive_1(false)
            setActive_2(true)
            setActive_3(false)
        }
        else if(active === 3){
            setActive_1(false)
            setActive_2(false)
            setActive_3(true)
        }

    }
    
    return(
        <>
        <Box container>
            <Grid container justify={"sa"}>
            <Grid item cols={3} >
                <ItemGrid active={active_1} box width="md" num={1} handleFunction={handleActive}>Owners</ItemGrid>
            </Grid>
            <Grid item cols={3}>
                <ItemGrid active={active_2} box width="md" num={2} handleFunction={handleActive}>Bids</ItemGrid>
            </Grid>
            <Grid item cols={3}>
                <ItemGrid active={active_3} box width="md" num={3} handleFunction={handleActive}>History</ItemGrid>
            </Grid>
            </Grid>
            <Grid container >
            <Grid item>
                <ItemGrid img>
                    <img alt="" src={"https://s3-alpha-sig.figma.com/img/e3c6/3927/ea078034299232019537fd5b47178779?Expires=1638144000&Signature=aY~OA0ihFlOZfIDV3nigzP898ZQHAww3YktWBBfu4djPybK4pNRf~vlLFvKNzoQP7nFxNjw7DFVa8d-zh3YqyTb4XTTTWPtCV865NCpR7pEAgD5wkN7p2l4rWMlQ3-tHlD-3dBhBsJullxkSFqjDaL6aBo3Y0HNUVXBO30K4k5H7gcQQM5rexp8HvsuaMYjRm3~v6yMnGRiqkMhnxrFt3T0vZM8qrdW0OhIdRDl8sZuQFj34iXlRvpU7St-DAPcjjemSaO-PqTyTcTOPaOfuVllKP1L3MpxdvcLNoKNuespQFPdlasbrqTohQWALmJ3L--cgNgmX13Q23H8aH9Wfcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}/>
                </ItemGrid>
            </Grid>
            <Grid item>
                <ItemGrid text>
                <Text colors={"black"} f="m" fw="s" spacing="sm">
                    Defacer#od 
                </Text>
                </ItemGrid>
                <ItemGrid text >
                <Text colors={"grey"} f="s" fw="s" spacing="sm">
                100 editions not for sale
                </Text>
                </ItemGrid>
            </Grid>
            </Grid>
        </Box>

        <Box info>
        <Grid container justify={"sa"}>
            <Grid item cols={4}>
                <ItemGrid box width="lg" >
                Place a bid
                </ItemGrid>
            </Grid>
            <Grid item cols={4}>
                <ItemGrid box active width="lg">Buy</ItemGrid>
            </Grid>
            </Grid>
        </Box>
    </>
    )
};

export default Lower;