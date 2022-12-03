import React from "react";
import styles from "./Detail.module.css";
import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { UserInfo } from "../../Interfaces/UserInfo";

export type DetailControllerType = {
  id?: string;
  data: string;
};

type iProps = {
  userInfo: UserInfo;
};

export default function Detail({ userInfo }: iProps) {
  const router = useRouter();
  const info: DetailControllerType = router.query as DetailControllerType;

  const onBackClicked = () => {
    router.back();
  };

  let message = null;
  if (info.data != null && info.data !== undefined) {
    message = (
      <Typography
        gutterBottom
        variant="h6"
        className={styles.text}
        onClick={onBackClicked}>
        {info.data}
      </Typography>
    );
  }

    let userInfoJSX = null;
    if (userInfo != null) {
      userInfoJSX = (
        <>
          <Typography gutterBottom variant="h4" className={styles.text}>
            ID = {userInfo.id}
          </Typography>
          <Typography gutterBottom variant="h4" className={styles.text}>
            Nome = {userInfo.name}
          </Typography>
          <Typography gutterBottom variant="h4" className={styles.text}>
            Telefone = {userInfo.phone}
          </Typography>
        </>
      );
    }


  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      className={styles.container}>
      <Grid item xs={12} md={6} className={styles.main}>
        <Typography gutterBottom variant="h2" className={styles.text}>
          Detail {info.id}
        </Typography>

        {message}
        {userInfoJSX}
        
        <Typography
          gutterBottom
          variant="h6"
          className={styles.text}
          onClick={onBackClicked}>
          Voltar
        </Typography>
      </Grid>
    </Grid>
  );
}
