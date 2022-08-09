import Head from "next/head";
import React, { FC } from "react";
import { Footer } from "../../styles/Ui/structure";
import { NavBar } from "./../ui/NavBar";

interface Props {
  children?: JSX.Element | JSX.Element[];
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const UsersLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <NavBar />

      <main>{children}</main>

      <Footer></Footer>
    </>
  );
};
