import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { DataGrid } from '@material-ui/data-grid';
import GridDatas from './GridDatas.js';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Main() {
  const [histories, setHistories] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [historyData, setHistoryData] = useState({});
  const [patientData, setPatientData] = useState({});
  const [listType, setListType] = useState(0);

  const classes = useStyles();

  const addHistory = () => {
    console.log(historyData);
    axios
      .post("/api/History",historyData,{
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        getDatas();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const addPatient = () => {
    console.log(patientData);
    axios
      .post("/api/Patient",patientData,{
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        getDatas();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handlePatientChange = (event) => {
    const name = event.target.name;
    setPatientData({
      ...patientData,
      [name]: event.target.value,
    });
  };

  const handleHistoryChange = (event) => {
    const name = event.target.name;
    setHistoryData({
      ...historyData,
      [name]: event.target.value,
    });
  };
  const getDatas = () => {
    axios
      .get("/api/History", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response.data);
        setHistories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("/api/Patient", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("/api/Doctor", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("/api/Hospital", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        setHospitals(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("/api/Disease", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        setDiseases(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <div style={{marginLeft: 200, marginBottom: 50, flexDirection: "row", display: 'flex'}}>
      <div
        style={{
            justifyContent: "center",
            display: 'flex',
            flexDirection: "column",
            width: 300,
            marginLeft: 200,
        }}
        >
          <FormControl className={classes.formControl}>
          <TextField
              style={styles.input}
              id="standard-textarea"
              onChange={handlePatientChange}
              inputProps={{
                  name: "patientLastName",
                  id: "patientLastName-native-simple",
              }}
              label="Овог"
              placeholder="Сайнжаргал, ..."
          />
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
              style={styles.input}
              id="standard-textarea"
              onChange={handlePatientChange}
              inputProps={{
                  name: "patientFirstName",
                  id: "patientFirstName-native-simple",
              }}
              label="Нэр"
              placeholder="Сайнжаргал, ..."
          />
          </FormControl>
          <Button
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={addPatient}
          >
              Өвчтөн Нэмэх
          </Button>
        </div>
        <div
        style={{
            justifyContent: "center",
            display: 'flex',
            flexDirection: "column",
            width: 300,
            marginLeft: 200,
        }}
        >
          <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Өвчтөн</InputLabel>
              <Select
              native
              value={historyData.patient}
              onChange={handleHistoryChange}
              inputProps={{
                  name: "patientId",
                  id: "patient-native-simple",
              }}
              >
              <option aria-label="None" value="" />
              {patients.length > 0 &&
                  patients.map((item, idx) => {
                  return (
                      <option value={item.id} key={idx}>
                      {item.patientFirstName}
                      </option>
                  );
                  })}
              </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Өвчин зовиур</InputLabel>
              <Select
              native
              value={historyData.disease}
              onChange={handleHistoryChange}
              inputProps={{
                  name: "diseaseId",
                  id: "disease-native-simple",
              }}
              >
              <option aria-label="None" value="" />
              {diseases.length > 0 &&
                  diseases.map((item, idx) => {
                  return (
                      <option value={item.id} key={idx}>
                      {item.diseaseName}
                      </option>
                  );
                  })}
              </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Эмнэлэг</InputLabel>
              <Select
              native
              value={historyData.hospital}
              onChange={handleHistoryChange}
              inputProps={{
                  name: "hospitalId",
                  id: "hospital-native-simple",
              }}
              >
              <option aria-label="None" value="" />
              {hospitals.length > 0 &&
                  hospitals.map((item, idx) => {
                  return (
                      <option value={item.id} key={idx}>
                      {item.hospitalName}
                      </option>
                  );
                  })}
              </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Эмч</InputLabel>
              <Select
              native
              value={historyData.doctor}
              onChange={handleHistoryChange}
              inputProps={{
                  name: "doctorId",
                  id: "doctor-native-simple",
              }}
              >
              <option aria-label="None" value="" />
              {doctors.length > 0 &&
                  doctors.map((item, idx) => {
                  return (
                      <option value={item.id} key={idx}>
                      {item.doctorFirstName}
                      </option>
                  );
                  })}
              </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
              style={styles.input}
              id="standard-textarea"
              onChange={handleHistoryChange}
              inputProps={{
                  name: "description",
                  id: "description-native-simple",
              }}
              label="Шалтгаан"
              placeholder="Унасан, ..."
          />
          </FormControl>
          <Button
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={addHistory}
          >
              Бүртгэл нэмэх
          </Button>
        </div>
      </div>
      <div style={{marginLeft:400 ,justifySelf: 'center', alignSelf: 'center',height: 300, maxWidth: 800}}>
        <div style={{width: '50%'}}>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" style={{justifySelf: "center"}}>
              <Button onClick={() => setListType(0)}>Эмнэлэг</Button>
              <Button onClick={() => setListType(1)}>Эмч</Button>
              <Button onClick={() => setListType(2)}>Өвчтөн</Button>
              <Button onClick={() => setListType(3)}>Түүх</Button>
          </ButtonGroup>
        </div>
        <DataGrid rows={listType === 0 ? hospitals :
                        listType === 1 ? doctors :
                        listType === 2 ? patients :
                        listType === 3 ? histories : null} columns={listType === 0 ? GridDatas.HospitalColumns :
                                                                    listType === 1 ? GridDatas.DoctorColumns :
                                                                    listType === 2 ? GridDatas.PatientColumns :
                                                                    listType === 3 ? GridDatas.HistoryColumns : null} pageSize={5} id={Math.random()}/>
      </div>
    </div>
  );
}
const styles = {
  button: {
    width: 200,
    marginTop: 20,
  },
};

