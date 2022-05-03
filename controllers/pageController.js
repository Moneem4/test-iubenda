const puppeteer = require('puppeteer');
let data = [
  {
language :"EN",
terms : [
  "terms",
"terms and conditions",
"terms & conditions",
"T&C",
"legal notice",
"terms of service",
"terms of use",
"ToS",
"conditions of use",
"general selling conditions",
"conditions of use  sale",
"TsCs",
"legal notifications"
]

},
{
  language :"IT",
  terms :[
  "termini",
  "termini e condiioni",
  "termini di utilio",
  "note legali",
  "termini del serviio ",
  "condiioni d'uso",
  "condiioni d'utilio",
  "condiioni di utilio",
  "condiioni generali d'uso",
  "condiioni e termini d'uso",
  "condiioni del serviio",
  "termini di serviio",
  "condiioni generali del serviio",
  "condiioni generali di serviio",
  "condiioni generali",
  "condiioni per lutilio",
  "condiioni",
  "condiioni generali di vendita",
  "condiioni generali di uso e vendita",
  "menioni legali"
]
},
{
  language :"ES",
  terms :[
  "términos",
  "condiciones generales",
  "condiciones",
  "condiciones del servicio",
  "aviso legal",
  "términos  del servicio",
  "condiciones de uso",
  "condiciones de uso y venta",
  "notificaciones legales",
  "términos  de uso",
  "condiciones de utiliacin",
  "términos  de servicio",
  "aviso legal",
  "condiciones generales de contratacin"
] 
},
{
  language :"FR",
  terms :["termes",
  "conditions générales",
  "conditions générales de vente",
  "conditions d'utilisation et generales de vente",
  "mentions légales",
  "conditions d’utilisation",
  "modalités et conditions",
  "conditions génrales de vente",
  "conditions de vente",
  "conditions générales d'utilisation",
  "Termes et Conditions d'utilisation",
  "Conditions générales dutilisation du site",
  "Mentions légales et conditions générales d'utilisation",
  "conditions"]
},
{
  language :"DE",
  terms :["Geschftsbedingungen",
  "Allgemeine Geschftsbedingungen",
  "AGs",
  "echtlicher Hinweis",
  "Nutungsbedingungen",
  "enutungsbedingungen",
  "Allgemeine erkaufsbedingungen",
  "Kaufs- und Nutungsbedingungen",
  "echtliche Hinweise"]
},
{
  language :"PT-BR",
  terms:["termos",
  "termos e condies",
  "termos de uso",
  "termos de utiliao",
  "nota legal",
  "termos de servio",
  "condies de uso",
  "termos e condições de Uso",
  "condições de venda",
  "condições"] 
},
{
  language :"NL",
  terms:["voorwaarden",
  "algemene voorwaarden",
  "gebruiks- en verkoopvoorwaarden",
  "servicevoorwaarden",
  "gebruiksvoorwaarden",
  "algemene verkoopvoorwaarden",
  "Algemene condities",
  "Algemene dienstverleningsvoorwaarden",
  "verkoopvoorwaarden",
  "ienstverleningsvoorwaarden",
  "Algemene erkoop- en ienstverleningsvoorwaarden",
  "ienstvoorwaarden",
  "ienst voorwaarden",
  "Alg. voorwaarden",
  "Gemeenschappelike voorwaarden",
  "Algemene epalingen",
  "Algemene verkoopbepalingen",
  "erkoopbepalingen",
  "avw",
  "uridisch disclaimer",
  "uridische disclaimer",
  "One voorwaarden"]
},
{
  language :"RU",
  terms:[
    "условия",
  "положения и условия",
  "правовое уведомление",
  "юридическая оговорка",
  "условия продажи",
  "условия использования",
  "условия предоставления сервиса",
  "условия предоставления услуг",
  "условия обслуживания",
  "oбщие условия продажи",
  "правовые аспекты"
  ] 
},

]

exports.termsAndconditionsOfPage =async (req,res) => {
  try{ 
    let bool =false
      const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const {url}=req.body
  await page.goto(url);
  let hrefs =await page.$$eval('a',as=>as.map(a=>a.href));
  console.log("lniks : " ,hrefs)

   for(const h of hrefs)
  {   
    for(const d of data)
  {
  
   for (const t of d.terms) 
  { 
     if( h.includes(t))
   { bool =true
  return  res.status(200).json({ message: "The link :"+h+" contains one of the terms declared in our data above ", link: h });
    
   } 
  }
  } 
  } 
  
  
  if(bool==false)
  {
   return res.status(404).json({ message: "No link founded that contains one of the terms declared in our data above  " });   
  }
 await browser.close();
} catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failure", data: { errorMessage: "Internal server error!" } });
  }
  
};