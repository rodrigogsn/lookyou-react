import React, { useContext, useState } from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonImg
} from "@ionic/react";

import { AppContext } from "../State";

import "./Login.scss";
import logo from "../assets/img/logo.png";

import FirebaseService from "../services/FirebaseService";

import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

const setObject = async (name, value) => {
  await Storage.set({
    key: name,
    value: JSON.stringify(value)
  });
};

const loginUser = (props, email, password, dispatch) => {
  FirebaseService.loginUser(
    email,
    password,
    async firebaseUser => {
      dispatch({
        type: "setLogin",
        login_data: firebaseUser
      });

      setObject("user", firebaseUser);

      props.history.push("/gallery");
    },
    error => {
      console.log(error);
    }
  );
};

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch } = useContext(AppContext);

  return (
    <IonContent>
      <IonImg src={logo} alt="Lookyou Logo" className="logo" />

      <IonItem>
        <IonLabel position="floating">Email</IonLabel>
        <IonInput
          value={email}
          onIonChange={e => setEmail(e.detail.value)}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Senha</IonLabel>
        <IonInput
          type="password"
          value={password}
          onIonChange={e => setPassword(e.detail.value)}
        ></IonInput>
      </IonItem>

      <IonButton
        onClick={() => {
          loginUser(props, email, password, dispatch);
        }}
      >
        Entrar
      </IonButton>

      <IonText>
        <p>
          Ainda não tem uma conta? <a>Crie sua conta.</a>
        </p>
      </IonText>
    </IonContent>
  );
};

export default Login;
