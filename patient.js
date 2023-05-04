const Patient = require("../models/patient-info");


exports.formDataUser = (req, res )=>{

//crating patient objects
    const patient = new Patient(req.body);

    //saving that patient to database 
    

   patient.save().then(patient=>{
     
        
            res.json({
                name: patient.name,
                id: patient._id,
                gender: patient.gender,
                age: patient.age,
                pno: patient.pno
            })
            
        })
        .catch(err=>{
            return res.status(400).json({
                err: "Not able to save patient in DB"
            })
        })
       

    }













