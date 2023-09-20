"use client";
import BannerSlider from "@/components/home/BannerSlider";
import CompanyPreview from "@/components/home/CompanyPreview";
import CompletedProject from "@/components/home/CompletedProject";
import ImageAnimation from "@/components/home/ImageAnimation";
import MainCategory from "@/components/home/MainCategory";
import NewsSection from "@/components/home/NewsSection";
import ProductPreview from "@/components/home/ProductPreview";
import TopProductSection from "@/components/home/TopProductSection";
import VideoPreview from "@/components/home/VideoPreview";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <BannerSlider/>
      <Box h={"70px"}/>
      <CompanyPreview/>
      <ImageAnimation/>
      <MainCategory/>
      <ProductPreview/>
      <TopProductSection/>
      <CompletedProject/>
      <VideoPreview/>
      <NewsSection/>
    </>
  )
}
