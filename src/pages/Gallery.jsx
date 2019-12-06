import React, { useState, useContext } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonButton,
  IonText,
  IonActionSheet
} from "@ionic/react";
import { AppContext } from "../State";
import "./Gallery.scss";

import { add, heart, more } from "ionicons/icons";

import dummy1 from "../assets/img/dummy-1x1.png";
import dummy2 from "../assets/img/dummy-3x5.png";

const changeView = (newView, setView) => {
  setView(newView);
};

const GalleryPage = () => {
  const [view, setView] = useState("pictures");
  const [showActionSheet1, setShowActionSheet1] = useState(false);
  const [showActionSheet2, setShowActionSheet2] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  let viewContent;

  if (view === "pictures") {
    viewContent = (
      <>
        <IonGrid fixed>
          <IonRow>
            <IonCol size="4">
              <IonImg src={dummy1} />
            </IonCol>
            <IonCol size="4">
              <IonImg src={dummy2} />
            </IonCol>
            <IonCol size="4">
              <IonImg src={dummy1} />
            </IonCol>

            <IonCol size="4">
              <IonImg src={dummy1} />
            </IonCol>
            <IonCol size="4">
              <IonImg src={dummy1} />
            </IonCol>
            <IonCol size="4">
              <IonImg src={dummy2} />
            </IonCol>

            <IonCol size="4">
              <IonImg src={dummy1} />
            </IonCol>
            <IonCol size="4">
              <IonImg src={dummy1} />
            </IonCol>
            <IonCol size="4">
              <IonImg src={dummy1} />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowActionSheet1(true)}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </>
    );
  } else {
    viewContent = (
      <>
        <IonCard>
          <IonItem lines="none">
            <IonButton
              color="medium"
              strong="true"
              size="large"
              slot="end"
              fill="clear"
            >
              <IonIcon icon={heart}></IonIcon>
            </IonButton>
            <IonButton
              color="medium"
              strong="true"
              size="large"
              slot="end"
              fill="clear"
            >
              <IonIcon icon={more}></IonIcon>
            </IonButton>
          </IonItem>
          <IonCardHeader>
            <IonCardSubtitle>Look</IonCardSubtitle>
            <IonCardTitle>Look Especial de Teste</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <div className="image-container">
                  <IonImg src={dummy1} />
                </div>
                <div className="image-container">
                  <IonImg src={dummy2} />
                </div>
                <div className="image-container">
                  <IonImg src={dummy1} />
                </div>
                <div className="image-container">
                  <IonImg src={dummy1} />
                </div>
                <div className="image-container">
                  <IonImg src={dummy2} />
                </div>
                <div className="image-container">
                  <IonImg src={dummy2} />
                </div>
                <div className="image-container">
                  <IonImg src={dummy1} />
                </div>
              </IonRow>
            </IonGrid>

            <IonButton fill="outline">
              <IonIcon icon={add}></IonIcon> Peças
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowActionSheet2(true)}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </>
    );
  }

  return (
    <IonPage className="gallery-page">
      <IonContent>
        <IonText>
          <h1>Guarda-Roupa</h1>
          <h4>Seu galeria de roupas e acessórios</h4>
        </IonText>

        <IonSegment>
          <IonSegmentButton
            onClick={() => {
              changeView("pictures", setView);
            }}
          >
            <IonLabel>Roupas</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton
            onClick={() => {
              changeView("looks", setView);
            }}
          >
            <IonLabel>Looks</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {viewContent}

        <IonActionSheet
          isOpen={showActionSheet1}
          onDidDismiss={() => setShowActionSheet1(false)}
          buttons={[
            {
              text: "Tirar Foto",
              handler: () => {
                console.log("Tirar Foto");
              }
            },
            {
              text: "Carregar Foto",
              handler: () => {
                console.log("Carregar Foto");
              }
            }
          ]}
        ></IonActionSheet>

        <IonActionSheet
          isOpen={showActionSheet2}
          onDidDismiss={() => setShowActionSheet2(false)}
          buttons={[
            {
              text: "Adicionar novo look",
              handler: () => {
                console.log("Adicionar novo look");
              }
            }
          ]}
        ></IonActionSheet>
      </IonContent>
    </IonPage>
  );
};

export default GalleryPage;
