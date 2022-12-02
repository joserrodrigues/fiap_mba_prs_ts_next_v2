import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { DetailControllerType } from "../Detail/Detail";

export default function Home() {
  const router = useRouter();

  const onDetail1Clicked = () => {
    router.push("/detail/1");
  };
  const onDetailDataClicked = () => {
    let info: DetailControllerType = {
      data: JSON.stringify({ info: 1, info2: 2 }),
    };
    router.push({
      pathname: "/detail/2",
      query: info,
    });
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      className={styles.container}>
      <Grid item xs={12} md={6} className={styles.main}>
        <a href="/">
          <Typography gutterBottom variant="h6" className={styles.text}>
            Home
          </Typography>
        </a>

        <Link href="/detail/0">
          <Typography gutterBottom variant="h6" className={styles.text}>
            Detail 0
          </Typography>
        </Link>

        <Typography
          gutterBottom
          variant="h6"
          className={styles.text}
          onClick={onDetail1Clicked}>
          Detail 1
        </Typography>

        <Typography
          gutterBottom
          variant="h6"
          className={styles.text}
          onClick={onDetailDataClicked}>
          Detail Data
        </Typography>
      </Grid>
    </Grid>
  );
}
