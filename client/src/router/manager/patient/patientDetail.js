import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import Axios from "axios"

import './patientDetail.css'
const PatientDetail = () => {
    const [Pcode, setPcode] = useState(localStorage.getItem('Pcode'))
    const [patient, setPatient] = useState({
        P_Type:'',
        P_fname: '', P_lname: '',
        P_dob: '', P_gender: '', P_phone: '',
    })

    // get patient info
    useEffect(() => {
        Axios.get('http://localhost:3001/api/patient/getOne', {
            params:{
                Pcode: Pcode
            }
        }).then((res) => {
            setPatient(res.data[0])
            setCheckup(res.data[0].P_Type)
        })
    }, [])

    // get Treatment if Inpatient
    // get Examination if Outpatient
    const [examList, setExamList] = useState([])
    const [treatmentList, setTreatmentList] = useState([])
    const setCheckup = (paType) => {
        
        if(paType === 'IP'){
            Axios.get('http://localhost:3001/api/inpatient/getOne', {
                params:{
                    Pcode: Pcode
                }
            }).then((res) => {
                let newPatient = Object.assign(patient, res.data[0])
                setPatient(newPatient)
            })

            Axios.get('http://localhost:3001/api/treatment/getAll', {
                params:{
                    Pcode: Pcode
                }
            }).then((res) => {
                setTreatmentList(res.data)
            })

        } else {
            Axios.get('http://localhost:3001/api/examination/getAll', {
                params:{
                    Pocode: Pcode
                }
            }).then((res) => {
                setExamList(res.data)
            })
        }
    }


    
    return(
        <div className='patientDetail'>
            <div className='patientInfo'>
                <h2>Patient Detail</h2>
                <div>
                    Patient Type :
                    {patient.P_Type}
                </div>

                <div>
                    {(patient.P_Type == 'IP') ? `Doc code:${patient.Doc_code}` : ``}
                </div>

                <div>
                    {(patient.P_Type == 'IP') ? `Nurse code:${patient.Nurse_code}` : ``}
                </div>

                <div>
                    Name: {patient.P_fname + ' ' + patient.P_lname}
                </div>

                <div>
                    DOB: {patient.P_dob}
                </div>

                <div>
                    Gender: {patient.P_gender}
                </div>
                <div>
                    Phone: {patient.P_phone}
                </div>
            </div>

            
            <div className = 'checkupInfo'>
                <h2 className = 'checkupTitle'>Checkup List</h2>

                <div>
                    {examList.map((val) => {
                        return (
                            <div className='checkupList'>
                                <div>
                                    Fee:{val.O_fee}
                                </div>

                                <div>
                                    Date: {val.Exam_date}
                                </div>

                                <div>
                                    Diagnosis: {val.O_diagnosis}
                                </div>

                                <div>
                                    Next exam date: {val.Next_exam_date}
                                </div>

                                <div>
                                    DoctorID: {val.Doc_code}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div>
                    {treatmentList.map((val) => {
                        return (
                            <div className='checkupList'>
                                <div>
                                    Fee: {patient.I_fee}
                                </div>

                                <div>
                                    Start Date: {val.T_start_date}
                                </div>

                                <div>
                                    End Date: {val.T_end_date}
                                </div>

                                <div>
                                    Result: {val.Result}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default PatientDetail