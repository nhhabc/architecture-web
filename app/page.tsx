"use client";
import BannerSlider from "@/components/home/BannerSlider";
import CompanyPreview from "@/components/home/CompanyPreview";
import ImageAnimation from "@/components/home/ImageAnimation";
import MainCategory from "@/components/home/MainCategory";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <BannerSlider/>
      <Box h={"70px"}/>
      <CompanyPreview/>
      <ImageAnimation/>
      <MainCategory/>
    </>
  )
}
