import React from "react";
import Wrapper from "./Related.styled";
import Block from "../../BlockContainer/Block/Block";
const Related = () => {
  const data = [
    {
      listNumber: 0,
      remove: false,
      like: 35,
      share: 35,
      views: 35,
      videoImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      videoTitle: "this is my first video",
      channel: "this is my channel",
      date: "11/11/2022 00:55",
      nativeVideo: "native video",
      link: "/list/hamada",
    },
    {
      listNumber: 0,
      remove: false,
      like: 35,
      share: 35,
      views: 35,
      videoImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      videoTitle: "this is my first video",
      channel: "this is my channel",
      date: "11/11/2022 00:55",
      nativeVideo: "native video",
      link: "/list/hamada",
    },
    {
      listNumber: 0,
      remove: false,
      like: 35,
      share: 35,
      views: 35,
      videoImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      videoTitle: "this is my first video",
      channel: "this is my channel",
      date: "11/11/2022 00:55",
      nativeVideo: "native video",
      link: "/list/hamada",
    },
    {
      listNumber: 0,
      remove: false,
      like: 35,
      share: 35,
      views: 35,
      videoImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      videoTitle: "this is my first video",
      channel: "this is my channel",
      date: "11/11/2022 00:55",
      nativeVideo: "native video",
      link: "/list/hamada",
    },
    {
      listNumber: 0,
      remove: false,
      like: 35,
      share: 35,
      views: 35,
      videoImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      videoTitle: "this is my first video",
      channel: "this is my channel",
      date: "11/11/2022 00:55",
      nativeVideo: "native video",
      link: "/list/hamada",
    },
    {
      listNumber: 0,
      remove: false,
      like: 35,
      share: 35,
      views: 35,
      videoImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      videoTitle: "this is my first video",
      channel: "this is my channel",
      date: "11/11/2022 00:55",
      nativeVideo: "native video",
      link: "/list/hamada",
    },
    {
      listNumber: 0,
      remove: false,
      like: 35,
      share: 35,
      views: 35,
      videoImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      videoTitle: "this is my first video",
      channel: "this is my channel",
      date: "11/11/2022 00:55",
      nativeVideo: "native video",
      link: "/list/hamada",
    },
    {
      listNumber: 0,
      remove: false,
      like: 35,
      share: 35,
      views: 35,
      videoImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      videoTitle: "this is my first video",
      channel: "this is my channel",
      date: "11/11/2022 00:55",
      nativeVideo: "native video",
      link: "/list/hamada",
    },
    {
      listNumber: 0,
      remove: false,
      like: 35,
      share: 35,
      views: 35,
      videoImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      videoTitle: "this is my first video",
      channel: "this is my channel",
      date: "11/11/2022 00:55",
      nativeVideo: "native video",
      link: "/list/hamada",
    },
    {
      listNumber: 0,
      remove: false,
      like: 35,
      share: 35,
      views: 35,
      videoImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      videoTitle: "this is my first video",
      channel: "this is my channel",
      date: "11/11/2022 00:55",
      nativeVideo: "native video",
      link: "/list/hamada",
    },
    {
      listNumber: 0,
      remove: false,
      like: 35,
      share: 35,
      views: 35,
      videoImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      channelImage:
        "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg",
      videoTitle: "this is my first video",
      channel: "this is my channel",
      date: "11/11/2022 00:55",
      nativeVideo: "native video",
      link: "/list/hamada",
    },
  ];
  return (
    <Wrapper>
      {data.map((block, index) => (
        <Block {...block} key={index} />
      ))}
    </Wrapper>
  );
};

export default Related;
