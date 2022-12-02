import React from "react";
import styles from "./Detail.module.css";
import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

export type DetailControllerType = {
  id?: string;
  data: string;
};

export default function Detail() {
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

        <Typography
          gutterBottom
          variant="h6"
          className={styles.text}
          onClick={onBackClicked}>
          Voltar
        </Typography>
        {message}
      </Grid>
    </Grid>
  );
}
