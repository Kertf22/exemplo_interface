import React from "react"
import  Box  from '../Box/Box';
import  Grid  from "../Grid/Grid";
import  ItemGrid  from "../ItemGrid/ItemGrid";
import  Text from "../Text/Text";

const Info = () => {

    return(
 <>
    <Box info>
        <Grid container justify={"no"}>
          <Grid item cols={10}>
            <ItemGrid text >
                <Text colors={"blue"} f="b" fw="b" spacing="lg" >SPIRIT SEED - SYNTHETIC</Text>
            </ItemGrid>
          </Grid>
          <Grid item cols={4}>
            <ItemGrid text >
              <Text colors={"grey"} f="m" fw="s" spacing="lgx" >On sale for:</Text>
              <Text  colors={"black"} f="m" fw="s" spacing="lgx"><span style={{marginLeft:"5px"}}>250 ETH</span> </Text>
            </ItemGrid>
          </Grid>
          <Grid item cols={4}>
            <ItemGrid text >
            <Text  colors={"grey"} f="m" fw="s" spacing="lgx">Highest bid:</Text>
            <Text  colors={"black"} f="m" fw="s" spacing="lgx"><span style={{marginLeft:"5px"}}>1.123 WETH</span></Text>
            </ItemGrid>
          </Grid>
          <Grid item cols={4}>
            <ItemGrid text >
            <Text  colors={"grey"} f="m" fw="s" spacing="md"> Tessellation Class:</Text>
            </ItemGrid>
          </Grid>
          <Grid item cols={4}>
            <ItemGrid text >
            <Text  colors={"blue"} f="m" fw="s" spacing="md"> N/A</Text>
            </ItemGrid>
            </Grid>
          <Grid item cols={4}>
            <ItemGrid text >
            <Text  colors={"grey"} f="m" fw="s" spacing="md" > Seed:</Text>
            </ItemGrid>
          </Grid>
          <Grid item cols={4}>
            <ItemGrid text >
              <Text colors={"blue"} f="m" fw="s" spacing="lg"> Synthetic</Text>
            </ItemGrid>
          </Grid>
          <Grid item cols={10}>
            <ItemGrid text>
              <Text colors={"black"} f="m" fw="s" spacing="lgx">
              Synthetic Seeds cannot be bought on the primary market and can only be earned or gifted. Synthetic Seeds do not belong to any Tessellation Class, cannot be incubated and are not eligible to be...  
              <span style={{color:"#3983F2"}}>Read more</span>
              </Text>
            </ItemGrid>
          </Grid>
          <Grid item cols={9}>
            <ItemGrid text >
              <Text colors={"black"} f="m" fw="m" spacing="sm"> Creator:</Text>
              <Text colors={"grey"} f="m" fw="m" spacing="sm"> 10% royalties</Text>
            </ItemGrid>
          </Grid>
          <Grid container >
          <Grid item>
            <ItemGrid img >
             <img alt="" src={"https://s3-alpha-sig.figma.com/img/ead1/7a1b/f9814053253e55aea993195f8b9b15e5?Expires=1638144000&Signature=Kl5eX7kw0KGTeAAnCT9DtMWPU~SW6Fr2WPh3-6t2MPUf3ZC0YXv3armNV5d~lkFFKNfy-99CLREkAhwVfNVfFNQsfPo~M4tpfX85ASsqgk41NQ2YhXESQrRWynQ2XoODvm7j1Rc0w6BCqvXcz2jaHcq~Oa501Bjk3DO4PyW-ZH51GiRzw6YrJBeYnnMSmio5IGCy7u~SCFD1Ya20leVxNbW0hCYd0KvgBfba01-ebhpEtf7aJdHDzdnl4y9rHDc6EpzXI5BcqjxH3Qk3LekpsMoKH0smD-bxyAr4-5OT40OaqvTQnXyOcpx1LyH8zU94lAv1oapgYHA3u6jsF4u0ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}/>
              </ItemGrid>
          </Grid>
          <Grid item>
            <ItemGrid text >
              <Text colors={"black"} f="m" fw="m" spacing="md">
                Defacer#od 
              </Text>
              </ItemGrid>
          </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
    )
};

export default Info;