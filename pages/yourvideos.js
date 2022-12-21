import Head from "next/head";
import Block from "../components/BlockContainer/Block/Block";
import BlockContainer from "../components/BlockContainer/BlockContainer";

export default function Home() {
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
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlockContainer>
        {data.map((block, index) => (
          <Block {...block} key={index} />
        ))}
      </BlockContainer>
    </div>
  );
}
