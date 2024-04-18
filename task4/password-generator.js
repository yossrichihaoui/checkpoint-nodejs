const gp=require("generate-password");
const generate=()=>{
    var password=gp.generate({
        length:10,
        symbols:true,
        uppercase:true,
        numbers:false,
        lowercase:true,
        excludeSimilarCharacters:true
    })
console.log(password)
}
generate();
generate();
