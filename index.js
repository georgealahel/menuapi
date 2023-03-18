const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const cors = require('cors');
const xlsx = require('xlsx');

app.use(cors());

                    app.get('/menu', function (req, res) {
                    const workbook = xlsx.readFile('./menu.xlsx');

                    const sheets = {};
                    for (let i = 0; i < workbook.SheetNames.length; i++) {
                      const sheetName = workbook.SheetNames[i];
                      const sheet = workbook.Sheets[sheetName];
                      const sheetData = xlsx.utils.sheet_to_json(sheet);
                      sheets[sheetName] = sheetData;
                    }
                    
                   res.send(sheets)
                    })


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  
  
  
   
    });