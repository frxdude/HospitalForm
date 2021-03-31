import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { DataGrid } from '@material-ui/data-grid';
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
  const [sendData, setSendData] = useState({});
  const columns = [
    { field: 'id', headerName: '#', width: 50 },
    { field: 'lastName', headerName: 'Овог', width: 170 },
    { field: 'firstName', headerName: 'Нэр', width: 170 },
    { field: 'date', headerName: 'Он сар өдөр', width: 170 },
    { field: 'description', headerName: 'Тайлбар онош', width: 170 },
    { field: 'doctorId', headerName: 'Эмч', width: 170 },
    { field: 'patientId', headerName: 'Өвчтөн', width: 170 },
    { field: 'diseaseId', headerName: 'Өвчин', width: 170 },
    { field: 'hospitalId', headerName: 'Эмнэлэг', width: 170 },
  ];
  const handleChange = (event) => {
    const name = event.target.name;
    setSendData({
      ...sendData,
      [name]: event.target.value,
    });
  };
  const classes = useStyles();
  const getDatas = () => {
    axios
      .get("/api/History", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
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
      <div style={{display: "flex", flexDirection: "row"}}>
        <div
        style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            width: 300,
            marginLeft: 200,
            marginTop: 200,
        }}
        >
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Өвчин зовиур</InputLabel>
            <Select
            native
            value={sendData.disease}
            onChange={handleChange}
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
                    {item.name}
                    </option>
                );
                })}
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Эмнэлэг</InputLabel>
            <Select
            native
            value={sendData.hospital}
            onChange={handleChange}
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
                    {item.name}
                    </option>
                );
                })}
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Эмч</InputLabel>
            <Select
            native
            value={sendData.doctor}
            onChange={handleChange}
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
                    {item.firstName}
                    </option>
                );
                })}
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
        <TextField
            style={styles.input}
            id="standard-textarea"
            label="Шалтгаан"
            placeholder="Placeholder"
        />
        </FormControl>
        <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={() => console.log(sendData)}
        >
            Add
        </Button>
      </div>
      <div style={{width: '50%', marginTop: 200, marginLeft: 50}}>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" style={{justifySelf: "center"}}>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        <div style={{ height: 400}}>
            <DataGrid rows={patients} columns={columns} />
        </div>
      </div>
    </div>
  );
}
const styles = {
  input: {
    marginTop: 20,
  },
  button: {
    width: 100,
    marginTop: 20,
  },
};

